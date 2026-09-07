"use client";

import { motion } from "motion/react";
import {
    Brain,
    Cloud,
    Code2,
    Database,
    Globe,
    KeyRound,
    Laptop,
    Lock,
    Server,
    Smartphone,
    Workflow,
} from "lucide-react";

const techs = [
    { name: "React, Next.js & NestJS", icon: Globe },
    { name: "TypeScript & Node.js", icon: Code2 },
    { name: "Python & PyTorch", icon: Brain },
    { name: "AI & LLM Systems", icon: Brain },
    { name: "Firebase & Firestore", icon: Database },
    { name: "PostgreSQL & SQL", icon: Database },
    { name: "Cloud Infrastructure", icon: Cloud },
    { name: "Vercel & Serverless", icon: Cloud },
    { name: "Docker & CI/CD", icon: Workflow },
    { name: "React Native & Expo", icon: Smartphone },
    { name: "Electron.js", icon: Laptop },
    { name: "REST & GraphQL APIs", icon: Server },
    { name: "Authentication & Passkeys", icon: KeyRound },
    { name: "Cybersecurity", icon: Lock },
];

export function TechStack() {
    const marqueeItems = [...techs, ...techs];

    return (
        <section className="relative overflow-hidden border-t border-slate-900 bg-slate-950 py-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h3 className="mb-4 text-2xl font-bold text-white">
                        Built on Modern Technology
                    </h3>

                    <p className="mx-auto max-w-2xl text-slate-400">
                        From intelligent systems and cloud infrastructure to
                        high-performance applications, we use proven
                        technologies to build secure, scalable,
                        production-ready products.
                    </p>
                </div>
            </div>

            {/* Marquee wrapper */}
            <div className="relative">
                {/* Left fade */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-950 to-transparent md:w-40" />

                {/* Right fade */}
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent md:w-40" />

                {/* Moving track */}
                <div className="group overflow-hidden">
                    <motion.div
                        className="flex w-max gap-5 py-3"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 55,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear",
                        }}
                    >
                        {marqueeItems.map((tech, index) => (
                            <div
                                key={`${tech.name}-${index}`}
                                className="flex h-28 w-[220px] shrink-0 items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 px-5 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-950">
                                    <tech.icon
                                        className="h-5 w-5 text-cyan-400"
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <span className="text-sm font-semibold leading-5 text-slate-300">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Subtle bottom accent */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-1/3 -translate-x-1/2 bg-slate-900" />
        </section>
    );
}