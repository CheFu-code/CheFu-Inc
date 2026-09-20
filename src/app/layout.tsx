import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { SiteChrome } from "./components/SiteChrome";
import { WebMCPProvider } from "./components/WebMCPProvider";
import { AppProviders } from "./providers";
import { pageMetadata, siteName, siteUrl } from "./site-metadata";
import "../styles/index.css";
import { Analytics } from "@vercel/analytics/next";
import { CartProvider } from "../lib/cart";
import { CookieConsent } from "./components/CookieConsent";
import { CookieConsentClient } from "./components/CookieConsentClient";

const adsensePublisherId = "ca-pub-8952058057579255";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    ...pageMetadata({
        title: "Chefu Technologies | Software, AI, and Audio Production",
        description:
            "Chefu Technologies builds fast software platforms, practical AI systems, and high-fidelity audio production for ambitious teams.",
    }),
    applicationName: siteName,
    icons: {
        icon: [{ url: "/chefu-technologies-logo.png", type: "image/png" }],
        apple: "/chefu-technologies-logo.png",
    },
};

const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CHEFU TECHNOLOGIES (Pty) Ltd",
    legalName: "CHEFU TECHNOLOGIES (Pty) Ltd",
    url: siteUrl,
    logo: new URL("/chefu-technologies-logo.png", siteUrl).toString(),
    email: "hello@chefu.co.za",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Johannesburg",
        addressCountry: "ZA",
    },
    sameAs: [
        "https://x.com/CHEFU_TECH",
        "https://www.linkedin.com/in/chefu-technologies-90b1663b1",
        "https://github.com/CHEFU-TECHNOLOGIES",
        "https://www.instagram.com/chefu_technologies",
    ],
};

const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    publisher: {
        "@type": "Organization",
        name: "CHEFU TECHNOLOGIES (Pty) Ltd",
        url: siteUrl,
    },
};

export const viewport: Viewport = {
    themeColor: "#111827",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" className={inter.variable}>
            <head>
                <script
                    async
                    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsensePublisherId}`}
                    crossOrigin="anonymous"
                />
                <meta name="google-adsense-account" content={adsensePublisherId} />
            </head>
            <body className="min-h-screen bg-[#f5f5f4] text-[#18181b] font-sans selection:bg-[#2563eb]/20 selection:text-[#111827]">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([organizationJsonLd, websiteJsonLd]).replace(/</g, "\\u003c"),
                    }}
                />
                <AppProviders />
                <WebMCPProvider />
                <CartProvider>
                    <SiteChrome>
                        {children}
                        <Analytics />
                        <CookieConsentClient />
                    </SiteChrome>
                </CartProvider>
            </body>
        </html>
    );
}
