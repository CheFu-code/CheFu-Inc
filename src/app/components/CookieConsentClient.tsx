'use client';

import { useState } from "react";
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

type ConsentPreferences = {
    necessary: true;
    analytics: boolean;
    marketing: boolean;
};

const STORAGE_KEY = "chefu_cookie_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const defaultPreferences: ConsentPreferences = {
    necessary: true,
    analytics: false,
    marketing: false,
};

function readStoredPreferences(): ConsentPreferences | null {
    if (typeof window === "undefined") {
        return null;
    }

    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);

        if (!raw) {
            return null;
        }

        return {
            ...defaultPreferences,
            ...JSON.parse(raw),
        } as ConsentPreferences;
    } catch {
        return null;
    }
}

function persistPreferences(preferences: ConsentPreferences) {
    if (typeof window === "undefined") {
        return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    document.cookie = `${STORAGE_KEY}=${encodeURIComponent(JSON.stringify(preferences))}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

export function CookieConsentClient() {
    const storedPreferences = readStoredPreferences();

    const [showBanner, setShowBanner] = useState(() => storedPreferences === null);
    const [showModal, setShowModal] = useState(false);
    const [preferences, setPreferences] =
        useState<ConsentPreferences>(() => storedPreferences ?? defaultPreferences);

    const applyPreferences = (nextPreferences: ConsentPreferences) => {
        setPreferences(nextPreferences);
        persistPreferences(nextPreferences);
        setShowBanner(false);
        setShowModal(false);
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
        setPreferences((current) => ({
            ...current,
            [key]: !current[key],
        }));
    };

    return (
        <>
            {showBanner ? (
                <CookieConsent
                    onPreferences={() => setShowModal(true)}
                    onAcceptNecessary={handleAcceptNecessary}
                    onAcceptAll={handleAcceptAll}
                />
            ) : null}

            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="sm:max-w-xl">
                    <DialogHeader>
                        <DialogTitle>Cookie preferences</DialogTitle>
                        <DialogDescription>
                            Choose which types of cookies you want to allow. Essential cookies are always enabled.
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
                                    Helps us understand how visitors use the site.
                                </p>
                            </div>
                            <input
                                type="checkbox"
                                checked={preferences.analytics}
                                onChange={() => handleToggle("analytics")}
                                className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                            />
                        </label>

                        <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3">
                            <div>
                                <p className="font-medium text-slate-900">Marketing</p>
                                <p className="text-sm text-slate-600">
                                    Used to support personalised or promotional experiences.
                                </p>
                            </div>
                            <input
                                type="checkbox"
                                checked={preferences.marketing}
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
                                onClick={() => applyPreferences(preferences)}
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
