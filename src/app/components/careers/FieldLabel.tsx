import type { ReactNode } from "react";

export function FieldLabel({
    label,
    required = false,
    className = "",
    children,
}: {
    label: string;
    required?: boolean;
    className?: string;
    children: ReactNode;
}) {
    return (
        <label className={`grid min-w-0 content-start gap-1.5 text-xs leading-5 text-[#374151] sm:text-sm ${className}`}>
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
