import Image from "next/image";

type DellPartnerBadgeProps = {
    compact?: boolean;
};

export function DellPartnerBadge({ compact = false }: DellPartnerBadgeProps) {
    return (
        <Image
            src="/DT_AuthorizedPartner/DT_AuthorizedPartner_Blue.png"
            alt="Dell Technologies Authorized Partner"
            width={879}
            height={255}
            sizes={compact ? "128px" : "(max-width: 639px) 192px, 224px"}
            className={compact ? "h-auto w-32 shrink-0" : "h-auto w-56 max-w-full"}
        />
    );
}
