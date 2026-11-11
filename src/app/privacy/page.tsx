import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Privacy Policy | Chefu Technologies",
    description: "Chefu Technologies privacy policy and data handling practices.",
    path: "/privacy",
});

export default function Page() {
    return <PrivacyPolicy />;
}
