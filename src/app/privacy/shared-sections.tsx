import Link from "next/link";
import type { PrivacySection } from "./AppPrivacyPolicy";

export function privacyContactSections(appName: string): PrivacySection[] {
    return [
        {
            id: "responsibility-and-scope",
            title: "Our responsibility and the scope of this notice",
            content: <>
                <p>For personal information we receive and decide how to use, we act as the responsible party under South Africa&apos;s Protection of Personal Information Act (POPIA), or the controller under other applicable data-protection law. Our legal identity and contact details appear above. Information stored only on your device and never sent to us is different from information held in our systems.</p>
                <p>This notice covers {appName}. Our <Link href="/privacy">company Privacy Policy</Link> also explains website enquiries and other company services. Visiting this website is separate from using the app: website cookies and optional website analytics are covered by our <Link href="/cookies">Cookie Policy</Link> and the website&apos;s cookie preferences.</p>
                <p>Third-party services can also have responsibilities for requests they receive directly. Their notices do not replace our responsibility for information we disclose or the providers we engage.</p>
            </>,
        },
        {
            id: "disclosures-and-legal-requests",
            title: "Disclosures and legal requests",
            content: <>
                <p>The app-specific sections identify the services involved in ordinary use and the information sent to them. Staff or providers handling a support or privacy request may need the information relevant to that request. This does not give us access to files that remain only on your device.</p>
                <p>We may disclose relevant information where required by a valid legal obligation or enforceable request, or where lawfully necessary to protect rights, investigate abuse or address a security incident. A disclosure must have a lawful purpose and be limited to relevant information; someone claiming authority is not, by itself, permission to release your information.</p>
                <p>If the app changes operator through a business transfer, any transfer of personal information remains subject to applicable law and the purposes described here. A material change in use requires the notice or permission required by law.</p>
            </>,
        },
        {
            id: "security-and-incident-questions",
            title: "Security and incident questions",
            content: <>
                <p>Security depends on the app, the providers involved and your device. Our website and published account API use HTTPS. This does not mean every local file, backup or item of diagnostic information is encrypted by the app. The app-specific sections explain device storage and publicly accessible image URLs.</p>
                <p>Keep your device updated, protect access to shared devices, and do not send passwords, sign-in codes or unnecessary sensitive files. If you suspect information handled by us has been exposed, email <a href="mailto:privacy@chefu.co.za">privacy@chefu.co.za</a> with the app name and a description. We may ask for relevant details through an appropriate channel.</p>
                <p>No service can promise absolute security. If an incident triggers a legal notification duty, we must notify the relevant authority and affected people as applicable law requires. Publishing this notice does not remove those duties.</p>
            </>,
        },
        {
            id: "your-rights-and-contact",
            title: "Your rights and how to make a request",
            content: <>
                <p>Depending on applicable law, you can ask whether we hold information about you, request access, correct inaccurate information, request deletion, object to processing or ask for it to be restricted. Where applicable, you can request a portable copy of information you supplied. These rights can have conditions and exceptions.</p>
                <p>For {appName}, email <a href="mailto:privacy@chefu.co.za">privacy@chefu.co.za</a> and tell us:</p>
                <ul>
                    <li>Which app and feature your request concerns.</li>
                    <li>Your account email, if you use an account, or the address used for earlier correspondence.</li>
                    <li>Whether you want access, correction, deletion, an explanation, an objection considered or consent withdrawn.</li>
                    <li>Whether you act for a child or someone else, and your authority to act.</li>
                </ul>
                <p>We may verify identity or authority before releasing or deleting information. Verification should be proportionate; do not attach identity documents unless we explain why they are needed and how to provide them. We cannot retrieve information that never left your device.</p>
                <p>We will handle requests within the applicable legal time limit and explain a lawful extension, refusal or restriction and the available complaint route. Where a law permits an access fee, we will explain it before charging. If particular records must be retained for a legal obligation or legal claim, we will explain why.</p>
            </>,
        },
        {
            id: "withdrawing-permission",
            title: "Withdrawing permission and changing choices",
            content: <>
                <p>Where processing relies on consent, you can withdraw it without affecting the lawfulness of earlier processing. Contact our privacy address and identify the feature or information concerned. An authorised parent or guardian can act for a child.</p>
                <p>Changing device permissions can stop a feature, but it does not automatically delete information already received by us or a third party. Deletion is a separate request. Some information may still be needed for another lawful purpose, such as a legal claim.</p>
                <p>Agreeing to terms, granting device access and consenting to an optional use of personal information are different decisions. This notice does not treat reading the page or continuing to use the app as blanket consent.</p>
            </>,
        },
        {
            id: "international-users",
            title: "International users and overseas processing",
            content: <>
                <p>We operate from South Africa and intend the apps for international distribution. Information sent to us can be processed in South Africa and countries where the providers described above operate. A provider&apos;s privacy notice alone does not establish that every transfer meets all legal requirements.</p>
                <p>Where a transfer requires a safeguard, it must have an applicable lawful basis and safeguard, such as an adequacy decision or appropriate contractual protection. Additional restrictions can apply to children&apos;s and sensitive information. Contact us to ask about the recipients, locations and safeguards relevant to your information.</p>
                <p>If EU, EEA or UK data-protection law applies, its mandatory protections remain available, including applicable access, correction, erasure, restriction, portability, objection and complaint rights. Regional law can require specific parental authorisation or another condition for children&apos;s or health-related information. This notice does not assert that a regional representative or consent-verification process is already in place.</p>
            </>,
        },
        {
            id: "complaints",
            title: "Questions and privacy complaints",
            content: <>
                <p>Contact <a href="mailto:privacy@chefu.co.za">privacy@chefu.co.za</a> with the app name, what happened and the outcome you seek. Do not send passwords or unrelated personal information merely to raise a concern.</p>
                <p>You can complain to South Africa&apos;s Information Regulator through its <a href="https://inforegulator.org.za/contact-us/">official contact and complaints page</a> or <a href="mailto:POPIAComplaints@inforegulator.org.za">POPIAComplaints@inforegulator.org.za</a>. Its published office address is Woodmead North Office Park, 54 Maxwell Drive, Woodmead, Johannesburg, 2191.</p>
                <p>Where another authority has jurisdiction, you can use its complaint process, including the competent authority in your EU/EEA country or the UK Information Commissioner where applicable. Contacting us does not waive your right to complain or seek a legal remedy.</p>
            </>,
        },
        {
            id: "policy-updates",
            title: "Changes to this policy",
            content: <>
                <p>We will update this page and its date when {appName}&apos;s information practices change. Changes in collection, purpose, providers or privacy choices may require an updated notice. You can save or print this page for your records.</p>
                <p>Where required, we will give additional notice or obtain permission before a new use. An updated page does not retrospectively authorise processing that required consent or another legal condition when it occurred.</p>
            </>,
        },
    ];
}
