import type { Product } from "../../../../lib/products";

export type GalleryImage = {
    url: string;
    alt?: string;
};

export type ProductPageData = {
    unavailable: boolean;
    lowStock: boolean;
    hasDiscount: boolean;
    discountPercentage: number;
    productUrl: string;
    galleryImages: GalleryImage[];
    productSchema: Record<string, unknown>;
};

const SITE_URL = "https://chefu.co.za";
const SITE_NAME = "CHEFU Technologies";

export function getAbsoluteUrl(value: string) {
    if (
        value.startsWith("http://") ||
        value.startsWith("https://")
    ) {
        return value;
    }

    return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`
        }`;
}

export function getProductPageData(product: Product): ProductPageData {
    const unavailable =
        product.status === "OUT_OF_STOCK" ||
        product.inventoryQuantity <= 0;

    const lowStock =
        !unavailable &&
        product.inventoryQuantity <= product.lowStockThreshold;

    const hasDiscount =
        !!product.compareAtPriceMinor &&
        product.compareAtPriceMinor > product.priceMinor;

    const discountPercentage = hasDiscount
        ? Math.round(
            ((product.compareAtPriceMinor! -
                product.priceMinor) /
                product.compareAtPriceMinor!) *
            100,
        )
        : 0;

    const productUrl = `${SITE_URL}/store/products/${product.slug}`;
    const galleryImages: GalleryImage[] = [];

    if (product.thumbnail) {
        galleryImages.push({
            url: product.thumbnail,
            alt: product.name,
        });
    }

    for (const image of product.images ?? []) {
        if (
            image?.url &&
            !galleryImages.some(
                (existing) => existing.url === image.url,
            )
        ) {
            galleryImages.push({
                url: image.url,
                alt: image.alt || product.name,
            });
        }
    }

    const productSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Product",
                name: product.name,
                description: product.description || product.shortDescription,
                sku: product.sku,
                category: product.category,
                url: productUrl,
                image: galleryImages.map((image) => getAbsoluteUrl(image.url)),
                brand: {
                    "@type": "Brand",
                    name: SITE_NAME,
                },
                offers: {
                    "@type": "Offer",
                    url: productUrl,
                    priceCurrency: product.currency,
                    price: (product.priceMinor / 100).toFixed(2),
                    availability:
                        product.status === "ACTIVE" && product.inventoryQuantity > 0
                            ? "https://schema.org/InStock"
                            : "https://schema.org/OutOfStock",
                    itemCondition: "https://schema.org/NewCondition",
                },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Store",
                        item: `${SITE_URL}/store`,
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: product.category,
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: product.name,
                        item: productUrl,
                    },
                ],
            },
        ],
    };

    return {
        unavailable,
        lowStock,
        hasDiscount,
        discountPercentage,
        productUrl,
        galleryImages,
        productSchema,
    };
}