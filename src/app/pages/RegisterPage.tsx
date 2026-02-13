import { FirebaseError } from "firebase/app";
import { useState, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { auth } from "../../config/firebaseConfig";
import type { LocationState } from "../../types";
import RegisterUI from "../components/RegisterUI";
import { createUserWithEmailAndPassword } from "firebase/auth";

export function RegisterPage() {
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
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success("Account created successfully!");
            navigate(fromPath, { replace: true });
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
        />
    );
}
