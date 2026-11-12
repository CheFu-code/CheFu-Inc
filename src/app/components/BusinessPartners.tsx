import { HPPartnerBadge } from "./HPPartnerBadge";
import { LenovoPartnerBadge } from "./LenovoPartnerBadge";

export function BusinessPartners() {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            <article className="flex flex-col items-start gap-5 rounded-xl border border-[#e5e1dc] bg-white p-5 sm:p-6">
                <div className="flex h-32 items-center">
                    <HPPartnerBadge compact />
                </div>
                <div>
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#111827]">HP Business Partner</h3>
                    <p className="mt-2 text-sm leading-6 text-[#5f5b56]">
                        Chefu Technologies is an official HP Business Partner.
                    </p>
                </div>
            </article>
            <article className="flex flex-col items-start gap-5 rounded-xl border border-[#e5e1dc] bg-white p-5 sm:p-6">
                <div className="flex h-32 items-center">
                    <LenovoPartnerBadge />
                </div>
                <div>
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#111827]">Lenovo 360 Authorized Partner</h3>
                    <p className="mt-2 text-sm leading-6 text-[#5f5b56]">
                        Chefu Technologies is a Lenovo 360 Authorized Partner for 2026.
                    </p>
                </div>
            </article>
        </div>
    );
}
