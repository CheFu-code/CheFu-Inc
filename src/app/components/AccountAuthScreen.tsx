import {
    ArrowRight,
    Building2,
    ChevronRight,
    Loader2,
    Lock,
    Mail,
    ShieldCheck
} from "lucide-react";
import Link from "next/link";
import type { FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type AccountAuthScreenProps = {
    alternateHref: string;
    appName: string;
    email: string;
    isSubmitting: boolean;
    mode: "login" | "register";
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
};

const modeCopy = {
    login: {
        alternateAction: "Create account",
        alternateLead: "New to CheFu?",
        buttonIdle: "Continue",
        heading: "Sign in",
        passwordAutoComplete: "current-password",
        passwordHelp: "",
        subheading: "Use your CheFu Account to continue.",
        submitting: "Signing in...",
    },
    register: {
        alternateAction: "Sign in",
        alternateLead: "Already have an account?",
        buttonIdle: "Create account",
        heading: "Create your CheFu Account",
        passwordAutoComplete: "new-password",
        passwordHelp: "Use at least 6 characters.",
        subheading: "One account for CheFu Academy, Muzalo, Flow, and future CheFu apps.",
        submitting: "Creating account...",
    },
} as const;



export function AccountAuthScreen({
    alternateHref,
    appName,
    email,
    isSubmitting,
    mode,
    onSubmit,
    password,
    setEmail,
    setPassword,
}: AccountAuthScreenProps) {
    const copy = modeCopy[mode];

    return (
        <section className="min-h-dvh overflow-y-auto bg-[#f7f8fb] text-slate-950">
            <div className="grid h-dvh grid-rows-[auto_1fr] bg-[linear-gradient(180deg,#ffffff_0%,#f7f8fb_48%,#eef6f4_100%)]">
                <header className="mx-auto flex w-full max-w-6xl items-center justify-end px-5 py-4 sm:px-8">

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-950"
                    >
                        Help
                        <ChevronRight className="size-4" aria-hidden="true" />
                    </Link>
                </header>

                <div className="mx-auto grid min-h-0 w-full max-w-6xl items-center gap-6 px-5 pb-4 sm:px-8 sm:pb-6 lg:grid-cols-[0.92fr_1.08fr]">
                    <aside className="hidden lg:block">
                        <div className="overflow-hidden rounded-lg border border-slate-900 bg-slate-950 text-white shadow-2xl">
                            <div className="border-b border-white/10 bg-[linear-gradient(135deg,rgba(20,184,166,0.22),rgba(255,255,255,0)_48%,rgba(245,158,11,0.16))] p-7">
                                <div className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-medium text-slate-200">
                                    <Building2 className="size-4 text-emerald-300" aria-hidden="true" />
                                    CheFu Inc.
                                </div>
                                <h1 className="mt-8 max-w-md text-4xl font-semibold leading-tight tracking-normal text-white">
                                    One secure account for every CheFu product.
                                </h1>
                                <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
                                    Continue to {appName} with the same identity you use across the CheFu ecosystem.
                                </p>
                            </div>

                           
                        </div>
                    </aside>

                    <div className="mx-auto w-full max-w-[520px]">
                        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.14)] sm:p-7">
                            <div className="flex items-start justify-between gap-5">
                                <div>
                                    <div className="inline-flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800">
                                        <ShieldCheck className="size-4" aria-hidden="true" />
                                        {appName}
                                    </div>
                                    <h2 className="mt-5 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
                                        {copy.heading}
                                    </h2>
                                </div>
                            </div>

                            <form onSubmit={onSubmit} className="mt-6 space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-semibold text-slate-800">
                                        Email
                                    </Label>
                                    <div className="relative">
                                        <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                                        <Input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                            placeholder="you@example.com"
                                            className="h-12 border-slate-300 bg-white pl-10 text-slate-950 shadow-sm placeholder:text-slate-400 focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20"
                                            autoComplete="email"
                                            autoFocus
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between gap-3">
                                        <Label
                                            htmlFor="password"
                                            className="text-sm font-semibold text-slate-800"
                                        >
                                            Password
                                        </Label>
                                        {copy.passwordHelp ? (
                                            <span className="text-xs font-medium text-slate-500">
                                                {copy.passwordHelp}
                                            </span>
                                        ) : null}
                                    </div>
                                    <div className="relative">
                                        <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                                        <Input
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                            placeholder="Your password"
                                            className="h-12 border-slate-300 bg-white pl-10 text-slate-950 shadow-sm placeholder:text-slate-400 focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20"
                                            autoComplete={copy.passwordAutoComplete}
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="h-12 w-full rounded-md bg-slate-950 text-base font-semibold text-white shadow-sm transition hover:bg-slate-800"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                                            {copy.submitting}
                                        </>
                                    ) : (
                                        <>
                                            {copy.buttonIdle}
                                            <ArrowRight className="size-4" aria-hidden="true" />
                                        </>
                                    )}
                                </Button>
                            </form>

                            <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
                                <p>{copy.alternateLead}</p>
                                <Link
                                    href={alternateHref}
                                    className="inline-flex items-center gap-2 font-semibold text-emerald-700 transition hover:text-emerald-900"
                                >
                                    {copy.alternateAction}
                                    <ArrowRight className="size-4" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
                            <Link href="/privacy" className="hover:text-slate-900">
                                Privacy
                            </Link>
                            <Link href="/terms" className="hover:text-slate-900">
                                Terms
                            </Link>
                            <Link href="/contact" className="hover:text-slate-900">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
