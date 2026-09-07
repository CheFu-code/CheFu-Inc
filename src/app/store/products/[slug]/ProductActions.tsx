"use client";

import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";
import { useCart } from "../../../../lib/cart";
import type { Product } from "../../../../lib/products";

type ProductActionsProps = {
    product: Product;
    disabled?: boolean;
    compact?: boolean;
};

export function ProductActions({
    product,
    disabled = false,
    compact = false,
}: ProductActionsProps) {
    const { add } = useCart();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        if (disabled) {
            return;
        }

        add(product);
        setAdded(true);

        window.setTimeout(() => {
            setAdded(false);
        }, 2200);
    };

    return (
        <button
            type="button"
            disabled={disabled}
            onClick={handleAddToCart}
            aria-label={
                disabled
                    ? `${product.name} is unavailable`
                    : added
                      ? `${product.name} added to cart`
                      : `Add ${product.name} to cart`
            }
            className={[
                "group relative inline-flex items-center justify-center",
                "overflow-hidden font-bold",
                "transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                "disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400",
                compact
                    ? "min-h-10 w-auto min-w-[124px] rounded-full px-4 py-2.5 text-xs"
                    : "min-h-12 w-full rounded-full px-6 py-4 text-sm",
                added
                    ? "bg-emerald-400 text-slate-950"
                    : disabled
                      ? "bg-slate-700 text-slate-400"
                      : "bg-cyan-400 text-slate-950 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_12px_30px_rgba(34,211,238,0.14)] active:translate-y-0",
            ].join(" ")}
        >
            {!disabled && !added && (
                <span className="absolute inset-0 -translate-x-full bg-cyan-300 transition-transform duration-500 ease-out group-hover:translate-x-0" />
            )}

            <span className="relative z-10 inline-flex items-center justify-center gap-2">
                {disabled ? (
                    "Unavailable"
                ) : added ? (
                    <>
                        <Check
                            className={
                                compact
                                    ? "h-3.5 w-3.5"
                                    : "h-4 w-4"
                            }
                        />
                        Added to cart
                    </>
                ) : (
                    <>
                        <ShoppingBag
                            className={
                                compact
                                    ? "h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110"
                                    : "h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                            }
                        />
                        Add to cart
                    </>
                )}
            </span>
        </button>
    );
}
