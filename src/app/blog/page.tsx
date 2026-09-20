import { BlogPage } from "../pages/BlogPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Insights | Chefu Technologies",
    description:
        "Read Chefu Technologies insights on AI, software engineering, audio production, and creative technology.",
    path: "/blog",
});

export default function Page() {
    return <BlogPage />;
}
