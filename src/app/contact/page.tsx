import { Suspense } from "react";
import { ContactPage } from "../pages/ContactPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Contact CHEFU TECHNOLOGIES | Start a Project",
    description:
        "Start a software, AI, or audio production project with CHEFU TECHNOLOGIES",
    path: "/contact",
});

export default function Page() {
    return (
        <Suspense>
            <ContactPage />
        </Suspense>
    );
}
