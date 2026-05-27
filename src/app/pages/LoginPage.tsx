'use client';

import { FirebaseError } from "firebase/app";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { auth } from "../../config/firebaseConfig";
import LoginUI from "../components/LoginUI";
import {
    chefuAppLabel,
    preserveAuthParams,
    resolveChefuApp,
    safeReturnTo,
    syncChefuAccountSession,
} from "../../lib/chefu-account";

export function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const attemptedExistingSession = useRef(false);

    const appId = resolveChefuApp(searchParams.get("app"));
    const appName = chefuAppLabel(appId);
    const fromPath = safeReturnTo(
        searchParams.get("returnTo") || searchParams.get("next"),
        "/contact",
    );
    const registerHref = useMemo(
        () => preserveAuthParams("/register", new URLSearchParams(searchParams.toString())),
        [searchParams],
    );

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user || isSubmitting || attemptedExistingSession.current) return;

            attemptedExistingSession.current = true;
            setIsSubmitting(true);
            user.getIdToken(true)
                .then((idToken) => syncChefuAccountSession(idToken, appId))
                .then(() => {
                    completeAuthRedirect(fromPath, router.replace);
                })
                .catch((error) => {
                    toast.error("Unable to continue your CheFu account session.", {
                        description:
                            error instanceof Error ? error.message : "Please sign in again.",
                    });
                    setIsSubmitting(false);
                });
        });

        return () => unsubscribe();
    }, [appId, fromPath, isSubmitting, router]);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email || !password) {
            toast.error("Please enter both email and password.");
            return;
        }

        setIsSubmitting(true);

        try {
            const credential = await signInWithEmailAndPassword(auth, email, password);
            const idToken = await credential.user.getIdToken(true);
            await syncChefuAccountSession(idToken, appId);
            toast.success(`Signed in to ${appName}.`);
            completeAuthRedirect(fromPath, router.replace);
        } catch (error) {
            let message = "Unable to login. Please try again.";

            if (error instanceof FirebaseError) {
                switch (error.code) {
                    case "auth/invalid-email":
                        message = "Invalid email format. Please check your email.";
                        break;
                    case "auth/user-disabled":
                        message = "This account has been disabled. Contact support.";
                        break;
                    case "auth/user-not-found":
                    case "auth/wrong-password":
                    case "auth/invalid-credential":
                        message = "Invalid email or password.";
                        break;
                    case "auth/too-many-requests":
                        message =
                            "Too many login attempts. Please wait and try again later.";
                        break;
                    case "auth/network-request-failed":
                        message = "Network error. Check your internet connection.";
                        break;
                    case "auth/internal-error":
                        message = "Internal error. Please try again later.";
                        break;
                    case "auth/operation-not-allowed":
                        message = "Email/password login is not enabled for this project.";
                        break;
                    case "auth/invalid-api-key":
                        message = "Invalid Firebase API key. Contact support.";
                        break;
                    case "auth/argument-error":
                        message = "Invalid argument provided. Please try again.";
                        break;
                    case "auth/invalid-user-token":
                        message = "Your session has expired. Please log in again.";
                        break;
                    case "auth/user-token-expired":
                        message = "Your session token expired. Please log in again.";
                        break;
                    case "auth/requires-recent-login":
                        message = "Please log in again to perform this action.";
                        break;
                    case "auth/credential-already-in-use":
                        message =
                            "This credential is already associated with another account.";
                        break;
                    default:
                        message = "Login failed. Please try again.";
                }
            }

            toast.error(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <LoginUI
            onSubmit={onSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isSubmitting={isSubmitting}
            appName={appName}
            registerHref={registerHref}
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
