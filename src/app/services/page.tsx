import { ServicesPage } from "../pages/ServicesPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Services | CHEFU TECHNOLOGIES",
    description:
        "Explore CHEFU TECHNOLOGIES services across software development, AI solutions, and music production.",
    path: "/services",
});

export default function Page() {
    return <ServicesPage />;
}
