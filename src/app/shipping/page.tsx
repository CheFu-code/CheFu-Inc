import { ShippingPolicy } from "../pages/ShippingPolicy";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "No Refund, Return & Shipping Policy | Chefu Technologies",
    description: "Chefu Technologies store policy covering no refunds, no returns, and shipping terms.",
    path: "/shipping",
});

export default function Page() {
    return <ShippingPolicy />;
}
