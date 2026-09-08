"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Plus } from "lucide-react";
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
        product.status === "OUT_OF_STOCK" || product.inventoryQuantity === 0;

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
        <article className="group relative flex min-w-0 h-full flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-950/60 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-950 sm:rounded-2xl">
            <Link
                href={`/store/products/${product.slug}`}
                className="flex min-w-0 flex-1 flex-col"
            >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900 sm:aspect-[4/3]">
                    {image ? (
                        <Image
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                            src={image}
                            alt={product.images[0]?.alt || product.name}
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                    ) : (
                        <span className="flex h-full items-center justify-center text-4xl font-bold text-slate-700 sm:text-6xl">
                            C
                        </span>
                    )}
                </div>

                <div className="flex flex-1 flex-col p-3 sm:p-4">
                    <p className="truncate text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-[10px]">
                        {product.category}
                    </p>
                    <h2 className="mt-1.5 line-clamp-2 text-sm font-semibold leading-5 tracking-tight text-white sm:mt-2 sm:text-lg sm:leading-6">
                        {product.name}
                    </h2>
                    <p className="mt-1 line-clamp-2 min-h-[2.25rem] text-[11px] leading-4 text-slate-500 sm:mt-1.5 sm:min-h-[2.75rem] sm:text-sm sm:leading-relaxed sm:text-slate-400">
                        {product.shortDescription}
                    </p>
                    <div className="mt-auto flex flex-wrap items-baseline justify-between gap-1.5 pt-3 sm:pt-4">
                        <span className="text-sm font-semibold text-white sm:text-base">
                            {formatZar(product.priceMinor)}
                        </span>
                        <span
                            className={
                                unavailable
                                    ? "text-[10px] text-rose-300 sm:text-xs"
                                    : "text-[10px] text-emerald-300 sm:text-xs"
                            }
                        >
                            {unavailable ? "Out of stock" : "Available"}
                        </span>
                    </div>
                </div>
            </Link>

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
                className={`absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-200 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:right-3 sm:top-3 sm:h-10 sm:w-10 sm:opacity-0 sm:group-hover:opacity-100 ${unavailable ? "cursor-not-allowed border-slate-700 bg-slate-700 text-slate-400 shadow-none" : "hover:scale-105 hover:bg-cyan-300"}`}
            >
                {added ? (
                    <Check className="h-4 w-4" />
                ) : (
                    <Plus className="h-5 w-5" />
                )}
            </button>

        </article>
    );
}
