import type { Metadata } from "next";
import Link from "next/link";
import { siteName, siteUrl } from "../site-metadata";
import { SecurityPracticeCard } from "./SecurityPracticeCard";

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
        title: "Identity and access",
        description: "We design authentication flows around least privilege, strong credential handling, and secure session boundaries. Where supported, modern mechanisms such as passkeys and short-lived access patterns are preferred over weak or static credentials.",
    },
    {
        title: "Web application controls",
        description: "Our web products use secure transport, defensive HTTP headers, origin validation, and controlled redirect patterns to reduce common attack paths such as abuse, impersonation, and open redirect patterns.",
    },
    {
        title: "Sensitive data handling",
        description: "User, customer, and application information is stored and handled only where needed for the service, with retention limits, minimization, and clear access boundaries applied throughout the platform lifecycle.",
    },
    {
        title: "Operational resilience",
        description: "We rely on environment separation, configuration validation, and deployment checks so production systems are not exposed to avoidable misconfiguration or accidental data leakage.",
    },
    {
        title: "Responsible product design",
        description: "Security, privacy, and usability are considered together. We prefer transparent product flows, explicit consent points, and clear user-facing controls over hidden or confusing behavior.",
    },
    {
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
        <main className="min-h-screen bg-[#f7f5f3] px-5 pb-16 pt-28 text-[#111827] md:px-6 md:pb-20 md:pt-32">
            <div className="mx-auto max-w-5xl">
                <header className="max-w-3xl">
                    <h1 className="text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                        Security is part of the product.
                    </h1>
                    <p className="mt-4 text-sm leading-6 text-[#5f5b56] sm:text-base sm:leading-7 md:text-lg">
                        Chefu Technologies builds and operates software, AI, and digital products with security, privacy, and responsible access in mind. This page describes the public practices we take seriously without exposing sensitive implementation details.
                    </p>
                </header>

                <section aria-labelledby="security-practices" className="mt-8 grid grid-cols-2 items-start gap-3 sm:gap-4 md:mt-12 xl:grid-cols-3">
                    <h2 id="security-practices" className="sr-only">
                        Security practices
                    </h2>
                    {practices.map((practice) => (
                        <SecurityPracticeCard key={practice.title} title={practice.title} description={practice.description} />
                    ))}
                </section>

                <section className="mt-10 rounded-2xl border border-[#e5e1dc] bg-white p-4 sm:p-6 md:mt-16">
                    <h2 className="text-xl font-semibold tracking-[-0.04em] md:text-2xl">
                        What we emphasize in practice
                    </h2>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-[#5f5b56] md:text-base md:leading-7">
                        {controls.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1f3c5b] md:mt-2.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mt-10 border-t border-[#e5e1dc] pt-6 md:mt-16 md:pt-10">
                    <h2 className="text-xl font-semibold tracking-[-0.04em] md:text-2xl">Reporting a concern</h2>
                    <p className="mt-4 max-w-3xl text-sm leading-6 text-[#5f5b56] md:text-base md:leading-7">
                        If you identify a security or privacy issue involving our product, platform, or service, email our team. Please include the relevant URL, the nature of the issue, and any supporting detail you have. Do not share passwords, access tokens, or confidential internal material in the first message.
                    </p>
                    <a
                        href="mailto:support@chefu.co.za"
                        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-[#f7f5f3] transition-colors hover:bg-[#1f2937] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3c5b]"
                    >
                        Email support@chefu.co.za
                    </a>
                    <div className="mt-4 flex flex-wrap gap-x-5 text-sm font-medium">
                        <Link href="/privacy" className="inline-flex min-h-11 items-center text-[#1f3c5b] underline underline-offset-4 hover:text-[#111827]">
                            Read the Privacy Policy
                        </Link>
                        <Link href="/contact" className="inline-flex min-h-11 items-center text-[#1f3c5b] underline underline-offset-4 hover:text-[#111827]">
                            Contact us
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
