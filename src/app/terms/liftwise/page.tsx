import { pageMetadata } from "../../site-metadata";
import { AppTermsOfService } from "../AppTermsOfService";
import { liftwiseTerms } from "./terms";

export const metadata = pageMetadata({
    title: "LiftWise Terms of Service",
    description: "Terms for using LiftWise, including our SSO, workout records, exercise guidance, uploaded images and account deletion.",
    path: "/terms/liftwise",
});

export default function Page() {
    return <AppTermsOfService
        appName="LiftWise"
        summary="These terms cover our workout tracker, your account through our SSO, exercise guidance, recorded progress and content you submit."
        sections={liftwiseTerms}
    />;
}
