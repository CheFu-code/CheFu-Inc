import type { ReactNode } from "react";

export function FieldLabel({
    label,
    children,
}: {
    label: string;
    children: ReactNode;
}) {
    return (
        <label className="grid gap-2 text-sm text-slate-300">
            <span>{label}</span>
            {children}
        </label>
    );
}
