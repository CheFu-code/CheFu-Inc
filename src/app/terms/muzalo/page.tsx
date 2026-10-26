import { pageMetadata } from "../../site-metadata";
import { AppTermsOfService } from "../AppTermsOfService";
import { muzaloTerms } from "./terms";

export const metadata = pageMetadata({
    title: "Muzalo Terms of Service",
    description: "Terms for using Muzalo, including local music files, content rights, lyrics lookups, downloads and device storage.",
    path: "/terms/muzalo",
});

export default function Page() {
    return <AppTermsOfService
        appName="Muzalo"
        summary="These terms explain how you may use our music player, your responsibilities for music and lyrics, and how local storage and online features work."
        sections={muzaloTerms}
    />;
}
