import Link from "next/link";
import type { TermsSection } from "./AppTermsOfService";

export function commonTermsSections(appName: string): TermsSection[] {
    return [
        {
            id: "acceptable-use-and-software-rights",
            title: "Acceptable use and software rights",
            content: <>
                <p>Use {appName} lawfully and respect other people&apos;s rights. Do not use its online features to access someone else&apos;s account or data, distribute malware, bypass access controls or usage limits, or place unreasonable load on our services or their providers.</p>
                <p>We grant you a limited, non-exclusive, non-transferable right to use the app for its intended purposes, subject to these terms. We and our licensors retain the rights we hold in the app, its design and materials. Third-party software components remain subject to their applicable licences. Nothing here restricts rights granted by those licences or by law.</p>
            </>,
        },
        {
            id: "availability-and-changes",
            title: "Availability and changes",
            content: <>
                <p>App features can depend on compatible devices, operating-system permissions, network connections and third-party services. We do not guarantee uninterrupted operation, permanent availability of every feature or that third-party content will always be available or accurate.</p>
                <p>We may update, change or discontinue features for operational, technical, security or legal reasons. We may restrict online access where reasonably necessary to address a material breach of these terms, abuse, a security risk or a legal requirement. Where appropriate and reasonably practicable, we will give notice before doing so.</p>
            </>,
        },
        {
            id: "consumer-rights-and-responsibility",
            title: "Consumer rights and responsibility",
            content: <>
                <p>The disclaimers and limits in our general Terms of Service apply only to the extent permitted by law. Nothing in these app-specific terms excludes a statutory warranty, remedy or consumer right that cannot lawfully be excluded, or limits liability that the law does not permit us to limit.</p>
                <p>Subject to your mandatory legal rights, these terms are governed by the laws of the Republic of South Africa. You retain any right to approach a competent court, regulator or consumer-protection body.</p>
            </>,
        },
        {
            id: "privacy-and-contact",
            title: "Privacy, questions and updates to these terms",
            content: <>
                <p>Read the <Link href={`/privacy/${appName.toLowerCase()}`}>{appName} Privacy Policy</Link> for the information we handle, the service providers involved and your privacy choices. Accepting these terms does not replace any separate permission or consent required for processing personal information.</p>
                <p>For questions about these terms, contact <a href="mailto:legal@chefu.co.za">legal@chefu.co.za</a>. For app support, use <a href="mailto:hello@chefu.co.za">hello@chefu.co.za</a>. Send privacy and app-data deletion requests to <a href="mailto:privacy@chefu.co.za">privacy@chefu.co.za</a>.</p>
                <p>We may revise these terms as the app or legal requirements change. We will update the date on this page and provide additional notice or obtain agreement where required before material changes take effect.</p>
            </>,
        },
    ];
}
