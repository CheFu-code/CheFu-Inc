import { Suspense } from "react";
import { LoginPage } from "../pages/LoginPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Sign in | CheFu Account",
    description: "Sign in with your CheFu Account to continue to CheFu apps and services.",
    path: "/login",
});

export default function Page() {
    return (
        <Suspense>
            <LoginPage />
        </Suspense>
    );
}
