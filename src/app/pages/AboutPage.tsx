import { Award, Cpu, Globe, Music, Shield, Target, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function AboutPage() {
    return (
        <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <span className="text-cyan-400 font-semibold tracking-wider uppercase mb-4 block">About Us</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        We Are The Architects of <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-violet-500">Digital Sound & Logic</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        CheFu Inc is a hybrid creative agency and software house. We don't just write code; we compose experiences. We don't just make beats; we engineer emotion.
                    </p>
                </motion.div>

                {/* Story Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-white">Our Story</h2>
                        <p className="text-slate-400 leading-relaxed">
                            Founded by a collective of audio engineers and software developers, CheFu Inc emerged from the idea that the precision of code and the fluidity of music share a common language.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            We started in a small basement studio, building custom VST plugins for producers. Today, we are a full-scale agency delivering enterprise-level software and billboard-charting audio production services to clients worldwide.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-100 rounded-2xl overflow-hidden"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1760611656007-f767a8082758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmclMjBjcmVhdGl2ZSUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NzA5ODcwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Team Collaboration"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-violet-900/20 mix-blend-overlay" />
                    </motion.div>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
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
                            className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-colors"
                        >
                            <item.icon className="w-10 h-10 text-cyan-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Team Leadership (Mock) */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">The Minds Behind CheFu</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Kurisani Maluleke", role: "CEO & Chief Architect", icon: Globe },
                            { name: "Sarah Jenkins", role: "Head of Audio", icon: Music },
                            { name: "Marcus Thorne", role: "AI Research Lead", icon: Cpu },
                            { name: "Elena Rodriguez", role: "Creative Director", icon: Award },
                        ].map((member) => (
                            <div key={member.name} className="bg-slate-900/50 p-6 rounded-xl text-center border border-slate-800">
                                <div className="w-24 h-24 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-600">
                                    <member.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-white font-bold text-lg">{member.name}</h3>
                                <p className="text-cyan-400 text-sm">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-linear-to-br from-slate-900 to-slate-950 p-12 rounded-3xl border border-slate-800">
                    <h2 className="text-3xl font-bold text-white mb-6">Want to work with us?</h2>
                    <Link to="/contact" className="inline-block px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-cyan-400 transition-colors">
                        Contact Us Today
                    </Link>
                </div>
            </div>
        </div>
    );
}
