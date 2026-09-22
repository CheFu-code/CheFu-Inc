import {
    Github,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
} from "lucide-react";
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export function Footer() {
    const companyLinks = [
        { label: "About", to: "/about" },
        { label: "Products", to: "/products" },
        { label: "Careers", to: "/careers" },
        { label: "Insights", to: "/blog" },
        { label: "FAQ", to: "/faq" },
        { label: "Security", to: "/security" },
    ];

    const serviceLinks = [
        { label: "Software Development", to: "/services/software" },
        { label: "AI Solutions", to: "/services/ai" },
        { label: "Music Production", to: "/services/music" },
        { label: "All Services", to: "/services" },
    ];

    const socialLinks = [
        { label: "Twitter", href: "https://x.com/CHEFU_TECH", icon: Twitter },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/chefu-technologies-90b1663b1", icon: Linkedin },
        { label: "GitHub", href: "https://github.com/CHEFU-TECHNOLOGIES", icon: Github },
        { label: "Instagram", href: "https://www.instagram.com/chefu_technologies", icon: Instagram },
        { label: "WhatsApp", href: "https://wa.me/27606031205", icon: FaWhatsapp },
    ];

    return (
        <footer className="relative z-10 border-t border-[#e5e1dc] bg-[#f7f5f3] pb-8 pt-16">
            <div className="container mx-auto px-6">
                <div className="mb-12 grid grid-cols-1 gap-10 border-b border-[#e5e1dc] pb-12 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Link
                            href="/"
                            aria-label="CHEFU TECHNOLOGIES home"
                            className="mb-5 inline-flex items-center gap-2 text-2xl font-semibold tracking-[-0.05em] text-[#111827]"
                        >
                            
                            CHEFU <span className="text-[#1f3c5b]">TECHNOLOGIES</span>
                        </Link>
                        <p className="mb-6 max-w-xs text-base leading-7 text-[#5f5b56]">
                            Chefu Technologies builds digital products and creative technology experiences for ambitious teams.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        
                                        aria-label={item.label}
                                        className="rounded-full border border-[#e5e1dc] bg-white p-2 text-[#5f5b56] transition-colors hover:text-[#111827]"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#6b7280]">
                            Company
                        </h4>
                        <ul className="space-y-4">
                            {companyLinks.map((item) => (
                                <li key={item.to}>
                                    <Link href={item.to} className="text-[#5f5b56] transition-colors hover:text-[#111827]">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#6b7280]">
                            Services
                        </h4>
                        <ul className="space-y-4">
                            {serviceLinks.map((item) => (
                                <li key={item.to}>
                                    <Link href={item.to} className="text-[#5f5b56] transition-colors hover:text-[#111827]">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#6b7280]">
                            Contact
                        </h4>
                        <ul className="space-y-4 text-[#5f5b56]">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#1f3c5b]" />
                                <span>
                                    Johannesburg, South Africa
                                    <br />
                                    Remote-first collaboration
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 shrink-0 text-[#1f3c5b]" />
                                <a href="mailto:hello@chefu.co.za" className="transition-colors hover:text-[#111827]">
                                    hello@chefu.co.za
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 shrink-0 text-[#1f3c5b]" />
                                <a href="tel:+27606031205" className="transition-colors hover:text-[#111827]">
                                    +27 60 603 1205
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#5f5b56] md:flex-row">
                    <p>
                        &copy; {new Date().getFullYear()} CHEFU TECHNOLOGIES (Pty) Ltd. All rights reserved.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4 md:mt-0 md:gap-6">
                        <Link href="/privacy" className="transition-colors hover:text-[#111827]">
                            Privacy Policy
                        </Link>
                        <Link href="/cookies" className="transition-colors hover:text-[#111827]">
                            Cookie Policy
                        </Link>
                        <Link href="/shipping" className="transition-colors hover:text-[#111827]">
                            Shipping Policy
                        </Link>
                        <Link href="/terms" className="transition-colors hover:text-[#111827]">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
