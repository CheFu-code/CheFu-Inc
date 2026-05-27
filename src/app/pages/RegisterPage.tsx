'use client';

import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { auth } from "../../config/firebaseConfig";
import RegisterUI from "../components/RegisterUI";
import {
    chefuAppLabel,
    preserveAuthParams,
    resolveChefuApp,
    safeReturnTo,
    syncChefuAccountSession,
} from "../../lib/chefu-account";

export function RegisterPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const appId = resolveChefuApp(searchParams.get("app"));
    const appName = chefuAppLabel(appId);
    const fromPath = safeReturnTo(
        searchParams.get("returnTo") || searchParams.get("next"),
        "/contact",
    );
    const loginHref = useMemo(
        () => preserveAuthParams("/login", new URLSearchParams(searchParams.toString())),
        [searchParams],
    );

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email || !password) {
            toast.error("Please enter both email and password.");
            return;
        }

        setIsSubmitting(true);

        try {
            const credential = await createUserWithEmailAndPassword(auth, email, password);
            const idToken = await credential.user.getIdToken(true);
            await syncChefuAccountSession(idToken, appId);
            toast.success(`CheFu account created for ${appName}.`);
            completeAuthRedirect(fromPath, router.replace);
        } catch (error) {
            let message = "Unable to register. Please try again.";

            if (error instanceof FirebaseError) {
                switch (error.code) {
                    case "auth/email-already-in-use":
                        message = "This email is already registered. Try logging in.";
                        break;
                    case "auth/invalid-email":
                        message = "Invalid email format. Please check your email.";
                        break;
                    case "auth/operation-not-allowed":
                        message =
                            "Email/password registration is not enabled for this project.";
                        break;
                    case "auth/weak-password":
                        message = "Password is too weak. Use at least 6 characters.";
                        break;
                    case "auth/network-request-failed":
                        message = "Network error. Check your internet connection.";
                        break;
                    case "auth/internal-error":
                        message = "Internal error. Please try again later.";
                        break;
                    case "auth/invalid-api-key":
                        message = "Invalid Firebase API key. Contact support.";
                        break;
                    case "auth/argument-error":
                        message = "Invalid argument provided. Please try again.";
                        break;
                    default:
                        message = "Registration failed. Please try again.";
                }
            }

            toast.error(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <RegisterUI
            onSubmit={onSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isSubmitting={isSubmitting}
            appName={appName}
            loginHref={loginHref}
        />
    );
}

function completeAuthRedirect(
    target: string,
    replace: (href: string) => void,
) {
    if (target.startsWith("/")) {
        replace(target);
        return;
    }

    window.location.assign(target);
}
