import type { TermsSection } from "../AppTermsOfService";
import { commonTermsSections } from "../shared-sections";

export const infinityTerms: TermsSection[] = [
    {
        id: "using-infinity",
        title: "Using Infinity and agreeing to these terms",
        content: <>
            <p>Infinity is a number-merging game operated by Chefu Technologies. It provides a local game board, score tracking, levels, achievements, undo features, sound, vibration and appearance settings. You do not need an account or sign-in to use the core game.</p>
            <p>By downloading, opening or using Infinity, you agree to these app-specific terms and our general Terms of Service. If you do not agree, do not use the app. Where you cannot enter into a binding agreement yourself, a parent or legal guardian must authorise your use and agree on your behalf where required by law.</p>
            <p>You may use Infinity only for lawful personal entertainment. You must not interfere with the app, bypass technical protections, reverse engineer it except where applicable law permits, misuse advertisements or updates, or use the app to violate another person&apos;s rights or applicable law.</p>
        </>,
    },
    {
        id: "gameplay-and-progress",
        title: "Gameplay, scores and achievements",
        content: <>
            <p>Infinity generates a board, adds tiles after eligible moves, calculates scores and determines progress using the rules included in the installed version. The app may provide levels, achievements, best scores and an undo opportunity. These features are for entertainment and do not create a cash value, prize entitlement, competition result or guarantee of a particular outcome.</p>
            <p>Scores, achievements, levels and statistics can be affected by an update, a device failure, a corrupted local save, clearing storage, an interrupted write, an unsupported platform or a change in the installed version. We do not promise that your score or progress will always be preserved or synchronised across devices.</p>
            <p>The game rules, tile probabilities, level thresholds, promotion rules and available features may change as we maintain or improve Infinity. An update may alter how an existing game is displayed or calculated. These changes do not remove mandatory consumer rights.</p>
            <p>Do not represent a locally stored score or achievement as an independently verified result. Infinity does not currently provide a competitive leaderboard, multiplayer service, cash tournament or official score-certification service.</p>
        </>,
    },
    {
        id: "local-storage-and-data-loss",
        title: "Local storage and data loss",
        content: <>
            <p>Your current board, score, move history, best score, achievements, level progress, timestamps and gameplay preferences are stored locally on the device or browser where you use Infinity. We use this information to resume your game and apply your settings.</p>
            <p>We do not provide an Infinity account, cloud save, remote recovery, cross-device synchronisation or guaranteed backup for local game records. Clearing application or browser storage, uninstalling the app, changing devices, changing browser profiles, restoring an older backup or experiencing a device failure may remove or change your progress.</p>
            <p>You are responsible for deciding whether your device backup and storage settings are suitable for you. We cannot reconstruct a board, score or achievement that was stored only on your device and was later deleted or lost. This practical limitation does not waive a legal remedy for a failure for which we are responsible.</p>
            <p>You may reset local progress using an available in-app reset option, by clearing the app or site storage, or by uninstalling the app. Resetting local data may be irreversible.</p>
        </>,
    },
    {
        id: "advertisements-and-rewards",
        title: "Advertisements and optional rewards",
        content: <>
            <p>Infinity may display banner advertisements and optional rewarded advertisements. A rewarded advertisement may be offered when you choose an in-game benefit, such as an additional undo opportunity. The core game does not require you to watch a rewarded advertisement.</p>
            <p>Advertisement availability, presentation, frequency, eligibility and technical behaviour may depend on your device, region, network, consent choices, platform settings and the advertising service. We do not guarantee that an advertisement will always be available or that a reward will be granted if an advertisement fails, is closed early or cannot be verified.</p>
            <p>You must not click, view or interact with advertisements through automated means, misleading activity or activity intended to generate invalid traffic. Do not use tools or modifications that interfere with advertisements or attempt to obtain rewards without completing the relevant in-app flow.</p>
            <p>Advertising and related information handling are described in the Infinity Privacy Policy. The advertising service may have its own terms and privacy notice. We do not make every advertiser&apos;s product, claim or destination our own.</p>
        </>,
    },
    {
        id: "diagnostics-and-updates",
        title: "Diagnostics, updates and network features",
        content: <>
            <p>Infinity may send technical diagnostics about crashes, errors and failed operations. The Infinity Privacy Policy explains the categories of information that may be included. Diagnostics are intended to help us maintain the app and are not a promise that every error will be detected or corrected.</p>
            <p>Native versions may check for and receive compatible application updates. Updates may change the game rules, features, appearance, device compatibility, local data format or behaviour. Update delivery depends on connectivity, platform availability, device compatibility and release configuration.</p>
            <p>Infinity can provide core gameplay without a network connection, but advertisements, diagnostics, update checks, support links and other external features may require network access. Your network provider may charge you for data. We do not promise uninterrupted access to any online service used by these features.</p>
            <p>Do not treat an update, diagnostic message or in-app status as a guarantee that local data has been backed up or that a game result has been stored remotely.</p>
        </>,
    },
    {
        id: "notifications-and-device-features",
        title: "Notifications and device features",
        content: <>
            <p>If you grant permission, Infinity may schedule a local reminder about an active or unfinished game. Notifications are a convenience and are not guaranteed to appear at a particular time. Battery-saving settings, permissions, focus modes, operating-system limits or device restarts may prevent or delay them.</p>
            <p>Sound, vibration, haptics, theme selection, clipboard actions and other device features depend on your hardware, operating system, permissions and settings. You can disable available permissions or features through the app or your device settings.</p>
            <p>Infinity does not need access to your contacts, messages or precise location for ordinary gameplay. Do not provide sensitive information in a feedback form or support message.</p>
        </>,
    },
    {
        id: "children-and-responsible-use",
        title: "Children and responsible use",
        content: <>
            <p>Infinity is a general entertainment game. Children may use it where permitted by a parent or legal guardian and applicable law. A parent or guardian should review device permissions, advertising settings, notification settings and the Infinity Privacy Policy before permitting use.</p>
            <p>Infinity does not intentionally ask players to create an account or provide a name, address, school, contacts or precise location. Parents and guardians should consider that advertisements, diagnostics, update requests and device notifications may involve online or device processing.</p>
            <p>Do not use Infinity while driving, operating machinery or in another situation where attention to the game could create a safety risk. Take breaks and use the app responsibly.</p>
        </>,
    },
    {
        id: "ending-use",
        title: "Stopping use and privacy requests",
        content: <>
            <p>You can stop using Infinity at any time and remove it from your device. Removing the app does not automatically erase diagnostic reports, advertising records, update-service records, notification records or correspondence already processed by an online or device service.</p>
            <p>Because Infinity does not provide an account, there is no Infinity profile to close. Follow the Infinity Privacy Policy to request information about processing, correction or deletion where applicable. You can contact <a href="mailto:privacy@chefu.co.za">privacy@chefu.co.za</a> for privacy questions.</p>
        </>,
    },
    ...commonTermsSections("Infinity"),
];
