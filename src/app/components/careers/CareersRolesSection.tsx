import { roles } from "./careersData";

export function CareersRolesSection() {
    return (
        <section className="mx-auto mb-10 max-w-5xl">
            <h2 className="mb-6 text-xl font-semibold text-[#111827]">
                Who We&apos;re Looking For
            </h2>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
                {roles.map((role) => (
                    <div
                        key={role}
                        className="rounded-xl border border-[#e5e1dc] bg-white px-4 py-3 text-sm text-[#374151]"
                    >
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
