import { HPPartnerBadge } from "../HPPartnerBadge";

export function HPPartnership() {
    return (
        <section aria-labelledby="hp-partnership-heading" className="border-t border-[#e5e1dc] bg-white py-10 sm:py-12">
            <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:gap-10">
                <HPPartnerBadge />
                <div>
                    <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#6b7280]">
                        Our partnerships
                    </p>
                    <h2 id="hp-partnership-heading" className="text-2xl font-semibold tracking-[-0.05em] text-[#111827] sm:text-3xl">
                        HP Business Partner
                    </h2>
                    <p className="mt-3 max-w-xl text-base leading-7 text-[#5f5b56]">
                        Chefu Technologies is an official HP Business Partner.
                    </p>
                </div>
            </div>
        </section>
    );
}
