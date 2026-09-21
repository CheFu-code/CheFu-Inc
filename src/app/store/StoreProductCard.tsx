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
        <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-[#e5e1dc] bg-white text-slate-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <Link
                href={`/store/products/${product.slug}?utm_source=store_catalog&utm_medium=card&utm_campaign=${product.slug}`}
                className="flex min-w-0 flex-1 flex-col"
            >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    {image ? (
                        <Image
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                            src={image}
                            alt={product.images[0]?.alt || product.name}
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                    ) : (
                        <span className="flex h-full items-center justify-center text-3xl font-bold text-slate-400 sm:text-5xl">
                            C
                        </span>
                    )}
                </div>

                <div className="flex flex-1 flex-col p-3">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        {product.category}
                    </p>
                    <h2 className="mt-2 line-clamp-2 text-sm font-semibold leading-5 tracking-tight text-slate-900 sm:text-[15px] sm:leading-5">
                        {product.name}
                    </h2>
                    <p className="mt-2 line-clamp-2 min-h-[2.5rem] text-[11px] leading-4 text-slate-600 sm:text-xs sm:leading-5">
                        {product.shortDescription}
                    </p>

                    <div className="mt-4 flex items-center justify-between gap-3">
                        <span className="text-base font-semibold text-slate-900 sm:text-lg">
                            {formatZar(product.priceMinor)}
                        </span>
                        <span
                            className={
                                unavailable
                                    ? "text-[10px] font-medium text-rose-600"
                                    : "text-[10px] font-medium text-emerald-700"
                            }
                        >
                            {unavailable ? "Out of stock" : "In stock"}
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
                    className={`flex w-full items-center justify-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-colors sm:text-sm ${unavailable ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400" : "border-[#1f3c5b] bg-[#1f3c5b] text-white hover:bg-[#17314d]"}`}
                >
                    {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    {unavailable ? "Unavailable" : added ? "Added" : "Add to cart"}
                </button>
            </div>
        </article>
    );
}
