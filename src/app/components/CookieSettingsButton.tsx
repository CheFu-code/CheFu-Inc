"use client";

type CookieSettingsButtonProps = {
    onClick: () => void;
};

export function CookieSettingsButton({ onClick }: CookieSettingsButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="fixed bottom-3 cursor-pointer left-3 z-40 rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-md transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
        >
            Cookie settings
        </button>
    );
}
