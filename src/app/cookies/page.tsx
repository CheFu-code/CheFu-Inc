import { CookiePolicy } from "../pages/CookiePolicy";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Cookie Policy | CHEFU TECHNOLOGIES",
    description: "CHEFU TECHNOLOGIES cookie policy and browser storage practices.",
    path: "/cookies",
});

export default function Page() {
    return <CookiePolicy />;
}
