import { MusicServicePage } from "../../pages/services/MusicServicePage";
import { pageMetadata } from "../../site-metadata";

export const metadata = pageMetadata({
    title: "Music Production Services | CheFu Inc.",
    description:
        "Professional recording, mixing, mastering, beat production, and audio sound design packages from CheFu Inc.",
    path: "/services/music",
});

export default function Page() {
    return <MusicServicePage />;
}
