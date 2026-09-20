import { Button } from "./ui/button";

type CookieConsentProps = {
    onPreferences: () => void;
    onAcceptNecessary: () => void;
    onAcceptAll: () => void;
};

export function CookieConsent({
    onPreferences,
    onAcceptNecessary,
    onAcceptAll,
}: CookieConsentProps) {
    return (
        <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
            <div className="mx-auto max-w-6xl rounded-2xl border border-slate-700 bg-slate-950/95 p-5 text-slate-100 shadow-2xl shadow-black/40 backdrop-blur-md">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-lg font-semibold text-white">
                            We use cookies to improve your experience.
                        </p>
                        <p className="mt-1 text-sm text-slate-300">
                            We use essential cookies for site operation and optional cookies for analytics and marketing where you choose to enable them.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row">
                        <Button
                            type="button"
                            variant="secondary"
                            className="bg-white text-slate-900 hover:bg-slate-200"
                            onClick={onPreferences}
                        >
                            Preferences
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            className="border-slate-600 bg-transparent text-slate-100 hover:bg-slate-800"
                            onClick={onAcceptNecessary}
                        >
                            Only necessary
                        </Button>
                        <Button
                            type="button"
                            className="bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                            onClick={onAcceptAll}
                        >
                            Accept all
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
