import { ProductsPage } from "./ProductsPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Products Built by CHEFU TECHNOLOGIES",
    description:
        "Explore software, AI, learning, communication, and music products built by CHEFU TECHNOLOGIES.",
    path: "/products",
});

export default function Page() {
    return <ProductsPage />;
}
