import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const projects = [
    {
        id: 1,
        title: "Neon Synth VST",
        category: "Audio Software",
        image:
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1080",
        description:
            "An AI-powered synthesizer plugin that generates infinite unique patches based on mood.",
        tags: ["C++", "JUCE", "Machine Learning"],
        link: "#",
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
            "An interactive learning app offering structured lessons and tutorials for aspiring developers.",
        tags: ["React", "Firebase", "TypeScript"],
        link: "#",
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
        title: "CryptoVault",
        category: "Web3 Security",
        image:
            "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1080",
        description:
            "Secure wallet management system for institutional crypto investors.",
        tags: ["Solidity", "Web3.js", "React"],
        link: "#",
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
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
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
