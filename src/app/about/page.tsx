import { AboutPage } from "../pages/AboutPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "About CheFu Inc. | Digital Product and Creative Technology Team",
    description:
        "Meet CheFu Inc., a hybrid software, AI, and audio production team building digital products and creative technology experiences.",
    path: "/about",
});

export default function Page() {
    return <AboutPage />;
}
