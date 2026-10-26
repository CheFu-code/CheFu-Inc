import type { PrivacySection } from "../AppPrivacyPolicy";
import { privacyContactSections } from "../shared-sections";

export const muzaloSections: PrivacySection[] = [
    {
        id: "music-on-your-device",
        title: "Music and information on your device",
        content: <>
            <p>Muzalo is a music player for your local audio library. You do not need an account with us to use it. When you choose a music folder, Muzalo reads audio files and their metadata to build your library and play your music.</p>
            <p>The app stores the following information on your device:</p>
            <ul>
                <li>Song file locations, filenames, titles, artists, albums, duration, file size, year and artwork.</li>
                <li>Playlists, playlist descriptions, favourites, play counts and recently played information.</li>
                <li>Lyrics and synced lyrics you retrieve, enter, edit or synchronise, and changes you make to song information.</li>
                <li>Your chosen music folder, playback queue, current track, playback position, volume, shuffle, repeat and lyrics display preferences.</li>
            </ul>
            <p>This information is used to organise your library, display song details, resume playback and remember your choices. Muzalo uses a local database, app storage and cached files for these functions. We do not receive uploads of your audio library, playlists or listening history.</p>
        </>,
    },
    {
        id: "lyrics-and-network-requests",
        title: "Lyrics and other network requests",
        content: <>
            <p>When you use the fetch-lyrics action, Muzalo sends the selected song&apos;s artist name and title to <a href="https://lrclib.net">LRCLIB</a> to find plain or synchronised lyrics. This lookup does not send the audio file, your entire library, or your playlists.</p>
            <p>LRCLIB receives the lookup terms and the network information needed to serve the request, including your IP address. Retrieved lyrics are saved locally so the app can display them again. You can use local playback and enter lyrics yourself without using this lookup.</p>
            <p>When you use a download action for an audio file hosted online, Muzalo contacts the server hosting that file and saves the downloaded audio to the folder you authorise. That server receives the file request and your IP address. Files saved to your selected folder remain outside the app&apos;s private storage.</p>
        </>,
    },
    {
        id: "permissions-and-device-features",
        title: "Permissions and device features",
        content: <>
            <ul>
                <li><strong>Files and folders:</strong> Muzalo asks you to select and authorise a music folder on Android. It uses access to read and index songs, cache audio or artwork, and save downloads. Denying access prevents it from loading music from that folder.</li>
                <li><strong>Clipboard:</strong> the lyrics editor reads clipboard text when you press &quot;Paste from Clipboard&quot; so you can insert lyrics.</li>
                <li><strong>Background playback:</strong> the app uses background audio and Android playback services to keep music playing and provide media controls.</li>
                <li><strong>Lock screen, notifications and widget:</strong> playback controls can display the current song title, artist and artwork outside the app. Other people who can see your device may see those details.</li>
            </ul>
            <p>You can manage app permissions and lock-screen visibility through your device settings. Disabling a permission may prevent the related feature from working.</p>
        </>,
    },
    {
        id: "advertising-and-sharing",
        title: "Advertising and sharing",
        content: <>
            <p>Muzalo does not include advertising, advertising identifiers, behavioural analytics or a crash-reporting service. It does not sell your music library or listening history. The external requests described above are used to deliver the lyrics and download features.</p>
            <p>If you contact us for support, we receive the information you choose to send, such as your email address, device details and problem description. Avoid sending private audio files or other sensitive material unless it is necessary to explain your request.</p>
        </>,
    },
    {
        id: "local-storage-and-removal",
        title: "Local storage and removal",
        content: <>
            <p>Muzalo keeps its library database and playback preferences on your device so they remain available between sessions. You can remove playlists and favourites within the app. To reset the app&apos;s local database and preferences on Android, use the device&apos;s app settings to clear Muzalo&apos;s storage.</p>
            <p>Clearing app storage does not delete your original music files or downloads saved in a folder you selected. Manage those files separately with your device&apos;s file manager. Uninstalling or clearing the app also does not remove copies held in device backups; backup and restore behaviour depends on your operating system and backup settings.</p>
            <p>We cannot remotely inspect, export or erase the music database stored only on your device.</p>
            <p>Information you send us for support or a privacy request is kept only as needed to handle that request and related service needs. We delete or de-identify it when it is no longer needed, including when a verified deletion request is handled, except for records that must be kept for a specific legal obligation or legal claim. We do not host a copy of your local music database.</p>
        </>,
    },
    {
        id: "children",
        title: "Children and parental permission",
        content: <>
            <p>Children may use Muzalo. A parent or legal guardian must authorise a child&apos;s use of online features, including lyrics lookups and downloads, or the submission of personal information to us. Local music playback does not require an account with us.</p>
            <p>A parent or guardian can contact <a href="mailto:privacy@chefu.co.za">privacy@chefu.co.za</a> about information a child has sent to us or to request its deletion. The music library stored only on the child&apos;s device must be managed on that device.</p>
        </>,
    },
    ...privacyContactSections("Muzalo"),
];
