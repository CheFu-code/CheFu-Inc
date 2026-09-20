import { benefits } from "./careersData";

export function CareersBenefitsSection() {
    return (
        <section className="mx-auto mb-10 max-w-5xl">
            <h2 className="mb-6 text-xl font-semibold text-[#111827]">Why Join Us</h2>
            <div className="grid gap-4 md:grid-cols-3">
                {benefits.map((benefit) => (
                    <div
                        key={benefit.title}
                        className="rounded-2xl border border-[#e5e1dc] bg-[#f7f5f3] p-5"
                    >
                        <benefit.icon className="h-6 w-6 text-[#1f3c5b]" />
                        <h3 className="mt-3 font-semibold text-[#111827]">{benefit.title}</h3>
                        <p className="mt-2 text-sm text-[#4b5563]">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
