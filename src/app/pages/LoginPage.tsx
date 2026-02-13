import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { auth } from "../../config/firebaseConfig";
import type { LocationState } from "../../types";
import LoginUI from "../components/LoginUI";

export function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fromPath =
        (location.state as LocationState | null)?.from?.pathname || "/contact";

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email || !password) {
            toast.error("Please enter both email and password.");
            return;
        }

        setIsSubmitting(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Logged in successfully.");
            navigate(fromPath, { replace: true });
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
        />
    );
}
