"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { clearChefuAccountSession } from "../../lib/chefu-account";
import { getChefuAccountSession, type ChefuSessionUser } from "../../lib/chefu-session";

export const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/portfolio" },
    { name: "Insights", href: "/blog" },
    { name: "Store", href: "/store" },
];

export function useNavbar() {
    const [sessionUser, setSessionUser] = useState<ChefuSessionUser | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        let ignore = false;

        async function loadSession() {
            const nextSessionUser = await getChefuAccountSession("root").catch(() => null);
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

    async function handleSignOut() {
        try {
            await clearChefuAccountSession();
            setSessionUser(null);
            toast.success("Logged out.");
            router.push("/");
        } catch (error) {
            toast.error("Failed to log out.", {
                description:
                    error instanceof Error ? error.message : "Unknown error occurred.",
            });
        }
    }

    const accountUser = sessionUser
        ? {
            displayName: sessionUser.displayName,
            email: sessionUser.email,
            photoURL: sessionUser.photoURL,
        }
        : null;

    return {
        accountUser,
        handleSignOut,
        isMobileMenuOpen,
        isScrolled,
        pathname,
        router,
        setIsMobileMenuOpen,
    };
}
