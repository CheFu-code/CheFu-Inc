import { FAQPage } from "../pages/FAQPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "FAQ | CheFu Inc.",
    description:
        "Answers to common questions about CheFu Inc. software, AI, audio, and project workflows.",
    path: "/faq",
});

export default function Page() {
    return <FAQPage />;
}
