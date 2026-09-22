'use client';

import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Tomorrow Is Forever",
        category: "Single",
        image: "/tomorrowisforever.webp",
        description:
            "A deep, immersive house release shaped for late-night listening and warm, soulful grooves.",
        tags: ["House", "Deep Groove", "Late Night"],
        link: "https://open.spotify.com/track/1oZyZ2rAj8GbgEpNMSWD5C",
    },
    {
        id: 2,
        title: "Echo Chambers",
        category: "Single",
        image: "/poweroflove.jpg",
        description:
            "A cinematic electronic statement with layered textures, atmospheric movement, and rich sonic detail.",
        tags: ["Electronic", "Atmospheric", "Dolby Atmos"],
        link: "https://open.spotify.com/track/6vmxsrRw01EeuTUDVJuLdO",
    },
    {
        id: 3,
        title: "Power of Love",
        category: "Single",
        image: "/poweroflove.jpg",
        description:
            "An uplifting house cut blending emotional hooks with rhythm-driven production and clean melodic energy.",
        tags: ["House", "Melody", "Feel Good"],
        link: "https://open.spotify.com/track/6vmxsrRw01EeuTUDVJuLdO",
    },
    {
        id: 4,
        title: "CheFu Artist Profile",
        category: "Artist Page",
        image: "/chefu-technologies-logo.png",
        description:
            "Discover the full catalog, latest releases, and the complete artist story on Spotify.",
        tags: ["Spotify", "Catalog", "Latest Releases"],
        link: "https://open.spotify.com/artist/07fFH9mxSS0g69Wbz8PXNn",
    },
    {
        id: 5,
        title: "House Sessions",
        category: "Collection",
        image: "/tomorrowisforever.webp",
        description:
            "Curated listening for fans of warm synth textures, rhythm-first production, and club-ready motion.",
        tags: ["Collection", "House", "Selection"],
        link: "https://open.spotify.com/artist/07fFH9mxSS0g69Wbz8PXNn",
    },
    {
        id: 6,
        title: "CheFu Discography",
        category: "Catalog",
        image: "/chefu-technologies-logo.png",
        description:
            "A showcase of standout tracks and releases from the CheFu sound across electronic and house influences.",
        tags: ["Discography", "Tracks", "Electronic"],
        link: "https://open.spotify.com/artist/07fFH9mxSS0g69Wbz8PXNn",
    }
];

export function PortfolioPage() {
    return (
        <div className="min-h-screen bg-[#070b14] pb-20 pt-28 text-slate-100">
            <div className="container mx-auto px-5 md:px-8">
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.18),_transparent_30%),linear-gradient(135deg,#0d1321_0%,#111827_40%,#090d18_100%)] p-6 shadow-2xl shadow-emerald-950/30 md:p-10">
                    <div className="absolute -left-20 top-12 h-52 w-52 rounded-full bg-emerald-500/20 blur-3xl" />
                    <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

                    <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl">
                           
                            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                                Songs & Albums
                            </h1>
                            <p className="mt-4 max-w-xl text-base text-slate-300 md:text-lg">
                                Curated releases, atmospheric grooves, and house-driven moments built for deep listening.
                            </p>
                        </div>

                        <div className="flex flex-col items-start gap-3 sm:flex-row lg:flex-col">
                            <a
                                href="https://open.spotify.com/artist/07fFH9mxSS0g69Wbz8PXNn"
                                target="_blank"
                                
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                            >
                                Listen on Spotify
                                <ExternalLink className="h-4 w-4" />
                            </a>
                            <span className="text-sm text-slate-400">Streaming now</span>
                        </div>
                    </div>

                    <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-3">
                        {[
                            { label: "Releases", value: "6+" },
                            { label: "Style", value: "House" },
                            { label: "Mood", value: "Atmospheric" },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm"
                            >
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-sm text-slate-300">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08, duration: 0.45 }}
                            viewport={{ once: true }}
                            className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/70 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_20px_60px_rgba(16,185,129,0.2)]"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
                                <div className="absolute left-4 top-4 flex items-center justify-between gap-3">
                                    <span className="rounded-full border border-white/15 bg-slate-950/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                                        {project.category}
                                    </span>
                                </div>
                                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-slate-100 backdrop-blur-sm">
                                    <ExternalLink className="h-4 w-4" />
                                </div>
                            </div>

                            <div className="flex grow flex-col p-5">
                                <div className="mb-3 flex items-start justify-between gap-4">
                                    <h3 className="text-2xl font-bold tracking-tight text-white">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="mb-5 text-sm leading-6 text-slate-300">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
}
