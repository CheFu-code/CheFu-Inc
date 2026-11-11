import { CookiePolicy } from "../pages/CookiePolicy";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Cookie Policy | Chefu Technologies",
    description: "Chefu Technologies cookie policy and browser storage practices.",
    path: "/cookies",
});

export default function Page() {
    return <CookiePolicy />;
}
