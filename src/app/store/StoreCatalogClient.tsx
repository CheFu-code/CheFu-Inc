"use client";

import { useMemo, useState } from "react";
import type { Product } from "../../lib/products";
import { StoreProductCard } from "./StoreProductCard";

type SortOption = "featured" | "price-low" | "price-high" | "name";

export function StoreCatalogClient({
    initialProducts,
}: {
    initialProducts: Product[];
}) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState<SortOption>("featured");

    const categories = useMemo(
        () =>
            Array.from(
                new Set(initialProducts.map((product) => product.category)),
            ).sort((a, b) => a.localeCompare(b)),
        [initialProducts],
    );

    const visibleProducts = useMemo(() => {
        const filtered =
            selectedCategory === "All"
                ? [...initialProducts]
                : initialProducts.filter(
                    (product) => product.category === selectedCategory,
                );

        const sorted = [...filtered];

        switch (sortBy) {
            case "price-low":
                sorted.sort((a, b) => a.priceMinor - b.priceMinor);
                break;
            case "price-high":
                sorted.sort((a, b) => b.priceMinor - a.priceMinor);
                break;
            case "name":
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "featured":
            default:
                sorted.sort(
                    (a, b) => Number(b.featured) - Number(a.featured),
                );
                break;
        }

        return sorted;
    }, [initialProducts, selectedCategory, sortBy]);

    return (
        <>
            <div className="mb-6 flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                    {[
                        "All",
                        ...categories,
                    ].map((category) => {
                        const isActive = selectedCategory === category;

                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setSelectedCategory(category)}
                                className={
                                    isActive
                                        ? "rounded-full bg-[#1f3c5b] px-3 py-1.5 text-xs font-medium text-white"
                                        : "rounded-full border border-[#e5e1dc] bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-[#d1d5db] hover:text-slate-900"
                                }
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-[#e5e1dc] pt-3">
                    <p className="text-sm text-slate-600">
                        Showing {visibleProducts.length} of {initialProducts.length} products
                    </p>

                    <label className="flex items-center gap-2 text-xs text-slate-600">
                        <span>Sort:</span>
                        <select
                            value={sortBy}
                            onChange={(event) =>
                                setSortBy(event.target.value as SortOption)
                            }
                            className="rounded-lg border border-[#e5e1dc] bg-white px-2.5 py-1.5 text-xs text-slate-700 outline-none focus:border-[#1f3c5b]"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: low to high</option>
                            <option value="price-high">Price: high to low</option>
                            <option value="name">Name</option>
                        </select>
                    </label>
                </div>
            </div>

            {visibleProducts.length === 0 ? (
                <p className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-600">
                    No products match this category right now.
                </p>
            ) : (
                <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
                    {visibleProducts.map((product) => (
                        <StoreProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </>
    );
}
