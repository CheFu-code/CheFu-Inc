import type { TermsSection } from "../AppTermsOfService";
import { commonTermsSections } from "../shared-sections";

export const muzaloTerms: TermsSection[] = [
    {
        id: "using-muzalo",
        title: "Using Muzalo and parental permission",
        content: <>
            <p>Muzalo plays audio files from the music folder you authorise on your device. It lets you organise a library, create playlists, save favourites, edit library information and lyrics, and control playback. Local playback does not require an account with us.</p>
            <p>Children may use Muzalo. A parent or legal guardian must authorise a child&apos;s use of online lyrics lookups and downloads, or the submission of personal information to us. A parent or guardian must also authorise use where the child cannot legally agree to these terms alone.</p>
        </>,
    },
    {
        id: "music-lyrics-and-content-rights",
        title: "Music, lyrics and content rights",
        content: <>
            <p>You are responsible for having the right to access, play, copy, download or edit the audio, artwork and lyrics you use with Muzalo. The ability to open a file or retrieve lyrics does not grant a copyright licence or permission to redistribute the material.</p>
            <p>We provide a player and library tools, not ownership of or distribution rights to the music on your device. Your files and any original content you create remain yours to the extent that you own the relevant rights. Music, artwork and lyrics belonging to others remain subject to their rights.</p>
        </>,
    },
    {
        id: "lyrics-and-downloads",
        title: "Online lyrics and downloads",
        content: <>
            <p>The fetch-lyrics action requests lyrics from LRCLIB using the selected track&apos;s artist and title. Results depend on that service and may be missing, incorrect or out of sync. You can enter and edit lyrics locally. We do not guarantee the accuracy or continued availability of external lyrics.</p>
            <p>A download action retrieves an audio file from its remote source and saves it to the folder you authorise. Use it only for files you are entitled to download. It does not bypass a source&apos;s access restrictions or give you rights that the source or rights holder has not granted. Your network provider&apos;s data charges may apply.</p>
        </>,
    },
    {
        id: "device-permissions-and-local-data",
        title: "Device permissions and local data",
        content: <>
            <p>Folder access is needed to load your local library and save downloads. Background playback, media controls and the Android widget depend on your device and its settings. You can manage permissions in device settings; removing a permission can prevent the related feature from working.</p>
            <p>Library records, playlists, lyrics edits and playback preferences are stored on your device. We do not provide a cloud backup or remote recovery service for that local database. Keep separate copies of music and other material you want to preserve.</p>
            <p>You can stop using Muzalo and uninstall it at any time. Clearing app storage removes its local database and preferences. Files saved in your chosen music folder, including downloads, need to be managed separately with your file manager. Device backup and restore settings may affect which local data is restored.</p>
        </>,
    },
    ...commonTermsSections("Muzalo"),
];
