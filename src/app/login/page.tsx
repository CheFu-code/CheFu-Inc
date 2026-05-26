import { Suspense } from "react";
import { LoginPage } from "../pages/LoginPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Login | CheFu Inc.",
    description: "Sign in to CheFu Inc. to continue your project request.",
    path: "/login",
});

export default function Page() {
    return (
        <Suspense>
            <LoginPage />
        </Suspense>
    );
}
