"use client";

import {
    Calendar
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const pricing = [
    {
        title: "Basic Mix",
        price: "$150",
        features: [
            "Standard 2-track mix",
            "Vocal tuning (Melodyne)",
            "Mastering included",
            "2 revisions",
        ],
        recommended: false,
    },
    {
        title: "Full Production",
        price: "$500",
        features: [
            "Custom beat production",
            "Full session mix (stems)",
            "Advanced vocal production",
            "Unlimited revisions",
        ],
        recommended: true,
    },
    {
        title: "Album Package",
        price: "Custom",
        features: [
            "Full EP/Album production",
            "Dedicated engineer",
            "Sonic branding consultation",
            "Priority scheduling",
        ],
        recommended: false,
    },
];

export function MusicServicePage() {
    const [expandedServices, setExpandedServices] = useState<Set<number>>(new Set());

    function toggleService(index: number) {
        setExpandedServices((previous) => {
            const next = new Set(previous);
            if (next.has(index)) {
                next.delete(index);
            } else {
                next.add(index);
            }
            return next;
        });
    }

    return (
        <div className="min-h-screen bg-[#f7f5f3] pt-20 text-[#111827]">
            {/* Hero */}
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-6 pt-16 md:grid-cols-2 md:px-6 md:pb-10 md:pt-24">
                <div className="relative order-last h-64 overflow-hidden rounded-2xl border border-[#e5e1dc] md:h-96">
                    <Image
                        src="https://images.unsplash.com/photo-1675292310383-0f4ef53fa3ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW8lMjBtaXhpbmclMjBjb25zb2xlJTIwbmVvbiUyMGxpZ2h0c3xlbnwxfHx8fDE3NzA5ODgxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Studio Mixing Console"
                        fill
                        priority
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                    />
                </div>

                <div>
                    <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#6b7280]">Music production</p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 text-4xl font-semibold tracking-[-0.05em] text-[#111827] sm:text-5xl md:text-6xl"
                    >
                        Sonic Perfection
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-8 max-w-2xl text-base leading-8 text-[#5f5b56] sm:text-lg"
                    >
                        Industry-standard mixing, mastering, and production for
                        artists who demand the best.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="/contact?service=Audio%20Production"
                            className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-[#f7f5f3] transition-colors hover:bg-[#1f2937]"
                        >
                            <Calendar className="w-5 h-5" /> Book a Session
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto border-t border-[#e5e1dc] px-5 pb-16 pt-6 md:px-6 md:pb-20 md:pt-10">
                <div className="mb-24 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-12">
                    {[
                        {
                            title: "Recording",
                            desc: "State-of-the-art vocal booth and microphone locker including Neumann U87 and Manley Ref C.",
                        },
                        {
                            title: "Mixing",
                            desc: "Hybrid analog/digital workflow ensuring warmth, punch, and clarity for every stem.",
                        },
                        {
                            title: "Mastering",
                            desc: "Final polish to ensure your tracks translate perfectly across all streaming platforms.",
                        },
                        {
                            title: "Sound Design",
                            desc: "Custom foley and synthesis for games, films, and immersive experiences.",
                        },
                        {
                            title: "Beat Production",
                            desc: "Genre-bending instrumentals tailored to your unique artist identity.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-[#e5e1dc] bg-white p-3 transition-colors hover:border-[#d1d5db] sm:p-4 md:p-8"
                        >
                            <h3 className="mb-2 break-words text-base font-semibold tracking-[-0.04em] text-[#111827] sm:text-lg md:text-xl">
                                {item.title}
                            </h3>
                            <p
                                id={`music-service-description-${i}`}
                                className={`text-sm leading-5 text-[#5f5b56] md:line-clamp-none md:text-base md:leading-6 ${expandedServices.has(i) ? "" : "line-clamp-3"}`}
                            >
                                {item.desc}
                            </p>
                            <button
                                type="button"
                                aria-expanded={expandedServices.has(i)}
                                aria-controls={`music-service-description-${i}`}
                                aria-label={`${expandedServices.has(i) ? "Show less" : "Read more"} about ${item.title}`}
                                onClick={() => toggleService(i)}
                                className="mt-2 inline-flex min-h-11 cursor-pointer items-center rounded-md px-1 text-sm font-medium text-[#1f3c5b] underline decoration-[#1f3c5b]/50 underline-offset-4 hover:text-[#111827] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3c5b] md:hidden"
                            >
                                {expandedServices.has(i) ? "Show less" : "Read more"}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Pricing / Packages */}
                <div className="max-w-5xl mx-auto">
                    <h2 className="mb-12 text-center text-3xl font-semibold tracking-[-0.05em] text-[#111827]">
                        Production Packages
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricing.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col rounded-2xl border bg-white p-6 sm:p-8 ${plan.recommended ? "border-[#1f3c5b] shadow-sm" : "border-[#e5e1dc]"}`}
                            >
                                {plan.recommended && (
                                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#1f3c5b] px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="mb-2 text-xl font-semibold text-[#111827]">
                                    {plan.title}
                                </h3>
                                <div className="mb-6 text-3xl font-semibold tracking-tight text-[#111827]">
                                    {plan.price}
                                </div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feat, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 text-sm text-[#5f5b56]"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1f3c5b]" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/contact?service=Audio%20Production&package=${plan.title}`}
                                    className={`w-full rounded-full px-4 py-3 text-center text-sm font-medium transition-colors ${plan.recommended ? "bg-[#111827] text-[#f7f5f3] hover:bg-[#1f2937]" : "border border-[#e5e1dc] bg-white text-[#111827] hover:border-[#d1d5db] hover:bg-[#f3f2ef]"}`}
                                >
                                    Choose {plan.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
