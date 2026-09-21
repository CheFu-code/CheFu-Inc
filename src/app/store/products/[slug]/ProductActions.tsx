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
                "overflow-hidden font-semibold",
                "transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f3c5b]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                "disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400",
                compact
                    ? "min-h-10 w-auto min-w-[108px] max-w-[46vw] shrink-0 rounded-lg px-3 py-2.5 text-[10.5px] sm:min-w-[120px] sm:px-3.5 sm:text-xs"
                    : "min-h-11 w-full rounded-lg px-5 py-3.5 text-sm",
                added
                    ? "bg-emerald-600 text-white"
                    : disabled
                      ? "bg-slate-200 text-slate-500"
                      : "bg-[#1f3c5b] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#17314d] hover:shadow-[0_8px_20px_rgba(31,60,91,0.12)] active:translate-y-0",
            ].join(" ")}
        >
            {!disabled && !added && (
                <span className="absolute inset-0 -translate-x-full bg-cyan-300 transition-transform duration-500 ease-out group-hover:translate-x-0" />
            )}

            <span className="relative z-10 inline-flex min-w-0 max-w-full items-center justify-center gap-1.5 whitespace-nowrap sm:gap-2">
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
