import Link from "next/link";
import { AppLegalDocument, type LegalSection } from "../components/AppLegalDocument";

export type TermsSection = LegalSection;

export function AppTermsOfService({ appName, summary, sections }: {
    appName: string;
    summary: string;
    sections: TermsSection[];
}) {
    return <AppLegalDocument
        appName={appName}
        kind="terms"
        summary={summary}
        sections={sections}
        introduction={<>
            <p>We operate {appName}. These Terms of Service govern your use of the app and its online features. Read them together with our <Link href="/terms" className="text-cyan-700 underline">general Terms of Service</Link>, which identify us and set out the terms that apply across our services. These app-specific terms explain how those terms apply to {appName}; they take priority for the app where the two address the same issue differently.</p>
            <p>By using {appName}, you agree to these terms. If you do not agree, stop using the app. Where you cannot enter into a binding agreement yourself, a parent or legal guardian must authorise your use and agree on your behalf where required by law.</p>
        </>}
    />;
}
