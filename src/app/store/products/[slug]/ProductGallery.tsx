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
        <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            {/* Main media */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 sm:rounded-3xl">
                {activeImage ? (
                    <Image
                        key={activeImage.url}
                        src={activeImage.url}
                        alt={activeImage.alt || productName}
                        fill
                        priority={activeIndex === 0}
                        sizes="(max-width: 1023px) 100vw, 55vw"
                        className="object-contain p-5 sm:p-8 md:p-12"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <Package
                            className="h-20 w-20 text-cyan-400/20 sm:h-28 sm:w-28"
                            strokeWidth={1}
                        />
                    </div>
                )}

                {/* Bottom fade */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/40 to-transparent" />

                {/* Featured */}
                {featured && (
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/75 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-md sm:left-4 sm:top-4 sm:text-[10px]">
                        <Star className="h-3 w-3 fill-cyan-400 text-cyan-400" />
                        Featured
                    </div>
                )}

                {/* Discount */}
                {hasDiscount && (
                    <div className="absolute right-3 top-3 rounded-full border border-cyan-400/20 bg-slate-950/75 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-md sm:right-4 sm:top-4 sm:text-[10px]">
                        Save {discountPercentage}%
                    </div>
                )}

                {/* Image counter */}
                {images.length > 1 && (
                    <div className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-slate-950/70 px-2.5 py-1.5 text-[9px] font-medium text-slate-300 backdrop-blur-md sm:bottom-4 sm:right-4">
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
                                    className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border bg-slate-900 transition-all duration-300 sm:h-20 sm:w-20 ${active
                                            ? "border-cyan-400 ring-1 ring-cyan-400/30"
                                            : "border-slate-800 opacity-60 hover:border-slate-700 hover:opacity-100"
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