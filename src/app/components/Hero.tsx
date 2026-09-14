"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen bg-[#f7f5f3] pt-24">
            <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center px-6">
                <div className="w-full">
                    

                    <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-[#111827] sm:text-6xl md:text-7xl lg:text-[6rem]">
                        Engineering sound.
                        <span className="mt-2 block text-[#1f3c5b]">Building intelligence.</span>
                    </h1>

                    <p className="mt-7 max-w-2xl text-base leading-8 text-[#5f5b56] sm:text-lg md:text-xl">
                        Chefu Technologies builds software platforms, practical AI systems, and digital products for ambitious teams. We also design audio experiences where sound is part of the product.
                    </p>

                    <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-6 py-3.5 text-sm font-medium text-[#f7f5f3] transition-colors duration-200 hover:bg-[#1f2937]"
                        >
                            Work with Chefu
                            <ArrowRight className="h-4 w-4" />
                        </Link>

                        <Link
                            href="/products"
                            className="inline-flex items-center rounded-full border border-[#e5e1dc] bg-white px-6 py-3.5 text-sm font-medium text-[#111827] transition-colors duration-200 hover:border-[#d1d5db] hover:bg-[#f3f2ef]"
                        >
                            Explore our products
                        </Link>
                    </div>

                    <div className="mt-16 flex items-center gap-4 text-[11px] uppercase tracking-[0.22em] text-[#7a746d]">
                        <span className="h-px w-10 bg-[#d9d3cf]" />
                        Technology • Audio • Intelligence
                        <span className="h-px w-10 bg-[#d9d3cf]" />
                    </div>
                </div>
            </div>
        </section>
    );
}