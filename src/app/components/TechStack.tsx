"use client";

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
    return (
        <section className="border-t border-[#e5e1dc] bg-[#f3f0ee] py-24">
            <div className="container mx-auto px-6">
                <div className="mb-12 max-w-3xl">
                    <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#6b7280]">
                        Technology
                    </p>
                    <h3 className="text-3xl font-semibold tracking-[-0.05em] text-[#111827] md:text-5xl">
                        Tools selected for the problem, not the trend.
                    </h3>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {techs.map((tech) => {
                        const Icon = tech.icon;

                        return (
                            <div key={tech.name} className="flex items-center gap-4 rounded-[1.1rem] border border-[#e5e1dc] bg-white p-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#e5e1dc] bg-[#f7f5f3] text-[#1f3c5b]">
                                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#6b7280]">
                                        {tech.group}
                                    </div>
                                    <div className="mt-1 text-sm font-medium text-[#111827]">
                                        {tech.name}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}