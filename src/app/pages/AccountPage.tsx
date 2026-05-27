"use client";

import {
    ArrowRight,
    BellRing,
    BookOpenCheck,
    Camera,
    CheckCircle2,
    CircleHelp,
    Code2,
    ExternalLink,
    Grid3X3,
    Home,
    IdCard,
    KeyRound,
    Loader2,
    LockKeyhole,
    LogOut,
    Mail,
    MonitorSmartphone,
    Save,
    Search,
    ShieldCheck,
    Sparkles,
    type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sendPasswordResetEmail, signOut, updateProfile } from "firebase/auth";
import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
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
        description: "Courses, videos, SDK keys, and guided learning.",
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
        description: "AI assistant with saved conversations.",
        href: "https://quantum.chefuinc.com",
    },
];

const navItems: Array<{
    id: string;
    label: string;
    description: string;
    icon: LucideIcon;
    color: string;
}> = [
    {
        id: "home",
        label: "Home",
        description: "Overview and quick actions",
        icon: Home,
        color: "bg-sky-300 text-sky-950",
    },
    {
        id: "personal-info",
        label: "Personal info",
        description: "Name, bio, country, and language",
        icon: IdCard,
        color: "bg-emerald-300 text-emerald-950",
    },
    {
        id: "security",
        label: "Security & sign-in",
        description: "Password reset and security alerts",
        icon: LockKeyhole,
        color: "bg-cyan-300 text-cyan-950",
    },
    {
        id: "linked-apps",
        label: "Linked apps",
        description: "CheFu products connected to this account",
        icon: MonitorSmartphone,
        color: "bg-blue-300 text-blue-950",
    },
    {
        id: "privacy",
        label: "Data & privacy",
        description: "Public profile and personalization controls",
        icon: ShieldCheck,
        color: "bg-violet-300 text-violet-950",
    },
    {
        id: "academy",
        label: "Academy learning",
        description: "Learning goals and recommendation settings",
        icon: BookOpenCheck,
        color: "bg-amber-300 text-amber-950",
    },
    {
        id: "notifications",
        label: "Notifications",
        description: "Course and product email settings",
        icon: BellRing,
        color: "bg-pink-300 text-pink-950",
    },
    {
        id: "developer",
        label: "Developer access",
        description: "SDK and API key access",
        icon: Code2,
        color: "bg-orange-300 text-orange-950",
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
    const [accountSearch, setAccountSearch] = useState("");
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

    const connectedAppCount = useMemo(
        () =>
            connectedApps.filter((app) => account?.profile.apps?.[app.id]?.enabled)
                .length,
        [account?.profile.apps],
    );

    const filteredSections = useMemo(() => {
        const query = accountSearch.trim().toLowerCase();
        if (!query) return [];

        return navItems.filter((item) =>
            `${item.label} ${item.description}`.toLowerCase().includes(query),
        );
    }, [accountSearch]);

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

    function goToSection(id: string) {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        setAccountSearch("");
    }

    if (isLoading) {
        return (
            <section className="flex min-h-dvh items-center justify-center bg-[#202124] px-5 text-white">
                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#2b2c2f] px-5 py-4 text-sm font-semibold shadow-sm">
                    <Loader2 className="size-4 animate-spin text-emerald-300" aria-hidden="true" />
                    Loading your CheFu Account
                </div>
            </section>
        );
    }

    if (!account) {
        return (
            <section className="flex min-h-dvh items-center justify-center bg-[#202124] px-5 text-white">
                <div className="max-w-md rounded-lg border border-white/10 bg-[#2b2c2f] p-6 text-center shadow-sm">
                    <h1 className="text-2xl font-semibold">Account unavailable</h1>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                        We could not load your CheFu Account session.
                    </p>
                    <Link
                        href="/login?returnTo=/account"
                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                    >
                        Sign in
                        <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-dvh bg-[#202124] text-white">
            <header className="sticky top-0 z-30 border-b border-white/8 bg-[#2b2c2f]/95 backdrop-blur">
                <div className="flex h-16 items-center justify-between gap-4 px-5 lg:px-9">
                    <Link href="/" className="text-2xl font-medium tracking-normal text-white">
                        CheFu <span className="text-emerald-300">Account</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <Link
                            href="/contact"
                            className="hidden size-10 items-center justify-center rounded-full text-slate-200 transition hover:bg-white/10 sm:flex"
                            aria-label="Help"
                        >
                            <CircleHelp className="size-5" aria-hidden="true" />
                        </Link>
                        <button
                            type="button"
                            className="hidden size-10 items-center justify-center rounded-full text-slate-200 transition hover:bg-white/10 sm:flex"
                            aria-label="CheFu apps"
                        >
                            <Grid3X3 className="size-5" aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            onClick={handleSignOut}
                            disabled={isSigningOut}
                            className="inline-flex items-center gap-2 rounded-full border border-white/12 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10 disabled:opacity-60"
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

            <div className="mx-auto grid w-full max-w-[1480px] gap-6 px-4 py-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8">
                <aside className="hidden lg:block">
                    <nav className="sticky top-24 space-y-3" aria-label="Account sections">
                        {navItems.map((item, index) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => goToSection(item.id)}
                                className={`flex w-full items-center gap-3 rounded-full px-3 py-3 text-left transition hover:bg-white/10 ${
                                    index === 0 ? "bg-white/10" : ""
                                }`}
                            >
                                <span
                                    className={`flex size-12 shrink-0 items-center justify-center rounded-full ${item.color}`}
                                >
                                    <item.icon className="size-6" aria-hidden="true" />
                                </span>
                                <span className="text-base font-semibold text-white">
                                    {item.label}
                                </span>
                            </button>
                        ))}
                    </nav>
                </aside>

                <div className="min-w-0">
                    <div className="mb-5 flex gap-3 overflow-x-auto pb-2 lg:hidden">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => goToSection(item.id)}
                                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/12 px-3 py-2 text-sm font-semibold text-slate-100"
                            >
                                <span
                                    className={`flex size-7 items-center justify-center rounded-full ${item.color}`}
                                >
                                    <item.icon className="size-4" aria-hidden="true" />
                                </span>
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <section id="home" className="scroll-mt-24 text-center">
                        <div className="mx-auto flex size-32 items-center justify-center rounded-full bg-[#111213] shadow-[0_18px_64px_rgba(0,0,0,0.45)]">
                            <div
                                className="relative flex size-32 items-center justify-center rounded-full bg-cover bg-center text-4xl font-semibold text-white"
                                style={
                                    account.profile.profilePicture
                                        ? {
                                              backgroundImage: `url(${account.profile.profilePicture})`,
                                          }
                                        : undefined
                                }
                            >
                                {!account.profile.profilePicture ? initials || "C" : null}
                                <span className="absolute bottom-1 right-2 flex size-9 items-center justify-center rounded-full border border-[#202124] bg-[#3c4043] text-white">
                                    <Camera className="size-5" aria-hidden="true" />
                                </span>
                            </div>
                        </div>

                        <h1 className="mt-8 text-4xl font-normal leading-tight tracking-normal text-white sm:text-5xl">
                            {name || "CheFu Account"}
                        </h1>
                        <p className="mt-3 text-lg text-slate-300">{account.user.email}</p>

                        <div className="relative mx-auto mt-12 max-w-3xl">
                            <Search
                                className="pointer-events-none absolute left-6 top-1/2 size-6 -translate-y-1/2 text-slate-300"
                                aria-hidden="true"
                            />
                            <input
                                type="search"
                                value={accountSearch}
                                onChange={(event) => setAccountSearch(event.target.value)}
                                placeholder="Search CheFu Account"
                                className="h-16 w-full rounded-full border border-white/10 bg-[#3c4043] pl-16 pr-6 text-lg text-white outline-none transition placeholder:text-slate-300 focus:border-sky-300"
                                aria-label="Search CheFu Account sections"
                            />
                            {filteredSections.length > 0 ? (
                                <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-20 overflow-hidden rounded-lg border border-white/10 bg-[#2b2c2f] text-left shadow-2xl">
                                    {filteredSections.map((item) => (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => goToSection(item.id)}
                                            className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-white/10"
                                        >
                                            <span
                                                className={`flex size-9 shrink-0 items-center justify-center rounded-full ${item.color}`}
                                            >
                                                <item.icon className="size-5" aria-hidden="true" />
                                            </span>
                                            <span>
                                                <span className="block text-sm font-semibold text-white">
                                                    {item.label}
                                                </span>
                                                <span className="block text-xs text-slate-400">
                                                    {item.description}
                                                </span>
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            ) : null}
                        </div>

                        <div className="mx-auto mt-7 flex max-w-3xl flex-wrap justify-center gap-3">
                            <QuickLink icon={KeyRound} label="Password" onClick={() => goToSection("security")} />
                            <QuickLink icon={MonitorSmartphone} label="Apps" onClick={() => goToSection("linked-apps")} />
                            <QuickLink icon={ShieldCheck} label="Privacy" onClick={() => goToSection("privacy")} />
                            <QuickLink icon={BookOpenCheck} label="Academy" onClick={() => goToSection("academy")} />
                            <QuickLink icon={BellRing} label="Email" onClick={() => goToSection("notifications")} />
                        </div>

                        <div className="mx-auto mt-20 flex max-w-4xl items-center justify-between gap-6 text-left">
                            <p className="max-w-3xl text-lg leading-8 text-slate-200">
                                Only you can see your settings. Review your personal info,
                                security, privacy, connected apps, and Academy preferences
                                from one CheFu Account.
                            </p>
                            <ShieldCheck className="hidden size-10 shrink-0 text-sky-300 sm:block" aria-hidden="true" />
                        </div>
                    </section>

                    <form id="account-settings-form" onSubmit={saveProfile} className="mt-10 space-y-5">
                        <SectionCard
                            id="personal-info"
                            icon={IdCard}
                            title="Personal info"
                            description="Control the profile details that CheFu apps use."
                            action={
                                <SaveButton isSaving={isSaving} label="Save profile" />
                            }
                        >
                            <div className="grid gap-4 md:grid-cols-2">
                                <TextField label="Display name" value={name} onChange={setName} />
                                <TextField label="Email" value={account.user.email} readOnly />
                                <TextField label="Country" value={country} onChange={setCountry} placeholder="South Africa" />
                                <TextField label="Country code" value={countryCode} onChange={setCountryCode} placeholder="ZA" />
                                <TextField label="Language" value={language} onChange={setLanguage} placeholder="en" />
                                <TextField label="Role" value={roleLabel} readOnly />
                                <label className="block md:col-span-2">
                                    <span className="text-sm font-semibold text-slate-200">Bio</span>
                                    <textarea
                                        value={bio}
                                        onChange={(event) => setBio(event.target.value)}
                                        className="mt-2 min-h-24 w-full resize-none rounded-lg border border-white/10 bg-[#202124] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300"
                                        maxLength={280}
                                        placeholder="A short intro for learning and public profile experiences"
                                    />
                                </label>
                            </div>
                        </SectionCard>

                        <SectionCard
                            id="security"
                            icon={LockKeyhole}
                            title="Security & sign-in"
                            description="Protect your account and control sign-in alerts."
                        >
                            <div className="divide-y divide-white/10">
                                <ActionRow
                                    icon={KeyRound}
                                    title="Password reset"
                                    description={`Send a secure reset link to ${account.user.email}.`}
                                    action={
                                        <button
                                            type="button"
                                            onClick={sendResetEmail}
                                            disabled={isSendingReset}
                                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10 disabled:opacity-60"
                                        >
                                            {isSendingReset ? (
                                                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                                            ) : (
                                                <Mail className="size-4" aria-hidden="true" />
                                            )}
                                            Send reset
                                        </button>
                                    }
                                />
                                <ToggleRow
                                    checked={securityEmailsEnabled}
                                    title="Security email alerts"
                                    description="Receive an email when your account starts a new session."
                                    onToggle={() => {
                                        setSecurityEmailsEnabled((enabled) => !enabled);
                                        setEmailPreferences((current) => ({
                                            ...current,
                                            security: !current.security,
                                        }));
                                    }}
                                />
                            </div>
                        </SectionCard>

                        <SectionCard
                            id="linked-apps"
                            icon={MonitorSmartphone}
                            title="Linked apps"
                            description="CheFu products that can use your account session."
                            aside={`${connectedAppCount} connected`}
                        >
                            <div className="divide-y divide-white/10">
                                {connectedApps.map((app) => {
                                    const appProfile = account.profile.apps?.[app.id];
                                    const isConnected = appProfile?.enabled;

                                    return (
                                        <Link
                                            key={app.id}
                                            href={app.href}
                                            className="group flex flex-col gap-3 py-4 transition hover:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between"
                                        >
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-semibold text-white">{app.name}</h3>
                                                    <span className="inline-flex items-center gap-1 rounded-full bg-white/8 px-2 py-1 text-xs font-semibold text-slate-300">
                                                        {isConnected ? (
                                                            <CheckCircle2 className="size-3.5 text-emerald-300" aria-hidden="true" />
                                                        ) : (
                                                            <Sparkles className="size-3.5 text-slate-400" aria-hidden="true" />
                                                        )}
                                                        {isConnected ? "Connected" : "Ready"}
                                                    </span>
                                                </div>
                                                <p className="mt-1 text-sm leading-6 text-slate-400">
                                                    {app.description}
                                                </p>
                                            </div>
                                            <ExternalLink
                                                className="size-4 shrink-0 text-slate-500 transition group-hover:text-white"
                                                aria-hidden="true"
                                            />
                                        </Link>
                                    );
                                })}
                            </div>
                        </SectionCard>

                        <SectionCard
                            id="privacy"
                            icon={ShieldCheck}
                            title="Data & privacy"
                            description="Choose what appears publicly and how personalization works."
                            action={<SaveButton isSaving={isSaving} label="Save privacy" />}
                        >
                            <div className="divide-y divide-white/10">
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
                                            showCompletedCourses: !current.showCompletedCourses,
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
                        </SectionCard>

                        <SectionCard
                            id="academy"
                            icon={BookOpenCheck}
                            title="Academy learning"
                            description="Tune the learning experience CheFu Academy uses for recommendations."
                            action={<SaveButton isSaving={isSaving} label="Save learning" />}
                        >
                            <div className="grid gap-4 md:grid-cols-2">
                                <TextField
                                    label="Learning goal"
                                    value={learningGoal}
                                    onChange={setLearningGoal}
                                    placeholder="What do you want to learn next?"
                                    wide
                                />
                                <SelectField
                                    label="Skill level"
                                    value={skillLevel || "beginner"}
                                    onChange={(value) =>
                                        setSkillLevel(value as AccountProfile["skillLevel"])
                                    }
                                    options={skillLevels}
                                />
                                <TextField
                                    label="Weekly lessons"
                                    type="number"
                                    value={weeklyLearningGoal}
                                    onChange={setWeeklyLearningGoal}
                                    min={1}
                                    max={21}
                                />
                                <SelectField
                                    label="Lesson style"
                                    value={lessonStyle || "example-heavy"}
                                    onChange={(value) =>
                                        setLessonStyle(value as AccountProfile["lessonStyle"])
                                    }
                                    options={lessonStyles}
                                />
                                <SelectField
                                    label="Course difficulty"
                                    value={defaultCourseDifficulty || "beginner"}
                                    onChange={(value) =>
                                        setDefaultCourseDifficulty(
                                            value as AccountProfile["defaultCourseDifficulty"],
                                        )
                                    }
                                    options={skillLevels}
                                />
                                <SelectField
                                    label="Preferred format"
                                    value={preferredContentFormat || "examples"}
                                    onChange={(value) =>
                                        setPreferredContentFormat(
                                            value as AccountProfile["preferredContentFormat"],
                                        )
                                    }
                                    options={contentFormats}
                                />
                                <TextField
                                    label="Learning interests"
                                    value={learningInterestsInput}
                                    onChange={setLearningInterestsInput}
                                    placeholder="AI, Web development, Data analysis"
                                    wide
                                />
                            </div>
                            <div className="mt-4 divide-y divide-white/10 border-t border-white/10">
                                <ToggleRow
                                    checked={aiTutorSuggestions}
                                    title="AI tutor suggestions"
                                    description="Use your learning profile to personalize course and tutor suggestions."
                                    onToggle={() =>
                                        setAiTutorSuggestions((enabled) => !enabled)
                                    }
                                />
                            </div>
                        </SectionCard>

                        <SectionCard
                            id="notifications"
                            icon={BellRing}
                            title="Notifications"
                            description="Choose which Academy and product emails you receive."
                            action={<SaveButton isSaving={isSaving} label="Save notifications" />}
                        >
                            <div className="divide-y divide-white/10">
                                <ToggleRow
                                    checked={emailPreferences.courseReminders}
                                    title="Course reminders"
                                    description="Receive nudges for active lessons and study goals."
                                    onToggle={() =>
                                        setEmailPreferences((current) => ({
                                            ...current,
                                            courseReminders: !current.courseReminders,
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
                                            aiCourseCompletion: !current.aiCourseCompletion,
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
                        </SectionCard>

                        <SectionCard
                            id="developer"
                            icon={Code2}
                            title="Developer access"
                            description="SDK and API key access for CheFu integrations."
                            aside={account.profile.roles.includes("developer") ? "Enabled" : "Not enabled"}
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-base font-semibold text-white">
                                        {account.profile.roles.includes("developer")
                                            ? "API keys and SDK tools are enabled."
                                            : "Create an SDK account to unlock API keys."}
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-slate-400">
                                        Developer keys are managed from the Academy SDK and CheFu Inc API.
                                    </p>
                                </div>
                                <Link
                                    href="https://academy.chefuinc.com/docs"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                                >
                                    View SDK docs
                                    <ExternalLink className="size-4" aria-hidden="true" />
                                </Link>
                            </div>
                        </SectionCard>
                    </form>
                </div>
            </div>
        </section>
    );
}

function SectionCard({
    action,
    aside,
    children,
    description,
    icon: Icon,
    id,
    title,
}: {
    action?: ReactNode;
    aside?: string;
    children: ReactNode;
    description: string;
    icon: LucideIcon;
    id: string;
    title: string;
}) {
    return (
        <section
            id={id}
            className="scroll-mt-24 rounded-lg border border-white/10 bg-[#2b2c2f] p-5 shadow-[0_14px_44px_rgba(0,0,0,0.22)] sm:p-6"
        >
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/8 text-emerald-300">
                        <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                        <h2 className="text-xl font-semibold tracking-normal text-white">
                            {title}
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-slate-400">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    {aside ? (
                        <span className="rounded-full bg-white/8 px-3 py-1.5 text-xs font-semibold text-slate-200">
                            {aside}
                        </span>
                    ) : null}
                    {action}
                </div>
            </div>
            {children}
        </section>
    );
}

function QuickLink({
    icon: Icon,
    label,
    onClick,
}: {
    icon: LucideIcon;
    label: string;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="inline-flex items-center gap-2 rounded-lg border border-white/18 px-5 py-3 text-base font-semibold text-white transition hover:bg-white/10"
        >
            <Icon className="size-5" aria-hidden="true" />
            {label}
        </button>
    );
}

function ActionRow({
    action,
    description,
    icon: Icon,
    title,
}: {
    action: ReactNode;
    description: string;
    icon: LucideIcon;
    title: string;
}) {
    return (
        <div className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
                <Icon className="mt-0.5 size-5 text-slate-400" aria-hidden="true" />
                <div>
                    <p className="font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{description}</p>
                </div>
            </div>
            {action}
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
        <div className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <p className="font-semibold text-white">{title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">{description}</p>
            </div>
            <button
                type="button"
                onClick={onToggle}
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                    checked ? "bg-emerald-400" : "bg-slate-600"
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

function TextField({
    label,
    max,
    min,
    onChange,
    placeholder,
    readOnly,
    type = "text",
    value,
    wide,
}: {
    label: string;
    max?: number;
    min?: number;
    onChange?: (value: string) => void;
    placeholder?: string;
    readOnly?: boolean;
    type?: string;
    value: string;
    wide?: boolean;
}) {
    return (
        <label className={`block ${wide ? "md:col-span-2" : ""}`}>
            <span className="text-sm font-semibold text-slate-200">{label}</span>
            <input
                type={type}
                min={min}
                max={max}
                value={value}
                readOnly={readOnly}
                onChange={(event) => onChange?.(event.target.value)}
                className={`mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#202124] px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300 ${
                    readOnly ? "cursor-not-allowed text-slate-400" : ""
                }`}
                placeholder={placeholder}
            />
        </label>
    );
}

function SelectField({
    label,
    onChange,
    options,
    value,
}: {
    label: string;
    onChange: (value: string) => void;
    options: readonly string[];
    value: string;
}) {
    return (
        <label className="block">
            <span className="text-sm font-semibold text-slate-200">{label}</span>
            <select
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#202124] px-4 text-sm text-white outline-none transition focus:border-emerald-300"
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {toTitle(option)}
                    </option>
                ))}
            </select>
        </label>
    );
}

function SaveButton({ isSaving, label }: { isSaving: boolean; label: string }) {
    return (
        <button
            type="submit"
            disabled={isSaving}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 disabled:opacity-60"
        >
            {isSaving ? (
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            ) : (
                <Save className="size-4" aria-hidden="true" />
            )}
            {label}
        </button>
    );
}

function toTitle(value: string) {
    return value
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
}
