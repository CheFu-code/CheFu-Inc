import { AIServicePage } from "../../pages/services/AIServicePage";
import { pageMetadata } from "../../site-metadata";

export const metadata = pageMetadata({
    title: "AI Solutions | CheFu Inc.",
    description:
        "AI-first automation, machine learning, NLP, and intelligent workflow systems from CheFu Inc.",
    path: "/services/ai",
});

export default function Page() {
    return <AIServicePage />;
}
