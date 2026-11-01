import { pageMetadata } from "../../site-metadata";
import { AppTermsOfService } from "../AppTermsOfService";
import { infinityTerms } from "./terms";

export const metadata = pageMetadata({
    title: "Infinity Terms of Service",
    description: "Terms for using Infinity, including local game progress, advertisements, diagnostics, notifications and updates.",
    path: "/terms/infinity",
});

export default function Page() {
    return <AppTermsOfService
        appName="Infinity"
        summary="These terms explain how you may use our number-merging game, how local progress works, and the practical limitations of advertisements, updates, diagnostics and device features."
        importantPoints="Infinity stores game progress locally without an account or cloud recovery service from us. Clearing app storage can remove your progress. Advertisements, diagnostics, notifications and update checks may use online or device services; read the Infinity Privacy Policy before use."
        sections={infinityTerms}
    />;
}
