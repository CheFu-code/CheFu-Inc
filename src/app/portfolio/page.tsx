import { PortfolioPage } from "../pages/PortfolioPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Portfolio | CHEFU TECHNOLOGIES",
    description:
        "Explore selected software, AI, music production, and creative technology projects from CHEFU TECHNOLOGIES",
    path: "/portfolio",
});

export default function Page() {
    return <PortfolioPage />;
}
