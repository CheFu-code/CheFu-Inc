import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter
} from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import lenovoLogo from "../../../public/lenovo-logo-red.png";

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

    const policyLinks = [
        { label: "Privacy Policy", to: "/privacy" },
        { label: "Cookie Policy", to: "/cookies" },
        { label: "Shipping Policy", to: "/shipping" },
        { label: "Terms of Service", to: "/terms" },
    ];

    const socialLinks = [
        { label: "Twitter", href: "https://x.com/CHEFU_TECH", icon: Twitter },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/chefu-technologies-90b1663b1", icon: Linkedin },
        { label: "Instagram", href: "https://www.instagram.com/chefu_technologies", icon: Instagram },
        { label: "WhatsApp", href: "https://wa.me/27606031205", icon: FaWhatsapp },
        { label: "Facebook", href: "https://www.facebook.com/chefu.technologies/", icon: FaFacebook },
    ];

    return (
        <footer className="relative z-10 border-t border-[#e5e1dc] bg-[#f7f5f3] pb-8 pt-16">
            <div className="container mx-auto px-6">
                <div className="mb-12 grid grid-cols-2 gap-x-6 gap-y-10 border-b border-[#e5e1dc] pb-12 md:gap-10 lg:grid-cols-4">
                    <div className="col-span-2 md:col-span-1">
                        <Link
                            href="/"
                            aria-label="Chefu Technologies home"
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
                        <div className="mt-6 flex items-center gap-3">
                            <Image
                                src="/hp_logo_small.png"
                                alt="HP"
                                width={130}
                                height={130}
                                sizes="32px"
                                className="h-8 w-8 shrink-0 object-contain"
                            />
                            <p className="text-xs leading-5 text-[#5f5b56]">Official HP Business Partner</p>
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                            <Image
                                src={lenovoLogo}
                                alt="Lenovo"
                                sizes="96px"
                                className="h-auto w-24 shrink-0"
                            />
                            <p className="text-xs leading-5 text-[#5f5b56]">Lenovo 360 Authorized Partner</p>
                        </div>
                    </div>

                    <div className="min-w-0">
                        <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1f3c5b]">
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

                    <div className="min-w-0">
                        <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1f3c5b]">
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

                    <div className="min-w-0">
                        <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1f3c5b]">
                            Contact
                        </h4>
                        <ul className="space-y-4 text-sm text-[#5f5b56] md:text-base">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#1f3c5b]" />
                                <span>
                                    Malamulele, South Africa
                                    
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 shrink-0 text-[#1f3c5b]" />
                                <a href="mailto:hello@chefu.co.za" className="min-w-0 break-words transition-colors hover:text-[#111827]">
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
                    <nav aria-label="Policies" className="min-w-0 md:hidden">
                        <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1f3c5b]">
                            Policies
                        </h4>
                        <ul className="space-y-4 text-sm">
                            {policyLinks.map((item) => (
                                <li key={item.to}>
                                    <Link href={item.to} className="text-[#5f5b56] transition-colors hover:text-[#111827]">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#5f5b56] md:flex-row">
                    <p>
                        &copy; {new Date().getFullYear()} CHEFU TECHNOLOGIES (Pty) Ltd. All rights reserved.
                    </p>
                    <nav aria-label="Policies" className="hidden flex-wrap gap-6 md:flex">
                        {policyLinks.map((item) => (
                            <Link key={item.to} href={item.to} className="transition-colors hover:text-[#111827]">
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}
