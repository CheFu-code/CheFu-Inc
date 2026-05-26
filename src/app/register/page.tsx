import { Suspense } from "react";
import { RegisterPage } from "../pages/RegisterPage";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Register | CheFu Inc.",
    description: "Create a CheFu Inc. account to contact the team and manage project requests.",
    path: "/register",
});

export default function Page() {
    return (
        <Suspense>
            <RegisterPage />
        </Suspense>
    );
}
