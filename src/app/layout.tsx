import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { SiteChrome } from "./components/SiteChrome";
import { WebMCPProvider } from "./components/WebMCPProvider";
import { AppProviders } from "./providers";
import { pageMetadata, siteName, siteUrl } from "./site-metadata";
import "../styles/index.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";

const adsensePublisherId = "ca-pub-8952058057579255";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    ...pageMetadata({
        title: "CHEFU TECHNOLOGIES | Software, AI, and Audio Production",
        description:
            "CHEFU TECHNOLOGIES builds fast software platforms, practical AI systems, and high-fidelity audio production for ambitious teams.",
    }),
    applicationName: siteName,
    icons: {
        icon: [{ url: "/chefu-inc-logo.svg", type: "image/svg+xml" }],
        apple: "/apple-touch-icon.png",
    },
};

export const viewport: Viewport = {
    themeColor: "#020617",
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
            <body className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
                <AppProviders />
                <WebMCPProvider />
                <SiteChrome>
                    {children}
                    <Analytics />
                </SiteChrome>
                <GoogleAnalytics gaId={process.env.NEXT_FIREBASE_MEASUREMENT_ID!} />
            </body>
        </html>
    );
}
