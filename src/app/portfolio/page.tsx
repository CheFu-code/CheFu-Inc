import { PortfolioPage } from "../pages/PortfolioPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Portfolio | CheFu Inc.",
    description:
        "Explore selected software, AI, music production, and creative technology projects from CheFu Inc.",
    path: "/portfolio",
});

export default function Page() {
    return <PortfolioPage />;
}
