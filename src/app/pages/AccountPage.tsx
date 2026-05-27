"use client";

import {
    ArrowRight,
    BellRing,
    CheckCircle2,
    Code2,
    ExternalLink,
    KeyRound,
    Loader2,
    LogOut,
    MonitorSmartphone,
    Save,
    ShieldCheck,
    Sparkles,
    UserRound,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sendPasswordResetEmail, signOut, updateProfile } from "firebase/auth";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { auth } from "../../config/firebaseConfig";
import { apiUrl, clearChefuAccountSession } from "../../lib/chefu-account";

type AppId = "academy" | "flow" | "muzalo" | "quantum";

type AccountUser = {
    uid: string;
    email: string;
    roles?: string[];
    displayName?: string | null;
};

type AccountProfile = {
    name: string;
    profilePicture?: string;
    bio: string;
    country: string;
    countryCode: string;
    language: string;
    learningGoal: string;
    skillLevel: "beginner" | "intermediate" | "advanced" | null;
    learningInterests: string[];
    weeklyLearningGoal: number;
    lessonStyle: "short" | "detailed" | "example-heavy" | null;
    defaultCourseDifficulty: "beginner" | "intermediate" | "advanced" | null;
    preferredContentFormat: "text" | "examples" | "quizzes" | null;
    aiTutorSuggestions: boolean;
    privacy: PrivacyPreferences;
    onboardingComplete: boolean;
    appGuideComplete: boolean;
    subscriptionStatus: string;
    member: boolean;
    emailPreferences: EmailPreferences;
    roles: string[];
    securityEmailsEnabled: boolean;
    apps: Partial<
        Record<
            AppId,
            {
                enabled: boolean;
                firstSeenAt?: string | null;
                lastSeenAt?: string | null;
            }
        >
    >;
};

type EmailPreferences = {
    activity: boolean;
    general: boolean;
    marketing: boolean;
    security: boolean;
    courseReminders: boolean;
    aiCourseCompletion: boolean;
    weeklyProgressSummary: boolean;
};

type PrivacyPreferences = {
    publicProfile: boolean;
    showCompletedCourses: boolean;
    showCountry: boolean;
    personalizedAiRecommendations: boolean;
};

type AccountResponse = {
    user: AccountUser;
    profile: AccountProfile;
};

const defaultEmailPreferences: EmailPreferences = {
    activity: false,
    general: false,
    marketing: false,
    security: true,
    courseReminders: true,
    aiCourseCompletion: true,
    weeklyProgressSummary: false,
};

const defaultPrivacyPreferences: PrivacyPreferences = {
    publicProfile: false,
    showCompletedCourses: false,
    showCountry: true,
    personalizedAiRecommendations: true,
};

const skillLevels = ["beginner", "intermediate", "advanced"] as const;
const lessonStyles = ["short", "detailed", "example-heavy"] as const;
const contentFormats = ["text", "examples", "quizzes"] as const;

const connectedApps: Array<{
    id: AppId;
    name: string;
    description: string;
    href: string;
}> = [
    {
        id: "academy",
        name: "CheFu Academy",
        description: "Learning, courses, videos, and developer SDK access.",
        href: "https://academy.chefuinc.com",
    },
    {
        id: "flow",
        name: "Flow",
        description: "Private email and campaign workspace.",
        href: "https://flow.chefuinc.com",
    },
    {
        id: "muzalo",
        name: "Muzalo",
        description: "Music discovery and listening experience.",
        href: "https://muzalo.chefuinc.com",
    },
    {
        id: "quantum",
        name: "Quantum",
        description: "AI chat with saved conversations for signed-in users.",
        href: "https://quantum.chefuinc.com",
    },
];

export function AccountPage() {
    const router = useRouter();
    const [account, setAccount] = useState<AccountResponse | null>(null);
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [country, setCountry] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [language, setLanguage] = useState("en");
    const [learningGoal, setLearningGoal] = useState("");
    const [skillLevel, setSkillLevel] =
        useState<AccountProfile["skillLevel"]>("beginner");
    const [weeklyLearningGoal, setWeeklyLearningGoal] = useState("3");
    const [lessonStyle, setLessonStyle] =
        useState<AccountProfile["lessonStyle"]>("example-heavy");
    const [defaultCourseDifficulty, setDefaultCourseDifficulty] =
        useState<AccountProfile["defaultCourseDifficulty"]>("beginner");
    const [preferredContentFormat, setPreferredContentFormat] =
        useState<AccountProfile["preferredContentFormat"]>("examples");
    const [aiTutorSuggestions, setAiTutorSuggestions] = useState(true);
    const [privacy, setPrivacy] = useState<PrivacyPreferences>(
        defaultPrivacyPreferences,
    );
    const [emailPreferences, setEmailPreferences] = useState<EmailPreferences>(
        defaultEmailPreferences,
    );
    const [learningInterestsInput, setLearningInterestsInput] = useState("");
    const [securityEmailsEnabled, setSecurityEmailsEnabled] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [isSendingReset, setIsSendingReset] = useState(false);
    const [isSigningOut, setIsSigningOut] = useState(false);

    useEffect(() => {
        let cancelled = false;

        async function loadAccount() {
            try {
                const response = await fetch(apiUrl("/auth/me"), {
                    credentials: "include",
                    headers: {
                        "x-chefu-app": "academy",
                    },
                });

                if (response.status === 401) {
                    router.replace("/login?returnTo=/account");
                    return;
                }

                if (!response.ok) {
                    throw new Error("Could not load your account.");
                }

                const data = (await response.json()) as AccountResponse;
                if (cancelled) return;

                setAccount(data);
                setName(data.profile.name || data.user.displayName || "");
                setBio(data.profile.bio || "");
                setCountry(data.profile.country || "");
                setCountryCode(data.profile.countryCode || "");
                setLanguage(data.profile.language || "en");
                setLearningGoal(data.profile.learningGoal || "");
                setSkillLevel(data.profile.skillLevel || "beginner");
                setWeeklyLearningGoal(String(data.profile.weeklyLearningGoal || 3));
                setLessonStyle(data.profile.lessonStyle || "example-heavy");
                setDefaultCourseDifficulty(
                    data.profile.defaultCourseDifficulty || "beginner",
                );
                setPreferredContentFormat(
                    data.profile.preferredContentFormat || "examples",
                );
                setAiTutorSuggestions(data.profile.aiTutorSuggestions !== false);
                setPrivacy({
                    ...defaultPrivacyPreferences,
                    ...(data.profile.privacy || {}),
                });
                setEmailPreferences({
                    ...defaultEmailPreferences,
                    ...(data.profile.emailPreferences || {}),
                });
                setLearningInterestsInput(
                    (data.profile.learningInterests || []).join(", "),
                );
                setSecurityEmailsEnabled(data.profile.securityEmailsEnabled);
            } catch (error) {
                if (cancelled) return;
                toast.error("Unable to load your CheFu Account.", {
                    description:
                        error instanceof Error ? error.message : "Please refresh and try again.",
                });
            } finally {
                if (!cancelled) setIsLoading(false);
            }
        }

        loadAccount();

        return () => {
            cancelled = true;
        };
    }, [router]);

    const roleLabel = useMemo(() => {
        const roles = (account?.profile.roles || []).map((role) =>
            role.toLowerCase(),
        );
        if (roles.includes("developer")) return "Developer";
        if (roles.includes("admin")) return "Admin";
        if (roles.includes("student")) return "Student";
        return "Member";
    }, [account]);

    const initials = useMemo(() => {
        const label = name || account?.user.email || "CheFu Account";
        return label
            .split(/\s|@/)
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0]?.toUpperCase())
            .join("");
    }, [account?.user.email, name]);

    async function saveProfile(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!account) return;

        const trimmedName = name.trim().replace(/\s+/g, " ");
        if (trimmedName.length < 2) {
            toast.error("Display name must be at least 2 characters.");
            return;
        }

        setIsSaving(true);

        try {
            const weeklyGoal = Number(weeklyLearningGoal);
            const nextEmailPreferences = {
                ...emailPreferences,
                security: securityEmailsEnabled,
            };
            const learningInterests = learningInterestsInput
                .split(",")
                .map((interest) => interest.trim())
                .filter(Boolean)
                .slice(0, 12);

            const response = await fetch(apiUrl("/auth/profile"), {
                method: "PATCH",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "x-chefu-app": "academy",
                },
                body: JSON.stringify({
                    name: trimmedName,
                    emailPreferences: {
                        security: securityEmailsEnabled,
                    },
                    academyProfile: {
                        bio,
                        country,
                        countryCode,
                        language,
                        learningGoal,
                        skillLevel,
                        learningInterests,
                        weeklyLearningGoal: Number.isFinite(weeklyGoal)
                            ? weeklyGoal
                            : 3,
                        lessonStyle,
                        defaultCourseDifficulty,
                        preferredContentFormat,
                        aiTutorSuggestions,
                        privacy,
                        emailPreferences: nextEmailPreferences,
                    },
                }),
            });

            const data = (await response.json().catch(() => null)) as
                | AccountResponse
                | { message?: string; error?: string }
                | null;

            if (!response.ok) {
                const message =
                    data && "message" in data
                        ? data.message
                        : "Your account could not be updated.";
                throw new Error(message || "Your account could not be updated.");
            }

            if (auth.currentUser) {
                await updateProfile(auth.currentUser, {
                    displayName: trimmedName,
                }).catch(() => undefined);
            }

            const nextAccount = data as AccountResponse;
            setAccount(nextAccount);
            setName(nextAccount.profile.name || trimmedName);
            setBio(nextAccount.profile.bio || "");
            setCountry(nextAccount.profile.country || "");
            setCountryCode(nextAccount.profile.countryCode || "");
            setLanguage(nextAccount.profile.language || "en");
            setLearningGoal(nextAccount.profile.learningGoal || "");
            setSkillLevel(nextAccount.profile.skillLevel || "beginner");
            setWeeklyLearningGoal(String(nextAccount.profile.weeklyLearningGoal || 3));
            setLessonStyle(nextAccount.profile.lessonStyle || "example-heavy");
            setDefaultCourseDifficulty(
                nextAccount.profile.defaultCourseDifficulty || "beginner",
            );
            setPreferredContentFormat(
                nextAccount.profile.preferredContentFormat || "examples",
            );
            setAiTutorSuggestions(nextAccount.profile.aiTutorSuggestions !== false);
            setPrivacy({
                ...defaultPrivacyPreferences,
                ...(nextAccount.profile.privacy || {}),
            });
            setEmailPreferences({
                ...defaultEmailPreferences,
                ...(nextAccount.profile.emailPreferences || {}),
            });
            setLearningInterestsInput(
                (nextAccount.profile.learningInterests || []).join(", "),
            );
            setSecurityEmailsEnabled(nextAccount.profile.securityEmailsEnabled);
            toast.success("Account updated.");
        } catch (error) {
            toast.error("Unable to update your account.", {
                description:
                    error instanceof Error ? error.message : "Please try again.",
            });
        } finally {
            setIsSaving(false);
        }
    }

    async function sendResetEmail() {
        if (!account?.user.email) return;

        setIsSendingReset(true);

        try {
            await sendPasswordResetEmail(auth, account.user.email);
            toast.success("Password reset email sent.", {
                description: `Check ${account.user.email}.`,
            });
        } catch (error) {
            toast.error("Unable to send password reset email.", {
                description:
                    error instanceof Error ? error.message : "Please try again.",
            });
        } finally {
            setIsSendingReset(false);
        }
    }

    async function handleSignOut() {
        setIsSigningOut(true);

        try {
            await Promise.allSettled([clearChefuAccountSession(), signOut(auth)]);
            window.location.replace("/login?returnTo=/account");
        } catch (error) {
            toast.error("Unable to sign out.", {
                description:
                    error instanceof Error ? error.message : "Please try again.",
            });
            setIsSigningOut(false);
        }
    }

    if (isLoading) {
        return (
            <section className="flex min-h-dvh items-center justify-center bg-[#f7f8fb] px-5 text-slate-950">
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm font-semibold shadow-sm">
                    <Loader2 className="size-4 animate-spin text-emerald-700" aria-hidden="true" />
                    Loading your CheFu Account
                </div>
            </section>
        );
    }

    if (!account) {
        return (
            <section className="flex min-h-dvh items-center justify-center bg-[#f7f8fb] px-5 text-slate-950">
                <div className="max-w-md rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
                    <h1 className="text-2xl font-semibold">Account unavailable</h1>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                        We could not load your CheFu Account session.
                    </p>
                    <Link
                        href="/login?returnTo=/account"
                        className="mt-5 inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                        Sign in
                        <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-dvh bg-[#f7f8fb] text-slate-950">
            <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
                <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
                    <Link href="/" className="text-lg font-semibold tracking-normal">
                        CheFu <span className="text-emerald-700">Account</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <Link
                            href="/contact"
                            className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
                        >
                            Help
                        </Link>
                        <button
                            type="button"
                            onClick={handleSignOut}
                            disabled={isSigningOut}
                            className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
                        >
                            {isSigningOut ? (
                                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                            ) : (
                                <LogOut className="size-4" aria-hidden="true" />
                            )}
                            Sign out
                        </button>
                    </div>
                </div>
            </header>

            <main className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-6 sm:px-8 lg:grid-cols-[0.78fr_1.22fr]">
                <aside className="space-y-4">
                    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-xl font-semibold text-white">
                                {initials || "C"}
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                                    Signed in
                                </p>
                                <h1 className="mt-2 truncate text-2xl font-semibold tracking-normal">
                                    {name || "CheFu Account"}
                                </h1>
                                <p className="mt-1 truncate text-sm text-slate-600">
                                    {account.user.email}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <AccountStat label="Role" value={roleLabel} />
                            <AccountStat
                                label="Plan"
                                value={toTitle(account.profile.subscriptionStatus)}
                            />
                            <AccountStat
                                label="Apps"
                                value={String(
                                    connectedApps.filter(
                                        (app) => account.profile.apps?.[app.id]?.enabled,
                                    ).length,
                                )}
                            />
                            <AccountStat
                                label="Academy"
                                value={
                                    account.profile.onboardingComplete
                                        ? "Set up"
                                        : "Needs setup"
                                }
                            />
                        </div>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-md bg-white/10">
                                <Code2 className="size-5 text-emerald-300" aria-hidden="true" />
                            </div>
                            <div>
                                <h2 className="font-semibold">Developer access</h2>
                                <p className="text-sm text-slate-300">
                                    {account.profile.roles.includes("developer")
                                        ? "API keys and SDK tools are enabled."
                                        : "Create an SDK account to unlock API keys."}
                                </p>
                            </div>
                        </div>
                        <Link
                            href="https://academy.chefuinc.com/docs"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                        >
                            View SDK docs
                            <ExternalLink className="size-4" aria-hidden="true" />
                        </Link>
                    </div>
                </aside>

                <div className="space-y-6">
                    <form
                        id="account-profile-form"
                        onSubmit={saveProfile}
                        className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                    >
                        <div className="flex items-start gap-3">
                            <div className="flex size-10 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                                <UserRound className="size-5" aria-hidden="true" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold tracking-normal">
                                    Profile
                                </h2>
                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                    This name appears across CheFu apps that use your account.
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-800">
                                    Display name
                                </span>
                                <input
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    className="mt-2 h-12 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                                    placeholder="Your name"
                                />
                            </label>
                            <button
                                type="submit"
                                disabled={isSaving}
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
                            >
                                {isSaving ? (
                                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                                ) : (
                                    <Save className="size-4" aria-hidden="true" />
                                )}
                                Save
                            </button>
                        </div>

                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            <label className="block sm:col-span-2">
                                <span className="text-sm font-semibold text-slate-800">
                                    Bio
                                </span>
                                <textarea
                                    value={bio}
                                    onChange={(event) => setBio(event.target.value)}
                                    className="mt-2 min-h-24 w-full resize-none rounded-md border border-slate-300 bg-white px-3 py-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                                    maxLength={280}
                                    placeholder="A short intro for learning and public profile experiences"
                                />
                            </label>

                            <label className="block">
                                <span className="text-sm font-semibold text-slate-800">
                                    Country
                                </span>
                                <input
                                    value={country}
                                    onChange={(event) => setCountry(event.target.value)}
                                    className="mt-2 h-12 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                                    placeholder="South Africa"
                                />
                            </label>

                            <label className="block">
                                <span className="text-sm font-semibold text-slate-800">
                                    Country code
                                </span>
                                <input
                                    value={countryCode}
                                    onChange={(event) => setCountryCode(event.target.value)}
                                    className="mt-2 h-12 w-full rounded-md border border-slate-300 bg-white px-3 text-sm uppercase text-slate-950 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                                    placeholder="ZA"
                                />
                            </label>
                        </div>

                        <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div>
                                <h3 className="font-semibold">CheFu Academy learning profile</h3>
                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                    These fields sync with the Academy onboarding and settings screen.
                                </p>
                            </div>

                            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                <label className="block sm:col-span-2">
                                    <span className="text-sm font-semibold text-slate-800">
                                        Learning goal
                                    </span>
                                    <input
                                        value={learningGoal}
                                        onChange={(event) => setLearningGoal(event.target.value)}
                                        className="mt-2 h-12 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                                        placeholder="What do you want to learn next?"
                                    />
                                </label>

                                <label className="block">
                                    <span className="text-sm font-semibold text-slate-800">
                                        Skill level
                                    </span>
                                    <select
                                        value={skillLevel || "beginner"}
                                        onChange={(event) =>
                                            setSkillLevel(
                                                event.target.value as AccountProfile["skillLevel"],
                                            )
                                        }
                                        className="mt-2 h-12 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                                    >
                                        {skillLevels.map((level) => (
                                            <option key={level} value={level}>
                                                {toTitle(level)}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                <label className="block">
                                    <span className="text-sm font-semibold text-slate-800">
                                        Weekly lessons
                                    </span>
                                    <input
                                        type="number"
                                        min={1}
                                        max={21}
                                        value={weeklyLearningGoal}
                                        onChange={(event) =>
                                            setWeeklyLearningGoal(event.target.value)
                                        }
                                        className="mt-2 h-12 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                                    />
                                </label>

                                <label className="block">
                                    <span className="text-sm font-semibold text-slate-800">
                                        Language
                                    </span>
                                    <input
                                        value={language}
                                        onChange={(event) => setLanguage(event.target.value)}
                                        className="mt-2 h-12 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                                        placeholder="en"
                                    />
                                </label>

                                <label className="block">
                                    <span className="text-sm font-semibold text-slate-800">
                                        Lesson style
                                    </span>
                                    <select
                                        value={lessonStyle || "example-heavy"}
                                        onChange={(event) =>
                                            setLessonStyle(
                                                event.target.value as AccountProfile["lessonStyle"],
                                            )
                                        }
                                        className="mt-2 h-12 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                                    >
                                        {lessonStyles.map((style) => (
                                            <option key={style} value={style}>
                                                {toTitle(style)}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                <label className="block">
                                    <span className="text-sm font-semibold text-slate-800">
                                        Course difficulty
                                    </span>
                                    <select
                                        value={defaultCourseDifficulty || "beginner"}
                                        onChange={(event) =>
                                            setDefaultCourseDifficulty(
                                                event.target
                                                    .value as AccountProfile["defaultCourseDifficulty"],
                                            )
                                        }
                                        className="mt-2 h-12 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                                    >
                                        {skillLevels.map((level) => (
                                            <option key={level} value={level}>
                                                {toTitle(level)}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                <label className="block">
                                    <span className="text-sm font-semibold text-slate-800">
                                        Preferred format
                                    </span>
                                    <select
                                        value={preferredContentFormat || "examples"}
                                        onChange={(event) =>
                                            setPreferredContentFormat(
                                                event.target
                                                    .value as AccountProfile["preferredContentFormat"],
                                            )
                                        }
                                        className="mt-2 h-12 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                                    >
                                        {contentFormats.map((format) => (
                                            <option key={format} value={format}>
                                                {toTitle(format)}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                <label className="block sm:col-span-2">
                                    <span className="text-sm font-semibold text-slate-800">
                                        Learning interests
                                    </span>
                                    <input
                                        value={learningInterestsInput}
                                        onChange={(event) =>
                                            setLearningInterestsInput(event.target.value)
                                        }
                                        className="mt-2 h-12 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                                        placeholder="AI, Web development, Data analysis"
                                    />
                                </label>
                            </div>

                            <div className="mt-5 divide-y divide-slate-200 rounded-md border border-slate-200 bg-white">
                                <ToggleRow
                                    checked={aiTutorSuggestions}
                                    title="AI tutor suggestions"
                                    description="Use your learning profile to personalize course and tutor suggestions."
                                    onToggle={() =>
                                        setAiTutorSuggestions((enabled) => !enabled)
                                    }
                                />
                                <ToggleRow
                                    checked={privacy.publicProfile}
                                    title="Public profile"
                                    description="Allow your basic Academy profile to be shown publicly."
                                    onToggle={() =>
                                        setPrivacy((current) => ({
                                            ...current,
                                            publicProfile: !current.publicProfile,
                                        }))
                                    }
                                />
                                <ToggleRow
                                    checked={privacy.showCompletedCourses}
                                    title="Show completed courses"
                                    description="Allow completed-course activity on your profile."
                                    onToggle={() =>
                                        setPrivacy((current) => ({
                                            ...current,
                                            showCompletedCourses:
                                                !current.showCompletedCourses,
                                        }))
                                    }
                                />
                                <ToggleRow
                                    checked={privacy.showCountry}
                                    title="Show country"
                                    description="Allow your country to appear where profiles are shown."
                                    onToggle={() =>
                                        setPrivacy((current) => ({
                                            ...current,
                                            showCountry: !current.showCountry,
                                        }))
                                    }
                                />
                                <ToggleRow
                                    checked={privacy.personalizedAiRecommendations}
                                    title="Personalized AI recommendations"
                                    description="Use your Academy activity to improve recommendations."
                                    onToggle={() =>
                                        setPrivacy((current) => ({
                                            ...current,
                                            personalizedAiRecommendations:
                                                !current.personalizedAiRecommendations,
                                        }))
                                    }
                                />
                            </div>

                            <div className="mt-5">
                                <h4 className="text-sm font-semibold text-slate-800">
                                    Academy notifications
                                </h4>
                                <div className="mt-3 divide-y divide-slate-200 rounded-md border border-slate-200 bg-white">
                                    <ToggleRow
                                        checked={emailPreferences.courseReminders}
                                        title="Course reminders"
                                        description="Receive nudges for active lessons and study goals."
                                        onToggle={() =>
                                            setEmailPreferences((current) => ({
                                                ...current,
                                                courseReminders:
                                                    !current.courseReminders,
                                            }))
                                        }
                                    />
                                    <ToggleRow
                                        checked={emailPreferences.aiCourseCompletion}
                                        title="AI course completion"
                                        description="Receive updates when AI-generated course work finishes."
                                        onToggle={() =>
                                            setEmailPreferences((current) => ({
                                                ...current,
                                                aiCourseCompletion:
                                                    !current.aiCourseCompletion,
                                            }))
                                        }
                                    />
                                    <ToggleRow
                                        checked={emailPreferences.weeklyProgressSummary}
                                        title="Weekly progress summary"
                                        description="Get a weekly digest of learning progress and suggested next steps."
                                        onToggle={() =>
                                            setEmailPreferences((current) => ({
                                                ...current,
                                                weeklyProgressSummary:
                                                    !current.weeklyProgressSummary,
                                            }))
                                        }
                                    />
                                    <ToggleRow
                                        checked={emailPreferences.marketing}
                                        title="Product updates"
                                        description="Receive occasional announcements about new CheFu products and releases."
                                        onToggle={() =>
                                            setEmailPreferences((current) => ({
                                                ...current,
                                                marketing: !current.marketing,
                                            }))
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </form>

                    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-start gap-3">
                            <div className="flex size-10 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                                <ShieldCheck className="size-5" aria-hidden="true" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold tracking-normal">
                                    Security
                                </h2>
                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                    Keep your account protected across every CheFu app.
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 divide-y divide-slate-200 rounded-md border border-slate-200">
                            <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-start gap-3">
                                    <KeyRound className="mt-0.5 size-5 text-slate-500" aria-hidden="true" />
                                    <div>
                                        <p className="font-semibold">Password reset</p>
                                        <p className="mt-1 text-sm text-slate-600">
                                            Send a secure reset link to {account.user.email}.
                                        </p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={sendResetEmail}
                                    disabled={isSendingReset}
                                    className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 disabled:opacity-60"
                                >
                                    {isSendingReset && (
                                        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                                    )}
                                    Send reset
                                </button>
                            </div>

                            <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-start gap-3">
                                    <BellRing className="mt-0.5 size-5 text-slate-500" aria-hidden="true" />
                                    <div>
                                        <p className="font-semibold">Security email alerts</p>
                                        <p className="mt-1 text-sm text-slate-600">
                                            Receive an email when your account starts a new session.
                                        </p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSecurityEmailsEnabled((enabled) => !enabled);
                                        setEmailPreferences((current) => ({
                                            ...current,
                                            security: !current.security,
                                        }));
                                    }}
                                    className={`relative h-7 w-12 rounded-full transition ${
                                        securityEmailsEnabled ? "bg-emerald-600" : "bg-slate-300"
                                    }`}
                                    aria-pressed={securityEmailsEnabled}
                                >
                                    <span
                                        className={`absolute top-1 size-5 rounded-full bg-white shadow transition ${
                                            securityEmailsEnabled ? "left-6" : "left-1"
                                        }`}
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button
                                type="submit"
                                form="account-profile-form"
                                disabled={isSaving}
                                className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
                            >
                                {isSaving ? (
                                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                                ) : (
                                    <Save className="size-4" aria-hidden="true" />
                                )}
                                Save security preference
                            </button>
                        </div>
                    </section>

                    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-start gap-3">
                            <div className="flex size-10 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                                <MonitorSmartphone className="size-5" aria-hidden="true" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold tracking-normal">
                                    Connected apps
                                </h2>
                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                    Apps that can use your CheFu Account session.
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            {connectedApps.map((app) => {
                                const appProfile = account.profile.apps?.[app.id];
                                const isConnected = appProfile?.enabled;

                                return (
                                    <Link
                                        key={app.id}
                                        href={app.href}
                                        className="group rounded-lg border border-slate-200 bg-white p-4 transition hover:border-emerald-200 hover:bg-emerald-50/40"
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <h3 className="font-semibold">{app.name}</h3>
                                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                                    {app.description}
                                                </p>
                                            </div>
                                            <ExternalLink
                                                className="size-4 shrink-0 text-slate-400 transition group-hover:text-emerald-700"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-semibold text-slate-700">
                                            {isConnected ? (
                                                <>
                                                    <CheckCircle2 className="size-3.5 text-emerald-700" aria-hidden="true" />
                                                    Connected
                                                </>
                                            ) : (
                                                <>
                                                    <Sparkles className="size-3.5 text-slate-500" aria-hidden="true" />
                                                    Ready to use
                                                </>
                                            )}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </main>
        </section>
    );
}

function AccountStat({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {label}
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-950">{value}</p>
        </div>
    );
}

function ToggleRow({
    checked,
    description,
    onToggle,
    title,
}: {
    checked: boolean;
    description: string;
    onToggle: () => void;
    title: string;
}) {
    return (
        <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <p className="font-semibold text-slate-900">{title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
            </div>
            <button
                type="button"
                onClick={onToggle}
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                    checked ? "bg-emerald-600" : "bg-slate-300"
                }`}
                aria-pressed={checked}
            >
                <span
                    className={`absolute top-1 size-5 rounded-full bg-white shadow transition ${
                        checked ? "left-6" : "left-1"
                    }`}
                />
            </button>
        </div>
    );
}

function toTitle(value: string) {
    return value
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
}
