import type { Metadata } from "next";
import Link from "next/link";
import { KeyRound, LockKeyhole, ShieldCheck } from "lucide-react";
import { siteName, siteUrl } from "../site-metadata";

export const metadata: Metadata = {
    title: `Security | ${siteName}`,
    description: "Security and responsible technology practices at CHEFU TECHNOLOGIES.",
    alternates: { canonical: `${siteUrl}/security` },
    openGraph: {
        title: `Security | ${siteName}`,
        description: "Security and responsible technology practices at CHEFU TECHNOLOGIES.",
        url: `${siteUrl}/security`,
        siteName,
        type: "website",
    },
};

const practices = [
    {
        icon: KeyRound,
        title: "Account security",
        description: "CHEFU account systems support modern authentication flows, including passkeys where supported by the relevant service.",
    },
    {
        icon: LockKeyhole,
        title: "Protected service boundaries",
        description: "Applications use authenticated service boundaries, controlled return origins, and security headers appropriate to the web platform.",
    },
    {
        icon: ShieldCheck,
        title: "Data protection",
        description: "Our Privacy Policy explains how personal information is collected, used, retained, and protected across CHEFU services.",
    },
];

export default function SecurityPage() {
    return (
        <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-32 text-slate-200">
            <div className="mx-auto max-w-5xl">
                <header className="max-w-3xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Trust and security</p>
                    <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">Security is part of the product.</h1>
                    <p className="mt-6 text-lg leading-8 text-slate-400 md:text-xl">
                        CHEFU TECHNOLOGIES builds and operates software systems with security, privacy, and responsible access in mind. This page describes the public practices we can verify without exposing sensitive implementation details.
                    </p>
                </header>

                <section aria-labelledby="security-practices" className="mt-16 grid gap-5 md:grid-cols-3">
                    <h2 id="security-practices" className="sr-only">Security practices</h2>
                    {practices.map((practice) => {
                        const Icon = practice.icon;
                        return (
                            <article key={practice.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                                <Icon className="h-7 w-7 text-cyan-400" />
                                <h3 className="mt-5 text-xl font-bold text-white">{practice.title}</h3>
                                <p className="mt-3 leading-7 text-slate-400">{practice.description}</p>
                            </article>
                        );
                    })}
                </section>

                <section className="mt-16 border-t border-slate-800 pt-10">
                    <h2 className="text-2xl font-bold text-white">Reporting a concern</h2>
                    <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                        For a security or privacy concern involving a CHEFU website or product, contact the team at <a className="text-cyan-300 hover:text-cyan-200" href="mailto:hello@chefu.co.za">hello@chefu.co.za</a>. Please do not include passwords, access tokens, or other secrets in an initial report.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                        <Link href="/privacy" className="font-semibold text-cyan-300 hover:text-cyan-200">Read the Privacy Policy</Link>
                        <Link href="/contact" className="font-semibold text-cyan-300 hover:text-cyan-200">Contact CHEFU</Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
