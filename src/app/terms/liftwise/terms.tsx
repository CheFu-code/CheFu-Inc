import type { TermsSection } from "../AppTermsOfService";
import { commonTermsSections } from "../shared-sections";

export const liftwiseTerms: TermsSection[] = [
    {
        id: "using-liftwise",
        title: "Using LiftWise and parental permission",
        content: <>
            <p>LiftWise helps you create workouts, select exercises, record sets, repetitions and weights, and review completed sessions, activity and streaks. It also provides exercise guidance, local workout reminders and rest alerts.</p>
            <p>Children may use LiftWise with a parent or legal guardian&apos;s permission. A parent or guardian must authorise the child&apos;s use of the account and online features and the associated processing of personal information. Where the child cannot legally agree to these terms alone, the parent or guardian must agree on their behalf. LiftWise does not currently verify parental permission within the app.</p>
        </>,
    },
    {
        id: "sso-and-account-security",
        title: "Our SSO and account security",
        content: <>
            <p>Registration and sign-in use our SSO. Provide accurate account information, protect your credentials and use only an account you are authorised to access. Tell us if you suspect unauthorised access. Your account connects your saved workouts, preferences and completed sessions to you.</p>
            <p>Some profile information, including gender, is shared through our SSO and can be reused by our other services. The LiftWise Privacy Policy explains this sharing and the information stored for the app.</p>
        </>,
    },
    {
        id: "exercise-guidance",
        title: "Exercise guidance and fitness decisions",
        content: <>
            <p>Exercise descriptions, AI Coach instructions and training statistics provide general fitness information. They are not medical advice, diagnosis, treatment or an individual assessment by a qualified trainer. We do not promise a particular fitness result.</p>
            <p>When enabled on our backend, Google Gemini can generate exercise instructions from catalogue information. Otherwise, catalogue instructions are used. Generated guidance can contain mistakes or omit information relevant to you. Assess whether an exercise, load and technique are suitable for your circumstances, and seek qualified guidance if you are unsure. Children should use exercise guidance with appropriate adult supervision.</p>
            <p>The app does not examine you, monitor your technique or know whether equipment, an exercise or a load is safe for you. A saved routine or an AI-generated instruction is not an individual training prescription. Do not treat a streak, target or reminder as an instruction to continue an exercise that is unsuitable for you.</p>
            <p>Parental permission to use the app is separate from a decision about which physical activities are appropriate for a child. This section explains limitations of the service; it does not require anyone to accept an undisclosed risk or waive a claim that the law protects.</p>
        </>,
    },
    {
        id: "workout-records-and-sync",
        title: "Workout records, synchronisation and reminders",
        content: <>
            <p>You control the workout names, descriptions, exercise selections, sets, repetitions and weights you enter. Statistics and history depend on those entries and the sessions successfully saved. They should not be treated as clinical measurements or a guarantee of performance.</p>
            <p>The app can save workout progress and queue completed sessions on your device for later synchronisation. A locally saved session may not yet be available on our servers or another device. Check the status of pending sessions before clearing app storage or changing devices; unsynced progress can be lost.</p>
            <p>Reminders and rest alerts are scheduled locally and depend on notification permissions, alarm settings and the operating system. Delivery and timing are not guaranteed. They are convenience features, not an emergency or safety-monitoring service.</p>
        </>,
    },
    {
        id: "uploaded-content",
        title: "Workout covers and submitted content",
        content: <>
            <p>Only upload workout cover images or submit descriptions and support reports that you have the right to use and share. Do not submit unlawful material, someone else&apos;s private information without authority, or content that infringes another person&apos;s rights.</p>
            <p>You retain the rights you own in your content. You give us the limited permission needed to store, process and display it and use our service providers to deliver the app and handle your support request. This does not transfer ownership to us.</p>
            <p>This permission is tied to operating the service and handling your request. It is not an unrestricted right to sell your workout images, publish a private support report or use your likeness to advertise the app. Any such different use would need its own lawful basis and any necessary permission.</p>
            <p>Uploaded covers are stored and delivered through Cloudinary URLs accessible to anyone who has the URL. Do not choose a cover that you need to keep confidential. Deleting a workout template does not automatically remove its cover or the snapshot kept in completed workout history.</p>
        </>,
    },
    {
        id: "stopping-use-and-deletion",
        title: "Stopping use and deleting your account",
        content: <>
            <p>You can stop using LiftWise at any time, and you can delete saved workout templates within the app. Completed sessions retain their own workout details. Signing out or uninstalling the app does not delete information already stored on our servers.</p>
            <p>You can delete your shared sign-in in <a href="https://myaccount.chefu.co.za/account?section=security">our SSO&apos;s Security settings</a>, after identity verification. This affects access to our other apps as well as LiftWise and does not automatically erase all LiftWise records, uploaded images or support reports.</p>
            <p>Request deletion of app-specific records through <a href="mailto:privacy@chefu.co.za">privacy@chefu.co.za</a>. We handle verified requests under the retention and legal exceptions explained in the LiftWise Privacy Policy.</p>
            <p>Before deleting the shared sign-in, consider its effect on access to other apps and on any history you still need to review. A template deletion is not a request to erase every completed session. Tell us which records you want removed if your request goes beyond the controls currently offered in the app.</p>
        </>,
    },
    ...commonTermsSections("LiftWise"),
];
