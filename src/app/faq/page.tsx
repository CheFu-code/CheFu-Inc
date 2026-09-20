import { FAQPage } from "../pages/FAQPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "FAQ | Chefu Technologies",
    description:
        "Answers to common questions about Chefu Technologies software, AI, audio, and project workflows.",
    path: "/faq",
});

export default function Page() {
    return <FAQPage />;
}
