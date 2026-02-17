import { Briefcase } from "lucide-react";
import { roles } from "./careersData";

export function CareersRolesSection() {
    return (
        <section className="max-w-5xl mx-auto mb-10">
            <h2 className="text-2xl font-semibold text-white mb-6">
                Who We&apos;re Looking For
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {roles.map((role) => (
                    <div
                        key={role}
                        className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-slate-200 flex items-center gap-2"
                    >
                        <Briefcase className="h-4 w-4 text-cyan-400" />
                        {role}
                    </div>
                ))}
            </div>
            <p className="mt-4 text-cyan-300 text-sm">
                Don&apos;t see your role? Apply anyway.
            </p>
        </section>
    );
}
