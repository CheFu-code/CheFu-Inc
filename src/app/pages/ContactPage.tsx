import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import type { FormData } from "../../types";
import { ContactPageUI } from "../components/ContactPageUI";
import { auth } from "../../config/firebaseConfig";

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
        toast.success("Message sent! We'll be in touch shortly.");
        reset();
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
