import type { PrivacySection } from "../AppPrivacyPolicy";
import { privacyContactSections } from "../shared-sections";

export const sudokuSections: PrivacySection[] = [
    {
        id: "information-at-a-glance",
        title: "Where your information goes",
        content: <>
            <p>Sudoku is a puzzle game with bundled puzzles, local game saves, hints, statistics and difficulty progression. You do not need an account or our SSO to play. Core gameplay works without an internet connection, but the current app also includes online diagnostics and automatic update checks.</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full text-sm">
                    <caption className="sr-only">Sudoku information, storage and recipients</caption>
                    <thead><tr><th scope="col">Information or action</th><th scope="col">Where it is handled</th><th scope="col">Purpose</th></tr></thead>
                    <tbody>
                        <tr><th scope="row">Puzzle board and saved game</th><td>Local app storage; browser storage in the web version</td><td>Play, provide hints and resume a game</td></tr>
                        <tr><th scope="row">Statistics and puzzle history</th><td>Local app or browser storage</td><td>Remember played puzzles, best times, achievements and unlocked difficulties</td></tr>
                        <tr><th scope="row">Settings</th><td>Device memory on native builds; browser storage on web</td><td>Apply your theme and gameplay preferences</td></tr>
                        <tr><th scope="row">Diagnostics and session replay</th><td>Sentry</td><td>Investigate crashes, errors and interface problems</td></tr>
                        <tr><th scope="row">Update checks and downloads</th><td>Expo&apos;s EAS Update service and delivery infrastructure</td><td>Check for and deliver compatible app updates</td></tr>
                        <tr><th scope="row">Support or privacy correspondence</th><td>Our correspondence systems and relevant providers</td><td>Respond to the request you send</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Local storage is not the same as a promise that no information leaves the device. Diagnostics and update requests can disclose network and device information, and a replay may include aspects of your interaction with the game.</p>
        </>,
    },
    {
        id: "saved-games-and-progress",
        title: "Saved games, statistics and preferences",
        content: <>
            <p>The native app stores the current game and progression records in a local SQLite-backed store. The web version uses the browser&apos;s local storage. These records can include:</p>
            <ul>
                <li>The puzzle identifier, difficulty, starting clues, entered numbers and pencil notes.</li>
                <li>Elapsed time, mistakes, hints used, undo and redo history, and the saved game&apos;s update time.</li>
                <li>Identifiers of previously played puzzles, completed-game counts, completion counts by difficulty, best times, achievements and unlocked difficulty levels.</li>
                <li>Theme, default fast mode, note validation and the mistake-limit preference.</li>
            </ul>
            <p>These records make the game work and personalise it on your device. Puzzle selection, solving, hint calculations and progression calculations happen locally. They do not require sending your board to an AI service or a puzzle server.</p>
            <p>The native settings adapter currently keeps preferences in memory, so those preferences may reset when the app process restarts. Saved games and progress use a different, durable local store. Web preferences can persist in browser storage where it is available. We do not provide an account-based backup, leaderboard or cross-device synchronisation service for these records.</p>
            <p>We do not intentionally upload the saved-game database to our servers. This does not exclude information visible in diagnostics or replay, information you send us yourself, or copies made by your device&apos;s backup service.</p>
        </>,
    },
    {
        id: "diagnostics-and-replay",
        title: "Sentry diagnostics, logs and session replay",
        content: <>
            <p>Sudoku starts the Sentry SDK when the app starts. We use it to investigate crashes, exceptions, failed operations and interface problems. For example, an error opening a Settings link is reported to Sentry.</p>
            <p>Reports can contain error messages, stack traces, event times, app and release versions, device and operating-system details, SDK-generated identifiers, session information and diagnostic breadcrumbs or log entries where generated. The current configuration enables Sentry&apos;s default personal-information setting, so available network context, including an IP address, may be included. An IP address can indicate an approximate area; this is different from requesting precise device location.</p>
            <p>Diagnostic logging is enabled. Mobile session replay is configured to sample 10% of ordinary sessions and to capture error-associated replays at a 100% sampling rate, subject to SDK, platform and delivery limitations. This does not mean every session is recorded, or that a complete recording is always available.</p>
            <p>A replay is a visual reconstruction of the app interface and interactions around a problem. It can include interaction timing, navigation and aspects of the game screen. The SDK has masking protections for supported content, but we do not promise that every on-screen detail is masked in every platform or version. Replay is not microphone recording or recording of other apps.</p>
            <p>The current app does not offer a separate diagnostics or replay switch, an age check or a parental-consent verification flow before Sentry starts. Reading this policy or accepting the terms does not itself provide consent where the law requires it. You can contact <a href="mailto:privacy@chefu.co.za">privacy@chefu.co.za</a> to object, ask about processing or request deletion under applicable law.</p>
            <p>The Sentry feedback integration is also installed. If a feedback form is presented and you choose to submit it, the information you enter and associated technical context can be sent to Sentry. Do not put passwords, a child&apos;s school or address, or unrelated personal information into a report.</p>
            <p>See <a href="https://sentry.io/privacy/">Sentry&apos;s Privacy Policy</a> for its privacy information. The provider&apos;s notice does not replace our responsibilities for the app&apos;s configuration or the information processed on our behalf.</p>
        </>,
    },
    {
        id: "updates-and-external-links",
        title: "Automatic updates and external links",
        content: <>
            <p>The native app is configured to check for updates on launch through Expo&apos;s EAS Update service. Requests and downloads can disclose your IP address, a generated installation identifier, platform, runtime version and update identifiers or headers needed to select and deliver a compatible update. The installation identifier identifies an app installation and is not your Sudoku account; there is no Sudoku sign-in.</p>
            <p>Downloaded update code and assets can be cached on your device. Network availability, build type and platform affect whether a check or download occurs. Existing bundled puzzles remain available for offline play, but diagnostic information may be queued and sent after connectivity returns. Disconnecting temporarily does not delete information already sent.</p>
            <p>Settings links open a website in a browser. The destination receives the information needed to serve the page, and its own cookies or website services may operate. Our company website&apos;s privacy and cookie notices explain that separate activity. See <a href="https://expo.dev/privacy">Expo&apos;s Privacy Policy</a> for its provider information.</p>
        </>,
    },
    {
        id: "device-features",
        title: "Device features and clipboard",
        content: <>
            <p>Gameplay can use vibration or haptic feedback to confirm interactions. Tapping the version information in Settings writes the app name, version, build number and operating-system details to your clipboard so you can paste them into a support message. This action does not read the clipboard&apos;s previous contents or send its contents to us.</p>
            <p>Core puzzle play does not ask you to provide contacts, a photo library, microphone recordings or precise device location. You can manage device permissions through the operating system. Network diagnostics and update requests are separate from those permissions and can still disclose the information described above.</p>
            <p>Other apps or your device&apos;s clipboard and backup services may handle information you copy or back up under their own settings. On a shared device, another person with access to the app may see saved games and statistics.</p>
        </>,
    },
    {
        id: "advertising-and-recipients",
        title: "Advertising, recipients and information you send us",
        content: <>
            <p>The current game does not include advertising, an advertising network, in-app purchases or a payment checkout. We do not sell your personal information or use the app&apos;s diagnostic data for targeted advertising. Sentry diagnostics and replay still process information as described above.</p>
            <p>The ordinary online recipients identified by the current implementation are Sentry for diagnostics and replay, Expo and its delivery infrastructure for app updates, and websites you choose to open. Relevant staff and correspondence providers may handle information when you contact us.</p>
            <p>If you email support or our privacy contact, we receive your address, message and any attachments you include. App version and platform details can help resolve a problem. Please avoid sending a complete device backup or unnecessary information about you or a child. Correspondence is separate from the local puzzle records that we cannot ordinarily access.</p>
        </>,
    },
    {
        id: "lawful-grounds",
        title: "Purposes, lawful grounds and your choices",
        content: <>
            <p>We use local game information to provide the puzzle and progress features you request, technical reports to investigate faults and keep the app functioning, update-request information to deliver compatible software, and correspondence to respond to your request.</p>
            <p>For personal information we process, the applicable lawful ground depends on the activity and your jurisdiction. Relevant grounds can include performing our agreement where processing is necessary for the requested service, legitimate interests in maintaining a secure and functioning app and resolving support issues, a specific legal duty, or consent where required. Legitimate interests must be assessed against your rights and are not unlimited permission to collect information.</p>
            <p>Optional session replay and processing involving children can require additional legal conditions or consent. A claim of legitimate interests, a download or acceptance of terms does not automatically satisfy those requirements. The current automatic diagnostics configuration does not offer a separate in-app choice; that limitation does not remove your rights.</p>
            <p>You can play without supplying a name, email address or account profile. Sending a support message or feedback is your choice. Using the game offline prevents live online requests while disconnected, but is not an in-app opt-out from future diagnostics or update requests.</p>
        </>,
    },
    {
        id: "retention-and-deletion",
        title: "Retention and deleting information",
        content: <>
            <p>Saved games, played-puzzle identifiers and statistics remain in local app or browser storage until replaced or removed. A new game can replace the current save without clearing all statistics or played-puzzle history. There is no dedicated in-app control that erases every category of stored information at once.</p>
            <p>On Android you can clear the app&apos;s storage in device settings; on web you can clear the site&apos;s storage in your browser. Uninstalling can remove app-private data, but device backup and restore settings can preserve or restore copies. The Android app permits operating-system backup. Review the device or backup provider&apos;s controls separately. Clearing local data can reset progress and unlocked levels, and we cannot recover device-only records for you.</p>
            <p>Diagnostics, replay and correspondence are kept as needed for fault investigation, app operation and the request concerned. We delete or de-identify personal information when it is no longer needed for those purposes or when a verified deletion request is handled, except relevant records that must be retained for a specific legal obligation or legal claim. A possible future legal need does not justify keeping everything indefinitely.</p>
            <p>Send requests about information held by us or our providers to <a href="mailto:privacy@chefu.co.za">privacy@chefu.co.za</a>. Identify Sudoku and, where available, the approximate event date, app version and report reference. Because the game has no account, identifying a diagnostic event may require limited additional information. Do not send passwords or an entire device backup for verification.</p>
            <p>Uninstalling or clearing local storage does not automatically delete reports already received by Sentry, update-service records or correspondence. We do not promise a fixed provider retention period or automatic remote deletion triggered by uninstalling.</p>
        </>,
    },
    {
        id: "children",
        title: "Children and parental permission",
        content: <>
            <p>Sudoku is a puzzle game that children may play. A parent or legal guardian must authorise a child&apos;s use where the child cannot legally agree to terms alone, and must authorise online features and associated personal-information processing where required by law.</p>
            <p>For children: you do not need to enter your name or create an account to solve puzzles. Ask a parent or guardian before sending a message or feedback, and do not include your school, address or other private details.</p>
            <p>For parents: online diagnostics and replay currently start automatically when the app starts, without an age check or an in-app parental-permission verification process. Local puzzle storage does not mean the installed app has no online collection. This notice does not represent that verified parental consent has already been obtained.</p>
            <p>Where applicable law requires verified authorisation before collection, a permission statement in a policy is not a substitute. You can contact our privacy address to ask about information associated with your child, request access or deletion, or object to further processing under applicable law. We may need proportionate information to verify your authority and locate the relevant records.</p>
        </>,
    },
    {
        id: "local-calculations",
        title: "Hints, difficulty levels and automated calculations",
        content: <>
            <p>Hints, mistakes, completion times, achievements and difficulty unlocks are calculated locally from puzzle and gameplay state. The app does not send your board to an external AI model for solving. These features guide a puzzle game; they are not assessments of intelligence, health or educational attainment.</p>
            <p>We do not use those calculations to make decisions about employment, credit, insurance, healthcare or another similarly significant matter. If a game calculation appears wrong, you can describe the affected puzzle or action in a support request without supplying unrelated personal information.</p>
        </>,
    },
    ...privacyContactSections("Sudoku"),
];
