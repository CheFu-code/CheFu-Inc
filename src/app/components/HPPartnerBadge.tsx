import Image from "next/image";

type HPPartnerBadgeProps = {
    compact?: boolean;
};

export function HPPartnerBadge({ compact = false }: HPPartnerBadgeProps) {
    return (
        <Image
            src="/hp-business-partner.png"
            alt="HP Business Partner"
            width={1380}
            height={1063}
            sizes={compact ? "120px" : "160px"}
            className={compact ? "h-auto w-[120px] shrink-0" : "h-auto w-40 shrink-0"}
        />
    );
}
