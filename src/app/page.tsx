import { Home } from "./pages/Home";
import { pageMetadata } from "./site-metadata";

export const metadata = pageMetadata({
    title: "CheFu Inc. | Software, AI, and Audio Production",
    description:
        "CheFu Inc. builds fast software platforms, practical AI systems, and high-fidelity audio production for ambitious teams.",
});

export default function Page() {
    return <Home />;
}
