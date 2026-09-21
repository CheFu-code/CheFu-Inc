import Link from "next/link";
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
        <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-4 sm:pb-4">
            <div className="mx-auto max-w-6xl rounded-2xl border border-[#e5e1dc] bg-[#f7f5f3]/95 p-3 text-[#111827] shadow-xl shadow-black/5 backdrop-blur-md sm:p-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold text-[#111827] sm:text-base">
                            We use cookies to improve your experience.
                        </p>
                        <p className="mt-1 text-[11px] leading-5 text-[#374151] sm:text-xs">
                            We use essential cookies for site operation and optional cookies for analytics and marketing where you choose to enable them. {" "}
                            <Link href="/cookies" className="font-medium text-[#1f3c5b] underline-offset-2 hover:underline">
                                Learn more
                            </Link>
                            .
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <Button
                            type="button"
                            size="sm"
                            variant="secondary"
                            className="bg-white px-3 py-2 text-[11px] text-[#111827] hover:bg-[#f3f2ef] sm:text-xs"
                            onClick={onPreferences}
                        >
                            Preferences
                        </Button>
                        <Button
                            type="button"
                            size="sm"
                            variant="outline"
                            className="border-[#d1d5db] bg-transparent px-3 py-2 text-[11px] text-[#111827] hover:bg-[#f3f2ef] sm:text-xs"
                            onClick={onAcceptNecessary}
                        >
                            Only necessary
                        </Button>
                        <Button
                            type="button"
                            size="sm"
                            className="bg-[#1f3c5b] px-3 py-2 text-[11px] text-white hover:bg-[#17314d] sm:text-xs"
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
