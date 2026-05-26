import { TermsOfService } from "../pages/TermsOfService";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Terms of Service | CheFu Inc.",
    description: "CheFu Inc. terms of service for website visitors and clients.",
    path: "/terms",
});

export default function Page() {
    return <TermsOfService />;
}
