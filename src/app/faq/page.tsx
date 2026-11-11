import { FAQPage } from "../pages/FAQPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "FAQ | Chefu Technologies",
    description:
        "Answers about Chefu Technologies software, AI and audio services, products, HP partnership, privacy, support, and careers.",
    path: "/faq",
});

export default function Page() {
    return <FAQPage />;
}
