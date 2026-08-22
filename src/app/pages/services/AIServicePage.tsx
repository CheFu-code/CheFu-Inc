'use client';

import { motion } from 'motion/react';
import {
    Brain,
    Sparkles,

    Workflow,
    Database,
    ShieldCheck,
    PlugZap,
    Cpu,
    ArrowRight,
    CheckCircle2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
    aiCapabilities, aiSolutions,
    aiProcess,
    aiTechnologies,
    aiIndustries,
} from '@/data/services/ai';

export function AIServicePage() {
    return (
        <div className="pt-20 bg-slate-950 min-h-screen text-slate-300">
            {/* Hero */}
            <section className="relative min-h-[75vh] flex flex-col justify-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-slate-950/85 z-10" />

                    <Image
                        src="https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbiUyMDNkJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcwOTg4MTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Artificial intelligence and neural network visualization"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>

                <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />

                <div className="container mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-sm font-medium">
                            <Sparkles className="w-4 h-4" />
                            Artificial Intelligence & Automation
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Build Software That{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                                Thinks & Acts
                            </span>
                        </h1>

                        <p className="text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
                            We design and build AI-powered applications, intelligent
                            agents, automated workflows, and connected systems that
                            help businesses turn complex processes into efficient
                            digital experiences.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact?service=AI%20Solution"
                                className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-violet-900/30 transition-all flex items-center gap-2"
                            >
                                Discuss Your AI Project
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="/portfolio"
                                className="px-8 py-4 bg-slate-900/80 text-white border border-slate-700 font-medium rounded-lg hover:bg-slate-800 transition-colors"
                            >
                                Explore Our Work
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-violet-600 rounded-full blur-[100px] opacity-20 animate-pulse" />

                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                {aiCapabilities.slice(0, 4).map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.5 + i * 0.1,
                                        }}
                                        className="bg-slate-900/85 backdrop-blur-xl p-6 rounded-2xl border border-slate-700 shadow-xl hover:border-violet-500/50 transition-colors"
                                    >
                                        <item.icon className="w-8 h-8 text-violet-400 mb-3" />
                                        <h3 className="text-white font-bold">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-slate-400 mt-1">
                                            {item.description.split('.')[0]}.
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 mb-6">
                            <Cpu className="w-7 h-7 text-violet-400" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            AI That Solves Real Business Problems
                        </h2>

                        <p className="text-lg text-slate-400 leading-relaxed">
                            Artificial intelligence is most valuable when it is
                            connected to the systems, information, and workflows
                            that people actually use. We don't approach AI as a
                            standalone feature. We engineer it into practical
                            digital products and business processes where it can
                            create measurable value.
                        </p>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24 bg-slate-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mb-16">
                        <span className="text-violet-400 font-semibold uppercase tracking-wider text-sm">
                            What We Build
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
                            Intelligent Technology, Built Around Your Needs
                        </h2>

                        <p className="text-slate-400 text-lg">
                            From a focused AI feature to an entire intelligent
                            platform, we can engineer the technology around your
                            specific use case.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {aiCapabilities.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="group p-8 bg-slate-950 rounded-2xl border border-slate-800 hover:border-violet-500/50 transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-6 group-hover:bg-violet-500/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-violet-400" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-slate-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
                            Solutions
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
                            From Idea to Intelligent Product
                        </h2>

                        <p className="text-slate-400 text-lg">
                            We can introduce AI into existing systems or engineer
                            entirely new products around intelligent automation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {aiSolutions.map((solution, i) => (
                            <motion.div
                                key={solution.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-cyan-500/30 transition-colors"
                            >
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {solution.title}
                                </h3>

                                <p className="text-slate-400 leading-relaxed mb-6">
                                    {solution.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {solution.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Architecture */}
            <section className="py-24 bg-slate-900 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-violet-400 font-semibold uppercase tracking-wider text-sm">
                                Beyond the Model
                            </span>

                            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
                                AI Is Only One Part of the System
                            </h2>

                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                A production AI solution needs more than a model.
                                It needs authentication, application logic, data
                                access, integrations, security, monitoring, and a
                                reliable user experience.
                            </p>

                            <div className="space-y-4">
                                {[
                                    'AI models and intelligent reasoning',
                                    'Secure authentication and authorization',
                                    'Databases and application data',
                                    'External APIs and business integrations',
                                    'Automated workflows and tool execution',
                                    'Web and mobile application interfaces',
                                    'Error handling, validation, and safeguards',
                                    'Scalable cloud infrastructure',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                                        <span className="text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 blur-3xl" />

                            <div className="relative rounded-3xl border border-slate-700 bg-slate-950 p-6 md:p-8 shadow-2xl">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                                        <Brain className="w-5 h-5 text-violet-400" />
                                    </div>

                                    <div>
                                        <p className="text-white font-semibold">
                                            Intelligent System
                                        </p>
                                        <p className="text-xs text-slate-500">
                                            Connected AI architecture
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        {
                                            icon: Brain,
                                            label: 'AI Reasoning',
                                        },
                                        {
                                            icon: Database,
                                            label: 'Knowledge & Data',
                                        },
                                        {
                                            icon: PlugZap,
                                            label: 'External Integrations',
                                        },
                                        {
                                            icon: Workflow,
                                            label: 'Automated Actions',
                                        },
                                        {
                                            icon: ShieldCheck,
                                            label: 'Security & Access',
                                        },
                                    ].map((item, i) => (
                                        <div
                                            key={item.label}
                                            className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800"
                                        >
                                            <item.icon className="w-5 h-5 text-cyan-400" />

                                            <span className="text-sm text-slate-300">
                                                {item.label}
                                            </span>

                                            {i < 4 && (
                                                <ArrowRight className="w-4 h-4 text-slate-700 ml-auto" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
                            Our Approach
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
                            Engineering Before Hype
                        </h2>

                        <p className="text-slate-400 text-lg">
                            We start with the problem rather than forcing AI into
                            a process simply because it is possible.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {aiProcess.map((item, i) => (
                            <motion.div
                                key={item.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="relative"
                            >
                                <div className="mb-6 flex items-center justify-between">
                                    <span className="text-4xl font-black text-slate-800">
                                        {item.number}
                                    </span>

                                    <item.icon className="w-6 h-6 text-violet-400" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20 bg-slate-900 border-y border-slate-800">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                        <div className="max-w-xl">
                            <span className="text-violet-400 font-semibold uppercase tracking-wider text-sm">
                                Technology
                            </span>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
                                Built With Modern AI Infrastructure
                            </h2>

                            <p className="text-slate-400">
                                We select technologies according to the problem,
                                requirements, performance expectations, and
                                integration environment rather than forcing every
                                project into the same stack.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 max-w-xl">
                            {aiTechnologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-300"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-14">
                        <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
                            Industries
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
                            AI Across Industries
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {aiIndustries.map((industry) => (
                            <div
                                key={industry}
                                className="p-6 bg-slate-900 rounded-xl text-center border border-slate-800 hover:border-cyan-500/40 transition-colors"
                            >
                                <span className="text-slate-300 font-semibold">
                                    {industry}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}