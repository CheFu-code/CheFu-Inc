import { Suspense } from "react";
import { LogoutPage } from "../pages/LogoutPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Logout | CheFu Inc.",
    description: "Sign out of your CheFu Account.",
    path: "/logout",
});

export default function Page() {
    return (
        <Suspense>
            <LogoutPage />
        </Suspense>
    );
}
