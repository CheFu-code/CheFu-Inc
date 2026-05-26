import { SoftwareServicePage } from "../../pages/services/SoftwareServicePage";
import { pageMetadata } from "../../site-metadata";

export const metadata = pageMetadata({
    title: "Software Development Services | CheFu Inc.",
    description:
        "Build scalable web, mobile, backend, and cloud applications with CheFu Inc.",
    path: "/services/software",
});

export default function Page() {
    return <SoftwareServicePage />;
}
