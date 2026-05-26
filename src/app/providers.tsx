"use client";

import { sendEmailVerification } from "firebase/auth";
import { useEffect } from "react";
import { Toaster, toast } from "sonner";
import { auth } from "../config/firebaseConfig";

export function AppProviders() {
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user || user.emailVerified) return;

            toast.warning("Please verify your email", {
                action: {
                    label: "Verify",
                    onClick: () => {
                        sendEmailVerification(user)
                            .then(() => toast.success("Verification email sent"))
                            .catch((err: Error) =>
                                toast.error("Failed to send verification email", {
                                    description: err.message,
                                }),
                            );
                    },
                },
            });
        });

        return () => unsubscribe();
    }, []);

    return <Toaster position="top-right" />;
}
