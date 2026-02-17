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
            const emailResult = await resend.emails.send({
                from: RESEND_FROM_EMAIL.value(),
                to: email,
                subject: "We received your CheFu Inc application",
                html: `
<div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
  <p>Hi ${escapeHtml(fullName)},</p>
  <p>Thanks for applying to join CheFu Inc.</p>
  <p>We have received your application and our team will review it soon. We will get back to you by email with next steps.</p>
  <p style="margin-top: 20px;">Regards,<br />CheFu Inc Team</p>
</div>
                `,
                text: `Hi ${fullName},\n\nThanks for applying to join CheFu Inc.\n\nWe have received your application and our team will review it soon. We will get back to you by email with next steps.\n\nRegards,\nCheFu Inc Team`,
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
