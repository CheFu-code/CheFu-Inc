import { pageMetadata } from "../../site-metadata";
import { AppPrivacyPolicy } from "../AppPrivacyPolicy";
import { liftwiseSections } from "./policy";

export const metadata = pageMetadata({
    title: "LiftWise Privacy Policy",
    description: "How we handle LiftWise accounts, workout history, cover images, reminders, diagnostics and privacy requests.",
    path: "/privacy/liftwise",
});

export default function Page() {
    return <AppPrivacyPolicy
        appName="LiftWise"
        summary="We connect your account through our SSO with your LiftWise workouts, training history and preferences. This policy explains device storage, cloud services and diagnostics."
        sections={liftwiseSections}
    />;
}
