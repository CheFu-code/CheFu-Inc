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
        <section className="bg-[#f5f1ed] py-20 md:py-24">
            <div className="container mx-auto px-6">
                <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                        
                        <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[#111827] md:text-5xl">
                            Tools for focused work.
                        </h2>
                    </div>

                    <Link
                        href="/store?utm_source=store_preview&utm_medium=header&utm_campaign=shop_now"
                        className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[#111827] transition-colors hover:text-[#1f3c5b]"
                    >
                        Shop now
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>

                {previewProducts.length === 0 ? (
                    <div className="rounded-[1.25rem] border border-[#e5e1dc] bg-white p-8 text-center">
                        <Package className="mx-auto mb-4 h-10 w-10 text-[#5f5b56]" />
                        <h3 className="text-lg font-semibold text-[#111827]">
                            New products are arriving soon.
                        </h3>
                        <p className="mt-2 text-sm text-[#5f5b56]">
                            Check back soon for the latest CHEFU essentials.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                        {previewProducts.map((product) => {
                            const image = product.thumbnail ?? product.images?.[0]?.url ?? null;
                            const isOutOfStock = product.status === "OUT_OF_STOCK" || product.inventoryQuantity <= 0;
                            const isLowStock = !isOutOfStock && product.inventoryQuantity <= product.lowStockThreshold;
                            const hasDiscount = !!product.compareAtPriceMinor && product.compareAtPriceMinor > product.priceMinor;
                            const copied = copiedProductId === product.id;

                            return (
                                <Link
                                    key={product.id}
                                    href={`/store/products/${product.slug}?utm_source=store_preview&utm_medium=card&utm_campaign=${product.slug}`}
                                    className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.25rem] border border-[#e5e1dc] bg-white"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-[#f3f2ef]">
                                        {image ? (
                                            <Image
                                                src={image}
                                                alt={product.name}
                                                fill
                                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                                                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center">
                                                <Package className="h-10 w-10 text-[#a9a29d]" strokeWidth={1.2} />
                                            </div>
                                        )}

                                        {product.featured && (
                                            <span className="absolute left-3 top-3 rounded-full border border-[#e5e1dc] bg-white px-2 py-1 text-[8px] font-medium uppercase tracking-[0.15em] text-[#374151]">
                                                Featured
                                            </span>
                                        )}

                                        <button
                                            type="button"
                                            aria-label={`Share ${product.name}`}
                                            onClick={(event) => handleShare(event, product)}
                                            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#e5e1dc] bg-white text-[#374151] transition-colors hover:text-[#111827]"
                                        >
                                            {copied ? <Check className="h-3.5 w-3.5" /> : <Share2 className="h-3.5 w-3.5" />}
                                        </button>

                                        {(isOutOfStock || isLowStock) && (
                                            <span className="absolute bottom-3 left-3 rounded-full border border-[#e5e1dc] bg-white px-2 py-1 text-[8px] font-medium uppercase tracking-[0.14em] text-[#5f5b56]">
                                                {isOutOfStock ? "Out of stock" : "Low stock"}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex flex-1 flex-col p-4">
                                        <div className="mb-2 flex items-center justify-between gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#6b7280]">
                                            <span>{product.category}</span>
                                            {product.tags?.[0] && <span>{product.tags[0]}</span>}
                                        </div>

                                        <h3 className="line-clamp-2 text-base font-semibold tracking-[-0.03em] text-[#111827]">
                                            {product.name}
                                        </h3>

                                        <p className="mt-2 line-clamp-2 min-h-[3rem] text-sm leading-6 text-[#5f5b56]">
                                            {product.shortDescription}
                                        </p>

                                        <div className="mt-auto flex items-baseline gap-2 pt-5">
                                            <span className="text-base font-semibold text-[#111827]">
                                                {formatZar(product.priceMinor)}
                                            </span>
                                            {hasDiscount && (
                                                <span className="text-xs text-[#78716c] line-through">
                                                    {formatZar(product.compareAtPriceMinor!)}
                                                </span>
                                            )}
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