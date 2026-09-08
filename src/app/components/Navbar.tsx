import { CheFuUserDropdown } from "chefu-ui";
import { clsx } from "clsx";
import {
    BriefcaseBusiness,
    CircleHelp,
    Code2,
    Home,
    Info,
    Package,
    Menu,
    ShoppingCart,
    X,
    type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { accountAppUrl } from "../../lib/account-app";
import { useCart } from "../../lib/cart";
import { navLinks, useNavbar } from "./useNavbar";

const navIcons: Record<string, LucideIcon> = {
    Home,
    About: Info,
    Services: Code2,
    Products: Package,
    Careers: BriefcaseBusiness,
    FAQ: CircleHelp,
};

export function Navbar() {
    const {
        accountUser,
        handleSignOut,
        isMobileMenuOpen,
        isScrolled,
        pathname,
        setIsMobileMenuOpen,
    } = useNavbar();
    const { count } = useCart();

    return (
        <nav
            className={twMerge(
                "fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-all duration-500 ease-out",
                isScrolled || isMobileMenuOpen
                    ? "bg-slate-950/90 backdrop-blur-xl border-slate-800/80 py-4"
                    : "bg-transparent py-6",
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    aria-label="CHEFU TECHNOLOGIES home"
                    className="group flex items-center gap-2 text-lg font-bold tracking-tighter text-white transition-opacity duration-200 hover:opacity-90 sm:gap-2.5 sm:text-2xl"
                >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white sm:h-9 sm:w-9">
                        <Image
                            src="/chefu-technologies-logo.png"
                            alt="CHEFU TECHNOLOGIES logo"
                            width={36}
                            height={36}
                            className="h-full w-full object-contain"
                        />
                    </span>
                    <span>CHEFU</span>
                    <span className="text-cyan-400 transition-colors duration-200 group-hover:text-cyan-300">
                        TECHNOLOGIES
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-3">
                    <div className="flex items-center gap-1 rounded-full border border-slate-800/70 bg-slate-950/30 p-1 backdrop-blur-sm">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            const Icon = navIcons[link.name];

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={clsx(
                                        "group relative flex items-center rounded-full px-4 py-2 text-sm font-medium",
                                        "transition-all duration-300 ease-out",
                                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50",
                                        isActive
                                            ? "bg-slate-800/80 text-cyan-400 shadow-sm"
                                            : "text-slate-300 hover:bg-slate-900/70 hover:text-cyan-400",
                                    )}
                                >
                                    {Icon && !isActive && (
                                        <span
                                            className={clsx(
                                                "flex w-0 overflow-hidden opacity-0",
                                                "transition-all duration-300 ease-out",
                                                "group-hover:mr-2 group-hover:w-4 group-hover:opacity-100",
                                            )}
                                        >
                                            <Icon className="h-3.5 w-3.5 shrink-0" />
                                        </span>
                                    )}

                                    <span className="whitespace-nowrap">
                                        {link.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Account */}
                    {accountUser ? (
                        <CheFuUserDropdown
                            accountHref={accountAppUrl("/account", {
                                app: "root",
                            })}
                            onSignOut={handleSignOut}
                            user={accountUser}
                            variant="cyan"
                        />
                    ) : null}

                    <Link
                        href="/store/cart"
                        aria-label={`Shopping cart${count > 0 ? `, ${count} ${count === 1 ? "item" : "items"}` : ", empty"}`}
                        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-800/80 bg-slate-950/30 text-slate-300 backdrop-blur-sm transition-all duration-200 hover:border-cyan-400/50 hover:bg-slate-900 hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                    >
                        <ShoppingCart className="h-4 w-4" />
                        {count > 0 && (
                            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-400 px-1 text-[10px] font-bold text-slate-950">
                                {count > 99 ? "99+" : count}
                            </span>
                        )}
                    </Link>

                    
                </div>

                {/* Mobile actions */}
                <div className="flex items-center gap-2 md:hidden">
                    <Link
                        href="/store/cart"
                        aria-label={`Shopping cart${count > 0 ? `, ${count} ${count === 1 ? "item" : "items"}` : ", empty"}`}
                        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-800/80 bg-slate-950/50 text-white backdrop-blur-sm transition-all duration-200 hover:border-cyan-400/50 hover:bg-slate-900 hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                    >
                        <ShoppingCart className="h-5 w-5" />
                        {count > 0 && (
                            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-400 px-1 text-[10px] font-bold text-slate-950">
                                {count > 99 ? "99+" : count}
                            </span>
                        )}
                    </Link>

                    <button
                        type="button"
                        aria-label={
                            isMobileMenuOpen ? "Close menu" : "Open menu"
                        }
                        aria-expanded={isMobileMenuOpen}
                        onClick={() =>
                            setIsMobileMenuOpen(!isMobileMenuOpen)
                        }
                        className={clsx(
                            "flex h-10 w-10 items-center justify-center rounded-full",
                            "border border-slate-800/80 bg-slate-950/50",
                            "text-white backdrop-blur-sm",
                            "transition-all duration-200",
                            "hover:border-slate-700 hover:bg-slate-900",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50",
                        )}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                key={isMobileMenuOpen ? "close" : "menu"}
                                initial={{
                                    opacity: 0,
                                    rotate: -45,
                                    scale: 0.8,
                                }}
                                animate={{
                                    opacity: 1,
                                    rotate: 0,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    rotate: 45,
                                    scale: 0.8,
                                }}
                                transition={{ duration: 0.15 }}
                                className="flex"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-5 w-5" />
                                ) : (
                                    <Menu className="h-5 w-5" />
                                )}
                            </motion.span>
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="md:hidden overflow-hidden border-t border-slate-800/60 bg-slate-950/95 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.05,
                                duration: 0.25,
                            }}
                            className="flex flex-col p-6"
                        >
                            <div className="flex flex-col gap-1">
                                {navLinks.map((link) => {
                                    const isActive =
                                        pathname === link.href;
                                    const Icon = navIcons[link.name];

                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() =>
                                                setIsMobileMenuOpen(false)
                                            }
                                            className={clsx(
                                                "flex items-center justify-between rounded-xl px-4 py-3.5",
                                                "text-base font-medium transition-all duration-200",
                                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50",
                                                isActive
                                                    ? "bg-slate-900 text-cyan-400"
                                                    : "text-slate-300 hover:bg-slate-900/70 hover:text-white",
                                            )}
                                        >
                                            <span className="flex items-center gap-3">
                                                {Icon && (
                                                    <Icon className="h-4 w-4" />
                                                )}

                                                <span>{link.name}</span>
                                            </span>

                                            {isActive && (
                                                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>

                            <div className="my-4 h-px bg-slate-800/80" />

                            <div className="grid grid-cols-2 gap-2">
                                <Link
                                    href="/careers"
                                    onClick={() =>
                                        setIsMobileMenuOpen(false)
                                    }
                                    className="rounded-xl border border-slate-800/70 px-4 py-3 text-center text-sm font-medium text-slate-400 transition-colors hover:border-slate-700 hover:text-cyan-400"
                                >
                                    Careers
                                </Link>

                                <Link
                                    href="/faq"
                                    onClick={() =>
                                        setIsMobileMenuOpen(false)
                                    }
                                    className="rounded-xl border border-slate-800/70 px-4 py-3 text-center text-sm font-medium text-slate-400 transition-colors hover:border-slate-700 hover:text-cyan-400"
                                >
                                    FAQ
                                </Link>
                            </div>

                            {accountUser ? (
                                <div className="mt-3 border-t border-slate-800/70 pt-3">
                                    <CheFuUserDropdown
                                        accountHref={accountAppUrl(
                                            "/account",
                                            { app: "root" },
                                        )}
                                        onSignOut={handleSignOut}
                                        triggerClassName="w-full justify-between rounded-xl border border-slate-800/70 bg-slate-900/40 px-4 py-3"
                                        user={accountUser}
                                        variant="cyan"
                                    />
                                </div>
                            ) : null}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}