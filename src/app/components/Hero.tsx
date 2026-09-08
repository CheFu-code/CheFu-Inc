"use client";

import {
    motion,
    useScroll,
    useTransform,
} from "motion/react";

import {
    ArrowRight,
    PlayCircle,
} from "lucide-react";

import Link from "next/link";
import { useRef } from "react";

import { AudioScene } from "./hero/AudioScene";

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

    /*
     * We pass the scroll value to React Three Fiber.
     *
     * MotionValue changes are read here without
     * introducing another animation system.
     */
    const scrollProgress =
        scrollYProgress.get();

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen overflow-hidden bg-slate-950 pt-20"
        >
            {/* =====================================================
                3D AUDIO WORLD
            ====================================================== */}

            <AudioScene
                scrollProgress={
                    scrollProgress
                }
            />

            {/* =====================================================
                ATMOSPHERE
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 z-[1]">
                <motion.div
                    style={{
                        opacity:
                            backgroundOpacity,
                    }}
                    className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/35 to-slate-950"
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
                    className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.07] blur-[130px]"
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
                    className="absolute right-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-violet-600/[0.08] blur-[120px]"
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
                        className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-800/40 px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-md"
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
                            className="h-2 w-2 rounded-full bg-cyan-500"
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
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease,
                        }}
                        className="mx-auto max-w-6xl text-5xl font-bold leading-[0.95] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
                    >
                        Engineering Sound.
                        <br />

                        <motion.span
                            initial={{
                                opacity: 0,
                                filter:
                                    "blur(12px)",
                            }}
                            animate={{
                                opacity: 1,
                                filter:
                                    "blur(0px)",
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.45,
                                ease,
                            }}
                            className="mt-2 inline-block bg-gradient-to-r from-cyan-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent"
                        >
                            Building Intelligence.
                        </motion.span>
                    </motion.h1>

                    {/* Description */}

                    <motion.p
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
                            delay: 0.65,
                            ease,
                        }}
                        className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg md:text-xl"
                    >
                        We blend high-fidelity
                        audio production with
                        cutting-edge AI and
                        software development to
                        create immersive digital
                        experiences for the future.
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
                            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-4 font-bold text-slate-950 shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-[0_16px_45px_rgba(34,211,238,0.14)]"
                        >
                            <span className="relative z-10">
                                Start Your Journey
                            </span>

                            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />

                            <span className="absolute inset-0 -translate-x-full bg-cyan-400 transition-transform duration-500 group-hover:translate-x-0" />
                        </Link>

                        <Link
                            href="/portfolio"
                            className="group flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/20 px-7 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-800/70"
                        >
                            <PlayCircle className="h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />

                            <span>
                                View Our Work
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
                        className="mx-auto mt-16 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.2em] text-slate-600"
                    >
                        <span className="h-px w-8 bg-slate-800" />

                        <span>
                            Technology • Audio • Intelligence
                        </span>

                        <span className="h-px w-8 bg-slate-800" />
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
                className="pointer-events-none absolute bottom-[-250px] left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[110px]"
            />

            {/* Bottom fade */}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
        </section>
    );
}