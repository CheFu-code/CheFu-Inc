'use client';

import {
    aiCapabilities,
    aiIndustries,
    aiProcess,
    aiSolutions,
    aiTechnologies,
} from '@/data/services/ai';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';

function ExpandableDescription({ title, description }: { title: string; description: string }) {
    const [expanded, setExpanded] = useState(false);
    const [truncated, setTruncated] = useState(false);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const descriptionId = useId();

    useEffect(() => {
        const element = descriptionRef.current;
        if (!element || expanded) return;
        const measure = () => setTruncated(element.scrollHeight > element.clientHeight);
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(element);
        return () => observer.disconnect();
    }, [expanded]);

    return (
        <>
            <p
                ref={descriptionRef}
                id={descriptionId}
                className={`text-sm leading-5 text-[#5f5b56] md:line-clamp-none md:leading-6 ${expanded ? '' : 'line-clamp-3'}`}
            >
                {description}
            </p>
            {(truncated || expanded) && (
                <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={descriptionId}
                    aria-label={`${expanded ? 'Show less' : 'Read more'} about ${title}`}
                    onClick={() => setExpanded((previous) => !previous)}
                    className="mt-2 inline-flex min-h-11 cursor-pointer items-center rounded-md text-sm font-medium text-[#1f3c5b] underline underline-offset-4 hover:text-[#111827] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3c5b] md:hidden"
                >
                    {expanded ? 'Show less' : 'Read more'}
                </button>
            )}
        </>
    );
}

export function AIServicePage() {
    return (
        <div className="pt-20 bg-[#f7f5f3] min-h-screen text-[#5f5b56]">
            {/* Hero */}
            <section className="mx-auto max-w-6xl px-5 pb-8 pt-12 md:px-6 md:pb-12 md:pt-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.05em] text-[#111827] mb-6 leading-tight">
                            Build Software That{' '}
                            <span className="text-[#1f3c5b]">
                                Thinks & Acts
                            </span>
                        </h1>

                        <p className="mb-8 max-w-2xl text-base leading-7 text-[#5f5b56] md:text-lg md:leading-8">
                            We design and build AI-powered applications, intelligent
                            agents, automated workflows, and connected systems that
                            help businesses turn complex processes into efficient
                            digital experiences.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact?service=AI%20Solution"
                                className="group inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-[#f7f5f3] transition-colors hover:bg-[#1f2937]"
                            >
                                Discuss Your AI Project
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="/products"
                                className="inline-flex items-center rounded-full border border-[#e5e1dc] bg-white px-5 py-3 text-sm font-medium text-[#111827] transition-colors hover:border-[#d1d5db] hover:bg-[#f3f2ef]"
                            >
                                Explore Our Products
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Introduction */}
            <section className="py-12 md:py-16 bg-[#f7f5f3]">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        

                        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.05em] text-[#111827] mb-6">
                            AI That Solves Real Business Problems
                        </h2>

                        <p className="text-base leading-7 text-[#5f5b56]">
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
            <section className="py-12 md:py-16 bg-[#f5f1ed]">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <div className="max-w-2xl mb-8 md:mb-12">
                        <span className="text-[#1f3c5b] font-medium uppercase tracking-[0.22em] text-[11px]">
                            What We Build
                        </span>

                        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.05em] text-[#111827] mt-3 mb-6">
                            Intelligent Technology, Built Around Your Needs
                        </h2>

                        <p className="text-[#5f5b56] text-base leading-7">
                            From a focused AI feature to an entire intelligent
                            platform, we can engineer the technology around your
                            specific use case.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 items-start gap-3 sm:gap-4 lg:grid-cols-3">
                        {aiCapabilities.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="group p-3 sm:p-5 md:p-6 bg-white rounded-2xl border border-[#e5e1dc] hover:border-[#d1d5db] transition-all"
                            >                               
                                <h3 className="mb-3 break-words text-base font-semibold tracking-[-0.02em] text-[#111827] sm:text-lg">
                                    {item.title}
                                </h3>

                                <ExpandableDescription title={item.title} description={item.description} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section className="py-12 md:py-16 bg-[#f7f5f3]">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
                        <span className="text-[#1f3c5b] font-medium uppercase tracking-[0.22em] text-[11px]">
                            Solutions
                        </span>

                        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.05em] text-[#111827] mt-3 mb-6">
                            From Idea to Intelligent Product
                        </h2>

                        <p className="text-[#5f5b56] text-base leading-7">
                            We can introduce AI into existing systems or engineer
                            entirely new products around intelligent automation.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 items-start gap-3 sm:gap-4 max-w-5xl mx-auto">
                        {aiSolutions.map((solution, i) => (
                            <motion.div
                                key={solution.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="p-3 sm:p-5 md:p-6 rounded-2xl border border-[#e5e1dc] bg-white hover:border-[#d1d5db] transition-colors"
                            >
                                <h3 className="mb-3 break-words text-base font-semibold tracking-[-0.02em] text-[#111827] sm:text-lg">
                                    {solution.title}
                                </h3>

                                <ExpandableDescription title={solution.title} description={solution.description} />

                                <div className="mt-4 hidden flex-wrap gap-2 md:flex">
                                    {solution.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1.5 rounded-full bg-[#f3f2ef] border border-[#e5e1dc] text-xs text-[#5f5b56]"
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
            <section aria-labelledby="ai-architecture-heading" className="bg-[#f5f1ed] py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <div className="mb-8 max-w-2xl md:mb-10">
                        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#6b7280]">
                            Beyond the model
                        </p>
                        <h2 id="ai-architecture-heading" className="mb-4 text-2xl font-semibold tracking-[-0.05em] text-[#111827] md:text-3xl">
                            AI Is Only One Part of the System
                        </h2>
                        <p className="text-sm leading-6 text-[#5f5b56] sm:text-base sm:leading-7">
                            Useful AI needs a complete application around it. We connect
                            models, data, and business tools with the interfaces, security,
                            and infrastructure needed to run reliably.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 items-start gap-3 sm:gap-4 lg:grid-cols-3">
                        {[
                            {
                                title: 'AI Reasoning',
                                description: 'Models and application logic that interpret requests and decide how to handle them.',
                            },
                            {
                                title: 'Knowledge & Data',
                                description: 'Databases, documents, and search that give the system relevant business context.',
                            },
                            {
                                title: 'Connected Workflows',
                                description: 'APIs, integrations, and automated actions that connect AI to the tools your team uses.',
                            },
                            {
                                title: 'User Experience',
                                description: 'Web and mobile interfaces that make intelligent features clear and practical to use.',
                            },
                            {
                                title: 'Security & Access',
                                description: 'Authentication, permissions, and validation that control access and protect application data.',
                            },
                            {
                                title: 'Reliable Infrastructure',
                                description: 'Cloud hosting, monitoring, and error handling that keep the application running as usage grows.',
                            },
                        ].map((component) => (
                            <div key={component.title} className="min-w-0 rounded-xl border border-[#e5e1dc] bg-white p-3 sm:p-5 md:p-6">
                                <h3 className="mb-2 break-words text-base font-semibold tracking-[-0.02em] text-[#111827] sm:text-lg">
                                    {component.title}
                                </h3>
                                <ExpandableDescription title={component.title} description={component.description} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-12 md:py-16 bg-[#f7f5f3]">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
                        <span className="text-[#1f3c5b] font-medium uppercase tracking-[0.22em] text-[11px]">
                            Our Approach
                        </span>

                        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.05em] text-[#111827] mt-3 mb-6">
                            Engineering Before Hype
                        </h2>

                        <p className="text-[#5f5b56] text-base leading-7">
                            We start with the problem rather than forcing AI into
                            a process simply because it is possible.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 items-start gap-3 sm:gap-4 xl:grid-cols-5">
                        {aiProcess.map((item, i) => (
                            <motion.div
                                key={item.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="min-w-0 rounded-xl border border-[#e5e1dc] bg-white p-3 sm:p-5"
                            >
                                <div className="mb-3 flex items-baseline justify-between gap-2">
                                    <h3 className="min-w-0 break-words text-base font-semibold tracking-[-0.02em] text-[#111827] sm:text-lg">
                                        {item.title}
                                    </h3>
                                    <span className="shrink-0 text-xs font-medium tracking-[0.18em] text-[#6b7280]">
                                        {item.number}
                                    </span>
                                </div>

                                <ExpandableDescription title={item.title} description={item.description} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-12 md:py-16 bg-[#f5f1ed] border-y border-[#e5e1dc]">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                        <div className="max-w-xl">
                            <span className="text-[#1f3c5b] font-medium uppercase tracking-[0.22em] text-[11px]">
                                Technology
                            </span>

                            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.05em] text-[#111827] mt-3 mb-4">
                                Built With Modern AI Infrastructure
                            </h2>

                            <p className="text-sm leading-6 text-[#5f5b56] sm:text-base sm:leading-7">
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
                                    className="px-4 py-2.5 rounded-lg bg-[#f7f5f3] border border-[#e5e1dc] text-sm text-[#5f5b56]"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-12 md:py-16 bg-[#f7f5f3]">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <div className="text-center mb-8 md:mb-12">
                        <span className="text-[#1f3c5b] font-medium uppercase tracking-[0.22em] text-[11px]">
                            Industries
                        </span>

                        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.05em] text-[#111827] mt-3">
                            AI Across Industries
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {aiIndustries.map((industry) => (
                            <div
                                key={industry}
                                className="p-3 sm:p-5 bg-white rounded-xl text-center border border-[#e5e1dc] hover:border-[#d1d5db] transition-colors"
                            >
                                <span className="text-sm text-[#5f5b56] font-medium">
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
