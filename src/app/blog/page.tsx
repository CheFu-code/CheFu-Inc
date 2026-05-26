import { BlogPage } from "../pages/BlogPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Insights | CheFu Inc.",
    description:
        "Read CheFu Inc. insights on AI, software engineering, audio production, and creative technology.",
    path: "/blog",
});

export default function Page() {
    return <BlogPage />;
}
