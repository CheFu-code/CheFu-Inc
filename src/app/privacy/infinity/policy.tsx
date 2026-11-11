import type { PrivacySection } from "../AppPrivacyPolicy";
import { privacyContactSections } from "../shared-sections";

export const infinitySections: PrivacySection[] = [
    {
        id: "information-at-a-glance",
        title: "Information at a glance",
        content: <>
            <p>Infinity is a number-merging game operated by Chefu Technologies. The game is designed to work without an account, registration or cloud profile. You can play the core game without signing in and without providing your name, email address or phone number.</p>
            <p>Most gameplay information stays on the device where you play. Some information may be processed by online service providers when the app displays advertisements, reports technical problems, checks for compatible updates, or sends a local reminder after you grant notification permission.</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full text-sm">
                    <caption className="sr-only">Infinity information, storage and purposes</caption>
                    <thead><tr><th scope="col">Information or activity</th><th scope="col">Where it is handled</th><th scope="col">Why it is used</th></tr></thead>
                    <tbody>
                        <tr><th scope="row">Board, score and current game</th><td>Local device storage</td><td>Save, resume and display your game</td></tr>
                        <tr><th scope="row">Progress and achievements</th><td>Local device storage</td><td>Track your best score, levels and unlocked achievements</td></tr>
                        <tr><th scope="row">Gameplay preferences</th><td>Local device storage or device memory</td><td>Remember sound, vibration and theme preferences</td></tr>
                        <tr><th scope="row">Technical diagnostics</th><td>Our diagnostics service</td><td>Investigate crashes, errors and failed operations</td></tr>
                        <tr><th scope="row">Advertisements</th><td>Our advertising service</td><td>Display banner and optional rewarded advertisements</td></tr>
                        <tr><th scope="row">Reminder notifications</th><td>Your device&apos;s notification system</td><td>Remind you about an unfinished game when enabled</td></tr>
                        <tr><th scope="row">Application updates</th><td>Our update delivery services</td><td>Check for and deliver compatible application updates</td></tr>
                        <tr><th scope="row">Support requests</th><td>Our correspondence systems</td><td>Respond to messages, privacy requests and legal enquiries</td></tr>
                    </tbody>
                </table>
            </div>
        </>,
    },
    {
        id: "local-game-data",
        title: "Game data stored on your device",
        content: <>
            <p>Infinity stores game information locally so that you can close the app and continue later. Depending on the version and platform, this information is stored using the device&apos;s application storage or the browser&apos;s local storage.</p>
            <p>Local game information can include:</p>
            <ul>
                <li>The current board and the value of each occupied tile.</li>
                <li>Your current score, best score, level and highest tile reached.</li>
                <li>The time a game or level was started and the most recent time the game was opened.</li>
                <li>Move history used to provide the undo feature.</li>
                <li>Whether a game has been won, whether you chose to continue after winning, and whether a game is over.</li>
                <li>Achievements, progress milestones and unlocked levels.</li>
                <li>Sound, vibration and appearance preferences.</li>
            </ul>
            <p>This information is used to operate the game and is not intended to identify you as a person. We do not use it to create a cloud account, public profile, leaderboard or cross-device profile. We do not intentionally upload your saved board or game database to our servers.</p>
            <p>Local storage is not the same as a guarantee that no copy can ever exist outside the app. Your operating system, device backup settings, browser, screen-capture tools or other software may copy information independently of Infinity. Those copies are controlled by the relevant device or service settings.</p>
        </>,
    },
    {
        id: "deletion-and-reset",
        title: "Deleting local game data",
        content: <>
            <p>You can remove local Infinity records by using any reset or clear-progress option provided in the app. You can also clear Infinity&apos;s application storage through your device settings, clear the site&apos;s storage in your browser, or uninstall the application. The exact steps depend on your device and operating system.</p>
            <p>Resetting local data removes the copy available to Infinity on that device. It does not recall information already included in technical reports, advertising requests, update requests, notifications delivered by your device, device backups or correspondence that you have sent to us.</p>
            <p>Because Infinity does not provide cloud game synchronisation, we generally cannot restore a deleted local game or retrieve a lost local score. Device backup and restore features may preserve or restore local records according to your operating-system settings.</p>
        </>,
    },
    {
        id: "diagnostics",
        title: "Technical diagnostics and error reporting",
        content: <>
            <p>Infinity sends selected technical information to our diagnostics service when the app encounters a crash, exception, failed operation or other configured event. This helps us understand reliability problems and improve the game.</p>
            <p>Depending on the event and the device, a report may contain an error message, stack trace, event time, application version, release information, operating-system version, device model, screen or platform details, language or region settings, network information, generated technical identifiers and diagnostic breadcrumbs.</p>
            <p>Diagnostic breadcrumbs may describe actions immediately before an error, such as opening a screen, attempting an update, loading an advertisement or using a game control. They are intended to explain a technical failure, not to create a behavioural profile.</p>
            <p>Some network information, including an IP address, may be visible to the service that receives a report because it is required to deliver internet traffic. An IP address may indicate an approximate area. Infinity does not request precise device location for ordinary gameplay.</p>
            <p>Diagnostics may be sent when connectivity returns if the application or operating system temporarily queues a report. Turning off connectivity does not erase information that was already sent. We retain diagnostic information for as long as reasonably needed to investigate errors, protect the service, and improve reliability, subject to the receiving service&apos;s applicable retention controls.</p>
            <p>Infinity does not currently provide a separate in-app switch to disable all diagnostics. You may contact <a href="mailto:privacy@chefu.co.za">privacy@chefu.co.za</a> with questions or an objection, although technical limitations may affect our ability to identify a report that does not contain a direct account identifier.</p>
        </>,
    },
    {
        id: "advertising",
        title: "Advertisements",
        content: <>
            <p>Infinity may display banner advertisements and optional rewarded advertisements. A rewarded advertisement may be offered when you choose to use a feature that provides an in-game benefit, such as an additional undo opportunity. You do not have to watch a rewarded advertisement to play the core game.</p>
            <p>The app requests non-personalised advertising where supported by the current configuration. Advertising providers may nevertheless process technical information needed to deliver an advertisement, prevent fraud, measure delivery, enforce frequency limits and maintain the advertising service. This can include device, application, network and advertising-related information.</p>
            <p>Advertising requests may be affected by your device settings, platform consent choices, regional requirements, the availability of advertisements and the provider&apos;s own policies. You can manage available advertising, privacy and tracking controls through your device or platform settings where those controls are offered.</p>
            <p>We do not ask you to provide a name, email address or phone number to receive an advertisement. We do not sell your personal information. We do not intentionally send your locally saved board or full game history to an advertising provider.</p>
        </>,
    },
    {
        id: "notifications",
        title: "Reminder notifications",
        content: <>
            <p>If you grant notification permission, Infinity may schedule a local reminder when you have an active game. The reminder is generated for your device and may refer generally to returning to your game and improving your score.</p>
            <p>Infinity does not need notification permission for core gameplay. You can decline permission, disable the notification category, or revoke notification access in your device settings. The availability and names of these controls depend on your operating system.</p>
            <p>Infinity does not use reminder notifications to request your contact list, read your messages or monitor your location. A notification may still be visible to anyone who can view notifications on your device, depending on your lock-screen settings.</p>
        </>,
    },
    {
        id: "updates",
        title: "Application updates and external links",
        content: <>
            <p>Native versions of Infinity may check for compatible application updates when the app starts or when the platform requests an update check. Update requests and downloads may include your IP address, platform, application version, runtime information, device or installation identifiers, and information needed to select a compatible update.</p>
            <p>Update code and assets may be cached on your device. Update availability can depend on your network, platform, release channel, device compatibility and whether the app is installed through an official application store. Existing bundled gameplay remains available according to the installed version when the network is unavailable.</p>
            <p>Links in the app may open a browser or another application. The destination may process information under its own privacy notice, including information needed to serve the destination. A link leaving Infinity does not mean that Infinity controls the destination&apos;s processing.</p>
        </>,
    },
    {
        id: "security-and-children",
        title: "Security, children and responsible use",
        content: <>
            <p>We use reasonable technical and organisational measures for the information handled through Infinity and its supporting services. No internet transmission, device storage system or third-party service can be guaranteed to be completely secure.</p>
            <p>Infinity is a general entertainment game and does not require an account. Children may use it where permitted by a parent or guardian and applicable law. Advertising, diagnostics, update requests and notifications may involve online or device processing even though the game itself can be played locally. Parents and guardians should review the device&apos;s permission, advertising and notification settings.</p>
            <p>Infinity does not intentionally request a child&apos;s name, address, school, contacts, precise location or private messages. Please do not enter sensitive personal information into a support message or diagnostic feedback form.</p>
        </>,
    },
    ...privacyContactSections("Infinity"),
];
