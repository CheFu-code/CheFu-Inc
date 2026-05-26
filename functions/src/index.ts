import { initializeApp } from "firebase-admin/app";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import { defineSecret } from "firebase-functions/params";
import { logger } from "firebase-functions/v2";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { onSchedule } from "firebase-functions/v2/scheduler";
import { normalizeFromAddress } from "./emailUtils.js";
import { sendResendEmail, type ResendEmailPayload } from "./resendEmail.js";

initializeApp();

const RESEND_API_KEY = defineSecret("RESEND_API_KEY");
const RESEND_FROM_EMAIL = defineSecret("RESEND_FROM_EMAIL");
const MEMBERSHIP_APPLICATION_TEMPLATE_ID =
    process.env.MEMBERSHIP_APPLICATION_TEMPLATE_ID ||
    process.env.CAREERS_APPLICATION_TEMPLATE_ID ||
    "";
const MEMBERSHIP_APPLICATION_APP_NAME =
    process.env.MEMBERSHIP_APPLICATION_APP_NAME || "CheFu Inc";
const MEMBERSHIP_APPLICATION_APP_URL =
    process.env.MEMBERSHIP_APPLICATION_APP_URL || "https://chefuinc.com";
const MEMBERSHIP_APPLICATION_SUPPORT_EMAIL =
    process.env.MEMBERSHIP_APPLICATION_SUPPORT_EMAIL || "hello@chefuinc.com";

export const sendMembershipApplicationConfirmation = onDocumentCreated(
    {
        document: "membershipApplications/{applicationId}",
        region: "us-central1",
        secrets: [RESEND_API_KEY, RESEND_FROM_EMAIL],
    },
    async (event) => {
        const applicationId = event.params.applicationId;
        const payload = event.data?.data();

        if (!payload) {
            logger.warn("Skipping email. Missing document payload.", { applicationId });
            return;
        }

        const email = typeof payload.email === "string" ? payload.email.trim() : "";
        const maskedEmail = maskEmail(email);
        const fullName =
            typeof payload.fullName === "string" && payload.fullName.trim()
                ? payload.fullName.trim()
                : "there";
        const roleApplyingFor =
            typeof payload.roleApplyingFor === "string" ? payload.roleApplyingFor.trim() : "";
        const department =
            typeof payload.department === "string" ? payload.department.trim() : "";
        const country = typeof payload.country === "string" ? payload.country.trim() : "";

        const docRef = getFirestore()
            .collection("membershipApplications")
            .doc(applicationId);

        const latestSnapshot = await docRef.get();
        const latestStatus = latestSnapshot.get("confirmationEmailStatus");
        if (latestStatus === "sent") {
            logger.info("Confirmation email already sent. Skipping.", { applicationId });
            return;
        }

        if (!email) {
            await docRef.update({
                confirmationEmailStatus: "failed",
                confirmationEmailError: "Missing applicant email",
                confirmationEmailUpdatedAt: FieldValue.serverTimestamp(),
            });
            logger.warn("Cannot send confirmation email. Missing applicant email.", {
                applicationId,
            });
            return;
        }

        if (!isValidEmail(email)) {
            await docRef.update({
                confirmationEmailStatus: "failed",
                confirmationEmailError: "Invalid email format",
                confirmationEmailUpdatedAt: FieldValue.serverTimestamp(),
            });
            logger.warn("Cannot send confirmation email. Invalid applicant email format.", {
                applicationId,
                maskedEmail,
            });
            return;
        }

        try {
            const apiKey = RESEND_API_KEY.value() || process.env.RESEND_API_KEY || "";
            const fromAddress = normalizeFromAddress(
                process.env.MEMBERSHIP_APPLICATION_FROM ||
                    RESEND_FROM_EMAIL.value() ||
                    process.env.RESEND_FROM_EMAIL ||
                    "",
            );

            if (!apiKey || !fromAddress) {
                throw new Error(
                    "Missing RESEND_API_KEY or valid RESEND_FROM_EMAIL configuration",
                );
            }

            const emailResult = await sendResendEmail(
                apiKey,
                buildMembershipApplicationEmailPayload({
                    applicationId,
                    country,
                    department,
                    email,
                    fromAddress,
                    fullName,
                    roleApplyingFor,
                }),
            );

            await docRef.update({
                confirmationEmailStatus: "sent",
                confirmationEmailId: emailResult.id,
                confirmationEmailError: "",
                confirmationEmailUpdatedAt: FieldValue.serverTimestamp(),
            });

            logger.info("Confirmation email sent.", {
                applicationId,
                maskedEmail,
                resendEmailId: emailResult.id,
            });
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : "Unknown email send failure";

            logger.error("Failed to send confirmation email.", {
                applicationId,
                maskedEmail,
                sendError: errorMessage,
            });

            try {
                await docRef.update({
                    confirmationEmailStatus: "failed",
                    confirmationEmailError: errorMessage.slice(0, 500),
                    confirmationEmailUpdatedAt: FieldValue.serverTimestamp(),
                });
            } catch (updateError) {
                logger.error("Failed to persist confirmation email failure state.", {
                    applicationId,
                    maskedEmail,
                    sendError: errorMessage,
                    updateError:
                        updateError instanceof Error
                            ? updateError.message
                            : "Unknown update failure",
                });
            }
        }
    },
);

export const purgeExpiredMembershipApplications = onSchedule(
    {
        schedule: "every day 03:00",
        region: "us-central1",
    },
    async () => {
        const db = getFirestore();
        const expiredSnapshot = await db
            .collection("membershipApplications")
            .where("retentionExpiresAt", "<=", new Date())
            .limit(250)
            .get();

        if (expiredSnapshot.empty) {
            logger.info("No expired membership applications found.");
            return;
        }

        for (const doc of expiredSnapshot.docs) {
            const applicationId = doc.id;
            try {
                await getStorage().bucket().deleteFiles({
                    prefix: `membershipApplications/${applicationId}/cv/`,
                    force: true,
                });
            } catch (storageError) {
                logger.warn("Failed deleting CV files during retention purge.", {
                    applicationId,
                    storageError:
                        storageError instanceof Error
                            ? storageError.message
                            : "Unknown storage deletion failure",
                });
            }

            await doc.ref.delete();
            logger.info("Purged expired membership application.", {
                applicationId,
                purgedAt: new Date().toISOString(),
            });
        }
    },
);

function buildMembershipApplicationEmailPayload(input: {
    applicationId: string;
    country: string;
    department: string;
    email: string;
    fromAddress: string;
    fullName: string;
    roleApplyingFor: string;
}) {
    const role = input.roleApplyingFor || "Not specified";
    const department = input.department || "Not specified";
    const country = input.country || "Not specified";
    const subject = `Application received | ${MEMBERSHIP_APPLICATION_APP_NAME}`;
    const year = new Date().getUTCFullYear().toString();
    const variables = {
        name: input.fullName,
        NAME: input.fullName,
        full_name: input.fullName,
        FULL_NAME: input.fullName,
        role,
        ROLE: role,
        department,
        DEPARTMENT: department,
        country,
        COUNTRY: country,
        reference: input.applicationId,
        REFERENCE: input.applicationId,
        app_name: MEMBERSHIP_APPLICATION_APP_NAME,
        APP_NAME: MEMBERSHIP_APPLICATION_APP_NAME,
        app_url: MEMBERSHIP_APPLICATION_APP_URL,
        APP_URL: MEMBERSHIP_APPLICATION_APP_URL,
        support_email: MEMBERSHIP_APPLICATION_SUPPORT_EMAIL,
        SUPPORT_EMAIL: MEMBERSHIP_APPLICATION_SUPPORT_EMAIL,
        year,
        YEAR: year,
    };

    const payload: ResendEmailPayload = {
        from: input.fromAddress,
        to: [input.email],
        subject,
    };

    if (MEMBERSHIP_APPLICATION_TEMPLATE_ID) {
        return {
            ...payload,
            template: {
                id: MEMBERSHIP_APPLICATION_TEMPLATE_ID,
                variables,
            },
        };
    }

    return {
        ...payload,
        html: renderMembershipApplicationHtml({
            applicationId: input.applicationId,
            country,
            department,
            fullName: input.fullName,
            role,
        }),
        text: `Hi ${input.fullName},

Thank you for applying to join ${MEMBERSHIP_APPLICATION_APP_NAME}.

Your application has been received and is now in our review queue.

Reference: ${input.applicationId}
Role: ${role}
Department: ${department}
Country: ${country}

We will get back to you by email with next steps soon.

Regards,
${MEMBERSHIP_APPLICATION_APP_NAME} Team`,
    };
}

function renderMembershipApplicationHtml(input: {
    applicationId: string;
    country: string;
    department: string;
    fullName: string;
    role: string;
}) {
    const safeName = escapeHtml(input.fullName);
    const safeRole = escapeHtml(input.role);
    const safeDepartment = escapeHtml(input.department);
    const safeCountry = escapeHtml(input.country);
    const safeReference = escapeHtml(input.applicationId);
    const safeAppName = escapeHtml(MEMBERSHIP_APPLICATION_APP_NAME);
    const preheader = `${MEMBERSHIP_APPLICATION_APP_NAME} received your application. Our team will review it and reply soon.`;

    return `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <title>Application Received | ${safeAppName}</title>
</head>
<body style="margin:0; padding:0; background:#020617; font-family: Inter, Segoe UI, Arial, sans-serif; color:#e2e8f0;">
  <div style="display:none; max-height:0; overflow:hidden; opacity:0;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#020617; padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px; background:#0f172a; border:1px solid #1e293b; border-radius:20px; overflow:hidden;">
          <tr>
            <td style="padding:0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:linear-gradient(135deg, #06b6d4 0%, #0ea5e9 45%, #1d4ed8 100%);">
                <tr>
                  <td style="padding:28px 28px 22px 28px;">
                    <p style="margin:0; font-size:12px; letter-spacing:1.4px; text-transform:uppercase; color:#cffafe; font-weight:700;">${safeAppName} Careers</p>
                    <h1 style="margin:10px 0 0 0; font-size:28px; line-height:1.2; color:#f8fafc; font-weight:800;">Application Received</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:28px;">
              <p style="margin:0 0 14px 0; font-size:17px; color:#f8fafc; font-weight:600;">Hi ${safeName},</p>
              <p style="margin:0 0 14px 0; font-size:15px; line-height:1.7; color:#cbd5e1;">
                Thank you for applying to join <strong style="color:#f8fafc;">${safeAppName}</strong>. Your application is now in our review queue.
              </p>
              <p style="margin:0 0 22px 0; font-size:15px; line-height:1.7; color:#cbd5e1;">
                We will review your profile and reach out soon with next steps.
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #1e293b; border-radius:14px; background:#020617;">
                <tr>
                  <td style="padding:16px 18px;">
                    <p style="margin:0 0 10px 0; font-size:12px; letter-spacing:1.2px; text-transform:uppercase; color:#94a3b8; font-weight:700;">Application Snapshot</p>
                    <p style="margin:0 0 6px 0; font-size:14px; color:#e2e8f0;"><strong>Reference:</strong> ${safeReference}</p>
                    <p style="margin:0 0 6px 0; font-size:14px; color:#e2e8f0;"><strong>Role:</strong> ${safeRole}</p>
                    <p style="margin:0 0 6px 0; font-size:14px; color:#e2e8f0;"><strong>Department:</strong> ${safeDepartment}</p>
                    <p style="margin:0; font-size:14px; color:#e2e8f0;"><strong>Country:</strong> ${safeCountry}</p>
                  </td>
                </tr>
              </table>

              <p style="margin:20px 0 0 0; font-size:13px; line-height:1.6; color:#94a3b8;">
                Keep this email for your records.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:0 28px 28px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top:1px solid #1e293b;">
                <tr>
                  <td style="padding-top:16px;">
                    <p style="margin:0; font-size:13px; color:#94a3b8;">Regards,</p>
                    <p style="margin:4px 0 0 0; font-size:14px; color:#f8fafc; font-weight:700;">${safeAppName} Team</p>
                  </td>
                  <td align="right" style="padding-top:16px;">
                    <p style="margin:0; font-size:12px; color:#64748b;">This is an automated confirmation email.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function maskEmail(value: string) {
    const [localPart, domain] = value.split("@");
    if (!localPart || !domain) {
        return "***";
    }
    return `${localPart[0]}***@${domain}`;
}
