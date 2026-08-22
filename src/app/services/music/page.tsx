import { MusicServicePage } from "../../pages/services/MusicServicePage";
import { pageMetadata } from "../../site-metadata";

export const metadata = pageMetadata({
    title: "Music Production Services | CHEFU TECHNOLOGIES",
    description:
        "Professional recording, mixing, mastering, beat production, and audio sound design packages from CHEFU TECHNOLOGIES",
    path: "/services/music",
});

export default function Page() {
    return <MusicServicePage />;
}
