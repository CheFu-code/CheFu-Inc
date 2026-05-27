"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { BackToTopButton } from "./BackToTopButton";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const standaloneRoutes = new Set(["/login", "/register", "/logout"]);

export function SiteChrome({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isStandaloneRoute = standaloneRoutes.has(pathname);

    if (isStandaloneRoute) {
        return <div className="min-h-screen bg-[#f7f8fb]">{children}</div>;
    }

    return (
        <div className="flex min-h-screen flex-col bg-slate-950">
            <Navbar />
            <BackToTopButton />
            <main className="grow">{children}</main>
            <Footer />
        </div>
    );
}
