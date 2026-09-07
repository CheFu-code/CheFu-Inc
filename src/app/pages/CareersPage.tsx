'use client';

import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";
import { apiUrl } from "../../lib/chefu-account";
import { CareersApplicationForm } from "../components/careers/CareersApplicationForm";
import { CareersApplicationSuccess } from "../components/careers/CareersApplicationSuccess";
import { CareersBenefitsSection } from "../components/careers/CareersBenefitsSection";
import { CareersHeroSection } from "../components/careers/CareersHeroSection";
import { CareersRolesSection } from "../components/careers/CareersRolesSection";
import {
    fallbackProvinceOptions,
    provinceOptionsByCountry,
    type JoinUsFormData,
} from "../components/careers/careersData";

export function CareersPage() {
    const {
        register,
        handleSubmit,
        control,
        reset,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<JoinUsFormData>({
        defaultValues: {
            country: "",
            province: "",
        },
    });

    const [applicationId, setApplicationId] = useState<string | null>(null);
    const [submittedEmail, setSubmittedEmail] = useState<string>("");
    const [lastSubmissionAt, setLastSubmissionAt] = useState<number>(0);
    const selectedCountry = useWatch({ control, name: "country" }) ?? "";
    const isSouthAfrica = selectedCountry === "South Africa";
    const provinceOptions = selectedCountry
        ? provinceOptionsByCountry[selectedCountry] ?? fallbackProvinceOptions
        : fallbackProvinceOptions;

    useEffect(() => {
        if (selectedCountry) {
            if (!isSouthAfrica) {
                setValue("preferredWorkMode", "Remote", { shouldValidate: true });
            }
            setValue("province", "", { shouldValidate: true });
        }
    }, [selectedCountry, isSouthAfrica, setValue]);

    const onSubmit = async (data: JoinUsFormData) => {
        if (data.website?.trim()) {
            toast.error("Submission blocked", {
                description: "Bot check failed. Please refresh and try again.",
            });
            return;
        }

        const now = Date.now();
        if (now - lastSubmissionAt < 15_000) {
            toast.error("Please wait", {
                description: "You can submit another application in a few seconds.",
            });
            return;
        }

        try {
            const cvFile = data.cvFile?.[0];
            const preferredWorkMode =
                data.country === "South Africa" ? data.preferredWorkMode : "Remote";
            const cvBase64 = cvFile ? await fileToBase64(cvFile) : undefined;
            const response = await fetch(apiUrl("/submissions/careers"), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                fullName: data.fullName,
                email: data.email,
                phone: data.phone ?? "",
                country: data.country,
                province: data.province,
                city: data.city,
                department: data.department,
                roleApplyingFor: data.roleApplyingFor,
                skills: data.skills,
                linkedInLink: data.linkedInLink ?? "",
                experienceLevel: data.experienceLevel,
                yearsOfExperience: data.yearsOfExperience,
                preferredWorkMode,
                earliestStartDate: data.earliestStartDate,
                highestEducation: data.highestEducation,
                workAuthorization: data.workAuthorization,
                portfolioLink: data.portfolioLink ?? "",
                musicPortfolioLink: data.musicPortfolioLink ?? "",
                cvFileName: cvFile?.name ?? "",
                cvContentType: cvFile?.type ?? "",
                cvBase64,
                whyJoin: data.whyJoin,
                whatMakesYouDifferent: data.whatMakesYouDifferent,
                hoursPerWeek: data.hoursPerWeek,
                consentGiven: data.acceptTerms,
                website: data.website ?? "",
                }),
            });
            if (!response.ok) {
                const errorBody = await response.json().catch(() => null) as { message?: string } | null;
                throw new Error(errorBody?.message || "The application could not be submitted.");
            }
            const result = await response.json() as { applicationId: string };

            setApplicationId(result.applicationId);
            setSubmittedEmail(data.email);
            setLastSubmissionAt(now);
            toast.success("Application submitted", {
                description: "Our team will review your profile and reach out by email.",
            });
            reset();
        } catch (error) {
            toast.error("Submission failed", {
                description:
                    error instanceof Error
                        ? error.message
                        : "Please try again in a few minutes.",
            });
        }
    };

    return (
        <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
            <div className="container mx-auto px-6">
                <CareersHeroSection />
                <CareersBenefitsSection />
                <CareersRolesSection />
                <CareersApplicationForm
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    register={register}
                    errors={errors}
                    isSubmitting={isSubmitting}
                    selectedCountry={selectedCountry}
                    provinceOptions={provinceOptions}
                    isSouthAfrica={isSouthAfrica}
                />
                {applicationId && (
                    <CareersApplicationSuccess
                        applicationId={applicationId}
                        submittedEmail={submittedEmail}
                    />
                )}
            </div>
        </div>
    );
}

function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = () => reject(new Error("Unable to read the CV file."));
        reader.readAsDataURL(file);
    });
}
