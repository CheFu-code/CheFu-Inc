import { Suspense } from "react";
import { AccountPage } from "../pages/AccountPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Manage account | CheFu Account",
    description:
        "Manage your CheFu Account profile, security preferences, connected apps, and session.",
    path: "/account",
});

export default function Page() {
    return (
        <Suspense>
            <AccountPage />
        </Suspense>
    );
}
