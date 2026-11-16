import { pageMetadata } from "../../site-metadata";
import { AppPrivacyPolicy } from "../AppPrivacyPolicy";
import { shopYethuSections } from "./policy";

export const metadata = pageMetadata({
    title: "ShopYethu Privacy Policy",
    description: "How ShopYethu handles marketplace accounts, seller applications, listings, orders, reports and device data.",
    path: "/privacy/shopyethu",
});

export default function Page() {
    return <AppPrivacyPolicy
        appName="ShopYethu"
        summary="This notice explains how ShopYethu handles buyer and seller account information, marketplace activity, uploaded listing photos and information stored on your device."
        sections={shopYethuSections}
        lastUpdated={{ dateTime: "2026-11-16", label: "November 16, 2026" }}
    />;
}
