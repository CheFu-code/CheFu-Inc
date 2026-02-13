"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

interface ToasterWrapperProps {
    position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
    reverseOrder?: boolean;
    gutter?: number;
    containerClassName?: string;
    theme?: "light" | "dark" | "system";
    richColors?: boolean;
}

const Toaster = ({ ...props }: ToasterWrapperProps) => {
    const { theme = "system" } = useTheme();

    return (
        <Sonner
            theme={theme as ToasterWrapperProps["theme"]}
            className="toaster group"
            style={
                {
                    "--normal-bg": "var(--popover)",
                    "--normal-text": "var(--popover-foreground)",
                    "--normal-border": "var(--border)",
                } as React.CSSProperties
            }
            {...props}
        />
    );
};

export { Toaster };
