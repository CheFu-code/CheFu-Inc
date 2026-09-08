"use client";

import { useState } from "react";
import { Package, Star } from "lucide-react";
import Image from "next/image";

type GalleryImage = {
    url: string;
    alt?: string;
};

type ProductGalleryProps = {
    productName: string;
    images: GalleryImage[];
    featured?: boolean;
    hasDiscount?: boolean;
    discountPercentage?: number;
};

export function ProductGallery({
    productName,
    images,
    featured = false,
    hasDiscount = false,
    discountPercentage = 0,
}: ProductGalleryProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeImage = images[activeIndex];

    return (
        <div className="min-w-0 lg:sticky lg:top-28 lg:w-full lg:max-w-[440px] lg:self-start">
            {/* Main media */}
            <div className="relative mx-auto aspect-square max-h-[min(36vw,360px)] overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70 shadow-sm">
                {activeImage ? (
                    <Image
                        key={activeImage.url}
                        src={activeImage.url}
                        alt={activeImage.alt || productName}
                        fill
                        priority={activeIndex === 0}
                        sizes="(max-width: 1023px) 100vw, 440px"
                        className="object-contain p-10 sm:p-14"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <Package
                            className="h-20 w-20 text-slate-600 sm:h-24 sm:w-24"
                            strokeWidth={1}
                        />
                    </div>
                )}

                {/* Bottom fade */}
                {/* Featured */}
                {featured && (
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-950/90 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-200 shadow-sm sm:left-4 sm:top-4 sm:text-[10px]">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        Featured
                    </div>
                )}

                {/* Discount */}
                {hasDiscount && (
                    <div className="absolute right-3 top-3 rounded-md border border-rose-400/20 bg-slate-950/90 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-rose-300 shadow-sm sm:right-4 sm:top-4 sm:text-[10px]">
                        Save {discountPercentage}%
                    </div>
                )}

                {/* Image counter */}
                {images.length > 1 && (
                    <div className="absolute bottom-3 right-3 rounded-md border border-slate-700 bg-slate-950/90 px-2.5 py-1.5 text-[9px] font-medium text-slate-300 shadow-sm sm:bottom-4 sm:right-4">
                        {activeIndex + 1} / {images.length}
                    </div>
                )}
            </div>

            {/* Thumbnail rail */}
            {images.length > 1 && (
                <div className="mt-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-4">
                    <div className="flex w-max gap-2.5 sm:gap-3">
                        {images.map((image, index) => {
                            const active = index === activeIndex;

                            return (
                                <button
                                    key={`${image.url}-${index}`}
                                    type="button"
                                    aria-label={`View ${productName} image ${index + 1
                                        }`}
                                    aria-pressed={active}
                                    onClick={() =>
                                        setActiveIndex(index)
                                    }
                                        className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border bg-slate-900 transition-all duration-300 sm:h-16 sm:w-16 ${active
                                            ? "border-cyan-400 ring-1 ring-cyan-400/30"
                                            : "border-slate-800 opacity-60 hover:border-slate-600 hover:opacity-100"
                                        }`}
                                >
                                    <Image
                                        src={image.url}
                                        alt={
                                            image.alt ||
                                            `${productName} image ${index + 1
                                            }`
                                        }
                                        fill
                                        sizes="80px"
                                        className="object-cover"
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}