"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";

type ProductShareButtonProps = {
    productName: string;
    productDescription: string;
    productUrl: string;
};

export function ProductShareButton({
    productName,
    productDescription,
    productUrl,
}: ProductShareButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        try {
            if (
                typeof navigator !== "undefined" &&
                typeof navigator.share === "function"
            ) {
                await navigator.share({
                    title: `${productName} | CHEFU Technologies`,
                    text: productDescription,
                    url: productUrl,
                });

                return;
            }

            await navigator.clipboard.writeText(productUrl);

            setCopied(true);

            window.setTimeout(() => {
                setCopied(false);
            }, 2200);
        } catch (error) {
            if (
                error instanceof DOMException &&
                error.name === "AbortError"
            ) {
                return;
            }

            console.error("Product sharing failed:", error);
        }
    };

    return (
        <button
            type="button"
            onClick={handleShare}
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-slate-800 bg-slate-950/50 px-4 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-slate-900 hover:text-cyan-300 active:translate-y-0"
            aria-label={`Share ${productName}`}
        >
            {copied ? (
                <>
                    <Check className="h-4 w-4 text-cyan-400" />
                    Link copied
                </>
            ) : (
                <>
                    <Share2 className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    Share product
                </>
            )}
        </button>
    );
}