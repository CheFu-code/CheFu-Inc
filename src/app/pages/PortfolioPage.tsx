'use client';

import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Flow Mail",
        category: "Communication Platform",
        image: "/flow-dashboard.png",
        description:
            "A focused mail workspace for composing, routing, and managing product communication.",
        tags: ["Inbox", "Campaigns", "Scheduling"],
        link: "https://flow.chefu.co.za",
    },
    {
        id: 2,
        title: "Tomorrow Is Forever — CheFu",
        category: "Music Production",
        image: "/tomorrowisforever.webp",
        description:
            "CheFu's latest house track delivering deep grooves and immersive soundscapes for every listener.",
        tags: ["House Music", "Sound Design", "Electronic"],
        link: "https://open.spotify.com/track/1oZyZ2rAj8GbgEpNMSWD5C",
    },
    {
        id: 3,
        title: "CheFu Academy App",
        category: "Educational Platform",
        image: '/chefuAcademy.png',
        description:
            "A learning platform for structured courses, videos, quizzes, flashcards, and developer SDK access.",
        tags: ["Courses", "Video Learning", "Developer SDK"],
        link: "https://academy.chefu.co.za",
    },
    {
        id: 4,
        title: "Echo Chambers",
        category: "Music Production",
        image: "/poweroflove.jpg",
        description:
            "CheFu's Debut House Music Track — a journey in sound design and immersive Dolby Atmos.",
        tags: ["House Music", "Dolby Atmos", "Sound Design"],
        link: "https://open.spotify.com/track/6vmxsrRw01EeuTUDVJuLdO",
    },

    {
        id: 5,
        title: "Muzalo",
        category: "Music Platform",
        image: "/muzalo-logo.svg",
        description:
            "A music experience for discovering releases, opening Spotify embeds, and keeping CheFu audio products in one focused space.",
        tags: ["Music", "Spotify Embeds", "Listening"],
        link: "https://muzalo.chefu.co.za",
    },
    {
        id: 6,
        title: "Quantum",
        category: "AI Workspace",
        image: "/quantum-logo.svg",
        description:
            "An intelligent assistant for focused conversations, organized threads, and faster answers when ideas need momentum.",
        tags: ["AI Chat", "Saved Threads", "Research"],
        link: "https://quantum.chefu.co.za",
    },
    {
        id: 7,
        title: "DrippyBanks",
        category: "E-commerce",
        image: "/drippybanks.png",
        description:
            "A stylish e-commerce platform built with modern web technologies, showcasing products with a smooth and interactive shopping experience.",
        tags: ["Next.js", "Tailwind CSS", "Vercel"],
        link: "https://drippybanks.chefu.co.za",
    },
];

export function PortfolioPage() {
    return (
        <div className="min-h-screen bg-stone-50 pb-20 pt-32 text-slate-800">
            <div className="container mx-auto px-6">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-6xl">
                        Our Work
                    </h1>
                    <p className="text-xl text-slate-600">
                        A showcase of our best projects across music, AI, and software.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-cyan-400/50"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-100/50 transition-colors group-hover:bg-transparent" />
                            </div>

                            <div className="flex grow flex-col p-6">
                                <div className="mb-4 flex items-start justify-between">
                                    <div>
                                        <span className="mb-1 block text-xs font-bold uppercase text-cyan-700">
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-900">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <a
                                        target="_blank"
                                        href={project.link}
                                        rel="noreferrer"
                                        className="text-slate-500 transition-colors hover:text-slate-900"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>

                                <p className="mb-6 grow text-sm text-slate-600">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
