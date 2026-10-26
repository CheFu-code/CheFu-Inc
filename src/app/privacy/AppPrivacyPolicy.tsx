import Link from "next/link";
import { AppLegalDocument, type LegalSection } from "../components/AppLegalDocument";

export type PrivacySection = LegalSection;

export function AppPrivacyPolicy({ appName, summary, sections }: {
    appName: string;
    summary: string;
    sections: PrivacySection[];
}) {
    return <AppLegalDocument
        appName={appName}
        kind="privacy"
        summary={summary}
        sections={sections}
        introduction={
            <p>
                We operate {appName}. This policy explains the information we handle through the app.
                Read it together with our <Link href="/privacy" className="text-cyan-700 underline">company Privacy Policy</Link>,
                which explains our general privacy practices and rights request process.
            </p>
        }
    />;
}
