import type { Metadata } from "next";

export const siteUrl = "https://chefu.co.za";
export const siteName = "CHEFU TECHNOLOGIES";

type PageMetaInput = {
    title: string;
    description: string;
    path?: string;
    image?: string;
};

export const noIndexMetadata: Metadata = {
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
};

export function pageMetadata({
    title,
    description,
    path = "/",
    image = "/chefu-technologies-logo.png",
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
    "/docs/api",
    "/careers",
    "/blog",
    "/blog/the-future-of-ai-in-music-mastering",
    "/blog/optimizing-react-for-real-time-audio-visualizers",
    "/blog/why-we-switched-to-rust-for-our-core-audio-engine",
    "/blog/designing-for-voice-ux-patterns-for-ai-assistants",
    "/faq",
    "/store",
    "/privacy",
    "/terms",
] as const;
