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
            sizes={compact ? "(max-width: 639px) 96px, 160px" : "160px"}
            className={compact ? "h-auto w-24 shrink-0 sm:w-40" : "h-auto w-40 shrink-0"}
        />
    );
}
