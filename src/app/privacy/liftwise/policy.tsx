import type { PrivacySection } from "../AppPrivacyPolicy";
import { privacyContactSections } from "../shared-sections";

export const liftwiseSections: PrivacySection[] = [
    {
        id: "account-and-profile",
        title: "Your account and fitness profile",
        content: <>
            <p>We use our SSO for LiftWise registration and sign-in. Through it, we receive your account identifier, email address, name, profile photo, account roles and gender where available. Sign-in tokens keep your session authenticated.</p>
            <p>We store your training goal, experience level, preferred weight unit and reminder settings with your account. Gender is part of your shared profile with us: LiftWise can reuse an existing answer, and an answer first supplied during LiftWise onboarding is saved to that shared profile. Our other services using that profile may reuse it.</p>
            <p>We use this information to authenticate you, keep your records associated with your account, display your profile and apply your training and reminder preferences.</p>
        </>,
    },
    {
        id: "workouts-and-progress",
        title: "Workouts and progress",
        content: <>
            <p>We receive and store your saved workouts and completed sessions so you can retrieve them through your account. These records include:</p>
            <ul>
                <li>Workout names, descriptions, selected exercises, exercise order and workout cover images.</li>
                <li>Sets, repetitions, rest settings and the weights you enter for exercises.</li>
                <li>Session start and completion times, duration, completed sets and the workout details recorded with each session.</li>
                <li>Saved exercise bookmarks, training preferences and reminder schedules.</li>
            </ul>
            <p>We use these records to provide your workouts, training history, activity calendar, streaks and progress statistics. Exercise search terms are sent to our backend to find matching exercises. The weights you enter are exercise loads; LiftWise does not require a body-weight measurement for its current onboarding.</p>
        </>,
    },
    {
        id: "photos-and-support",
        title: "Cover photos and support reports",
        content: <>
            <p>If you choose a workout cover, LiftWise requests photo-library access and uploads the image you select through our backend to Cloudinary. It does not upload your entire photo library. Covers are delivered through an image URL that can be accessed by anyone who has that URL, so choose images you are comfortable using this way.</p>
            <p>When you submit an in-app problem report, we store your description, account identifier, email address, app version, platform, report status and submission time to investigate and respond. Do not put passwords or unnecessary sensitive information in your report.</p>
        </>,
    },
    {
        id: "device-storage-and-reminders",
        title: "Device storage and reminders",
        content: <>
            <p>LiftWise caches workout and exercise information on your device and stores in-progress workout drafts and completed sessions waiting to sync. Pending sessions are sent to our backend when the app can successfully sync them. Device storage also remembers settings such as haptics and keeping the screen awake during a workout.</p>
            <p>On mobile, sign-in credentials are stored using the operating system&apos;s secure storage. The web version stores its session in browser local storage. Workout caches and drafts use app storage rather than the secure credential store.</p>
            <p>Workout reminders and rest alerts are scheduled locally on your device using your saved settings. LiftWise requests notification permission and uses Android alarm scheduling where available. You can change reminder preferences in the app and manage notifications and alarm permissions in device settings.</p>
            <p>Signing out clears the active session and the persisted query cache, but locally saved workout drafts and pending completions can remain for your account. Clearing app storage can remove unsynced progress. Uninstalling the app does not delete records already saved on our servers.</p>
        </>,
    },
    {
        id: "diagnostics-and-replay",
        title: "Diagnostics and session replay",
        content: <>
            <p>Production versions of LiftWise use Sentry to investigate errors and understand failures. Sentry can receive error details, logs, device and operating-system information, app version, interaction breadcrumbs and network metadata. The app enables Sentry&apos;s default personal-information collection, which can include your IP address and personal information present in diagnostic context.</p>
            <p>Session replay is enabled for a sample of ordinary sessions and for sessions in which errors occur. A replay reconstructs activity within LiftWise, including screen changes and interactions, to help us reproduce problems. It is not a recording of everything you do on your device.</p>
            <p>The mobile replay integration uses Sentry&apos;s default text and image masking. Masking does not make all diagnostic information anonymous. Read <a href="https://docs.sentry.io/platforms/react-native/session-replay/privacy/">Sentry&apos;s replay privacy documentation</a> for more information. LiftWise does not currently provide an in-app switch for diagnostics or replay.</p>
        </>,
    },
    {
        id: "providers-and-ai-guidance",
        title: "Service providers and exercise guidance",
        content: <>
            <ul>
                <li><strong>Our SSO and backend:</strong> we provide sign-in, profile management, synchronisation and support handling. We use Google Firebase services, including Firestore, for account authentication and application records.</li>
                <li><strong>Cloudinary:</strong> stores and delivers the workout cover images you upload.</li>
                <li><strong>Sentry:</strong> processes diagnostics and session replay as described above.</li>
                <li><strong>Expo:</strong> delivers app updates. Update checks send technical app and network information needed to request and download a compatible update.</li>
                <li><strong>Google Gemini:</strong> when AI exercise guidance is enabled on our backend, it can generate instructions from the exercise catalogue&apos;s name, description and source guidance. The request does not include your account profile, workout history or recorded exercise weights. Catalogue instructions are used when AI guidance is unavailable.</li>
            </ul>
            <p>These services may process information outside South Africa. Their own privacy notices describe their processing: <a href="https://policies.google.com/privacy">Google</a>, <a href="https://cloudinary.com/privacy">Cloudinary</a>, <a href="https://sentry.io/privacy/">Sentry</a> and <a href="https://expo.dev/privacy">Expo</a>.</p>
            <p>LiftWise does not include an advertising SDK or use your workout records for targeted advertising.</p>
        </>,
    },
    {
        id: "retention",
        title: "How long we keep information",
        content: <>
            <p>We keep account-linked workout records, history, preferences and cover images as needed to provide the service. Support reports are kept as needed to investigate the issue and handle related support. Diagnostics and replay information are kept as needed to investigate errors and maintain the app.</p>
            <p>We delete or de-identify personal information when it is no longer needed for these purposes or when a verified deletion request is handled, except for records that must be kept for a specific legal obligation or legal claim. Any such retention is limited to the relevant records and the period needed for that obligation or claim.</p>
            <p>Deleting app data is a separate request from deleting a workout template or removing your shared sign-in. Send app-data deletion requests to <a href="mailto:privacy@chefu.co.za">privacy@chefu.co.za</a>. We do not promise that signing out, uninstalling the app or deleting your sign-in automatically removes copies held by our service providers.</p>
        </>,
    },
    {
        id: "children",
        title: "Children and parental permission",
        content: <>
            <p>Children may use LiftWise with a parent or legal guardian&apos;s permission. A parent or guardian must authorise a child&apos;s use of the account and online features and the associated processing of personal information before the child uses them.</p>
            <p>This includes the shared account profile, fitness preferences, workout records, uploaded images and diagnostics described in this policy. A parent or guardian may contact <a href="mailto:privacy@chefu.co.za">privacy@chefu.co.za</a> to ask about that information, withdraw permission or request deletion. LiftWise does not currently include an in-app process for verifying parental permission.</p>
        </>,
    },
    {
        id: "deleting-workouts-and-account",
        title: "Deleting workouts and your account",
        content: <>
            <p>You can delete a workout from its options in LiftWise. This removes the saved workout template; completed sessions keep a snapshot of the workout for your history. Deleting a template does not automatically delete its cover image or completed sessions.</p>
            <p>You can delete your shared sign-in in <a href="https://myaccount.chefu.co.za/account?section=security">our SSO&apos;s Security settings</a>, with identity verification. Deleting that shared sign-in affects access to our other apps as well as LiftWise. It does not automatically erase every LiftWise workout record, uploaded cover or support report. To request deletion of those records, email <a href="mailto:privacy@chefu.co.za">privacy@chefu.co.za</a> and identify LiftWise and the account concerned.</p>
        </>,
    },
    ...privacyContactSections("LiftWise"),
];
