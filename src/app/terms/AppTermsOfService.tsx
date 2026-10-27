import Link from "next/link";
import { AppLegalDocument, type LegalSection } from "../components/AppLegalDocument";

export type TermsSection = LegalSection;

export function AppTermsOfService({ appName, summary, sections, importantPoints }: {
    appName: string;
    summary: string;
    importantPoints?: string;
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
            <aside aria-label="Important points before using the app" className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
                <p className="mb-2 font-semibold">Important points before you use {appName}</p>
                <p>{importantPoints ?? (appName === "LiftWise"
                    ? "Exercise can cause injury. Our guidance is general, may contain errors and does not assess your health or replace a qualified professional. Workout reminders are not guaranteed, and unsynced records can be lost. Read the exercise guidance and synchronisation sections before relying on these features."
                    : "You need the appropriate rights to the music, artwork and lyrics you use or download. Your library is stored on your device without a cloud backup from us. Read the content-rights and local-storage sections before downloading files or clearing app data.")}</p>
                <p className="mt-2">These points do not remove mandatory consumer rights or limit responsibility that the law does not permit us to limit.</p>
            </aside>
        </>}
    />;
}
