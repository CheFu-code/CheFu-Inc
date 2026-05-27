"use client";

import { ChevronDown, ExternalLink, LogOut, UserRound } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export type UserDropdownUser = {
    displayName?: string | null;
    email?: string | null;
    photoURL?: string | null;
};

export function UserDropdown({
    accountHref = "/account",
    onSignOut,
    user,
}: {
    accountHref?: string;
    onSignOut: () => void | Promise<void>;
    user: UserDropdownUser;
}) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const label = user.displayName || user.email || "CheFu Account";
    const initials = getInitials(label);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape") setOpen(false);
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <button
                type="button"
                className="flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 py-1 pl-1 pr-2 text-left shadow-lg shadow-black/10 transition hover:border-cyan-400/60 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80"
                onClick={() => setOpen((value) => !value)}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-label="Open user menu"
            >
                <Avatar className="size-9">
                    <AvatarImage src={user.photoURL ?? undefined} />
                    <AvatarFallback className="bg-cyan-300 text-sm font-semibold text-slate-950">
                        {initials}
                    </AvatarFallback>
                </Avatar>
                <ChevronDown
                    className={`size-4 text-slate-400 transition ${open ? "rotate-180" : ""}`}
                    aria-hidden="true"
                />
            </button>

            {open ? (
                <div
                    className="absolute right-0 top-12 z-50 w-72 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/95 shadow-2xl shadow-black/30 backdrop-blur"
                    role="menu"
                >
                    <div className="border-b border-slate-800 px-4 py-4">
                        <p className="truncate text-sm font-semibold text-white">{label}</p>
                        {user.email ? (
                            <p className="mt-1 truncate text-xs text-slate-400">{user.email}</p>
                        ) : null}
                    </div>
                    <MenuLink href={accountHref} onClick={() => setOpen(false)}>
                        <UserRound className="size-4" />
                        Manage account
                        <ExternalLink className="ml-auto size-3.5 text-slate-500" />
                    </MenuLink>
                    <button
                        type="button"
                        className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-red-300 transition hover:bg-red-500/10"
                        onClick={async () => {
                            await onSignOut();
                            setOpen(false);
                        }}
                        role="menuitem"
                    >
                        <LogOut className="size-4" />
                        Log out
                    </button>
                </div>
            ) : null}
        </div>
    );
}

function MenuLink({
    children,
    href,
    onClick,
}: {
    children: ReactNode;
    href: string;
    onClick: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-white"
            role="menuitem"
        >
            {children}
        </Link>
    );
}

function getInitials(label: string) {
    const cleanLabel = label.replace(/@.*/, "");
    const parts = cleanLabel.split(/\s+/).filter(Boolean);
    const first = parts[0]?.[0] || "C";
    const second = parts.length > 1 ? parts[1]?.[0] : "";

    return `${first}${second}`.toUpperCase();
}
