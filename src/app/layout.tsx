import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { SiteChrome } from "./components/SiteChrome";
import { WebMCPProvider } from "./components/WebMCPProvider";
import { AppProviders } from "./providers";
import { pageMetadata, siteName, siteUrl } from "./site-metadata";
import "../styles/index.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    ...pageMetadata({
        title: "CheFu Inc. | Software, AI, and Audio Production",
        description:
            "CheFu Inc. builds fast software platforms, practical AI systems, and high-fidelity audio production for ambitious teams.",
    }),
    applicationName: siteName,
    icons: {
        icon: [
            { url: "/chefu-inc-logo.svg", type: "image/svg+xml" },
            { url: "/favicon.ico" },
        ],
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
            <body className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
                <AppProviders />
                <WebMCPProvider />
                <SiteChrome>{children}</SiteChrome>
            </body>
        </html>
    );
}
