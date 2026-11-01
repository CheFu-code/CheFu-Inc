import { pageMetadata } from "../../site-metadata";
import { AppPrivacyPolicy } from "../AppPrivacyPolicy";
import { infinitySections } from "./policy";

export const metadata = pageMetadata({
    title: "Infinity Privacy Policy",
    description: "How Infinity handles local game progress, advertisements, diagnostics, notifications and updates.",
    path: "/privacy/infinity",
});

export default function Page() {
    return <AppPrivacyPolicy
        appName="Infinity"
        summary="Infinity stores game progress locally on your device. The app also uses advertisements, technical diagnostics, notifications and update services that may process limited information online."
        sections={infinitySections}
    />
}
