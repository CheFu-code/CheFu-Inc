import Link from "next/link";
import { Scale, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

export type LegalSection = {
    id: string;
    title: string;
    content: ReactNode;
};

type AppLegalDocumentProps = {
    appName: string;
    kind: "privacy" | "terms";
    summary: string;
    introduction: ReactNode;
    sections: LegalSection[];
};

export function AppLegalDocument({ appName, kind, summary, introduction, sections }: AppLegalDocumentProps) {
    const isPrivacy = kind === "privacy";
    const title = isPrivacy ? "Privacy Policy" : "Terms of Service";
    const Icon = isPrivacy ? ShieldCheck : Scale;
    const slug = appName.toLowerCase();

    return (
        <div className="min-h-screen bg-stone-50 pb-20 pt-32 text-slate-700">
            <article className="container mx-auto max-w-4xl px-6">
                <header className="mb-10 border-b border-slate-200 pb-8">
                    <Link href={`/${kind}`} className="mb-6 inline-block text-sm font-medium text-cyan-700 underline underline-offset-4">
                        {isPrivacy ? "All privacy policies" : "All terms of service"}
                    </Link>
                    <div className="mb-4 flex items-center gap-3 text-cyan-700">
                        <Icon className="h-8 w-8" aria-hidden="true" />
                        <span className="font-bold uppercase tracking-wider">{isPrivacy ? "App privacy" : "App terms"}</span>
                    </div>
                    <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">{appName} {title}</h1>
                    <p className="mb-4 text-slate-500">Last updated: <time dateTime="2026-10-27">October 27, 2026</time></p>
                    <p className="text-lg leading-8">{summary}</p>
                    <nav aria-label={`${appName} legal documents`} className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-cyan-700 underline underline-offset-4">
                        <Link href={`/privacy/${slug}`} aria-current={isPrivacy ? "page" : undefined}>Privacy Policy</Link>
                        <Link href={`/terms/${slug}`} aria-current={isPrivacy ? undefined : "page"}>Terms of Service</Link>
                    </nav>
                </header>

                <div className="space-y-4 leading-8">{introduction}</div>

                <nav aria-label="Document contents" className="my-10 rounded-2xl border border-slate-200 bg-white p-6">
                    <h2 className="mb-4 font-semibold text-slate-900">On this page</h2>
                    <ol className="grid gap-3 sm:grid-cols-2">
                        {sections.map((section, index) => (
                            <li key={section.id}>
                                <a href={`#${section.id}`} className="text-cyan-700 underline underline-offset-4">{index + 1}. {section.title}</a>
                            </li>
                        ))}
                    </ol>
                </nav>

                <div className="space-y-10 [&_a]:text-cyan-700 [&_a]:underline [&_a]:underline-offset-4 [&_p]:leading-8 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
                    {sections.map((section, index) => (
                        <section key={section.id} id={section.id} className="scroll-mt-28">
                            <h2 className="mb-4 text-2xl font-bold text-slate-900">{index + 1}. {section.title}</h2>
                            <div className="space-y-4">{section.content}</div>
                        </section>
                    ))}
                </div>
            </article>
        </div>
    );
}
