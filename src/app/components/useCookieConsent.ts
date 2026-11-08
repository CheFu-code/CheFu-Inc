"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { toast } from "sonner";

export type ConsentPreferences = {
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

export function useCookieConsent() {
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

    return {
        hasLoadedPreferences,
        preferences,
        showBanner,
        showModal,
        setShowModal,
        draftPreferences,
        openPreferences,
        handleAcceptAll,
        handleAcceptNecessary,
        handleToggle,
        savePreferences: () => applyPreferences(draftPreferences),
    };
}
