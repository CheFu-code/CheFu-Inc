import type { PrivacySection } from "../AppPrivacyPolicy";
import { privacyContactSections } from "../shared-sections";

export const liftwiseSections: PrivacySection[] = [
    {
        id: "sources-and-purposes",
        title: "Sources of information and purposes at a glance",
        content: <>
            <p>We receive information from you, our SSO and the app&apos;s operation. Your account identifier links saved records to you; it is not anonymous merely because it is not your name.</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full text-sm">
                    <caption className="sr-only">LiftWise information sources and uses</caption>
                    <thead><tr><th scope="col">Source</th><th scope="col">Information</th><th scope="col">Purpose</th></tr></thead>
                    <tbody>
                        <tr><th scope="row">Our SSO</th><td>Account ID, contact and profile information, tokens</td><td>Authenticate you and identify your records</td></tr>
                        <tr><th scope="row">Onboarding answers</th><td>Goal, experience, gender, units and reminders</td><td>Set up your profile and preferences</td></tr>
                        <tr><th scope="row">Workout entries</th><td>Exercises, sets, repetitions, loads and times</td><td>Save training and calculate history and statistics</td></tr>
                        <tr><th scope="row">Selected photo</th><td>The cover image you choose</td><td>Store and display a workout cover through Cloudinary</td></tr>
                        <tr><th scope="row">App operation</th><td>Errors, logs, technical context and sampled replays</td><td>Investigate failures through Sentry</td></tr>
                        <tr><th scope="row">Support report</th><td>Description, account contact, version and platform</td><td>Investigate and handle your report</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Workout details and free-text entries can reveal fitness or health information. Avoid adding diagnoses, medical documents, identity numbers or private information about someone else unless necessary for a request you deliberately make. Such information can have additional legal protections.</p>
        </>,
    },
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
        id: "lawful-grounds-and-required-information",
        title: "Lawful grounds and required versus optional information",
        content: <>
            <p>We process account and workout information to provide the tracking service you request, and support communications to resolve your enquiry. For ordinary personal information, relevant grounds can include performance of our agreement, legitimate interests in maintaining a secure and functioning service and resolving faults, compliance with a specific legal duty, or consent where required.</p>
            <p>Legitimate interests must be balanced against your rights and reasonable expectations. They are not permission to use information for any purpose. Additional legal conditions can apply to children&apos;s or health-related information. Agreeing to our terms does not itself satisfy those conditions or consent to optional session replay.</p>
            <p>Sign-in and information identifying your account are necessary for account-linked features. The current app requires onboarding answers before entry to its main experience. Workout entries are needed for the corresponding records. A cover photo, support report and notification permission are optional. Declining photo access prevents choosing a cover; declining notifications prevents reminders but does not itself prevent workout tracking.</p>
            <p>The current app starts production diagnostics and replay without a separate in-app opt-out. That absence does not remove any right to object or any requirement for consent. Contact our Information Officer to ask about a particular processing activity or exercise an applicable right.</p>
        </>,
    },
    {
        id: "retention",
        title: "How long we keep information",
        content: <>
            <p>We keep account-linked workout records, history, preferences and cover images as needed to provide the service. Support reports are kept as needed to investigate the issue and handle related support. Diagnostics and replay information are kept as needed to investigate errors and maintain the app.</p>
            <p>We delete or de-identify personal information when it is no longer needed for these purposes or when a verified deletion request is handled, except for records that must be kept for a specific legal obligation or legal claim. Any such retention is limited to the relevant records and the period needed for that obligation or claim.</p>
            <p>Deleting app data is a separate request from deleting a workout template or removing your shared sign-in. Send app-data deletion requests to <a href="mailto:privacy@chefu.co.za">privacy@chefu.co.za</a>. We do not promise that signing out, uninstalling the app or deleting your sign-in automatically removes copies held by our service providers.</p>
            <p>Retention is assessed by record type and purpose: workout history supports tracking, support records support the issue being handled, and diagnostics support fault investigation. A possible future legal need does not automatically justify keeping everything indefinitely. A legal hold concerns the relevant records and is reassessed when its reason ends.</p>
            <p>Local caches, drafts and queued completions have different lifecycles from server records. Cache expiry does not mean account history has been deleted. Specify server records, uploaded covers or local-device guidance when making a request so that we can explain what each action affects.</p>
        </>,
    },
    {
        id: "children",
        title: "Children and parental permission",
        content: <>
            <p>Children may use LiftWise with a parent or legal guardian&apos;s permission. A parent or guardian must authorise a child&apos;s use of the account and online features and the associated processing of personal information before the child uses them.</p>
            <p>This includes the shared account profile, fitness preferences, workout records, uploaded images and diagnostics described in this policy. A parent or guardian may contact <a href="mailto:privacy@chefu.co.za">privacy@chefu.co.za</a> to ask about that information, withdraw permission or request deletion. LiftWise does not currently include an in-app process for verifying parental permission.</p>
            <p>For children: your workouts are connected to your account and saved online. A cover picture can be opened by anyone who has its link. Ask a parent or guardian before signing up or uploading a picture. Do not include your school, address or private medical details in workout names or support messages.</p>
            <p>For parents: where law requires verified authorisation, that must happen before the relevant collection or disclosure. You can ask to review information we hold about your child, correct or delete it, or refuse further consent-based collection or sharing. A permission statement on this page does not replace verification.</p>
            <p>Age thresholds vary internationally. US rules can require verifiable parental consent for covered online collection from children under 13; EU rules on a child&apos;s own consent to online services depend on the country. Downloading the app does not itself satisfy those rules.</p>
        </>,
    },
    {
        id: "automated-features",
        title: "Calculated statistics and AI guidance",
        content: <>
            <p>Totals, workout volume, activity dates and streaks are calculated from saved records. They are app features, not a clinical evaluation. The AI Coach requests instructions using exercise catalogue information; it does not send your personal workout history or account profile as a prompt to Gemini.</p>
            <p>We do not use these calculations or the AI Coach to make decisions about credit, insurance, employment, access to healthcare or another similarly significant matter. If a calculated feature appears inaccurate, identify the affected entry or calculation so that we can investigate.</p>
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
