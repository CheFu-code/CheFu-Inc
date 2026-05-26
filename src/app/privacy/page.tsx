import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Privacy Policy | CheFu Inc.",
    description: "CheFu Inc. privacy policy and data handling practices.",
    path: "/privacy",
});

export default function Page() {
    return <PrivacyPolicy />;
}
