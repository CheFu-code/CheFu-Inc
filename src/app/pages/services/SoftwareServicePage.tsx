"use client";

import {
    ArrowRight,
    Database,
    GitBranch,
    Layout,
    Server,
    Smartphone
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const processSteps = [
    {
        step: "01",
        title: "Discovery",
        desc: "We sit down to understand your business goals, target audience, and technical requirements.",
    },
    {
        step: "02",
        title: "Architecture",
        desc: "Designing a scalable system blueprint, choosing the right stack (React, Node, Python, etc.).",
    },
    {
        step: "03",
        title: "Development",
        desc: "Agile sprints with regular check-ins. You see the progress as we build.",
    },
    {
        step: "04",
        title: "Testing & QA",
        desc: "Rigorous automated and manual testing to ensure a bug-free launch.",
    },
    {
        step: "05",
        title: "Deployment",
        desc: "Setting up CI/CD pipelines and launching to cloud infrastructure (AWS/Vercel).",
    },
];

function ProcessDescription({ step }: { step: (typeof processSteps)[number] }) {
    const [expanded, setExpanded] = useState(false);
    const [truncated, setTruncated] = useState(false);
    const descriptionRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const description = descriptionRef.current;
        if (!description || expanded) return;

        const measure = () => setTruncated(description.scrollHeight > description.clientHeight);
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(description);
        return () => observer.disconnect();
    }, [expanded]);

    return (
        <>
            <p
                ref={descriptionRef}
                id={`process-description-${step.step}`}
                className={`text-sm leading-5 text-[#5f5b56] md:line-clamp-none md:leading-6 ${expanded ? "" : "line-clamp-3"}`}
            >
                {step.desc}
            </p>
            {(truncated || expanded) && (
                <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`process-description-${step.step}`}
                    aria-label={`${expanded ? "Show less" : "Read more"} about ${step.title}`}
                    onClick={() => setExpanded((previous) => !previous)}
                    className="mt-2 inline-flex min-h-11 cursor-pointer items-center rounded-md text-sm font-medium text-[#1f3c5b] underline underline-offset-4 hover:text-[#111827] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3c5b] md:hidden"
                >
                    {expanded ? "Show less" : "Read more"}
                </button>
            )}
        </>
    );
}

export function SoftwareServicePage() {
    return (
        <div className="min-h-screen bg-[#f7f5f3] pt-20 text-[#111827]">
            {/* Hero */}
            <div className="mx-auto max-w-6xl px-5 pb-8 pt-12 md:px-6 md:pb-12 md:pt-20">
                <div className="flex max-w-3xl flex-col items-start">
                    
                    <h1 className="mb-5 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                        Build Scalable Digital Products
                    </h1>
                    <p className="mb-8 max-w-2xl text-base leading-7 text-[#5f5b56] md:text-lg md:leading-8">
                        From MVP to Enterprise. We engineer robust web and
                        mobile applications that drive business growth.
                    </p>
                    <Link
                        href="/contact?service=Software%20Development"
                        className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-[#f7f5f3] transition-colors hover:bg-[#1f2937]"
                    >
                        Start Your Project <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Tech Stack & Capabilities */}
            <div className="mx-auto max-w-6xl border-t border-[#e5e1dc] px-5 pb-16 pt-6 md:px-6 md:pb-20 md:pt-10">
                <div className="mb-12 md:mb-20">
                    <div>
                        <h2 className="mb-4 text-2xl font-semibold tracking-[-0.05em] md:text-3xl">
                            Full-Cycle Development
                        </h2>
                        <p className="mb-6 max-w-2xl text-sm leading-6 text-[#5f5b56] sm:text-base sm:leading-7">
                            We don't just write code; we build solutions. Our
                            team handles everything from the initial UI/UX
                            design to the backend infrastructure and database
                            management.
                        </p>
                        <ul className="grid gap-3 md:grid-cols-2">
                            {[
                                {
                                    icon: Layout,
                                    text: "Frontend: React, Next.js, Tailwind CSS",
                                },
                                {
                                    icon: Server,
                                    text: "Backend: Node.js, Python, Go",
                                },
                                {
                                    icon: Database,
                                    text: "Database: PostgreSQL, MongoDB, Firestore",
                                },
                                {
                                    icon: Smartphone,
                                    text: "Mobile: React Native, iOS, Android",
                                },
                                {
                                    icon: GitBranch,
                                    text: "DevOps: Docker, Kubernetes, AWS",
                                },
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 rounded-xl border border-[#e5e1dc] bg-white p-4 text-sm text-[#5f5b56]"
                                >
                                    <item.icon className="h-5 w-5 shrink-0 text-[#1f3c5b]" />
                                    <span className="font-medium">
                                        {item.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Process */}
                <div className="border-t border-[#e5e1dc] pt-8 md:pt-12">
                    <h2 className="mb-6 text-2xl font-semibold tracking-[-0.05em] md:mb-10 md:text-3xl">
                        Our Development Process
                    </h2>
                    <div className="grid grid-cols-2 items-start gap-3 sm:gap-4 xl:grid-cols-5">
                        {processSteps.map((step, i) => (
                            <div
                                key={i}
                                className="min-w-0 rounded-xl border border-[#e5e1dc] bg-white p-3 transition-colors hover:border-[#d1d5db] sm:p-5"
                            >
                                <div className="mb-4 text-xs font-medium tracking-[0.18em] text-[#6b7280]">
                                    {step.step}
                                </div>
                                <h3 className="mb-2 break-words text-base font-semibold tracking-[-0.02em]">
                                    {step.title}
                                </h3>
                                <ProcessDescription step={step} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
