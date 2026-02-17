import { ArrowRight, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
    const companyLinks = [
        { label: "About", to: "/about" },
        { label: "Careers", to: "/careers" },
        { label: "Insights", to: "/blog" },
        { label: "FAQ", to: "/faq" },
    ];

    const serviceLinks = [
        { label: "Software Development", to: "/services/software" },
        { label: "AI Solutions", to: "/services/ai" },
        { label: "Music Production", to: "/services/music" },
        { label: "All Services", to: "/services" },
    ];

    const socialLinks = [
        { label: "Twitter", href: "https://x.com/CheFu_Inc", icon: Twitter },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/chefu-inc-90b1663b1", icon: Linkedin },
        { label: "GitHub", href: "https://github.com/CheFu-Inc", icon: Github },
        { label: "Instagram", href: "https://www.instagram.com/chefu_inc", icon: Instagram },
    ];

    return (
        <footer className="bg-slate-950 border-t border-slate-800/70 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="mb-14 rounded-3xl border border-slate-700/70 bg-linear-to-r from-slate-900 via-slate-900 to-cyan-950/40 px-8 py-10 md:px-12 md:py-14">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="mb-3 text-sm font-semibold tracking-wide text-cyan-300 uppercase">
                            Let&apos;s build something meaningful
                        </p>
                        <h2 className="mb-5 text-3xl font-bold text-white md:text-5xl">
                            Ready to launch your next digital project?
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-slate-300 md:text-lg">
                            From software platforms to AI integrations and media production,
                            we deliver practical, high-quality work with clear communication.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
                        >
                            Start a Project
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <div className="mb-12 grid grid-cols-1 gap-10 border-b border-slate-800 pb-12 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Link
                            to="/"
                            className="mb-5 inline-flex items-center gap-2 text-2xl font-bold tracking-tighter text-white"
                        >
                            {/* <div className="w-8 h-8 bg-linear-to-tr from-cyan-500 to-violet-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-mono text-lg">C</span>
                            </div> */}
                            CheFu <span className="text-cyan-400">Inc.</span>
                        </Link>
                        <p className="mb-6 leading-relaxed text-slate-400">
                            CheFu Inc. builds modern digital products and creative technology
                            experiences for ambitious teams.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={item.label}
                                        className="rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-400 transition-colors hover:border-cyan-500/60 hover:text-cyan-300"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold tracking-wide text-slate-200 uppercase">
                            Company
                        </h4>
                        <ul className="space-y-4">
                            {companyLinks.map((item) => (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        className="text-slate-400 transition-colors hover:text-cyan-300"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold tracking-wide text-slate-200 uppercase">
                            Services
                        </h4>
                        <ul className="space-y-4">
                            {serviceLinks.map((item) => (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        className="text-slate-400 transition-colors hover:text-cyan-300"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold tracking-wide text-slate-200 uppercase">
                            Contact
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400">
                                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                                <span>
                                    Johannesburg, South Africa
                                    <br />
                                    Remote-first collaboration
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Mail className="h-5 w-5 shrink-0 text-cyan-400" />
                                <a
                                    href="mailto:hello@chefuinc.com"
                                    className="transition-colors hover:text-cyan-300"
                                >
                                    hello@chefuinc.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone className="h-5 w-5 shrink-0 text-cyan-400" />
                                <a
                                    href="tel:+27606031205"
                                    className="transition-colors hover:text-cyan-300"
                                >
                                    +27 60 603 1205
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
                    <p>&copy; {new Date().getFullYear()} CheFu Inc. Owned and operated by CheFu Technologies (Pty) Ltd.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="transition-colors hover:text-slate-200">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="transition-colors hover:text-slate-200">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
