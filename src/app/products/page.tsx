import { ProductsPage } from "./ProductsPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Products Built by Chefu Technologies",
    description:
        "Explore software, AI, learning, communication, and music products built by Chefu Technologies.",
    path: "/products",
});

export default function Page() {
    return <ProductsPage />;
}
