"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";
import type { ConsentPreferences } from "./useCookieConsent";

type CookiePreferencesDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    preferences: ConsentPreferences;
    onToggle: (key: "analytics" | "marketing") => void;
    onAcceptNecessary: () => void;
    onSave: () => void;
};

export function CookiePreferencesDialog({
    open,
    onOpenChange,
    preferences,
    onToggle,
    onAcceptNecessary,
    onSave,
}: CookiePreferencesDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
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
                                Helps us understand site usage and measure performance.
                            </p>
                        </div>
                        <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={() => onToggle("analytics")}
                            className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                        />
                    </label>

                    <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3">
                        <div>
                            <p className="font-medium text-slate-900">Marketing</p>
                            <p className="text-sm text-slate-600">
                                Enables advertising and measures ad performance.
                            </p>
                        </div>
                        <input
                            type="checkbox"
                            checked={preferences.marketing}
                            onChange={() => onToggle("marketing")}
                            className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                        />
                    </label>
                </div>

                <DialogFooter className="sm:justify-between">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={onAcceptNecessary}
                    >
                        Necessary only
                    </Button>
                    <div className="flex gap-2">
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => onOpenChange(false)}
                        >
                            Close
                        </Button>
                        <Button
                            type="button"
                            className="bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                            onClick={onSave}
                        >
                            Save preferences
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
