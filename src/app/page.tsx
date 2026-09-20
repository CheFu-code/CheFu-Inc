import { Home } from "./pages/Home";
import { pageMetadata } from "./site-metadata";

export const metadata = pageMetadata({
    title: "Chefu Technologies | Software, AI, and Audio Production",
    description:
        "Chefu Technologies builds fast software platforms, practical AI systems, and high-fidelity audio production for ambitious teams.",
});

export const dynamic = "force-dynamic";

export default function Page() {
    return <Home />;
}
