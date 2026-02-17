import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTopButton() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShowBackToTop(window.scrollY > 280);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`fixed right-5 bottom-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:bg-cyan-300 ${
                showBackToTop
                    ? "translate-y-0 opacity-100 pointer-events-auto"
                    : "translate-y-3 opacity-0 pointer-events-none"
            }`}
        >
            <ArrowUp className="h-5 w-5" />
        </button>
    );
}
