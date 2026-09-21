import Link from "next/link";
import { FAQAccordion } from "../components/FAQAccordion";

const faqs = [
    {
        q: "Do you work with independent artists and founders, or only larger teams?",
        a: "We work with both. We supports early-stage founders, growing teams, and independent artists, especially where there is a clear product goal, a need for creative execution, or a desire to connect software, AI, and audio in a meaningful way.",
    },
    {
        q: "What kinds of projects do you take on?",
        a: "We build software products, AI-enabled workflows, product interfaces, music and audio projects, and integrated digital experiences. In practice, that can include web apps, internal tools, customer-facing platforms, creative systems, and production support for audio-driven brands.",
    },
    {
        q: "What is the typical timeline for a custom build?",
        a: "It depends on scope, complexity, and stakeholder feedback. A focused MVP usually takes a few weeks to a couple of months, while a larger platform or multi-service rollout can take several months. We keep delivery incremental so value is visible early and risk is managed throughout the project.",
    },
    {
        q: "Who owns the final work and the intellectual property?",
        a: "For client projects, ownership is usually structured around the engagement terms, with final IP ownership defined in the contract and release milestones. For internal or product work created by us, ownership remains with us unless otherwise agreed in writing.",
    },
    {
        q: "Can you modernise or extend existing systems?",
        a: "Yes. We often work with existing apps and infrastructure where the goal is to improve performance, add AI capabilities, reduce operational friction, or integrate with new customer touchpoints without forcing a disruptive full rebuild.",
    },
    {
        q: "How do you handle privacy, security, and data responsibility?",
        a: "Security and privacy are part of delivery, not an afterthought. We apply secure configuration, access boundaries, privacy-aware handling of user data, and clear retention practices where appropriate. You can review our privacy and security policies for the broader framework.",
    },
    {
        q: "Do you support ongoing product maintenance after launch?",
        a: "Yes. Many engagements include post-launch support, updates, analytics review, iterative improvements, and feature work based on real usage. The right support model depends on the product and the operating environment.",
    },
    {
        q: "How do I start a project or request a quote?",
        a: "The easiest path is to contact the team through the contact page with details about your goals, timeline, and any relevant links or documents. From there, we can assess fit and suggest the next step.",
    },
];

export function FAQPage() {
    return (
        <main className="min-h-screen bg-stone-50 px-6 pb-24 pt-32 text-slate-800">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
                    <aside className="lg:sticky lg:top-28">
                        
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            Frequently asked questions
                        </h1>
                        <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 md:text-base">
                            We help teams turn ideas into clear product decisions, reliable builds, and sustainable digital experiences. If you need more detail, our team can walk through the right approach for your situation.
                        </p>

                        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                            <p className="text-sm font-semibold text-slate-900">
                                Need a custom recommendation?
                            </p>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Share your goals, timeline, and budget range and we’ll point you to the right path.
                            </p>
                            <Link
                                href="/contact"
                                className="mt-4 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-600"
                            >
                                Start a conversation →
                            </Link>
                        </div>
                    </aside>

                    <section className="w-full">
                        <FAQAccordion items={faqs} />
                    </section>
                </div>
            </div>
        </main>
    );
}
