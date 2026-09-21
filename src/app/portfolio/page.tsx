import { PortfolioPage } from "../pages/PortfolioPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Portfolio | Chefu Technologies",
    description:
        "Explore selected software, AI, music production, and creative technology projects from Chefu Technologies",
    path: "/portfolio",
});

export default function Page() {
    return <PortfolioPage />;
}
