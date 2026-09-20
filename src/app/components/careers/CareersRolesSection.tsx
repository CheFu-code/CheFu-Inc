import { Briefcase } from "lucide-react";
import { roles } from "./careersData";

export function CareersRolesSection() {
    return (
        <section className="mx-auto mb-10 max-w-5xl">
            <h2 className="mb-6 text-xl font-semibold text-[#111827]">
                Who We&apos;re Looking For
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {roles.map((role) => (
                    <div
                        key={role}
                        className="flex items-center gap-2 rounded-xl border border-[#e5e1dc] bg-white px-4 py-3 text-[#374151]"
                    >
                        <Briefcase className="h-4 w-4 text-[#1f3c5b]" />
                        {role}
                    </div>
                ))}
            </div>
            <p className="mt-4 text-sm text-[#1f3c5b]">
                Don&apos;t see your role? Apply anyway.
            </p>
        </section>
    );
}
