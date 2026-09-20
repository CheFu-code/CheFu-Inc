'use client';

import { useState } from "react";
import { motion } from "motion/react";
import { Minus, Plus } from "lucide-react";

type FAQItem = {
    q: string;
    a: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-4">
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={item.q}
                        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors"
                    >
                        <button
                            type="button"
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="flex w-full items-center justify-between gap-4 p-5 text-left"
                        >
                            <span className="text-base font-semibold text-slate-900">
                                {item.q}
                            </span>
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                                {isOpen ? (
                                    <Minus className="h-4 w-4" />
                                ) : (
                                    <Plus className="h-4 w-4" />
                                )}
                            </span>
                        </button>

                        <motion.div
                            initial={false}
                            animate={{ height: isOpen ? "auto" : 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="overflow-hidden"
                        >
                            <div className="border-t border-slate-200 px-5 pb-5 pt-4 text-sm leading-7 text-slate-600">
                                {item.a}
                            </div>
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
}
