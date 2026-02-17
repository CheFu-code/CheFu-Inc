import { UserPlus2 } from "lucide-react";

export function CareersHeroSection() {
    return (
        <div className="max-w-5xl mx-auto mb-16 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 text-cyan-300 text-sm">
                <UserPlus2 className="h-4 w-4" />
                Join CheFu Inc
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
                Build your career with purpose, ownership, and momentum.
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-3xl mx-auto">
                We are not only a tech team. We are a creative company building across
                software, AI, and music production. If you want meaningful work and rapid
                growth, this is your lane.
            </p>
            <p className="mt-3 text-sm text-slate-400">
                Rolling applications. Priority review every Friday.
            </p>
        </div>
    );
}
