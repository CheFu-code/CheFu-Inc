import type { ReactNode } from "react";

export function FieldLabel({
    label,
    required = false,
    children,
}: {
    label: string;
    required?: boolean;
    children: ReactNode;
}) {
    return (
        <label className="grid gap-2 text-sm text-[#374151]">
            <span>
                {label}
                {required && (
                    <span className="ml-1 text-red-600" aria-hidden="true">
                        *
                    </span>
                )}
            </span>
            {children}
        </label>
    );
}
