"use client";

import { signOut } from "firebase/auth";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { auth } from "../../config/firebaseConfig";
import { clearChefuAccountSession, safeReturnTo } from "../../lib/chefu-account";

export function LogoutPage() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const returnTo = safeReturnTo(searchParams.get("returnTo"), "/");

        Promise.allSettled([clearChefuAccountSession(), signOut(auth)]).finally(() => {
            window.location.replace(returnTo);
        });
    }, [searchParams]);

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
            <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-6 text-center shadow-xl">
                <p className="text-lg font-semibold">Signing out of CheFu Account...</p>
                <p className="mt-2 text-sm text-slate-400">
                    We are closing your shared CheFu session.
                </p>
            </div>
        </main>
    );
}
