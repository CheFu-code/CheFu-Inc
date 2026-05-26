import { CareersPage } from "../pages/CareersPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Careers | CheFu Inc.",
    description:
        "Apply to join CheFu Inc. across engineering, AI, audio production, creative, and operations roles.",
    path: "/careers",
});

export default function Page() {
    return <CareersPage />;
}
