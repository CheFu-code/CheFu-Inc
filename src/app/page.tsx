import { Home } from "./pages/Home";
import { pageMetadata } from "./site-metadata";

export const metadata = pageMetadata({
    title: "CHEFU TECHNOLOGIES | Software, AI, and Audio Production",
    description:
        "CHEFU TECHNOLOGIES builds fast software platforms, practical AI systems, and high-fidelity audio production for ambitious teams.",
});

export const dynamic = "force-dynamic";

export default function Page() {
    return <Home />;
}
