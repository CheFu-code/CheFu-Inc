import { FAQPage } from "../pages/FAQPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "FAQ | CHEFU TECHNOLOGIES",
    description:
        "Answers to common questions about CHEFU TECHNOLOGIES software, AI, audio, and project workflows.",
    path: "/faq",
});

export default function Page() {
    return <FAQPage />;
}
