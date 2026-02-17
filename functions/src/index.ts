import { initializeApp } from "firebase-admin/app";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { defineSecret } from "firebase-functions/params";
import { logger } from "firebase-functions/v2";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { Resend } from "resend";

initializeApp();

const RESEND_API_KEY = defineSecret("RESEND_API_KEY");
const RESEND_FROM_EMAIL = defineSecret("RESEND_FROM_EMAIL");

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

        const resend = new Resend(RESEND_API_KEY.value());

        try {
            const safeName = escapeHtml(fullName);
            const safeRole = escapeHtml(roleApplyingFor || "Not specified");
            const safeDepartment = escapeHtml(department || "Not specified");
            const safeCountry = escapeHtml(country || "Not specified");
            const safeReference = escapeHtml(applicationId);
            const preheader =
                "Your CheFu Inc application was received. Our team will review it and reply soon.";

            const emailResult = await resend.emails.send({
                from: RESEND_FROM_EMAIL.value(),
                to: email,
                subject: "Application received | CheFu Inc",
                html: `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <title>Application Received | CheFu Inc</title>
</head>
<body style="margin:0; padding:0; background:#020617; font-family: Inter, Segoe UI, Arial, sans-serif; color:#e2e8f0;">
  <div style="display:none; max-height:0; overflow:hidden; opacity:0;">${preheader}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#020617; padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px; background:#0f172a; border:1px solid #1e293b; border-radius:20px; overflow:hidden;">
          <tr>
            <td style="padding:0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:linear-gradient(135deg, #06b6d4 0%, #0ea5e9 45%, #1d4ed8 100%);">
                <tr>
                  <td style="padding:28px 28px 22px 28px;">
                    <p style="margin:0; font-size:12px; letter-spacing:1.4px; text-transform:uppercase; color:#cffafe; font-weight:700;">CheFu Inc Careers</p>
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
                Thank you for applying to join <strong style="color:#f8fafc;">CheFu Inc</strong>. Your application is now in our review queue.
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
                    <p style="margin:4px 0 0 0; font-size:14px; color:#f8fafc; font-weight:700;">CheFu Inc Team</p>
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
</html>
                `,
                text: `Hi ${fullName},

Thank you for applying to join CheFu Inc.

Your application has been received and is now in our review queue.

Reference: ${applicationId}
Role: ${roleApplyingFor || "Not specified"}
Department: ${department || "Not specified"}
Country: ${country || "Not specified"}

We will get back to you by email with next steps soon.

Regards,
CheFu Inc Team`,
            });

            await docRef.update({
                confirmationEmailStatus: "sent",
                confirmationEmailId: emailResult.data?.id ?? null,
                confirmationEmailError: "",
                confirmationEmailUpdatedAt: FieldValue.serverTimestamp(),
            });

            logger.info("Confirmation email sent.", {
                applicationId,
                to: email,
                resendEmailId: emailResult.data?.id ?? null,
            });
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : "Unknown email send failure";

            await docRef.update({
                confirmationEmailStatus: "failed",
                confirmationEmailError: errorMessage.slice(0, 500),
                confirmationEmailUpdatedAt: FieldValue.serverTimestamp(),
            });

            logger.error("Failed to send confirmation email.", {
                applicationId,
                to: email,
                error: errorMessage,
            });
        }
    },
);

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}
