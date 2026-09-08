import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteName, siteUrl } from "../../site-metadata";

export const metadata: Metadata = {
    title: `Shopping cart | ${siteName}`,
    description: "Review products selected from the CHEFU store.",
    alternates: {
        canonical: `${siteUrl}/store/cart`,
    },
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
    openGraph: {
        title: `Shopping cart | ${siteName}`,
        description: "Review products selected from the CHEFU store.",
        url: `${siteUrl}/store/cart`,
        siteName,
        type: "website",
    },
    twitter: {
        card: "summary",
        title: `Shopping cart | ${siteName}`,
        description: "Review products selected from the CHEFU store.",
    },
};

export default function CartLayout({ children }: { children: ReactNode }) {
    return children;
}
