"use client";

import type { ReactNode } from "react";

type HomeExperienceProps = {
    children: ReactNode;
};

export function HomeExperience({ children }: HomeExperienceProps) {
    return (
        <div className="relative bg-[#f7f5f3]">
            <div className="relative z-[1]">{children}</div>
        </div>
    );
}