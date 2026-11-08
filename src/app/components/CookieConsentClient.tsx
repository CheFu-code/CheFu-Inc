"use client";

import { CookieConsent } from "./CookieConsent";
import { ConsentAwareScripts } from "./ConsentAwareScripts";
import { CookiePreferencesDialog } from "./CookiePreferencesDialog";
import { CookieSettingsButton } from "./CookieSettingsButton";
import { useCookieConsent } from "./useCookieConsent";

export function CookieConsentClient() {
    const {
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
        savePreferences,
    } = useCookieConsent();

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
                <CookieSettingsButton onClick={openPreferences} />
            ) : null}
            <CookiePreferencesDialog
                open={showModal}
                onOpenChange={setShowModal}
                preferences={draftPreferences}
                onToggle={handleToggle}
                onAcceptNecessary={handleAcceptNecessary}
                onSave={savePreferences}
            />
        </>
    );
}
