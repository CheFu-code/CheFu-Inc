import { clsx } from "clsx";
import { signOut } from "firebase/auth";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { auth } from "../../config/firebaseConfig";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Navbar() {
    const [user, setUser] = useState(auth.currentUser);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const userMenuRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((nextUser) => {
            setUser(nextUser);
        });
        return () => unsubscribe();
    }, []);

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
    }, [location.pathname]);

    useEffect(() => {
        setIsUserMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                userMenuRef.current &&
                !userMenuRef.current.contains(event.target as Node)
            ) {
                setIsUserMenuOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsUserMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setIsUserMenuOpen(false);
            toast.success("Logged out.");
            navigate("/");
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
                    to="/"
                    className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2"
                >
                    <div className="w-8 h-8 bg-linear-to-tr from-cyan-500 to-violet-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-mono text-lg">C</span>
                    </div>
                    CheFu <span className="text-cyan-400">Inc.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={clsx(
                                "text-sm font-medium transition-colors hover:text-cyan-400",
                                location.pathname === link.href
                                    ? "text-cyan-400"
                                    : "text-slate-300",
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Avatar */}
                    {user && (
                        <div className="relative" ref={userMenuRef}>
                            <button
                                type="button"
                                className="rounded-full ring-2 ring-transparent hover:ring-cyan-400/60 focus-visible:outline-none focus-visible:ring-cyan-400/80 transition cursor-pointer"
                                onClick={() => setIsUserMenuOpen((prev) => !prev)}
                                aria-haspopup="menu"
                                aria-expanded={isUserMenuOpen}
                                aria-label="Open user menu"
                            >
                                <Avatar>
                                    <AvatarImage src={user.photoURL ?? undefined} />
                                    <AvatarFallback className="text-black font-semibold">
                                        {user.displayName
                                            ? user.displayName[0].toUpperCase()
                                            : "C"}
                                    </AvatarFallback>
                                </Avatar>
                            </button>

                            <AnimatePresence>
                                {isUserMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                                        transition={{ duration: 0.15, ease: "easeOut" }}
                                        className="absolute right-0 top-12 w-56 rounded-xl border border-slate-700 bg-slate-900/95 backdrop-blur-md shadow-xl overflow-hidden"
                                        role="menu"
                                    >
                                        <div className="px-4 py-3 border-b border-slate-700">
                                            <p className="text-sm font-semibold text-white truncate">
                                                {user.displayName || "User"}
                                            </p>
                                            <p className="text-xs text-slate-400 truncate">
                                                {user.email}
                                            </p>
                                        </div>

                                        <button
                                            type="button"
                                            className="w-full text-left px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-800 transition cursor-pointer"
                                            onClick={() => {
                                                setIsUserMenuOpen(false);
                                                navigate("/contact");
                                            }}
                                            role="menuitem"
                                        >
                                            Contact us
                                        </button>
                                        <button
                                            type="button"
                                            className="w-full text-left px-4 py-2.5 text-sm text-red-300 hover:bg-slate-800 transition cursor-pointer"
                                            onClick={handleSignOut}
                                            role="menuitem"
                                        >
                                            Log out
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}
                    <button
                        onClick={() => navigate("/contact")}
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
                                    to={link.href}
                                    className={clsx(
                                        "text-lg font-medium hover:text-cyan-400",
                                        location.pathname === link.href
                                            ? "text-cyan-400"
                                            : "text-slate-300",
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-slate-800 my-2" />
                            <Link
                                to="/careers"
                                className="text-slate-400 hover:text-cyan-400"
                            >
                                Careers
                            </Link>
                            <Link to="/faq" className="text-slate-400 hover:text-cyan-400">
                                FAQ
                            </Link>
                            <Link
                                to="/contact"
                                className="mt-4 w-full py-3 rounded-lg bg-linear-to-r from-cyan-500 to-violet-600 text-white font-bold text-center"
                            >
                                Start a Project
                            </Link>

                            {user && (
                                <div className="flex items-center gap-3 mb-4">
                                    <Avatar>
                                        <AvatarImage src={user.photoURL ?? undefined} />
                                        <AvatarFallback className="text-black font-semibold">
                                            {user.displayName ? user.displayName[0].toUpperCase() : "C"}

                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="text-white font-medium">{user.displayName}</span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
