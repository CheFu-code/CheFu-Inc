import { Clock3, HeartHandshake, Sparkles } from "lucide-react";

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

export const countries = [
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

export const southAfricanProvinces = [
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

export const provinceOptionsByCountry: Record<string, readonly string[]> = {
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
    "Canada": [
        "Ontario",
        "Quebec",
        "British Columbia",
        "Alberta",
        "Manitoba",
        "Other / Not Listed",
    ],
    "Australia": [
        "New South Wales",
        "Victoria",
        "Queensland",
        "Western Australia",
        "South Australia",
        "Other / Not Listed",
    ],
    "India": [
        "Maharashtra",
        "Delhi",
        "Karnataka",
        "Tamil Nadu",
        "Telangana",
        "Gujarat",
        "Other / Not Listed",
    ],
    "Nigeria": [
        "Lagos",
        "Abuja (FCT)",
        "Rivers",
        "Kano",
        "Oyo",
        "Other / Not Listed",
    ],
    "Kenya": ["Nairobi", "Mombasa", "Kiambu", "Nakuru", "Other / Not Listed"],
    "Germany": ["Bavaria", "Berlin", "Hesse", "Hamburg", "Other / Not Listed"],
    "France": [
        "Ile-de-France",
        "Provence-Alpes-Cote d'Azur",
        "Occitanie",
        "Nouvelle-Aquitaine",
        "Other / Not Listed",
    ],
    "Brazil": [
        "Sao Paulo",
        "Rio de Janeiro",
        "Minas Gerais",
        "Bahia",
        "Other / Not Listed",
    ],
};

export const fallbackProvinceOptions = ["Other / Not Listed"] as const;

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
    acceptTerms: boolean;
    website?: string;
};

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
    "w-full rounded-xl border border-slate-700 bg-slate-950/50 px-3 py-2.5 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60";
