import { Briefcase, Clock3, HeartHandshake, Sparkles, UserPlus2 } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "sonner";
import { db } from "../../config/firebaseConfig";

const roles = [
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Content Creator",
    "Marketing Specialist",
    "Security Researcher",
    "Music Producer",
    "Mixing & Mastering Engineer",
    "Songwriter / Composer",
    "Sound Designer",
    "Intern (Open Application)",
    "Other",
] as const;

const departments = [
    "Software Engineering",
    "Artificial Intelligence",
    "Music Production",
    "Creative Direction",
    "Content & Media",
    "Marketing & Growth",
    "Product & Design",
    "Security",
] as const;

const countries = [
    "South Africa",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "New Zealand",
    "Germany",
    "France",
    "Netherlands",
    "Spain",
    "Italy",
    "Portugal",
    "Sweden",
    "Norway",
    "Denmark",
    "Switzerland",
    "Austria",
    "Belgium",
    "Ireland",
    "Poland",
    "Czech Republic",
    "Romania",
    "Greece",
    "Turkey",
    "United Arab Emirates",
    "Saudi Arabia",
    "Qatar",
    "Egypt",
    "Kenya",
    "Nigeria",
    "Ghana",
    "India",
    "Pakistan",
    "Bangladesh",
    "Singapore",
    "Malaysia",
    "Philippines",
    "Indonesia",
    "Thailand",
    "Vietnam",
    "China",
    "Japan",
    "South Korea",
    "Brazil",
    "Mexico",
    "Argentina",
    "Chile",
    "Colombia",
    "Peru",
] as const;

const southAfricanProvinces = [
    "Eastern Cape",
    "Free State",
    "Gauteng",
    "KwaZulu-Natal",
    "Limpopo",
    "Mpumalanga",
    "North West",
    "Northern Cape",
    "Western Cape",
] as const;

const provinceOptionsByCountry: Record<string, readonly string[]> = {
    "South Africa": southAfricanProvinces,
    "United States": [
        "California",
        "Texas",
        "Florida",
        "New York",
        "Illinois",
        "Washington",
        "Georgia",
        "Other / Not Listed",
    ],
    "United Kingdom": [
        "England",
        "Scotland",
        "Wales",
        "Northern Ireland",
        "Other / Not Listed",
    ],
    Canada: [
        "Ontario",
        "Quebec",
        "British Columbia",
        "Alberta",
        "Manitoba",
        "Other / Not Listed",
    ],
    Australia: [
        "New South Wales",
        "Victoria",
        "Queensland",
        "Western Australia",
        "South Australia",
        "Other / Not Listed",
    ],
    India: [
        "Maharashtra",
        "Delhi",
        "Karnataka",
        "Tamil Nadu",
        "Telangana",
        "Gujarat",
        "Other / Not Listed",
    ],
    Nigeria: [
        "Lagos",
        "Abuja (FCT)",
        "Rivers",
        "Kano",
        "Oyo",
        "Other / Not Listed",
    ],
    Kenya: ["Nairobi", "Mombasa", "Kiambu", "Nakuru", "Other / Not Listed"],
    Germany: ["Bavaria", "Berlin", "Hesse", "Hamburg", "Other / Not Listed"],
    France: [
        "Ile-de-France",
        "Provence-Alpes-Cote d'Azur",
        "Occitanie",
        "Nouvelle-Aquitaine",
        "Other / Not Listed",
    ],
    Brazil: [
        "Sao Paulo",
        "Rio de Janeiro",
        "Minas Gerais",
        "Bahia",
        "Other / Not Listed",
    ],
};

const fallbackProvinceOptions = ["Other / Not Listed"] as const;

type JoinUsFormData = {
    fullName: string;
    email: string;
    phone?: string;
    country: string;
    province?: string;
    city: string;
    department: (typeof departments)[number];
    roleApplyingFor: (typeof roles)[number];
    skills: string;
    linkedInLink?: string;
    experienceLevel: "Beginner" | "Intermediate" | "Advanced";
    yearsOfExperience: string;
    preferredWorkMode: "Remote" | "Hybrid" | "On-site";
    earliestStartDate: string;
    highestEducation:
        | "High School"
        | "Diploma/Certificate"
        | "Bachelor's"
        | "Master's"
        | "PhD"
        | "Self-Taught";
    workAuthorization: "Yes" | "No" | "Need Sponsorship";
    portfolioLink?: string;
    musicPortfolioLink?: string;
    cvFile?: FileList;
    whyJoin: string;
    whatMakesYouDifferent: string;
    hoursPerWeek: string;
    acceptTerms: boolean;
};

const benefits = [
    {
        icon: Sparkles,
        title: "Meaningful Work",
        description:
            "Build bold software and music experiences with direct real-world impact.",
    },
    {
        icon: Clock3,
        title: "Flexible Collaboration",
        description:
            "Contribute around your strongest working hours while staying aligned with the team.",
    },
    {
        icon: HeartHandshake,
        title: "Growth & Mentorship",
        description:
            "Get constructive feedback, leadership access, and opportunities to level up quickly.",
    },
];

const fieldClassName =
    "w-full rounded-xl border border-slate-700 bg-slate-950/50 px-3 py-2.5 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60";

export function CareersPage() {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<JoinUsFormData>();

    const [applicationId, setApplicationId] = useState<string | null>(null);
    const [submittedEmail, setSubmittedEmail] = useState<string>("");
    const selectedCountry = watch("country");
    const isSouthAfrica = selectedCountry === "South Africa";
    const provinceOptions = selectedCountry
        ? provinceOptionsByCountry[selectedCountry] ?? fallbackProvinceOptions
        : fallbackProvinceOptions;

    useEffect(() => {
        if (selectedCountry) {
            if (!isSouthAfrica) {
                setValue("preferredWorkMode", "Remote", { shouldValidate: true });
            }
            setValue("province", "");
        }
    }, [selectedCountry, isSouthAfrica, setValue]);

    const onSubmit = async (data: JoinUsFormData) => {
        try {
            const cvFile = data.cvFile?.[0];
            const preferredWorkMode =
                data.country === "South Africa" ? data.preferredWorkMode : "Remote";
            const docRef = await addDoc(collection(db, "membershipApplications"), {
                fullName: data.fullName,
                email: data.email,
                phone: data.phone ?? "",
                country: data.country,
                province: data.province ?? "",
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
                whyJoin: data.whyJoin,
                whatMakesYouDifferent: data.whatMakesYouDifferent,
                hoursPerWeek: data.hoursPerWeek,
                status: "submitted",
                confirmationEmailStatus: "pending",
                createdAt: serverTimestamp(),
            });

            setApplicationId(docRef.id);
            setSubmittedEmail(data.email);
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
                <div className="max-w-5xl mx-auto mb-16 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 text-cyan-300 text-sm">
                        <UserPlus2 className="h-4 w-4" />
                        Join CheFu Inc
                    </span>
                    <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
                        Build your career with purpose, ownership, and momentum.
                    </h1>
                    <p className="mt-5 text-lg text-slate-300 max-w-3xl mx-auto">
                        We are not only a tech team. We are a creative company building across
                        software, AI, and music production. If you want meaningful work and rapid
                        growth, this is your lane.
                    </p>
                    <p className="mt-3 text-sm text-slate-400">
                        Rolling applications. Priority review every Friday.
                    </p>
                </div>

                <section className="max-w-5xl mx-auto mb-10">
                    <h2 className="text-2xl font-semibold text-white mb-6">Why Join Us</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {benefits.map((benefit) => (
                            <div
                                key={benefit.title}
                                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
                            >
                                <benefit.icon className="h-6 w-6 text-cyan-400" />
                                <h3 className="mt-3 text-white font-semibold">{benefit.title}</h3>
                                <p className="mt-2 text-sm text-slate-400">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="max-w-5xl mx-auto mb-10">
                    <h2 className="text-2xl font-semibold text-white mb-6">
                        Who We&apos;re Looking For
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {roles.map((role) => (
                            <div
                                key={role}
                                className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-slate-200 flex items-center gap-2"
                            >
                                <Briefcase className="h-4 w-4 text-cyan-400" />
                                {role}
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-cyan-300 text-sm">
                        Don&apos;t see your role? Apply anyway.
                    </p>
                </section>

                <section className="max-w-5xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
                    <h2 className="text-2xl font-semibold text-white mb-6">Application Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        <div>
                            <h3 className="text-lg text-white font-medium mb-4">Basic Info</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <FieldLabel label="Full Name">
                                    <input
                                        {...register("fullName", {
                                            required: "Full name is required",
                                        })}
                                        className={fieldClassName}
                                        placeholder="Enter your full name"
                                    />
                                </FieldLabel>
                                <FieldLabel label="Email">
                                    <input
                                        type="email"
                                        {...register("email", { required: "Email is required" })}
                                        className={fieldClassName}
                                        placeholder="you@example.com"
                                    />
                                </FieldLabel>
                                <FieldLabel label="Phone (optional)">
                                    <input
                                        {...register("phone")}
                                        className={fieldClassName}
                                        placeholder="+1 000 000 0000"
                                    />
                                </FieldLabel>
                                <FieldLabel label="Country">
                                    <select
                                        {...register("country", {
                                            required: "Country is required",
                                        })}
                                        className={fieldClassName}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Select country
                                        </option>
                                        {countries.map((country) => (
                                            <option key={country} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </FieldLabel>
                                <FieldLabel label="Province / State">
                                    <select
                                        {...register("province", {
                                            required: "Province/State is required",
                                        })}
                                        className={fieldClassName}
                                        defaultValue=""
                                        disabled={!selectedCountry}
                                    >
                                        <option value="" disabled>
                                            {selectedCountry
                                                ? "Select province/state"
                                                : "Select country first"}
                                        </option>
                                        {provinceOptions.map((province) => (
                                            <option key={province} value={province}>
                                                {province}
                                            </option>
                                        ))}
                                    </select>
                                </FieldLabel>
                                <FieldLabel label="City">
                                    <input
                                        {...register("city", {
                                            required: "City is required",
                                        })}
                                        className={fieldClassName}
                                        placeholder="Enter your city"
                                    />
                                </FieldLabel>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg text-white font-medium mb-4">Professional Info</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <FieldLabel label="Department">
                                    <select
                                        {...register("department", {
                                            required: "Please choose a department",
                                        })}
                                        className={fieldClassName}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Select department
                                        </option>
                                        {departments.map((department) => (
                                            <option key={department} value={department}>
                                                {department}
                                            </option>
                                        ))}
                                    </select>
                                </FieldLabel>
                                <FieldLabel label="Role Applying For">
                                    <select
                                        {...register("roleApplyingFor", {
                                            required: "Please choose a role",
                                        })}
                                        className={fieldClassName}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Select a role
                                        </option>
                                        {roles.map((role) => (
                                            <option key={role} value={role}>
                                                {role}
                                            </option>
                                        ))}
                                    </select>
                                </FieldLabel>
                                <FieldLabel label="Experience Level">
                                    <select
                                        {...register("experienceLevel", {
                                            required: "Please select your experience level",
                                        })}
                                        className={fieldClassName}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Select level
                                        </option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                    </select>
                                </FieldLabel>
                                <FieldLabel label="Years of Experience">
                                    <input
                                        {...register("yearsOfExperience", {
                                            required: "Years of experience is required",
                                        })}
                                        className={fieldClassName}
                                        placeholder="e.g. 3"
                                    />
                                </FieldLabel>
                                <FieldLabel label="Preferred Work Mode">
                                    <select
                                        {...register("preferredWorkMode", {
                                            required: "Please choose a work mode",
                                        })}
                                        className={fieldClassName}
                                        defaultValue=""
                                        disabled={!isSouthAfrica}
                                    >
                                        <option value="" disabled>
                                            {isSouthAfrica
                                                ? "Select work mode"
                                                : "Remote only for non-South Africa"}
                                        </option>
                                        <option value="Remote">Remote</option>
                                        {isSouthAfrica && <option value="Hybrid">Hybrid</option>}
                                        {isSouthAfrica && <option value="On-site">On-site</option>}
                                    </select>
                                    {!isSouthAfrica && (
                                        <p className="text-xs text-amber-300">
                                            Work mode is locked to Remote when country is not South
                                            Africa.
                                        </p>
                                    )}
                                </FieldLabel>
                                <FieldLabel label="Earliest Start Date">
                                    <input
                                        type="date"
                                        {...register("earliestStartDate", {
                                            required: "Please provide a start date",
                                        })}
                                        className={fieldClassName}
                                    />
                                </FieldLabel>
                                <FieldLabel label="Highest Education">
                                    <select
                                        {...register("highestEducation", {
                                            required: "Please choose education level",
                                        })}
                                        className={fieldClassName}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Select education
                                        </option>
                                        <option value="High School">High School</option>
                                        <option value="Diploma/Certificate">
                                            Diploma/Certificate
                                        </option>
                                        <option value="Bachelor's">Bachelor&apos;s</option>
                                        <option value="Master's">Master&apos;s</option>
                                        <option value="PhD">PhD</option>
                                        <option value="Self-Taught">Self-Taught</option>
                                    </select>
                                </FieldLabel>
                                <FieldLabel label="Work Authorization">
                                    <select
                                        {...register("workAuthorization", {
                                            required: "Please choose work authorization status",
                                        })}
                                        className={fieldClassName}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Select one
                                        </option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Need Sponsorship">
                                            Need Sponsorship
                                        </option>
                                    </select>
                                </FieldLabel>
                            </div>
                            <div className="grid gap-4 mt-4">
                                <FieldLabel label="Skills">
                                    <textarea
                                        {...register("skills", {
                                            required: "Please share your skills",
                                        })}
                                        className={`${fieldClassName} min-h-24`}
                                        placeholder="Engineering, production, writing, marketing, or creative skills"
                                    />
                                </FieldLabel>
                                <FieldLabel label="Portfolio / GitHub link (optional)">
                                    <input
                                        {...register("portfolioLink")}
                                        className={fieldClassName}
                                        placeholder="https://github.com/yourname"
                                    />
                                </FieldLabel>
                                <FieldLabel label="Music Portfolio link (optional)">
                                    <input
                                        {...register("musicPortfolioLink")}
                                        className={fieldClassName}
                                        placeholder="https://soundcloud.com/yourname"
                                    />
                                </FieldLabel>
                                <FieldLabel label="LinkedIn Profile (optional)">
                                    <input
                                        {...register("linkedInLink")}
                                        className={fieldClassName}
                                        placeholder="https://linkedin.com/in/yourname"
                                    />
                                </FieldLabel>
                                <p className="text-xs text-slate-400">
                                    Share only what applies to you. Leave optional links blank if
                                    not relevant.
                                </p>
                                <FieldLabel label="CV Upload (optional)">
                                    <input
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        {...register("cvFile")}
                                        className="block w-full rounded-xl border border-slate-700 bg-slate-950/50 px-3 py-2 text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-500/15 file:px-3 file:py-2 file:text-cyan-300 hover:file:bg-cyan-500/25"
                                    />
                                </FieldLabel>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg text-white font-medium mb-4">Short Questions</h3>
                            <div className="space-y-4">
                                <FieldLabel label="Why do you want to join CheFu Inc?">
                                    <textarea
                                        {...register("whyJoin", {
                                            required: "This field is required",
                                        })}
                                        className={`${fieldClassName} min-h-24`}
                                    />
                                </FieldLabel>
                                <FieldLabel label="What makes you different?">
                                    <textarea
                                        {...register("whatMakesYouDifferent", {
                                            required: "This field is required",
                                        })}
                                        className={`${fieldClassName} min-h-24`}
                                    />
                                </FieldLabel>
                                <FieldLabel label="How many hours per week can you commit?">
                                    <input
                                        {...register("hoursPerWeek", {
                                            required: "This field is required",
                                        })}
                                        className={fieldClassName}
                                        placeholder="e.g. 10-15 hours"
                                    />
                                </FieldLabel>
                            </div>
                        </div>

                        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                            <label className="flex items-start gap-3 text-sm text-slate-300">
                                <input
                                    type="checkbox"
                                    {...register("acceptTerms", {
                                        required: "You must agree before submitting",
                                    })}
                                    className="mt-1 h-4 w-4 accent-cyan-400"
                                />
                                <span>
                                    I agree to the{" "}
                                    <Link to="/terms" className="text-cyan-300 hover:text-cyan-200">
                                        Terms
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        to="/privacy"
                                        className="text-cyan-300 hover:text-cyan-200"
                                    >
                                        Privacy Policy
                                    </Link>
                                    .
                                </span>
                            </label>
                            {errors.acceptTerms && (
                                <p className="mt-2 text-sm text-red-400">{errors.acceptTerms.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full md:w-auto rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Submitting..." : "Submit Application"}
                        </button>

                        {(errors.fullName ||
                            errors.email ||
                            errors.country ||
                            errors.province ||
                            errors.city ||
                            errors.department ||
                            errors.roleApplyingFor ||
                            errors.skills ||
                            errors.experienceLevel ||
                            errors.yearsOfExperience ||
                            errors.preferredWorkMode ||
                            errors.earliestStartDate ||
                            errors.highestEducation ||
                            errors.workAuthorization ||
                            errors.whyJoin ||
                            errors.whatMakesYouDifferent ||
                            errors.hoursPerWeek) && (
                            <p className="text-sm text-red-400">
                                Please complete all required fields before submitting.
                            </p>
                        )}
                    </form>
                </section>

                {applicationId && (
                    <section className="max-w-5xl mx-auto mt-8 rounded-2xl border border-emerald-600/30 bg-emerald-500/10 p-6">
                        <h3 className="text-xl font-semibold text-emerald-300">
                            Application received
                        </h3>
                        <p className="mt-2 text-slate-200">
                            Thank you for applying. A confirmation email will be sent to{" "}
                            <span className="font-medium">{submittedEmail || "your inbox"}</span>{" "}
                            once your application is queued by our team.
                        </p>
                        <p className="mt-1 text-sm text-emerald-200/90">
                            Tracking reference: <span className="font-semibold">{applicationId}</span>
                        </p>
                    </section>
                )}
            </div>
        </div>
    );
}

function FieldLabel({
    label,
    children,
}: {
    label: string;
    children: ReactNode;
}) {
    return (
        <label className="grid gap-2 text-sm text-slate-300">
            <span>{label}</span>
            {children}
        </label>
    );
}
