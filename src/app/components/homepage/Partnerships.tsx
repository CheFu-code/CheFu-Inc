import { BusinessPartners } from "../BusinessPartners";

export function Partnerships() {
    return (
        <section aria-labelledby="partnerships-heading" className="border-t border-[#e5e1dc] bg-white py-10 sm:py-12">
            <div className="mx-auto max-w-6xl px-6">
                <h2 id="partnerships-heading" className="mb-6 text-xl font-semibold tracking-[-0.05em] text-[#111827] sm:text-3xl">
                    Our partnerships
                </h2>
                <BusinessPartners />
            </div>
        </section>
    );
}
