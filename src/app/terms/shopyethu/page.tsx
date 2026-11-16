import { pageMetadata } from "../../site-metadata";
import { AppTermsOfService } from "../AppTermsOfService";
import { shopYethuTerms } from "./terms";

export const metadata = pageMetadata({
    title: "ShopYethu Terms of Service",
    description: "ShopYethu terms for marketplace buyers and sellers, including applications, listings, orders and fulfilment.",
    path: "/terms/shopyethu",
});

export default function Page() {
    return <AppTermsOfService
        appName="ShopYethu"
        summary="These terms cover ShopYethu's buyer and seller marketplace, CheFu sign-in, seller applications, listings, orders and reports."
        importantPoints="ShopYethu connects marketplace buyers and sellers. Seller applications are reviewed, but approval does not guarantee a transaction. Marketplace orders are disabled by default; the app does not currently process online payments or provide delivery. Read the ordering, fulfilment and privacy sections before using the marketplace."
        sections={shopYethuTerms}
        lastUpdated={{ dateTime: "2026-11-16", label: "November 16, 2026" }}
    />;
}
