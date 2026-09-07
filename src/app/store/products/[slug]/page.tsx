import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    Package,
    ShieldCheck,
    Star,
} from "lucide-react";
import { getProduct, formatZar } from "../../../../lib/products";
import { ProductActions } from "./ProductActions";
import { ProductShareButton } from "../ProductShareButton";

export const dynamic = "force-dynamic";

const SITE_URL = "https://chefu.co.za";
const SITE_NAME = "CHEFU Technologies";

type ProductPageProps = {
    params: Promise<{ slug: string }>;
};

function getProductImage(product: Awaited<ReturnType<typeof getProduct>>) {
    if (!product) {
        return undefined;
    }

    return (
        product.thumbnail ||
        product.images?.[0]?.url ||
        undefined
    );
}

function getAbsoluteUrl(pathOrUrl: string) {
    if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
        return pathOrUrl;
    }

    return `${SITE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
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

    const productImage = getProductImage(product);
    const socialImage = productImage
        ? getAbsoluteUrl(productImage)
        : undefined;

    const keywords = [
        product.name,
        product.category,
        ...(product.tags || []),
        "CHEFU",
        "CHEFU Technologies",
        "CHEFU Store",
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
                        url: socialImage,
                        width: 1200,
                        height: 1200,
                        alt: product.images?.[0]?.alt || product.name,
                    },
                ]
                : undefined,
        },

        twitter: {
            card: "summary_large_image",
            title: `${product.name} | CHEFU Technologies Store`,
            description,
            images: socialImage ? [socialImage] : undefined,
            creator: "@CHEFU",
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
        product.inventoryQuantity < 1;

    const lowStock =
        !unavailable &&
        product.inventoryQuantity <= product.lowStockThreshold;

    const hasDiscount =
        !!product.compareAtPriceMinor &&
        product.compareAtPriceMinor > product.priceMinor;

    const productUrl = `${SITE_URL}/store/products/${product.slug}`;

    const primaryImage =
        product.thumbnail ||
        product.images?.[0]?.url ||
        null;

    const productImages =
        product.images?.filter((image) => Boolean(image?.url)) || [];

    const allImages =
        primaryImage && !productImages.some((image) => image.url === primaryImage)
            ? [
                {
                    url: primaryImage,
                    alt: product.name,
                },
                ...productImages,
            ]
            : productImages;

    return (
        <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-32 text-slate-100 md:pt-36">
            <div className="mx-auto max-w-7xl">
                {/* Breadcrumb */}
                <nav
                    aria-label="Breadcrumb"
                    className="mb-8"
                >
                    <Link
                        href="/store"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                        Back to store
                    </Link>
                </nav>

                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                    {/* Product media */}
                    <div className="lg:sticky lg:top-28 lg:self-start">
                        <div className="relative aspect-square overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
                            {primaryImage ? (
                                <Image
                                    src={primaryImage}
                                    alt={product.images?.[0]?.alt || product.name}
                                    fill
                                    priority
                                    sizes="(min-width: 1024px) 55vw, 100vw"
                                    className="object-contain p-6 transition-transform duration-700 hover:scale-[1.025] md:p-10"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center">
                                    <Package
                                        className="h-24 w-24 text-cyan-400/20 md:h-32 md:w-32"
                                        strokeWidth={1}
                                    />
                                </div>
                            )}

                            {/* Featured */}
                            {product.featured && (
                                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                                    <Star className="h-3.5 w-3.5 fill-cyan-400 text-cyan-400" />
                                    Featured
                                </div>
                            )}

                            {/* Discount */}
                            {hasDiscount && (
                                <div className="absolute right-4 top-4 rounded-full border border-cyan-400/20 bg-slate-950/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-300 backdrop-blur-md">
                                    Special Price
                                </div>
                            )}
                        </div>

                        {/* Thumbnail gallery */}
                        {allImages.length > 1 && (
                            <div className="mt-4 grid grid-cols-5 gap-3">
                                {allImages.slice(0, 5).map((image, index) => (
                                    <div
                                        key={`${image.url}-${index}`}
                                        className="relative aspect-square overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-cyan-400/50"
                                    >
                                        <Image
                                            src={image.url}
                                            alt={image.alt || `${product.name} image ${index + 1}`}
                                            fill
                                            sizes="120px"
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product information */}
                    <div className="flex flex-col justify-center">
                        {/* Category */}
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                                {product.category}
                            </span>

                            {!unavailable && (
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/10 bg-emerald-400/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                                    <ShieldCheck className="h-3 w-3" />
                                    Available
                                </span>
                            )}
                        </div>

                        {/* Name */}
                        <h1 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                            {product.name}
                        </h1>

                        {/* Description */}
                        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
                            {product.shortDescription || product.description}
                        </p>

                        {/* Price */}
                        <div className="mt-8 flex flex-wrap items-baseline gap-3">
                            <span className="text-2xl font-bold text-white md:text-3xl">
                                {formatZar(product.priceMinor)}
                            </span>

                            {hasDiscount && (
                                <span className="text-base text-slate-600 line-through">
                                    {formatZar(product.compareAtPriceMinor!)}
                                </span>
                            )}
                        </div>

                        {/* Stock */}
                        <div
                            className={`mt-5 text-sm ${unavailable
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
                        </div>

                        {/* Actions */}
                        <div className="mt-8">
                            <ProductActions
                                product={product}
                                disabled={unavailable}
                            />
                        </div>

                        {/* Share + SKU */}
                        <div className="mt-6 flex flex-col gap-3 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
                            <ProductShareButton
                                productName={product.name}
                                productDescription={
                                    product.shortDescription || product.description
                                }
                                productUrl={productUrl}
                            />

                            <span className="text-xs font-medium uppercase tracking-wider text-slate-600">
                                SKU {product.sku}
                            </span>
                        </div>

                        {/* Product details */}
                        <div className="mt-8 border-t border-slate-800 pt-8">
                            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                                Product details
                            </h2>

                            <div className="mt-5 space-y-5">
                                <div>
                                    <h3 className="text-sm font-semibold text-white">
                                        Description
                                    </h3>

                                    <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-400">
                                        {product.description || product.shortDescription}
                                    </p>
                                </div>

                                {product.tags?.length > 0 && (
                                    <div>
                                        <h3 className="text-sm font-semibold text-white">
                                            Tags
                                        </h3>

                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {product.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Confidence panel */}
                        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
                            <div className="flex gap-3">
                                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />

                                <div>
                                    <h3 className="text-sm font-semibold text-white">
                                        Built by CHEFU Technologies
                                    </h3>

                                    <p className="mt-1.5 text-xs leading-6 text-slate-500">
                                        Thoughtfully selected and designed for modern creators,
                                        developers, and professionals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEO-friendly full description */}
                <section className="mt-20 max-w-4xl border-t border-slate-900 pt-12">
                    <h2 className="text-2xl font-bold text-white">
                        About {product.name}
                    </h2>

                    <p className="mt-5 whitespace-pre-line text-base leading-8 text-slate-400">
                        {product.description || product.shortDescription}
                    </p>
                </section>
            </div>
        </main>
    );
}