"use client";

import {
    ArrowUpRight,
    Check,
    Package,
    Share2,
    Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatZar, type Product } from "../../lib/products";
import { useStorePreview } from "./useStorePreview";

export function StorePreview({ products }: { products: Product[] }) {
    const { copiedProductId, handleShare, previewProducts } =
        useStorePreview(products);

    return (
        <section className="relative overflow-hidden bg-slate-900/90 py-20 md:py-24">
            {/* Ambient background */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

            <div className="container relative mx-auto px-6">
                {/* Header */}
                <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
                    <div className="max-w-2xl">

                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                            Tools for focused work.
                        </h2>

                        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
                            Desk and technology essentials designed by CHEFU
                            Technologies for modern creators, developers, and
                            professionals.
                        </p>
                    </div>

                    <Link
                        href="/store"
                        className="group inline-flex w-fit items-center gap-2 rounded-full border border-slate-700 bg-slate-950/30 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-300 md:px-5 md:py-3 md:text-sm"
                    >
                        Shop Now
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:h-4 md:w-4" />
                    </Link>
                </div>

                {/* Empty state */}
                {previewProducts.length === 0 ? (
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-8 text-center">
                        <Package className="mx-auto mb-4 h-10 w-10 text-slate-700" />

                        <h3 className="text-lg font-semibold text-white">
                            New products are arriving soon.
                        </h3>

                        <p className="mt-2 text-sm text-slate-500">
                            Check back soon for the latest CHEFU essentials.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
                        {previewProducts.map((product) => {
                            const image =
                                product.thumbnail ??
                                product.images?.[0]?.url ??
                                null;

                            const isOutOfStock =
                                product.status === "OUT_OF_STOCK" ||
                                product.inventoryQuantity <= 0;

                            const isLowStock =
                                !isOutOfStock &&
                                product.inventoryQuantity <=
                                product.lowStockThreshold;

                            const hasDiscount =
                                !!product.compareAtPriceMinor &&
                                product.compareAtPriceMinor >
                                product.priceMinor;

                            const copied = copiedProductId === product.id;

                            return (
                                <Link
                                    key={product.id}
                                    href={`/store/products/${product.slug}`}
                                    className="group relative flex min-w-0 h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 transition-all duration-400 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-950 sm:rounded-3xl"
                                >
                                    {/* Product image */}
                                    <div className="relative aspect-square overflow-hidden bg-slate-900 sm:aspect-[4/3]">
                                        {image ? (
                                            <Image
                                                src={image}
                                                alt={product.name}
                                                fill
                                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center">
                                                <Package
                                                    className="h-10 w-10 text-cyan-400/30 transition-transform duration-500 group-hover:scale-110 sm:h-16 sm:w-16"
                                                    strokeWidth={1.2}
                                                />
                                            </div>
                                        )}

                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

                                        {/* Featured */}
                                        {product.featured && (
                                            <div className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full border border-white/10 bg-slate-950/70 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-white backdrop-blur-md sm:left-4 sm:top-4 sm:px-2.5 sm:py-1.5 sm:text-[10px]">
                                                <Star className="h-2.5 w-2.5 fill-cyan-400 text-cyan-400 sm:h-3 sm:w-3" />
                                                <span className="hidden min-[400px]:inline">
                                                    Featured
                                                </span>
                                            </div>
                                        )}

                                        {/* Share */}
                                        <button
                                            type="button"
                                            aria-label={`Share ${product.name}`}
                                            onClick={(event) =>
                                                handleShare(event, product)
                                            }
                                            className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:bg-slate-900 hover:text-cyan-300 active:scale-95 sm:right-4 sm:top-4 sm:h-9 sm:w-9"
                                        >
                                            {copied ? (
                                                <Check className="h-3.5 w-3.5 text-cyan-400 sm:h-4 sm:w-4" />
                                            ) : (
                                                <Share2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                            )}
                                        </button>

                                        {/* Stock */}
                                        {(isOutOfStock || isLowStock) && (
                                            <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4">
                                                <span className="rounded-full border border-slate-700 bg-slate-950/80 px-2 py-1 text-[8px] font-semibold uppercase tracking-wider text-slate-400 backdrop-blur-md sm:px-2.5 sm:py-1.5 sm:text-[10px]">
                                                    {isOutOfStock
                                                        ? "Out of stock"
                                                        : "Low stock"}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-1 flex-col p-3.5 sm:p-5">
                                        <div className="mb-2 flex items-center justify-between gap-2">
                                            <span className="truncate text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-[10px]">
                                                {product.category}
                                            </span>

                                            {product.tags?.[0] && (
                                                <span className="hidden truncate text-[9px] font-medium uppercase tracking-wider text-slate-600 sm:block">
                                                    {product.tags[0]}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="line-clamp-2 text-sm font-semibold leading-5 tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-lg sm:leading-6">
                                            {product.name}
                                        </h3>

                                        <p className="mt-1.5 line-clamp-2 min-h-[2.25rem] text-[11px] leading-4 text-slate-500 sm:mt-2 sm:min-h-[2.75rem] sm:text-sm sm:leading-relaxed sm:text-slate-400">
                                            {product.shortDescription}
                                        </p>

                                        {/* Price + action */}
                                        <div className="mt-auto pt-4 sm:pt-5">
                                            <div className="flex flex-wrap items-baseline gap-1.5">
                                                <span className="text-sm font-semibold text-white sm:text-base">
                                                    {formatZar(
                                                        product.priceMinor,
                                                    )}
                                                </span>

                                                {hasDiscount && (
                                                    <span className="text-[9px] text-slate-600 line-through sm:text-xs">
                                                        {formatZar(
                                                            product.compareAtPriceMinor!,
                                                        )}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="mt-3 flex items-center justify-between border-t border-slate-800/80 pt-3 sm:mt-4 sm:pt-4">
                                                <span className="text-[9px] text-slate-600 sm:text-xs sm:text-slate-500">
                                                    {isOutOfStock
                                                        ? "Unavailable"
                                                        : "View product"}
                                                </span>

                                                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 text-slate-500 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 group-hover:text-cyan-300 sm:h-8 sm:w-8">
                                                    <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-3.5 sm:w-3.5" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}