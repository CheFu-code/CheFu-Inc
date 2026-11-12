import Image from "next/image";
import lenovoEmblem from "../../../public/Lenovo360_Emblem_Authorized.jpg";

export function LenovoPartnerBadge() {
    return (
        <Image
            src={lenovoEmblem}
            alt="Lenovo 360 Authorized Partner 2026"
            sizes="(max-width: 639px) 128px, 160px"
            className="h-auto w-32 shrink-0 sm:w-40"
        />
    );
}
