'use client';

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";
import { CookieConsent } from "./CookieConsent";
import { ConsentAwareScripts } from "./ConsentAwareScripts";

type ConsentPreferences = {
    necessary: true;
    analytics: boolean;
    marketing: boolean;
};

const STORAGE_KEY = "chefu_cookie_consent";
const defaultPreferences: ConsentPreferences = {
    necessary: true,
    analytics: false,
    marketing: false,
};

function readStoredPreferences(raw: string | null): ConsentPreferences | null {
    try {
        if (!raw) {
            return null;
        }

        const parsed: unknown = JSON.parse(raw);
        if (
            !parsed ||
            typeof parsed !== "object" ||
            !("analytics" in parsed) ||
            !("marketing" in parsed) ||
            typeof parsed.analytics !== "boolean" ||
            typeof parsed.marketing !== "boolean"
        ) {
            return null;
        }
        return {
            necessary: true,
            analytics: parsed.analytics,
            marketing: parsed.marketing,
        };
    } catch {
        return null;
    }
}

function persistPreferences(preferences: ConsentPreferences) {
    if (typeof window === "undefined") {
        return false;
    }

    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
        window.dispatchEvent(new Event("chefu-cookie-consent-change"));
        return true;
    } catch {
        toast.error("Unable to save cookie preferences. Please check your browser storage settings.");
        return false;
    }
}

function subscribeToConsent(listener: () => void) {
    if (typeof window === "undefined") return () => {};
    window.addEventListener("storage", listener);
    window.addEventListener("chefu-cookie-consent-change", listener);
    return () => {
        window.removeEventListener("storage", listener);
        window.removeEventListener("chefu-cookie-consent-change", listener);
    };
}

function getConsentSnapshot() {
    try {
        return window.localStorage.getItem(STORAGE_KEY);
    } catch {
        return null;
    }
}

export function CookieConsentClient() {
    const storedValue = useSyncExternalStore(
        subscribeToConsent,
        getConsentSnapshot,
        () => "__server__",
    );
    const hasLoadedPreferences = storedValue !== "__server__";
    const storedPreferences = readStoredPreferences(storedValue);
    const preferences = storedPreferences ?? defaultPreferences;
    const showBanner = hasLoadedPreferences && storedPreferences === null;
    const [showModal, setShowModal] = useState(false);
    const [draftPreferences, setDraftPreferences] =
        useState<ConsentPreferences>(defaultPreferences);

    useEffect(() => {
        document.cookie = `${STORAGE_KEY}=; path=/; max-age=0; SameSite=Lax`;
    }, []);

    const openPreferences = () => {
        setDraftPreferences(preferences);
        setShowModal(true);
    };

    const applyPreferences = (nextPreferences: ConsentPreferences) => {
        if (!persistPreferences(nextPreferences)) return;
        const withdrewOptionalConsent =
            (preferences.analytics && !nextPreferences.analytics) ||
            (preferences.marketing && !nextPreferences.marketing);
        setShowModal(false);
        if (withdrewOptionalConsent) window.location.reload();
    };

    const handleAcceptAll = () => {
        applyPreferences({
            necessary: true,
            analytics: true,
            marketing: true,
        });
    };

    const handleAcceptNecessary = () => {
        applyPreferences(defaultPreferences);
    };

    const handleToggle = (key: "analytics" | "marketing") => {
        setDraftPreferences((current) => ({
            ...current,
            [key]: !current[key],
        }));
    };

    return (
        <>
            {hasLoadedPreferences ? (
                <ConsentAwareScripts
                    analyticsEnabled={preferences.analytics}
                    marketingEnabled={preferences.marketing}
                />
            ) : null}
            {showBanner ? (
                <CookieConsent
                    onPreferences={openPreferences}
                    onAcceptNecessary={handleAcceptNecessary}
                    onAcceptAll={handleAcceptAll}
                />
            ) : null}

            {!showBanner ? (
                <button
                    type="button"
                    onClick={openPreferences}
                    className="fixed bottom-3 left-3 z-40 rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-md transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
                >
                    Cookie settings
                </button>
            ) : null}

            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="sm:max-w-xl">
                    <DialogHeader>
                        <DialogTitle>Cookie preferences</DialogTitle>
                        <DialogDescription>
                            Choose which types of cookies you want to allow. Essential cookies are always enabled. {" "}
                            <Link href="/cookies" className="font-medium text-emerald-700 underline-offset-2 hover:underline">
                                Learn more
                            </Link>
                            .
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 py-2">
                        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3">
                            <div>
                                <p className="font-medium text-slate-900">Essential</p>
                                <p className="text-sm text-slate-600">
                                    Required for security, performance, and core site functionality.
                                </p>
                            </div>
                            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                                Always on
                            </span>
                        </div>

                        <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3">
                            <div>
                                <p className="font-medium text-slate-900">Analytics</p>
                                <p className="text-sm text-slate-600">
                                    Enables Vercel Analytics and Speed Insights to measure site usage and performance.
                                </p>
                            </div>
                            <input
                                type="checkbox"
                                checked={draftPreferences.analytics}
                                onChange={() => handleToggle("analytics")}
                                className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                            />
                        </label>

                        <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3">
                            <div>
                                <p className="font-medium text-slate-900">Marketing</p>
                                <p className="text-sm text-slate-600">
                                    Enables Google AdSense advertising and related measurement technologies.
                                </p>
                            </div>
                            <input
                                type="checkbox"
                                checked={draftPreferences.marketing}
                                onChange={() => handleToggle("marketing")}
                                className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                            />
                        </label>
                    </div>

                    <DialogFooter className="sm:justify-between">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleAcceptNecessary}
                        >
                            Necessary only
                        </Button>
                        <div className="flex gap-2">
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </Button>
                            <Button
                                type="button"
                                className="bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                                onClick={() => applyPreferences(draftPreferences)}
                            >
                                Save preferences
                            </Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
