import type { Metadata } from "next";
import Link from "next/link";
import {
    BadgeCheck,
    FileLock2,
    KeyRound,
    LockKeyhole,
    ShieldCheck,
    ShieldAlert,
} from "lucide-react";
import { siteName, siteUrl } from "../site-metadata";

export const metadata: Metadata = {
    title: `Security | ${siteName}`,
    description: "Security, privacy, and responsible technology practices at Chefu Technologies.",
    alternates: { canonical: `${siteUrl}/security` },
    openGraph: {
        title: `Security | ${siteName}`,
        description: "Security, privacy, and responsible technology practices at Chefu Technologies.",
        url: `${siteUrl}/security`,
        siteName,
        type: "website",
    },
};

const practices = [
    {
        icon: KeyRound,
        title: "Identity and access",
        description: "We design authentication flows around least privilege, strong credential handling, and secure session boundaries. Where supported, modern mechanisms such as passkeys and short-lived access patterns are preferred over weak or static credentials.",
    },
    {
        icon: LockKeyhole,
        title: "Web application controls",
        description: "Our web products use secure transport, defensive HTTP headers, origin validation, and controlled redirect patterns to reduce common attack paths such as abuse, impersonation, and open redirect patterns.",
    },
    {
        icon: FileLock2,
        title: "Sensitive data handling",
        description: "User, customer, and application information is stored and handled only where needed for the service, with retention limits, minimization, and clear access boundaries applied throughout the platform lifecycle.",
    },
    {
        icon: ShieldCheck,
        title: "Operational resilience",
        description: "We rely on environment separation, configuration validation, and deployment checks so production systems are not exposed to avoidable misconfiguration or accidental data leakage.",
    },
    {
        icon: BadgeCheck,
        title: "Responsible product design",
        description: "Security, privacy, and usability are considered together. We prefer transparent product flows, explicit consent points, and clear user-facing controls over hidden or confusing behavior.",
    },
    {
        icon: ShieldAlert,
        title: "Vulnerability response",
        description: "Security concerns are treated seriously and triaged with urgency. We evaluate reports promptly, assess impact, and take corrective action where the risk is material to the user or platform.",
    },
];

const controls = [
    "Secure infrastructure configuration with separate environments for development, staging, and production.",
    "Use of encrypted transport, access restrictions, and validated service-to-service boundaries where systems interact.",
    "Clear retention and deletion practices for application data and uploaded documents that are no longer required.",
    "Routine review of permissions, secret management, and release practices before updates are promoted.",
    "Hardening of web-facing interfaces against abuse, spoofing, and unsafe data exposure.",
];

export default function SecurityPage() {
    return (
        <main className="min-h-screen bg-stone-50 px-6 pb-24 pt-32 text-slate-800">
            <div className="mx-auto max-w-5xl">
                <header className="max-w-3xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                        Trust and security
                    </p>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                        Security is part of the product.
                    </h1>
                    <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
                        Chefu Technologies builds and operates software, AI, and digital products with security, privacy, and responsible access in mind. This page describes the public practices we take seriously without exposing sensitive implementation details.
                    </p>
                </header>

                <section aria-labelledby="security-practices" className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    <h2 id="security-practices" className="sr-only">
                        Security practices
                    </h2>
                    {practices.map((practice) => {
                        const Icon = practice.icon;
                        return (
                            <article
                                key={practice.title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            >
                                <Icon className="h-6 w-6 text-cyan-600" />
                                <h3 className="mt-5 text-lg font-bold text-slate-900">
                                    {practice.title}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    {practice.description}
                                </p>
                            </article>
                        );
                    })}
                </section>

                <section className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-900">
                        What we emphasize in practice
                    </h2>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                        {controls.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="mt-1.5 inline-block h-2.5 w-2.5 rounded-full bg-cyan-600" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mt-16 border-t border-slate-200 pt-10">
                    <h2 className="text-2xl font-bold text-slate-900">Reporting a concern</h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                        If you identify a security or privacy issue involving a our product, platform, or service, contact the team at <a className="font-medium text-cyan-700 hover:text-cyan-600" href="mailto:hello@chefu.co.za">hello@chefu.co.za</a>. Please include the relevant URL, the nature of the issue, and any supporting detail you have. Do not share passwords, access tokens, or confidential internal material in the first message.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-5 text-sm font-medium">
                        <Link href="/privacy" className="text-cyan-700 hover:text-cyan-600">
                            Read the Privacy Policy
                        </Link>
                        <Link href="/contact" className="text-cyan-700 hover:text-cyan-600">
                            Contact us
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
