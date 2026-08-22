import { CareersPage } from "../pages/CareersPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Careers | CHEFU TECHNOLOGIES",
    description:
        "Apply to join CHEFU TECHNOLOGIES across engineering, AI, audio production, creative, and operations roles.",
    path: "/careers",
});

export default function Page() {
    return <CareersPage />;
}
