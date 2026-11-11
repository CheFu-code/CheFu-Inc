"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
    Music,
    Brain,
    Code,
    ArrowRight,
    Mic2,
    Layers,
    Smartphone,
    Server,
    Radio,
    ArrowUpRight,
    Workflow,
    Database,
} from "lucide-react";

const serviceDetails = [
    {
        id: "software",
        title: "Software Development",
        link: "/services/software",
        icon: Code,
        description:
            "Scalable web, mobile, backend, and cloud applications engineered around the way your organization works.",
        items: [
            {
                title: "Digital Products",
                desc: "Turn a product idea into a usable, maintainable application.",
                icon: Layers,
            },
            {
                title: "Web and Mobile Applications",
                desc: "Build reliable experiences for customers, teams, and communities.",
                icon: Smartphone,
            },
            {
                title: "Cloud Systems",
                desc: "Connect services, data, and infrastructure into a production-ready system.",
                icon: Server,
            },
        ],
    },
    {
        id: "ai",
        title: "Artificial Intelligence",
        link: "/services/ai",
        icon: Brain,
        description:
            "Practical AI systems that help organizations automate work, interpret information, and build better products.",
        items: [
            {
                title: "AI Applications",
                desc: "Create useful AI features and products around real user needs.",
                icon: Brain,
            },
            {
                title: "Automation and Agents",
                desc: "Connect models, tools, and workflows to reduce repetitive work.",
                icon: Workflow,
            },
            {
                title: "Data and Machine Learning",
                desc: "Use data-informed systems where prediction or classification adds value.",
                icon: Database,
            },
        ],
    },
    {
        id: "music",
        title: "Audio & Music Production",
        link: "/services/music",
        icon: Music,
        description:
            "A specialized creative technology capability for artists, brands, games, apps, and digital media.",
        items: [
            {
                title: "Beat Production",
                desc: "Custom instrumentals tailored to your genre and style.",
                icon: Layers,
            },
            {
                title: "Mixing & Mastering",
                desc: "Industry-standard polishing to make your tracks radio-ready.",
                icon: Mic2,
            },
            {
                title: "Sound Design",
                desc: "Creating unique soundscapes for games, films, and apps.",
                icon: Radio,
            },
        ],
    },
];

export function ServicesPage() {
    return (
        <div className="min-h-screen bg-[#f7f5f3] pb-16 pt-28 text-[#111827] md:pb-20 md:pt-32">
            <div className="mx-auto max-w-6xl px-5 md:px-6">
                <div className="mb-12 max-w-3xl md:mb-20">
                    <h1 className="mb-4 text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                        Our Services
                    </h1>
                    <p className="max-w-2xl text-base leading-7 text-[#5f5b56] md:text-lg md:leading-8">
                        Product engineering and specialist capabilities for
                        organizations building useful digital systems.
                    </p>
                </div>

                <div className="space-y-12 md:space-y-20">
                    {serviceDetails.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-start gap-6 border-t border-[#e5e1dc] pt-8 md:gap-10 md:pt-12 lg:gap-16`}
                        >
                            <div className="w-full min-w-0 flex-1">
                                <div className="mb-3 flex items-center gap-4">
                                   
                                    <h2 className="text-2xl font-semibold tracking-[-0.05em] md:text-3xl">
                                        {service.title}
                                    </h2>
                                </div>
                                <p className="mb-6 text-sm leading-6 text-[#5f5b56] sm:text-base sm:leading-7 md:mb-8">
                                    {service.description}
                                </p>

                                <div className="grid gap-3">
                                    {service.items.map((item) => (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="flex gap-3 rounded-xl border border-[#e5e1dc] bg-white p-4 sm:gap-4"
                                        >
                                            <div className="mt-0.5 shrink-0">
                                                <item.icon className="h-5 w-5 text-[#1f3c5b]" />
                                            </div>
                                            <div>
                                                <h3 className="mb-1 text-sm font-semibold tracking-[-0.02em] sm:text-base">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm leading-6 text-[#5f5b56]">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                                    <Link
                                        href={service.link}
                                        className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-[#f7f5f3] transition-colors hover:bg-[#1f2937]"
                                    >
                                        Explore {service.title}{" "}
                                        <ArrowRight className="h-4 w-4 shrink-0" />
                                    </Link>
                                </div>
                            </div>

                            <div className="w-full flex-1">
                                <Link
                                    href={service.link}
                                    className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-[#e5e1dc] bg-white"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-white to-slate-100" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-20 transition-opacity group-hover:opacity-10">
                                        <service.icon className="h-64 w-64 text-slate-900" />
                                    </div>
                                    <Image
                                        src={
                                            index === 0
                                                ? "https://images.unsplash.com/photo-1745848413113-4f39bdad5769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHJlY29yZGluZyUyMGVxdWlwbWVudCUyMGRhcmt8ZW58MXx8fHwxNzcwOTg3MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                                : index === 1
                                                  ? "https://images.unsplash.com/photo-1761123044903-1671e0edc3f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGNvZGUlMjBkaWdpdGFsJTIwc2NyZWVuJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzA5ODcwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                                  : "https://images.unsplash.com/photo-1608306448197-e83633f1261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZyUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcwOTg1NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                        }
                                        alt={service.title}
                                        fill
                                        sizes="(min-width: 1024px) 50vw, 100vw"
                                        className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-[#e5e1dc] bg-white/90 px-3 py-1 text-xs font-medium text-[#111827] backdrop-blur">
                                        View Details{" "}
                                        <ArrowUpRight className="h-3 w-3" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
