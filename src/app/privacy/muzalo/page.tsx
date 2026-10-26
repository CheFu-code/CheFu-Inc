import { pageMetadata } from "../../site-metadata";
import { AppPrivacyPolicy } from "../AppPrivacyPolicy";
import { muzaloSections } from "./policy";

export const metadata = pageMetadata({
    title: "Muzalo Privacy Policy",
    description: "How Muzalo handles your local music library, lyrics lookups, device permissions and playback information.",
    path: "/privacy/muzalo",
});

export default function Page() {
    return <AppPrivacyPolicy
        appName="Muzalo"
        summary="Your music library and playback preferences are stored on your device. Online lyrics lookups send the selected song's title and artist to LRCLIB."
        sections={muzaloSections}
    />;
}
