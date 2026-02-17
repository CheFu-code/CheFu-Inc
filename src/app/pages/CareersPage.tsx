import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    Timestamp,
    addDoc,
    collection,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from "sonner";
import { db, storage } from "../../config/firebaseConfig";
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
        reset,
        watch,
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
    const selectedCountry = watch("country") ?? "";
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
            const retentionExpiresAt = Timestamp.fromDate(
                new Date(Date.now() + 180 * 24 * 60 * 60 * 1000),
            );

            const docRef = await addDoc(collection(db, "membershipApplications"), {
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
                cvFileSize: cvFile?.size ?? null,
                cvFileUrl: "",
                whyJoin: data.whyJoin,
                whatMakesYouDifferent: data.whatMakesYouDifferent,
                hoursPerWeek: data.hoursPerWeek,
                status: "submitted",
                confirmationEmailStatus: "pending",
                consentGiven: data.acceptTerms,
                consentCapturedAt: serverTimestamp(),
                retentionExpiresAt,
                createdAt: serverTimestamp(),
            });

            if (cvFile) {
                const safeFileName = cvFile.name.replace(/[^a-zA-Z0-9._-]/g, "_");
                const cvStorageRef = ref(
                    storage,
                    `membershipApplications/${docRef.id}/cv/${Date.now()}_${safeFileName}`,
                );
                await uploadBytes(cvStorageRef, cvFile, { contentType: cvFile.type });
                const cvFileUrl = await getDownloadURL(cvStorageRef);
                await updateDoc(docRef, { cvFileUrl });
            }

            setApplicationId(docRef.id);
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
