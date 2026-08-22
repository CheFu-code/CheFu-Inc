import { SoftwareServicePage } from "../../pages/services/SoftwareServicePage";
import { pageMetadata } from "../../site-metadata";

export const metadata = pageMetadata({
    title: "Software Development Services | CHEFU TECHNOLOGIES",
    description:
        "Build scalable web, mobile, backend, and cloud applications with CHEFU TECHNOLOGIES",
    path: "/services/software",
});

export default function Page() {
    return <SoftwareServicePage />;
}
