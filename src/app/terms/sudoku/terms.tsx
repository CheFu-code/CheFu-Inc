import type { TermsSection } from "../AppTermsOfService";
import { commonTermsSections } from "../shared-sections";

export const sudokuTerms: TermsSection[] = [
    {
        id: "playing-sudoku",
        title: "Playing Sudoku and agreeing to these terms",
        content: <>
            <p>Sudoku is a puzzle game with bundled puzzles, a resumable local game, pencil notes, undo and redo, hints, statistics, achievements and difficulty progression. You do not need an account or our SSO. Core puzzle solving works offline; diagnostics, updates and external links can use the network.</p>
            <p>Use the app for lawful puzzle play on a compatible device or browser. Children may play, but a parent or legal guardian must authorise use and agree on the child&apos;s behalf where the child cannot legally do so. A parent or guardian must also authorise a child&apos;s online processing where applicable law requires it.</p>
            <p>These terms describe the current app. They do not promise a multiplayer service, cash prizes, an online leaderboard, a subscription or cloud synchronisation.</p>
        </>,
    },
    {
        id: "puzzles-hints-and-progress",
        title: "Puzzles, hints and progression",
        content: <>
            <p>You choose a difficulty and solve a puzzle using the available number-entry, note, checking and hint tools. The app uses local rules and solving techniques to provide hints and calculate statistics or unlocked levels. It does not require an external AI service to solve your board.</p>
            <p>Difficulty labels are estimates. A hint, explanation, timer, mistake count or progression calculation may contain an error or behave differently after an update. We do not guarantee a particular solve time, an uninterrupted streak, a particular unlock outcome or that a puzzle will never repeat.</p>
            <p>These are entertainment features. They do not certify intelligence, provide a medical assessment or guarantee an educational result. Report a suspected puzzle or hint error with the relevant puzzle details and steps so that we can investigate.</p>
            <p>Progress and achievements have no cash value and do not create an entitlement to a prize or payment. Nothing here removes a remedy available under applicable consumer law if the app fails to meet a legally required standard.</p>
        </>,
    },
    {
        id: "local-storage",
        title: "Local saves, settings and data loss",
        content: <>
            <p>Your current game, played-puzzle records, statistics, achievements and unlocked difficulties are stored on the device or in the web browser&apos;s local storage. We do not provide an account-based backup, cross-device synchronisation or remote recovery service for those records.</p>
            <p>Starting a new game can replace your current saved game. Clearing app or site storage, reinstalling, changing browser profiles, device failure or an interrupted write can remove or affect local progress. Operating-system backup settings can also restore older records. Review those settings before clearing storage or changing devices.</p>
            <p>The native settings adapter currently holds preferences in memory, so theme or gameplay choices may reset when the process restarts. Saved-game and progress records use a separate durable store. Browser storage can also be unavailable, cleared or restricted by the browser.</p>
            <p>The app&apos;s ability to resume depends on a usable local save and compatible software. It is not a guarantee of permanent storage. We cannot reconstruct information that stayed only on your device. These practical limitations do not waive a legal remedy for a failure for which we are responsible.</p>
        </>,
    },
    {
        id: "online-diagnostics-and-updates",
        title: "Diagnostics, replay and automatic updates",
        content: <>
            <p>The app starts Sentry diagnostics and mobile session replay automatically and checks for compatible Expo updates on launch. The <a href="/privacy/sudoku">Sudoku Privacy Policy</a> describes the information involved, sampling, recipients and the absence of a separate in-app diagnostics or replay switch.</p>
            <p>Accepting these terms is not blanket consent to optional processing and does not replace any parental authorisation or other legal condition required for personal information. Offline gameplay does not mean that the installed app never sends information online.</p>
            <p>Updates may download code or assets and can change behaviour, puzzle tools or compatibility. They depend on connectivity and the installed build. Data and device-storage charges from your provider may apply. We do not promise that every device will receive every update at the same time or that online providers will always be available.</p>
        </>,
    },
    {
        id: "device-features-and-links",
        title: "Device features, clipboard and external websites",
        content: <>
            <p>Haptics can give feedback during play. Tapping the version information in Settings copies the app name, version, build and operating-system details to your clipboard for support. Copying does not itself submit a support report.</p>
            <p>Settings links open websites in a browser. Review the destination&apos;s terms and privacy information before submitting information there. Do not send passwords or unnecessary information about yourself or a child in feedback or correspondence.</p>
            <p>Device permissions and operating-system settings can affect the related feature. You remain free to stop using the app, manage its permissions and remove local data using your device or browser controls.</p>
        </>,
    },
    {
        id: "ending-use-and-privacy-requests",
        title: "Ending use and privacy requests",
        content: <>
            <p>You can stop playing and uninstall Sudoku at any time. There is no Sudoku account to delete. Deleting an account for another service or our SSO does not clear Sudoku&apos;s local game records or identify every diagnostic event associated with the app.</p>
            <p>Clear local app or browser storage to remove local records, and review backup settings separately. Uninstalling does not automatically erase diagnostics, update-service records or correspondence already received online. Follow the Privacy Policy to request access, correction or deletion of information held by us or the relevant providers.</p>
        </>,
    },
    ...commonTermsSections("Sudoku"),
];
