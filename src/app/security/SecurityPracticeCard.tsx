"use client";

import { useEffect, useId, useRef, useState } from "react";

export function SecurityPracticeCard({ title, description }: { title: string; description: string }) {
    const [expanded, setExpanded] = useState(false);
    const [truncated, setTruncated] = useState(false);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const descriptionId = useId();

    useEffect(() => {
        const element = descriptionRef.current;
        if (!element || expanded) return;

        const measure = () => setTruncated(element.scrollHeight > element.clientHeight);
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(element);
        return () => observer.disconnect();
    }, [expanded]);

    return (
        <article className="min-w-0 rounded-xl border border-[#e5e1dc] bg-white p-3 sm:p-5 md:p-6">
            <h3 className="mb-2 break-words text-base font-semibold tracking-[-0.02em] text-[#111827] sm:text-lg">
                {title}
            </h3>
            <p
                ref={descriptionRef}
                id={descriptionId}
                className={`text-sm leading-5 text-[#5f5b56] md:line-clamp-none md:leading-6 ${expanded ? "" : "line-clamp-3"}`}
            >
                {description}
            </p>
            {(truncated || expanded) && (
                <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={descriptionId}
                    aria-label={`${expanded ? "Show less" : "Read more"} about ${title}`}
                    onClick={() => setExpanded((previous) => !previous)}
                    className="mt-2 inline-flex min-h-11 cursor-pointer items-center rounded-md text-sm font-medium text-[#1f3c5b] underline underline-offset-4 hover:text-[#111827] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3c5b] md:hidden"
                >
                    {expanded ? "Show less" : "Read more"}
                </button>
            )}
        </article>
    );
}
