import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
    ArrowLeft,
    Check,
    Package,
    ShieldCheck,
    Star,
    Tag,
} from "lucide-react";
import { getProduct, formatZar } from "../../../../lib/products";
import { ProductActions } from "./ProductActions";
import { ProductGallery } from "./ProductGallery";
import { ProductShareButton } from "../ProductShareButton";

export const dynamic = "force-dynamic";

const SITE_URL = "https://chefu.co.za";
const SITE_NAME = "CHEFU Technologies";

type ProductPageProps = {
    params: Promise<{ slug: string }>;
};

type GalleryImage = {
    url: string;
    alt?: string;
};

function getAbsoluteUrl(value: string) {
    if (
        value.startsWith("http://") ||
        value.startsWith("https://")
    ) {
        return value;
    }

    return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`
        }`;
}

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
            images: socialImage
                ? [
                    {
                        url: getAbsoluteUrl(socialImage),
                        width: 1200,
                        height: 1200,
                        alt:
                            product.images?.[0]?.alt ||
                            product.name,
                    },
                ]
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

    /*
     * Build a normalized gallery.
     *
     * thumbnail gets priority as the first image.
     * Duplicate URLs are removed.
     */
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

    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <div className="mx-auto max-w-7xl px-4 pb-32 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
                {/* Breadcrumb */}
                <nav
                    aria-label="Breadcrumb"
                    className="mb-5 sm:mb-8"
                >
                    <Link
                        href="/store"
                        className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-800 bg-slate-950/70 px-3.5 py-2 text-xs font-medium text-slate-400 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:text-cyan-300 sm:text-sm"
                    >
                        <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1 sm:h-4 sm:w-4" />
                        Back to store
                    </Link>
                </nav>

                {/* Main product area */}
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-start lg:gap-14 xl:gap-20">
                    {/* Product gallery */}
                    <ProductGallery
                        productName={product.name}
                        images={galleryImages}
                        featured={product.featured}
                        hasDiscount={hasDiscount}
                        discountPercentage={discountPercentage}
                    />

                    {/* Product details */}
                    <section className="min-w-0">
                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 sm:text-xs">
                                {product.category}
                            </span>

                            {product.featured && (
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                                    <Star className="h-3 w-3 fill-cyan-400 text-cyan-400" />
                                    Featured
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-4xl md:text-5xl lg:text-[3.6rem] lg:leading-[1.02]">
                            {product.name}
                        </h1>

                        {/* Short description */}
                        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                            {product.shortDescription ||
                                product.description}
                        </p>

                        {/* Price card */}
                        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/45 p-4 sm:mt-8 sm:p-5">
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                                <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                    {formatZar(product.priceMinor)}
                                </span>

                                {hasDiscount && (
                                    <>
                                        <span className="text-sm text-slate-600 line-through sm:text-base">
                                            {formatZar(
                                                product.compareAtPriceMinor!,
                                            )}
                                        </span>

                                        <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                                            Save {discountPercentage}%
                                        </span>
                                    </>
                                )}
                            </div>

                            {/* Stock state */}
                            <div className="mt-3 flex items-center gap-2">
                                <span
                                    className={`h-2 w-2 rounded-full ${unavailable
                                            ? "bg-rose-400"
                                            : lowStock
                                                ? "animate-pulse bg-cyan-400"
                                                : "bg-emerald-400"
                                        }`}
                                />

                                <span
                                    className={`text-xs font-medium sm:text-sm ${unavailable
                                            ? "text-rose-300"
                                            : lowStock
                                                ? "text-cyan-300"
                                                : "text-emerald-300"
                                        }`}
                                >
                                    {unavailable
                                        ? "Currently unavailable"
                                        : lowStock
                                            ? `Only ${product.inventoryQuantity} left in stock`
                                            : "In stock and ready to order"}
                                </span>
                            </div>
                        </div>

                        {/* Purchase actions */}
                        <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:mt-6 sm:p-5">
                            <ProductActions
                                product={product}
                                disabled={unavailable}
                            />
                        </div>

                        {/* Share / SKU */}
                        <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4 sm:flex-row sm:items-center sm:justify-between">
                            <ProductShareButton
                                productName={product.name}
                                productDescription={
                                    product.shortDescription ||
                                    product.description
                                }
                                productUrl={productUrl}
                            />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                                SKU {product.sku}
                            </span>
                        </div>

                        {/* Trust features */}
                        <div className="mt-4 grid overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30 sm:grid-cols-3">
                            <div className="flex items-center gap-3 border-b border-slate-800 p-4 sm:border-b-0 sm:border-r">
                                <ShieldCheck className="h-4 w-4 shrink-0 text-cyan-400" />

                                <div>
                                    <p className="text-[11px] font-semibold text-white">
                                        Quality
                                    </p>

                                    <p className="mt-0.5 text-[10px] text-slate-600">
                                        CHEFU selected
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 border-b border-slate-800 p-4 sm:border-b-0 sm:border-r">
                                <Package className="h-4 w-4 shrink-0 text-cyan-400" />

                                <div>
                                    <p className="text-[11px] font-semibold text-white">
                                        Shipping
                                    </p>

                                    <p className="mt-0.5 text-[10px] text-slate-600">
                                        Product dependent
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4">
                                <Check className="h-4 w-4 shrink-0 text-cyan-400" />

                                <div>
                                    <p className="text-[11px] font-semibold text-white">
                                        Secure
                                    </p>

                                    <p className="mt-0.5 text-[10px] text-slate-600">
                                        Safe checkout
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Product information */}
                        <div className="mt-8 border-t border-slate-900 pt-8">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                                Product information
                            </p>

                            <div className="mt-5">
                                <h2 className="text-lg font-semibold text-white">
                                    Description
                                </h2>

                                <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-400">
                                    {product.description ||
                                        product.shortDescription}
                                </p>
                            </div>

                            {/* Tags */}
                            {product.tags?.length > 0 && (
                                <div className="mt-7">
                                    <h2 className="text-sm font-semibold text-white">
                                        Product tags
                                    </h2>

                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {product.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500"
                                            >
                                                <Tag className="h-3 w-3" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Brand panel */}
                        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                            <div className="flex gap-3">
                                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />

                                <div>
                                    <h2 className="text-sm font-semibold text-white">
                                        Built by CHEFU Technologies
                                    </h2>

                                    <p className="mt-1.5 text-xs leading-6 text-slate-500">
                                        Thoughtfully selected and designed
                                        for modern creators, developers,
                                        and professionals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Additional SEO content */}
                <section className="mt-16 max-w-4xl border-t border-slate-900 pt-10 sm:mt-20 sm:pt-12">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                        More about this product
                    </p>

                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        About {product.name}
                    </h2>

                    <p className="mt-5 whitespace-pre-line text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                        {product.description ||
                            product.shortDescription}
                    </p>
                </section>
            </div>

            {/* Mobile purchase bar */}
            {!unavailable && (
                <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-800/90 bg-slate-950/95 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden">
                    <div className="mx-auto flex max-w-7xl items-center gap-3">
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-[11px] font-medium text-slate-500">
                                {product.name}
                            </p>

                            <p className="mt-0.5 text-sm font-bold text-white">
                                {formatZar(product.priceMinor)}
                            </p>
                        </div>

                        <ProductActions
                            product={product}
                            disabled={unavailable}
                            compact
                        />
                    </div>
                </div>
            )}
        </main>
    );
}