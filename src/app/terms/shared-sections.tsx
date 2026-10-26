import Link from "next/link";
import type { TermsSection } from "./AppTermsOfService";

export function commonTermsSections(appName: string): TermsSection[] {
    return [
        {
            id: "acceptable-use-and-software-rights",
            title: "Acceptable use and software rights",
            content: <>
                <p>Use {appName} lawfully and respect other people&apos;s rights. Use only accounts, files and systems you are authorised to access. Do not impersonate someone else, submit misleading support reports, introduce malware or attempt to obtain another person&apos;s credentials.</p>
                <p>Do not interfere with service operation, bypass access controls or usage limits, or automate requests in a way that places unreasonable load on our systems or providers. If you find a security problem, report enough information for us to investigate without accessing other users&apos; information or publishing credentials.</p>
                <p>We grant a limited, non-exclusive, non-transferable right to use the app for its intended purposes under these terms. We and our licensors retain the rights we hold in the software, design and materials. This does not transfer your own content to us or give you ownership of the app.</p>
                <p>Third-party and open-source components remain subject to their own licences. Nothing here restricts rights granted by those licences, lawful interoperability rights or other rights that applicable law protects. You may not represent that we endorse a modified app or another service without authority.</p>
            </>,
        },
        {
            id: "third-party-services-and-device-requirements",
            title: "Third-party services and device requirements",
            content: <>
                <p>Features can depend on compatible devices, operating-system versions, permissions, internet access and third-party services. Installing an update or changing device settings can affect how a feature works. Your device or network provider may charge for data, storage or connectivity independently of us.</p>
                <p>The app-specific sections identify external services used for lyrics, images, authentication, updates or guidance. A third party can change its API, content, availability or terms. We do not grant rights to third-party material that its owner has not granted, and a link does not imply endorsement.</p>
                <p>External providers&apos; terms can apply to your direct dealings with them. This does not remove our responsibility for our own service, the promises we make, or rights and duties that applicable law places on us. A provider&apos;s outage or error is not an automatic exemption from every legal obligation.</p>
            </>,
        },
        {
            id: "charges-and-purchases",
            title: "Charges, purchases and consumer information",
            content: <>
                <p>The app features described here do not include an in-app subscription or payment checkout. These terms do not authorise an automatic charge or recurring subscription. A price displayed by an app store for downloading an app, if any, is a separate offer that you should review before agreeing to it.</p>
                <p>If we introduce a paid feature, its price, billing period, renewal and cancellation conditions and applicable refund rights must be disclosed before you agree to pay. We cannot remove a statutory refund, cancellation or other consumer right simply by referring to an app store or payment provider.</p>
                <p>Do not send payment-card details, bank credentials or money in response to an unsolicited support message. Contact our published support address if you are unsure whether an offer or request is from us.</p>
            </>,
        },
        {
            id: "availability-and-changes",
            title: "Availability, updates and service changes",
            content: <>
                <p>We do not guarantee uninterrupted operation, permanent availability of every feature or that all third-party content will be accurate. Maintenance, software errors, operating-system restrictions, connectivity and provider outages can interrupt the service. This is subject to any service standard or remedy that the law requires.</p>
                <p>We may update, change or discontinue features for operational, technical, security or legal reasons. Where a change affects an existing paid commitment, that commitment and applicable cancellation or refund rights still need to be respected. An update to this page does not itself change an agreed price or authorise a new charge.</p>
                <p>Keep software and devices updated and preserve copies of information you cannot afford to lose. The app-specific sections explain what is local, what is synchronised and what deletion affects. Taking a backup is a practical precaution; it does not waive a legal remedy for a failure for which we are responsible.</p>
            </>,
        },
        {
            id: "restriction-and-ending-use",
            title: "Restricting online access and ending use",
            content: <>
                <p>We may restrict online access where reasonably necessary to address a material breach, unauthorised activity, a security risk or a legal requirement. Any action should be proportionate to the issue. Where reasonably practicable and appropriate, we will give notice and an opportunity to address the problem; urgent security or legal circumstances may require earlier action.</p>
                <p>You can stop using the app at any time. Uninstalling, signing out, deleting a workout and deleting an account are different actions. Follow the app-specific instructions and Privacy Policy to understand whether server records, local files, completed history or correspondence remain.</p>
                <p>Ending use does not give us new rights to your content or remove an existing privacy duty. Terms concerning rights in software and content, outstanding lawful obligations and resolving an existing dispute continue to apply where their nature requires it.</p>
            </>,
        },
        {
            id: "consumer-rights-and-responsibility",
            title: "Disclaimers, responsibility and consumer rights",
            content: <>
                <p>Features are provided subject to the practical limitations explained on this page. We do not promise a particular fitness result, an accurate third-party lyric, recovery of a device-only file or delivery of every scheduled alert. Those statements describe the service; they are not a blanket waiver of your rights.</p>
                <p>The disclaimers and liability provisions in our general Terms of Service apply only to the extent permitted by law. We do not exclude a statutory warranty, remedy or consumer right that cannot lawfully be excluded. No term requires you to waive a claim for our fraud, deliberate misconduct, gross negligence or another matter where the law prohibits that waiver.</p>
                <p>You are responsible for unlawful activity and content you submit to the extent applicable law makes you responsible. You are not required to indemnify us for our own unlawful conduct. Responsibility for a loss must be assessed on the facts and applicable law, not merely because you downloaded the app or accepted these terms.</p>
            </>,
        },
        {
            id: "complaints-and-governing-law",
            title: "Complaints, disputes and governing law",
            content: <>
                <p>If a feature fails or you disagree with an action affecting your use, contact <a href="mailto:hello@chefu.co.za">hello@chefu.co.za</a> with the app name, relevant dates, what happened and the outcome you seek. For a legal issue, contact <a href="mailto:legal@chefu.co.za">legal@chefu.co.za</a> or send correspondence to our business and legal-notices address above. Do not include passwords or unnecessary sensitive information.</p>
                <p>Subject to mandatory rights, these terms are governed by the laws of the Republic of South Africa. If a mandatory law in your country gives additional protections, a South African governing-law clause does not remove them. We do not require you to waive a competent court, regulator or consumer-protection process that the law allows you to use.</p>
                <p>Contacting us is intended to help resolve the issue. It is not a compulsory waiver, confidential settlement or agreement to private arbitration. Any formal settlement or separate dispute-resolution arrangement requires its own valid agreement.</p>
            </>,
        },
        {
            id: "privacy-and-contact",
            title: "Privacy and permissions",
            content: <>
                <p>Read the <Link href={`/privacy/${appName.toLowerCase()}`}>{appName} Privacy Policy</Link> for data categories, purposes, recipients, retention, international processing and rights requests. Privacy and app-data deletion requests go to our Information Officer at <a href="mailto:privacy@chefu.co.za">privacy@chefu.co.za</a>.</p>
                <p>Accepting terms does not replace separate consent or parental authorisation required for personal-information processing. A device permission also has a specific purpose: access to a folder or selected image is not permission for unrelated use. Where processing requires consent, withdrawal and its effect are explained in the Privacy Policy.</p>
                <p>Use the contact channels in the legal-identity block if you need a copy of the relevant terms, an explanation in simpler language or help identifying the correct request process.</p>
            </>,
        },
        {
            id: "agreement-and-updates",
            title: "How these terms work and how they change",
            content: <>
                <p>These app-specific terms and our general Terms of Service apply together. A separate written agreement can govern a particular service where it expressly says so. App-specific wording takes priority for the app where the documents address the same issue differently; mandatory law takes priority over both.</p>
                <p>If a term cannot lawfully be enforced, it does not automatically invalidate the remaining terms. A delay in enforcing a term does not by itself waive future enforcement. Neither rule permits us to turn an unfair provision into an enforceable one or remove a statutory remedy.</p>
                <p>We may revise the terms as the app or legal requirements change. We will update the date and provide further notice or obtain agreement where required before material changes take effect. A published revision does not retrospectively authorise conduct or processing that was unlawful when it occurred. You can save or print this page for your records.</p>
            </>,
        },
    ];
}
