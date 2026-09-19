"use client";

import { useState, type MouseEvent } from "react";
import type { Product } from "../../lib/products";

export function useStorePreview(products: Product[]) {
    const [copiedProductId, setCopiedProductId] = useState<string | null>(null);
    const previewProducts = products.slice(0, 4);

    async function handleShare(
        event: MouseEvent<HTMLButtonElement>,
        product: Product,
    ) {
        event.preventDefault();
        event.stopPropagation();

        const url = new URL(`${window.location.origin}/store/products/${product.slug}`);
        url.searchParams.set("utm_source", "store_preview");
        url.searchParams.set("utm_medium", "share");
        url.searchParams.set("utm_campaign", product.slug);

        const shareUrl = url.toString();
        const shareData = {
            title: product.name,
            text: product.shortDescription,
            url: shareUrl,
        };

        try {
            if (typeof navigator !== "undefined" && navigator.share) {
                await navigator.share(shareData);
                return;
            }

            await navigator.clipboard.writeText(shareUrl);
            setCopiedProductId(product.id);

            window.setTimeout(() => {
                setCopiedProductId((current) =>
                    current === product.id ? null : current,
                );
            }, 2000);
        } catch (error) {
            // Ignore cancellation from the native share sheet.
            if (error instanceof DOMException && error.name === "AbortError") {
                return;
            }

            console.error("Failed to share product:", error);
        }
    }

    return { copiedProductId, handleShare, previewProducts };
}
