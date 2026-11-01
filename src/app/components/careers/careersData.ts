import { Clock3, HeartHandshake, Sparkles } from "lucide-react";
import { Country, State } from "country-state-city";

export const roles = [
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

export const departments = [
    "Software Engineering",
    "Artificial Intelligence",
    "Music Production",
    "Creative Direction",
    "Content & Media",
    "Marketing & Growth",
    "Product & Design",
    "Security",
] as const;

export const rolesByDepartment: Record<
    (typeof departments)[number],
    readonly (typeof roles)[number][]
> = {
    "Software Engineering": ["Frontend Developer", "Backend Developer", "Intern (Open Application)", "Other"],
    "Artificial Intelligence": ["Backend Developer", "Intern (Open Application)", "Other"],
    "Music Production": [
        "Music Producer",
        "Mixing & Mastering Engineer",
        "Songwriter / Composer",
        "Sound Designer",
        "Intern (Open Application)",
        "Other",
    ],
    "Creative Direction": ["Content Creator", "UI/UX Designer", "Intern (Open Application)", "Other"],
    "Content & Media": ["Content Creator", "Sound Designer", "Intern (Open Application)", "Other"],
    "Marketing & Growth": ["Marketing Specialist", "Content Creator", "Intern (Open Application)", "Other"],
    "Product & Design": ["UI/UX Designer", "Frontend Developer", "Intern (Open Application)", "Other"],
    Security: ["Security Researcher", "Intern (Open Application)", "Other"],
};

const allCountries = Country.getAllCountries();
const countriesByName = new Map(allCountries.map((country) => [country.name, country]));

export const countries = allCountries.map((country) => country.name);

export function getProvinceOptions(countryName: string): readonly string[] {
    const country = countriesByName.get(countryName);
    if (!country) return [];

    return State.getStatesOfCountry(country.isoCode).map((state) => state.name);
}

export type JoinUsFormData = {
    fullName: string;
    email: string;
    phone?: string;
    country: string;
    province: string;
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
    termsAccepted: boolean;
    privacyNoticeAcknowledged: boolean;
    website?: string;
};

export const CAREERS_PRIVACY_NOTICE_VERSION = "2026-10-10";
export const CAREERS_TERMS_VERSION = "2026-10-10";

export const benefits = [
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

export const fieldClassName =
    "w-full rounded-xl border border-[#e5e1dc] bg-white px-3 py-2.5 text-sm text-[#111827] placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-cyan-400/60";
