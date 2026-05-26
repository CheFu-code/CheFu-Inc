import { Suspense } from "react";
import { ContactPage } from "../pages/ContactPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Contact CheFu Inc. | Start a Project",
    description:
        "Start a software, AI, or audio production project with CheFu Inc.",
    path: "/contact",
});

export default function Page() {
    return (
        <Suspense>
            <ContactPage />
        </Suspense>
    );
}
