import type { Metadata } from "next";

export const siteUrl = "https://chefuinc.com";
export const siteName = "CheFu Inc.";

type PageMetaInput = {
    title: string;
    description: string;
    path?: string;
    image?: string;
};

export function pageMetadata({
    title,
    description,
    path = "/",
    image = "/android-chrome-512x512.png",
}: PageMetaInput): Metadata {
    const url = new URL(path, siteUrl).toString();

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName,
            images: [{ url: image, width: 512, height: 512 }],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}

export const routes = [
    "/",
    "/about",
    "/services",
    "/services/music",
    "/services/software",
    "/services/ai",
    "/portfolio",
    "/contact",
    "/login",
    "/register",
    "/careers",
    "/blog",
    "/faq",
    "/privacy",
    "/terms",
] as const;
