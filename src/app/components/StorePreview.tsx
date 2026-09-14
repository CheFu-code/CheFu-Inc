"use client";

import {
    ArrowUpRight,
    Check,
    Package,
    Share2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatZar, type Product } from "../../lib/products";
import { useStorePreview } from "./useStorePreview";

export function StorePreview({ products }: { products: Product[] }) {
    const { copiedProductId, handleShare, previewProducts } =
        useStorePreview(products);

    return (
        <section className="relative overflow-hidden bg-[#f3f2f0] py-20 md:py-24">
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#dbeafe] blur-[120px]" />

            <div className="container relative mx-auto px-6">
                {/* Header */}
                <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
                    <div className="max-w-2xl">

                        <h2 className="text-3xl font-bold tracking-tight text-[#111827] md:text-5xl">
                            Tools for focused work.
                        </h2>

                        <p className="mt-4 max-w-xl text-base leading-relaxed text-[#57534e] md:text-lg">
                            Desk and technology essentials designed by CHEFU
                            Technologies for modern creators, developers, and
                            professionals.
                        </p>
                    </div>

                    <Link
                        href="/store"
                        className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#d6d3d1] bg-white px-4 py-2.5 text-xs font-semibold text-[#111827] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2563eb]/40 hover:text-[#2563eb] md:px-5 md:py-3 md:text-sm"
                    >
                        Shop Now
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:h-4 md:w-4" />
                    </Link>
                </div>

                {/* Empty state */}
                {previewProducts.length === 0 ? (
                    <div className="rounded-2xl border border-[#d6d3d1] bg-white p-8 text-center shadow-sm">
                        <Package className="mx-auto mb-4 h-10 w-10 text-[#57534e]" />

                        <h3 className="text-lg font-semibold text-[#111827]">
                            New products are arriving soon.
                        </h3>

                        <p className="mt-2 text-sm text-[#57534e]">
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
                                    className="group relative flex min-w-0 h-full flex-col overflow-hidden rounded-2xl border border-[#e7e5e4] bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2563eb]/40 hover:shadow-md sm:rounded-3xl"
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
                                            <div className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full border border-[#d6d3d1] bg-white/90 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-[#111827] shadow-sm sm:left-4 sm:top-4 sm:px-2.5 sm:py-1.5 sm:text-[10px]">
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
                                            className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full border border-[#d6d3d1] bg-white/90 text-[#111827] shadow-sm transition-all duration-200 hover:scale-105 hover:border-[#2563eb]/40 hover:text-[#2563eb] active:scale-95 sm:right-4 sm:top-4 sm:h-9 sm:w-9"
                                        >
                                            {copied ? (
                                                <Check className="h-3.5 w-3.5 text-[#2563eb] sm:h-4 sm:w-4" />
                                            ) : (
                                                <Share2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                            )}
                                        </button>

                                        {/* Stock */}
                                        {(isOutOfStock || isLowStock) && (
                                            <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4">
                                                <span className="rounded-full border border-[#d6d3d1] bg-[#f5f5f4] px-2 py-1 text-[8px] font-semibold uppercase tracking-wider text-[#57534e] sm:px-2.5 sm:py-1.5 sm:text-[10px]">
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
                                                <span className="hidden truncate text-[9px] font-medium uppercase tracking-wider text-[#78716c] sm:block">
                                                    {product.tags[0]}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="line-clamp-2 text-sm font-semibold leading-5 tracking-tight text-[#111827] transition-colors duration-200 group-hover:text-[#2563eb] sm:text-lg sm:leading-6">
                                            {product.name}
                                        </h3>

                                        <p className="mt-1.5 line-clamp-2 min-h-[2.25rem] text-[11px] leading-4 text-[#57534e] sm:mt-2 sm:min-h-[2.75rem] sm:text-sm sm:leading-relaxed">
                                            {product.shortDescription}
                                        </p>

                                        {/* Price + action */}
                                        <div className="mt-auto pt-4 sm:pt-5">
                                            <div className="flex flex-wrap items-baseline gap-1.5">
                                                <span className="text-sm font-semibold text-[#111827] sm:text-base">
                                                    {formatZar(
                                                        product.priceMinor,
                                                    )}
                                                </span>

                                                {hasDiscount && (
                                                    <span className="text-[9px] text-[#78716c] line-through sm:text-xs">
                                                        {formatZar(
                                                            product.compareAtPriceMinor!,
                                                        )}
                                                    </span>
                                                )}
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