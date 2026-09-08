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
    { group: "Application", name: "React, Next.js & NestJS", icon: Globe },
    { group: "Application", name: "React Native & Expo", icon: Smartphone },
    { group: "Backend", name: "TypeScript & Node.js", icon: Code2 },
    { group: "Backend", name: "REST & GraphQL APIs", icon: Server },
    { group: "AI", name: "Python & PyTorch", icon: Brain },
    { group: "AI", name: "AI & LLM Systems", icon: Brain },
    { group: "Data", name: "Firebase & Firestore", icon: Database },
    { group: "Data", name: "PostgreSQL & SQL", icon: Database },
    { group: "Infrastructure", name: "Cloud Infrastructure", icon: Cloud },
    { group: "Infrastructure", name: "Vercel & Serverless", icon: Cloud },
    { group: "Infrastructure", name: "Docker & CI/CD", icon: Workflow },
    { group: "Security", name: "Authentication & Passkeys", icon: KeyRound },
    { group: "Security", name: "Cybersecurity", icon: Lock },
    { group: "Application", name: "Electron.js", icon: Laptop },
];

export function TechStack() {
    const marqueeItems = [...techs, ...techs];

    return (
        <section className="relative overflow-hidden border-t border-slate-900 bg-slate-950/88 py-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h3 className="mb-4 text-2xl font-bold text-white">
                        Technology chosen for the problem
                    </h3>

                    <p className="mx-auto max-w-2xl text-slate-400">
                        From intelligent systems and cloud infrastructure to
                        The stack changes with the product. We use proven technologies to build secure, scalable, production-ready systems rather than treating a framework list as a solution.
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

                                <div>
                                    <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-300/80">
                                        {tech.group}
                                    </span>
                                    <span className="mt-1 block text-sm font-semibold leading-5 text-slate-300">
                                        {tech.name}
                                    </span>
                                </div>
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