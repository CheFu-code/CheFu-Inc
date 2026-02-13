import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import type { FormData } from "../../types";
import { ContactPageUI } from "../components/ContactPageUI";
import { auth, db } from "../../config/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export function ContactPage() {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<FormData>();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const service = searchParams.get("service");
        const packageType = searchParams.get("package");

        if (service) {
            // Best effort matching of service name to dropdown values
            if (service.includes("Audio") || service.includes("Music")) {
                setValue("projectType", "Audio Production");
            } else if (
                service.includes("Software") ||
                service.includes("Web") ||
                service.includes("App")
            ) {
                setValue("projectType", "Software Development");
            } else if (service.includes("AI")) {
                setValue("projectType", "AI Solution");
            } else {
                setValue("projectType", "Other");
            }
        }

        if (packageType) {
            setValue("message", `I am interested in the ${packageType} package.`);
        }
    }, [searchParams, setValue]);

    const onSubmit = async (data: FormData) => {
        const user = auth.currentUser;
        if (!user) {
            toast.error("Please login to send a message", {
                action: {
                    label: "Login",
                    onClick: () => (window.location.href = "/login"),
                },
            });
            return;
        }
        try {
            await addDoc(collection(db, "contactRequests"), {
                ...data,
                userId: user.uid,
                userEmail: user.email ?? data.email,
                createdAt: serverTimestamp(),
            });

            toast.success("Message sent!", {
                description: "We'll be in touch shortly.",
            });
            reset();
        } catch (error) {
            console.error("Error adding document: ", error);
            toast.error("Failed to send message. Please try again later.");
        }
    };

    return (
        <ContactPageUI
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
        />
    );
}
