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
        link: "https://flow.chefuinc.com",
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
        image:'/chefuAcademy.png',
        description:
            "A learning platform for structured courses, videos, quizzes, flashcards, and developer SDK access.",
        tags: ["Courses", "Video Learning", "Developer SDK"],
        link: "https://academy.chefuinc.com",
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
        title: "Quantum",
        category: "AI Workspace",
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1080",
        description:
            "An intelligent assistant for focused conversations, organized threads, and faster answers when ideas need momentum.",
        tags: ["AI Chat", "Saved Threads", "Research"],
        link: "https://quantum.chefuinc.com",
    },
    {
        id: 6,
        title: "DrippyBanks",
        category: "E-commerce",
        image: "/drippybanks.png",
        description:
            "A stylish e-commerce platform built with modern web technologies, showcasing products with a smooth and interactive shopping experience.",
        tags: ["Next.js", "Tailwind CSS", "Vercel"],
        link: "https://drippybanks.chefuinc.com",
    },
];

export function PortfolioPage() {
    return (
        <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Our Work
                    </h1>
                    <p className="text-xl text-slate-400">
                        A showcase of our best projects across music, AI, and software.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col h-full"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                            </div>

                            <div className="p-6 flex flex-col grow">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-xs font-bold uppercase text-cyan-400 mb-1 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <a
                                        target="_blank"
                                        href={project.link}
                                        rel="noreferrer"
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>

                                <p className="text-slate-400 text-sm mb-6 grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-slate-800 text-xs rounded-full text-slate-300"
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
