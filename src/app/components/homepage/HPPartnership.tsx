import { HPPartnerBadge } from "../HPPartnerBadge";

export function HPPartnership() {
    return (
        <section aria-labelledby="hp-partnership-heading" className="border-t border-[#e5e1dc] bg-white py-10 sm:py-12">
            <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6">
                <div className="flex w-full flex-row items-center gap-4 sm:gap-10">
                    <HPPartnerBadge compact />
                    <div className="min-w-0">
                        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#6b7280] sm:mb-3 sm:text-[11px] sm:tracking-[0.22em]">
                            Our partnerships
                        </p>
                        <h2 id="hp-partnership-heading" className="text-xl font-semibold tracking-[-0.05em] text-[#111827] sm:text-3xl">
                            HP Business Partner
                        </h2>
                    </div>
                </div>
                <p className="max-w-xl text-base leading-7 text-[#5f5b56]">
                    Chefu Technologies is an official HP Business Partner.
                </p>
            </div>
        </section>
    );
}
