import { TermsOfService } from "../pages/TermsOfService";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Terms of Service | Chefu Technologies",
    description: "Chefu Technologies terms of service for website visitors and clients.",
    path: "/terms",
});

export default function Page() {
    return <TermsOfService />;
}
