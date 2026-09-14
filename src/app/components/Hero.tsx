"use client";

import {
    motion,
    useScroll,
    useTransform,
} from "motion/react";

import {
    ArrowRight,
} from "lucide-react";

import Link from "next/link";
import { useRef } from "react";

const ease = [
    0.22,
    1,
    0.36,
    1,
] as const;

export function Hero() {
    const heroRef =
        useRef<HTMLElement>(null);

    const {
        scrollYProgress,
    } = useScroll({
        target: heroRef,
        offset: [
            "start start",
            "end start",
        ],
    });

    /*
     * Motion transforms for the HTML layer.
     */

    const contentY = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -140]
    );

    const contentScale = useTransform(
        scrollYProgress,
        [0, 1],
        [1, 0.88]
    );

    const contentOpacity =
        useTransform(
            scrollYProgress,
            [0, 0.65, 1],
            [1, 1, 0]
        );

    const backgroundOpacity =
        useTransform(
            scrollYProgress,
            [0, 0.65, 1],
            [0.7, 0.45, 0]
        );

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen overflow-hidden bg-[#f5f5f4] pt-20"
        >
            {/* =====================================================
                ATMOSPHERE
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 z-[1]">
                <motion.div
                    style={{
                        opacity:
                            backgroundOpacity,
                    }}
                    className="absolute inset-0 bg-[#f5f5f4]"
                />

                <motion.div
                    animate={{
                        x: [
                            "-10%",
                            "10%",
                            "-10%",
                        ],
                        y: [
                            "-5%",
                            "5%",
                            "-5%",
                        ],
                        scale: [
                            1,
                            1.08,
                            1,
                        ],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dbeafe] blur-[125px]"
                />

                <motion.div
                    animate={{
                        x: [
                            "10%",
                            "-8%",
                            "10%",
                        ],
                        y: [
                            "5%",
                            "-5%",
                            "5%",
                        ],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-[-10%] top-[20%] h-[360px] w-[360px] rounded-full bg-[#e2e8f0] blur-[120px]"
                />
            </div>

            {/* =====================================================
                CONTENT
            ====================================================== */}

            <motion.div
                style={{
                    y: contentY,
                    scale: contentScale,
                    opacity: contentOpacity,
                }}
                className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center justify-center px-6"
            >
                <div className="w-full text-center">

                    {/* Eyebrow */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 18,
                            scale: 0.96,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.1,
                            ease,
                        }}
                        className="mb-7 hidden items-center gap-2 rounded-full border border-[#d6d3d1] bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm md:inline-flex"
                    >
                        <motion.span
                            animate={{
                                scale: [
                                    1,
                                    1.35,
                                    1,
                                ],
                                opacity: [
                                    1,
                                    0.7,
                                    1,
                                ],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="h-2 w-2 rounded-full bg-[#2563eb]"
                        />

                        <span className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
                            Innovation, Networks & Creativity
                        </span>
                    </motion.div>

                    {/* Heading */}

                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 45,
                            rotateX: 58,
                            rotateY: -8,
                            z: -120,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            rotateY: 0,
                            z: 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease,
                        }}
                        style={{
                            perspective: 1200,
                            transformStyle: "preserve-3d",
                        }}
                        className="mx-auto max-w-6xl text-5xl font-bold leading-[0.95] tracking-[-0.045em] text-[#111827] sm:text-6xl md:text-7xl lg:text-8xl"
                    >
                        Engineering Sound.
                        <br />

                        <motion.span
                            initial={{
                                opacity: 0,
                                filter:
                                    "blur(12px)",
                                rotateX: -42,
                                rotateY: 7,
                                z: -80,
                            }}
                            animate={{
                                opacity: 1,
                                filter:
                                    "blur(0px)",
                                rotateX: 0,
                                rotateY: 0,
                                z: 0,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.45,
                                ease,
                            }}
                            className="mt-2 inline-block text-[#2563eb]"
                        >
                            Building Intelligence.
                        </motion.span>
                    </motion.h1>

                    {/* Description */}

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 25,
                            rotateX: 28,
                            z: -55,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            z: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.65,
                            ease,
                        }}
                        style={{
                            perspective: 900,
                            transformStyle: "preserve-3d",
                        }}
                        className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#57534e] sm:text-lg md:text-xl"
                    >
                        CHEFU TECHNOLOGIES is a product and engineering company building software platforms, practical AI systems, and digital products. We also create audio technology and production experiences where sound is part of the product.
                    </motion.p>

                    {/* CTAs */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.85,
                            ease,
                        }}
                        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <Link
                            href="/contact"
                            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#111827] px-7 py-4 font-bold text-[#f5f5f4] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1f2937]"
                        >
                            <span className="relative z-10">
                                Work with CHEFU
                            </span>

                            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/products"
                            className="group flex items-center gap-2 rounded-full border border-[#d6d3d1] bg-white/70 px-7 py-4 font-medium text-[#111827] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#a8a29e] hover:bg-white"
                        >
                            <span>
                                Explore our products
                            </span>
                        </Link>
                    </motion.div>

                    {/* Bottom detail */}

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1,
                            delay: 1.15,
                        }}
                        className="mx-auto mt-16 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#78716c]"
                    >
                        <span className="h-px w-8 bg-[#d6d3d1]" />

                        <span>
                            Technology • Audio • Intelligence
                        </span>

                        <span className="h-px w-8 bg-[#d6d3d1]" />
                    </motion.div>
                </div>
            </motion.div>

            {/* =====================================================
                BOTTOM GLOW
            ====================================================== */}

            <motion.div
                style={{
                    y: useTransform(
                        scrollYProgress,
                        [0, 1],
                        [0, 180]
                    ),
                }}
                animate={{
                    opacity: [
                        0.35,
                        0.65,
                        0.35,
                    ],
                    scale: [
                        1,
                        1.05,
                        1,
                    ],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute bottom-[-220px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#dbeafe] blur-[120px]"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[#f5f5f4]" />
        </section>
    );
}