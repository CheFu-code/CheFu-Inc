import { CheFuUserDropdown } from "chefu-ui";
import { clsx } from "clsx";
import {
    BookOpen,
    BriefcaseBusiness,
    CircleHelp,
    Code2,
    Home,
    Info,
    Package,
    Menu,
    ShoppingCart,
    Store,
    X,
    type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
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
    Insights: BookOpen,
    Store,
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
                "fixed top-0 left-0 right-0 z-50 border-b border-[#e5e1dc] bg-[#f7f5f3]/90 backdrop-blur-sm transition-colors duration-200 ease-out",
                isScrolled || isMobileMenuOpen ? "py-4 shadow-sm" : "py-4",
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-6">
                <Link
                    href="/"
                    aria-label="CHEFU TECHNOLOGIES home"
                    className="group flex items-center gap-2 text-lg font-semibold tracking-[-0.04em] text-[#111827] transition-opacity duration-200 hover:opacity-90 sm:gap-2.5 sm:text-2xl"
                >
                    
                    <span>CHEFU</span>
                    <span className="text-[#1f3c5b]">
                        TECHNOLOGIES
                    </span>
                </Link>

                <div className="hidden items-center gap-3 md:flex">
                    <div className="flex items-center gap-1 rounded-full border border-[#e5e1dc] bg-white/70 p-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            const Icon = navIcons[link.name];

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={clsx(
                                        "group relative flex items-center rounded-full px-4 py-2 text-sm font-medium",
                                        "transition-colors duration-200 ease-out",
                                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f3c5b]/25",
                                        isActive
                                            ? "bg-[#1f3c5b] text-[#f7f5f3]"
                                            : "text-[#374151] hover:bg-[#f3f2ef] hover:text-[#111827]",
                                    )}
                                >
                                    {Icon && isActive && (
                                        <span className="mr-2 flex h-4 w-4 items-center justify-center opacity-100">
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
                        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e1dc] bg-white text-[#374151] transition-colors duration-200 hover:border-[#d1d5db] hover:text-[#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f3c5b]/25"
                    >
                        <ShoppingCart className="h-4 w-4" />
                        {count > 0 && (
                            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#1f3c5b] px-1 text-[10px] font-bold text-white">
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
                        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e1dc] bg-white text-[#111827] transition-colors duration-200 hover:border-[#d1d5db] hover:text-[#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f3c5b]/25"
                    >
                        <ShoppingCart className="h-5 w-5" />
                        {count > 0 && (
                            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#1f3c5b] px-1 text-[10px] font-bold text-white">
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
                            "border border-[#e5e1dc] bg-white",
                            "text-[#111827]",
                            "transition-colors duration-200",
                            "hover:border-[#d1d5db] hover:bg-[#f3f2ef]",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f3c5b]/25",
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
                        className="md:hidden overflow-hidden border-t border-[#e5e1dc] bg-[#f7f5f3]/95 backdrop-blur-xl"
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
                                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f3c5b]/25",
                                                isActive
                                                    ? "bg-[#1f3c5b] text-[#f7f5f3]"
                                                    : "text-[#374151] hover:bg-[#eeeae6] hover:text-[#111827]",
                                            )}
                                        >
                                            <span className="flex items-center gap-3">
                                                {Icon && isActive && (
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
                                    className="rounded-xl border border-[#d8d2ce] bg-white px-4 py-3 text-center text-sm font-medium text-[#374151] transition-colors hover:border-[#c9c2bd] hover:text-[#111827]"
                                >
                                    Careers
                                </Link>

                                <Link
                                    href="/faq"
                                    onClick={() =>
                                        setIsMobileMenuOpen(false)
                                    }
                                    className="rounded-xl border border-[#d8d2ce] bg-white px-4 py-3 text-center text-sm font-medium text-[#374151] transition-colors hover:border-[#c9c2bd] hover:text-[#111827]"
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