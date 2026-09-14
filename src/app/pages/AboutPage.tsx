'use client';

import { Award, Cpu, Globe, Music, Shield, Target, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export function AboutPage() {
    return (
        <div className="min-h-screen bg-stone-50 pb-20 pt-32 text-slate-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-16 max-w-4xl text-center"
                >
                    <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">About Us</span>
                    <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-6xl">
                        We Are The Architects of <span className="bg-gradient-to-r from-cyan-700 to-violet-600 bg-clip-text text-transparent">Digital Sound & Logic</span>
                    </h1>
                    <p className="text-xl leading-relaxed text-slate-600">
                        CHEFU TECHNOLOGIES is a hybrid creative agency and software house. We don't just write code; we compose experiences. We don't just make beats; we engineer emotion.
                    </p>
                </motion.div>

                <div className="mb-24 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
                        <p className="leading-relaxed text-slate-600">
                            Founded by a collective of audio engineers and software developers, CHEFU TECHNOLOGIES emerged from the idea that the precision of code and the fluidity of music share a common language.
                        </p>
                        <p className="leading-relaxed text-slate-600">
                            We started in a small basement studio, building custom VST plugins for producers. Today, we are a full-scale agency delivering enterprise-level software and billboard-charting audio production services to clients worldwide.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-100 overflow-hidden rounded-2xl"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1760611656007-f767a8082758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmclMjBjcmVhdGl2ZSUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NzA5ODcwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Team Collaboration"
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-violet-900/10" />
                    </motion.div>
                </div>

                <div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {[
                        { icon: Target, title: "Precision", desc: "Every pixel, every beat, every line of code is calculated for maximum impact." },
                        { icon: Zap, title: "Innovation", desc: "We don't follow trends; we set them by experimenting with bleeding-edge tech." },
                        { icon: Shield, title: "Integrity", desc: "Transparent processes and robust security are the foundations of our partnerships." }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-xl border border-slate-200 bg-white p-8 transition-colors hover:border-cyan-400/50"
                        >
                            <item.icon className="mb-4 h-10 w-10 text-cyan-600" />
                            <h3 className="mb-2 text-xl font-bold text-slate-900">{item.title}</h3>
                            <p className="text-slate-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mb-24">
                    <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">The Minds Behind CheFu</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { name: "Kurisani Maluleke", role: "CEO & Chief Architect", icon: Globe },
                            { name: "Sarah Jenkins", role: "Head of Audio", icon: Music },
                            { name: "Marcus Thorne", role: "AI Research Lead", icon: Cpu },
                            { name: "Elena Rodriguez", role: "Creative Director", icon: Award },
                        ].map((member) => (
                            <div key={member.name} className="rounded-xl border border-slate-200 bg-white p-6 text-center">
                                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                                    <member.icon className="h-10 w-10" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                                <p className="text-sm text-cyan-700">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
                    <h2 className="mb-6 text-3xl font-bold text-slate-900">Want to work with us?</h2>
                    <Link href="/contact" className="inline-block rounded-full bg-slate-900 px-8 py-4 font-bold text-white transition-colors hover:bg-slate-800">
                        Contact Us Today
                    </Link>
                </div>
            </div>
        </div>
    );
}
