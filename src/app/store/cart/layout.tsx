import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteName, siteUrl } from "../../site-metadata";

export const metadata: Metadata = {
    title: `Cart & checkout | Chefu Store`,
    description: "Review your Chefu Store cart, enter delivery details, and continue to Paystack checkout when available.",
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
        title: `Cart & checkout | Chefu Store`,
        description: "Review your cart and delivery details at Chefu Store.",
        url: `${siteUrl}/store/cart`,
        siteName,
        type: "website",
    },
    twitter: {
        card: "summary",
        title: `Cart & checkout | Chefu Store`,
        description: "Review your cart and delivery details at Chefu Store.",
    },
};

export default function CartLayout({ children }: { children: ReactNode }) {
    return children;
}
