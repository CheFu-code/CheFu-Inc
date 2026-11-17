import { AboutPage } from "../pages/AboutPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "About Chefu Technologies | Software, AI & Audio",
    description:
        "Learn about Chefu Technologies, a South African software, AI, and audio company based in Malamulele. Explore our products, approach, and HP, Lenovo, and Dell partnerships.",
    path: "/about",
});

export default function Page() {
    return <AboutPage />;
}
