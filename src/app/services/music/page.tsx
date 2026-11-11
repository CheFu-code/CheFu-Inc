import { MusicServicePage } from "../../pages/services/MusicServicePage";
import { pageMetadata } from "../../site-metadata";

export const metadata = pageMetadata({
    title: "Music Production Services | Chefu Technologies",
    description:
        "Professional recording, mixing, mastering, beat production, and audio sound design packages from Chefu Technologies",
    path: "/services/music",
});

export default function Page() {
    return <MusicServicePage />;
}
