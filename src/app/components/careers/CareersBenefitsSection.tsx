import { benefits } from "./careersData";

export function CareersBenefitsSection() {
    return (
        <section className="max-w-5xl mx-auto mb-10">
            <h2 className="text-2xl font-semibold text-white mb-6">Why Join Us</h2>
            <div className="grid md:grid-cols-3 gap-4">
                {benefits.map((benefit) => (
                    <div
                        key={benefit.title}
                        className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
                    >
                        <benefit.icon className="h-6 w-6 text-cyan-400" />
                        <h3 className="mt-3 text-white font-semibold">{benefit.title}</h3>
                        <p className="mt-2 text-sm text-slate-400">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
