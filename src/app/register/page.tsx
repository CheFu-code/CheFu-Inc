import { Suspense } from "react";
import { RegisterPage } from "../pages/RegisterPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Create account | CheFu Account",
    description: "Create one CheFu Account for CheFu Academy, Muzalo, Flow, and future CheFu apps.",
    path: "/register",
});

export default function Page() {
    return (
        <Suspense>
            <RegisterPage />
        </Suspense>
    );
}
