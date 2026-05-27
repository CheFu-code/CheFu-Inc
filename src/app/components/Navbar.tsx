"use client";

import { clsx } from "clsx";
import { signOut, type User } from "firebase/auth";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { auth } from "../../config/firebaseConfig";
import { clearChefuAccountSession } from "../../lib/chefu-account";
import { getChefuAccountSession, type ChefuSessionUser } from "../../lib/chefu-session";
import { UserDropdown } from "./UserDropdown";

export function Navbar() {
    const [user, setUser] = useState(auth.currentUser);
    const [sessionUser, setSessionUser] = useState<ChefuSessionUser | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((nextUser) => {
            setUser(nextUser);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        let ignore = false;

        async function loadSession() {
            const nextSessionUser = await getChefuAccountSession("academy").catch(() => null);
            if (!ignore) setSessionUser(nextSessionUser);
        }

        void loadSession();
        return () => {
            ignore = true;
        };
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMobileMenuOpen(false), 0);
        return () => clearTimeout(timeout);
    }, [pathname]);

    const handleSignOut = async () => {
        try {
            await Promise.allSettled([clearChefuAccountSession(), signOut(auth)]);
            setSessionUser(null);
            toast.success("Logged out.");
            router.push("/");
        } catch (error) {
            toast.error("Failed to log out.", {
                description:
                    error instanceof Error ? error.message : "Unknown error occurred.",
            });
        }
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Work", href: "/portfolio" },
        { name: "Insights", href: "/blog" },
    ];
    const accountUser = toDropdownUser(user, sessionUser);

    return (
        <nav
            className={twMerge(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled || isMobileMenuOpen
                    ? "bg-slate-950/90 backdrop-blur-md border-slate-800 py-4"
                    : "bg-transparent py-6",
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2"
                >
                    <Image
                        src="/chefu-inc-logo.svg"
                        alt=""
                        width={36}
                        height={36}
                        className="rounded-xl"
                        priority
                    />
                    CheFu <span className="text-cyan-400">Inc.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                "text-sm font-medium transition-colors hover:text-cyan-400",
                                pathname === link.href
                                    ? "text-cyan-400"
                                    : "text-slate-300",
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Avatar */}
                    {accountUser ? (
                        <UserDropdown user={accountUser} onSignOut={handleSignOut} />
                    ) : null}
                    <button
                        onClick={() => router.push("/contact")}
                        className="px-5 py-2 rounded-full bg-white text-slate-950 font-semibold hover:bg-cyan-400 transition-colors text-sm cursor-pointer"
                    >
                        Start a Project
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={clsx(
                                        "text-lg font-medium hover:text-cyan-400",
                                        pathname === link.href
                                            ? "text-cyan-400"
                                            : "text-slate-300",
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-slate-800 my-2" />
                            <Link
                                href="/careers"
                                className="text-slate-400 hover:text-cyan-400"
                            >
                                Careers
                            </Link>
                            <Link href="/faq" className="text-slate-400 hover:text-cyan-400">
                                FAQ
                            </Link>
                            <Link
                                href="/contact"
                                className="mt-4 w-full py-3 rounded-lg bg-linear-to-r from-cyan-500 to-violet-600 text-white font-bold text-center"
                            >
                                Start a Project
                            </Link>

                            {accountUser && (
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex size-10 items-center justify-center rounded-full bg-cyan-300 font-semibold text-slate-950">
                                        {(accountUser.displayName || accountUser.email || "C").slice(0, 1).toUpperCase()}
                                    </div>
                                    <span className="text-white font-medium">
                                        {accountUser.displayName || accountUser.email}
                                    </span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

function toDropdownUser(firebaseUser: User | null, sessionUser: ChefuSessionUser | null) {
    if (firebaseUser) {
        return {
            displayName: firebaseUser.displayName,
            email: firebaseUser.email,
            photoURL: firebaseUser.photoURL,
        };
    }

    if (sessionUser) {
        return {
            displayName: sessionUser.displayName,
            email: sessionUser.email,
            photoURL: sessionUser.photoURL,
        };
    }

    return null;
}
