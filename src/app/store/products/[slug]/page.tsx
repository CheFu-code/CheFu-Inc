import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct } from "../../../../lib/products";
import { ProductPageView } from "./ProductPageView";
import {
    getAbsoluteUrl,
    getProductPageData,
} from "./product-page.utils";

export const dynamic = "force-dynamic";

const SITE_URL = "https://chefu.co.za";
const SITE_NAME = "CHEFU Technologies";

type ProductPageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({
    params,
}: ProductPageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product) {
        return {
            title: "Product not found | CHEFU Technologies Store",
            description:
                "The requested CHEFU Technologies product could not be found.",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const description =
        product.seoDescription?.trim() ||
        product.shortDescription?.trim() ||
        product.description?.trim() ||
        `Shop ${product.name} from CHEFU Technologies.`;

    const canonicalUrl = `${SITE_URL}/store/products/${product.slug}`;

    const socialImage =
        product.thumbnail ||
        product.images?.[0]?.url ||
        undefined;
    const socialImages = [
        ...(product.thumbnail ? [product.thumbnail] : []),
        ...(product.images ?? []).map((image) => image.url),
    ]
        .filter(Boolean)
        .filter((image, index, images) => images.indexOf(image) === index)
        .map(getAbsoluteUrl);

    const keywords = [
        product.name,
        product.category,
        ...(product.tags ?? []),
        "CHEFU",
        "CHEFU Technologies",
        "CHEFU Store",
        "South Africa",
    ].filter(Boolean);

    return {
        title: `${product.name} | CHEFU Technologies Store`,
        description,
        keywords,
        authors: [
            {
                name: SITE_NAME,
            },
        ],
        creator: SITE_NAME,
        publisher: SITE_NAME,
        alternates: {
            canonical: canonicalUrl,
        },
        metadataBase: new URL(SITE_URL),
        robots: {
            index: product.status === "ACTIVE",
            follow: true,
            googleBot: {
                index: product.status === "ACTIVE",
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
                "max-video-preview": -1,
            },
        },
        openGraph: {
            title: `${product.name} | CHEFU Technologies Store`,
            description,
            url: canonicalUrl,
            siteName: SITE_NAME,
            locale: "en_ZA",
            type: "website",
            images: socialImages.length > 0
                ? socialImages.map((url, index) => ({
                    url,
                    width: 1200,
                    height: 1200,
                    alt: product.images?.[index]?.alt || product.name,
                }))
                : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: `${product.name} | CHEFU Technologies Store`,
            description,
            images: socialImage
                ? [getAbsoluteUrl(socialImage)]
                : undefined,
        },
        category: product.category,
        other: {
            "product:brand": SITE_NAME,
            "product:category": product.category,
            "product:condition": "new",
            "product:price:amount": (product.priceMinor / 100).toFixed(2),
            "product:price:currency": product.currency,
            "product:availability": product.status === "ACTIVE" && product.inventoryQuantity > 0
                ? "in stock"
                : "out of stock",
        },
    };
}

export default async function ProductPage({
    params,
}: ProductPageProps) {
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product) {
        notFound();
    }

    return (
        <ProductPageView
            product={product}
            pageData={getProductPageData(product)}
        />
    );
}
