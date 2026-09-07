'use client';

import { motion } from 'motion/react';
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
    return (
        <section className="py-20 bg-slate-950 border-t border-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Built on Modern Technology
                    </h3>

                    <p className="text-slate-400 max-w-2xl mx-auto">
                        From intelligent systems and cloud infrastructure to high-performance
                        applications, we use proven technologies to build secure, scalable,
                        production-ready products.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {techs.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 transition-all cursor-default"
                        >
                            <tech.icon className="w-8 h-8 text-cyan-400 mb-3" />
                            <span className="text-sm font-semibold text-slate-300 text-center">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
