import { AIServicePage } from "../../pages/services/AIServicePage";
import { pageMetadata } from "../../site-metadata";

export const metadata = pageMetadata({
    title: "AI Solutions | CHEFU TECHNOLOGIES",
    description:
        "AI-first automation, machine learning, NLP, and intelligent workflow systems from CHEFU TECHNOLOGIES",
    path: "/services/ai",
});

export default function Page() {
    return <AIServicePage />;
}
