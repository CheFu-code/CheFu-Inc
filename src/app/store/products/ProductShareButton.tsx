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
            /*
             * Mobile browsers and supported desktop browsers
             * will use the native share sheet.
             */
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

            /*
             * Desktop fallback.
             */
            if (
                typeof navigator !== "undefined" &&
                navigator.clipboard
            ) {
                await navigator.clipboard.writeText(productUrl);

                setCopied(true);

                window.setTimeout(() => {
                    setCopied(false);
                }, 2200);
            }
        } catch (error) {
            /*
             * User cancelling the native share sheet
             * is not an actual error.
             */
            if (
                error instanceof DOMException &&
                error.name === "AbortError"
            ) {
                return;
            }

            console.error(
                "Failed to share product:",
                error,
            );
        }
    };

    return (
        <button
            type="button"
            onClick={handleShare}
            className="group inline-flex min-h-10 w-fit items-center gap-2 rounded-full border border-slate-800 bg-slate-950/60 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-slate-900 hover:text-cyan-300 active:translate-y-0 sm:text-sm"
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