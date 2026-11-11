'use client';

import { useId, useState } from "react";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";

type FAQItem = {
    q: string;
    a: string;
    link?: { href: string; label: string };
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const accordionId = useId();

    return (
        <div className="space-y-3">
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={item.q}
                        className="overflow-hidden rounded-xl border border-[#e5e1dc] bg-white"
                    >
                        <h3>
                        <button
                            id={`${accordionId}-question-${index}`}
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={`${accordionId}-answer-${index}`}
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="flex min-h-11 w-full cursor-pointer items-center justify-between gap-3 p-4 text-left transition-colors hover:bg-[#f7f5f3] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#1f3c5b] sm:p-5"
                        >
                            <span className="min-w-0 text-sm font-medium leading-6 text-[#111827] sm:text-base">
                                {item.q}
                            </span>
                            <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center text-[#1f3c5b]">
                                {isOpen ? (
                                    <Minus className="h-4 w-4" />
                                ) : (
                                    <Plus className="h-4 w-4" />
                                )}
                            </span>
                        </button>
                        </h3>

                        <div
                            id={`${accordionId}-answer-${index}`}
                            hidden={!isOpen}
                        >
                            <div className="border-t border-[#e5e1dc] p-4 text-sm leading-6 text-[#5f5b56] sm:p-5 sm:leading-7">
                                <p>{item.a}</p>
                                {item.link && (
                                    <Link href={item.link.href} className="mt-2 inline-flex min-h-11 items-center font-medium text-[#1f3c5b] underline underline-offset-4 hover:text-[#111827]">
                                        {item.link.label}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
