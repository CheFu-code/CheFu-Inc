import type { PrivacySection } from "./AppPrivacyPolicy";

export function privacyContactSections(appName: string): PrivacySection[] {
    return [
        {
            id: "your-rights-and-contact",
            title: "Your rights and how to contact us",
            content: (
                <>
                    <p>
                        You can ask to access, correct or delete personal
                        information we hold about you, ask about its use, object
                        to processing or withdraw consent where processing
                        relies on consent, subject to applicable law. For{" "}
                        {appName}, email{" "}
                        <a href="mailto:privacy@chefu.co.za">
                            privacy@chefu.co.za
                        </a>
                        . Identify the app and your request; for account-related
                        requests, include the account email address. Do not send
                        your password or sign-in codes.
                    </p>
                    <p>
                        We may need to verify your identity, or a parent or
                        guardian&apos;s authority, before releasing or deleting
                        information. If a legal obligation or legal claim
                        prevents deletion of particular records, we will explain
                        the reason for retaining them. You may also raise a
                        privacy complaint with South Africa&apos;s{" "}
                        <a href="https://inforegulator.org.za">
                            Information Regulator
                        </a>
                        .
                    </p>
                </>
            ),
        },
        {
            id: "policy-updates",
            title: "Changes to this policy",
            content: (
                <p>
                    We will update this page and its &quot;Last updated&quot;
                    date when {appName}&apos;s information practices change.
                    Where required, we will provide additional notice or obtain
                    permission before using personal information for a new
                    purpose.
                </p>
            ),
        },
    ];
}
