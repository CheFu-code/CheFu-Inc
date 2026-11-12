"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../../lib/cart";
import { formatZar, type Product } from "../../lib/products";

type StoreProductCardProps = {
    product: Product;
};

export function StoreProductCard({ product }: StoreProductCardProps) {
    const { add } = useCart();
    const [added, setAdded] = useState(false);
    const image = product.thumbnail || product.images[0]?.url;
    const unavailable =
        product.status !== "ACTIVE" || product.inventoryQuantity <= 0;
    const lowStock =
        !unavailable &&
        product.inventoryQuantity > 0 &&
        product.inventoryQuantity <= (product.lowStockThreshold ?? 5);

    const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();

        if (unavailable) {
            return;
        }

        add(product);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1800);
    };

    return (
        <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-[#e5e1dc] bg-white text-slate-900 transition-colors duration-200 hover:border-[#c9c3bd]">
            <Link
                href={`/store/products/${product.slug}?utm_source=store_catalog&utm_medium=card&utm_campaign=${product.slug}`}
                className="flex min-w-0 flex-1 flex-col focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#1f3c5b]"
            >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-[#f0ece8] bg-white">
                    {image ? (
                        <Image
                            fill
                            sizes="(min-width: 1200px) 276px, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                            src={image}
                            alt={product.images[0]?.alt || product.name}
                            className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03] sm:p-4"
                        />
                    ) : (
                        <span className="flex h-full items-center justify-center text-xs text-slate-500">
                            No image available
                        </span>
                    )}
                </div>

                <div className="flex flex-1 flex-col p-3">
                    <p className="truncate text-[10px] font-medium leading-4 text-slate-500">
                        {product.category}
                    </p>

                    <h2 className="mt-1 min-h-10 line-clamp-2 text-sm font-medium leading-5 tracking-[-0.02em] text-slate-900">
                        {product.name}
                    </h2>
                    <div className="mt-auto pt-2 lg:flex lg:items-baseline lg:justify-between lg:gap-2">
                        <div className="flex min-h-6 min-w-0 flex-wrap items-baseline gap-x-2 gap-y-0.5">
                            <span className="text-sm font-semibold tabular-nums text-slate-900 sm:text-base">
                                {formatZar(product.priceMinor)}
                            </span>
                            {product.compareAtPriceMinor && product.compareAtPriceMinor > product.priceMinor ? (
                                <span className="text-[11px] tabular-nums text-slate-500 line-through">
                                    <span className="sr-only">Previously </span>
                                    {formatZar(product.compareAtPriceMinor)}
                                </span>
                            ) : null}
                        </div>
                        <span
                            className={`mt-1 block shrink-0 whitespace-nowrap text-[11px] leading-4 lg:mt-0 ${
                                unavailable
                                    ? "text-rose-700"
                                    : lowStock
                                      ? "text-amber-700"
                                      : "text-emerald-700"
                            }`}
                        >
                            {unavailable ? "Out of stock" : lowStock ? "Low stock" : "In stock"}
                        </span>
                    </div>
                </div>
            </Link>

            <div className="px-3 pb-3">
                <button
                    type="button"
                    aria-label={
                        unavailable
                            ? `${product.name} is out of stock`
                            : added
                              ? `${product.name} added to cart`
                              : `Add ${product.name} to cart`
                    }
                    title={unavailable ? "Out of stock" : "Add to cart"}
                    disabled={unavailable}
                    onClick={handleAdd}
                    className={`flex min-h-11 w-full items-center justify-center rounded-lg border px-2 py-2 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3c5b] sm:text-sm ${unavailable ? "cursor-not-allowed border-[#e5e1dc] bg-[#f7f5f3] text-slate-500" : added ? "border-[#1f3c5b] bg-[#f3f5f7] text-[#1f3c5b]" : "border-[#d9d3cf] bg-white text-[#1f3c5b] hover:border-[#1f3c5b] hover:bg-[#f7f5f3]"}`}
                >
                    {unavailable ? "Unavailable" : added ? "Added" : "Add to cart"}
                </button>
                <span role="status" className="sr-only">{added ? `${product.name} added to cart` : ""}</span>
            </div>
        </article>
    );
}
