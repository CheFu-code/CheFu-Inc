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
            <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#e5e1dc] bg-white shadow-sm sm:aspect-square sm:max-h-[min(34vw,330px)] sm:rounded-xl">
                {activeImage ? (
                    <Image
                        key={activeImage.url}
                        src={activeImage.url}
                        alt={activeImage.alt || productName}
                        fill
                        priority={activeIndex === 0}
                        sizes="(max-width: 1023px) 100vw, 440px"
                        className="object-contain p-0 sm:p-8"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <Package
                            className="h-20 w-20 text-slate-600 sm:h-24 sm:w-24"
                            strokeWidth={1}
                        />
                    </div>
                )}

                {featured && (
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-[#e5e1dc] bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-slate-700 shadow-sm sm:left-4 sm:top-4 sm:text-[10px]">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        Featured
                    </div>
                )}

                {hasDiscount && (
                    <div className="absolute right-3 top-3 rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-rose-600 shadow-sm sm:right-4 sm:top-4 sm:text-[10px]">
                        Save {discountPercentage}%
                    </div>
                )}

                {images.length > 1 && (
                    <div className="absolute bottom-3 right-3 rounded-full border border-[#e5e1dc] bg-white/90 px-2.5 py-1 text-[9px] font-medium text-slate-600 shadow-sm sm:bottom-4 sm:right-4">
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
                                        className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border bg-slate-100 transition-all duration-200 sm:h-16 sm:w-16 ${active
                                            ? "border-[#1f3c5b] ring-1 ring-[#1f3c5b]/15"
                                            : "border-[#e5e1dc] opacity-80 hover:border-slate-400 hover:opacity-100"
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