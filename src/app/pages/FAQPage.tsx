'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';

// Custom Accordion since we don't have the shadcn one installed fully with utils
function SimpleAccordion({ items }: { items: { q: string, a: string }[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-slate-800 rounded-xl bg-slate-900 overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className="text-lg font-bold text-white">{item.q}</span>
            {openIndex === index ? (
              <Minus className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            ) : (
              <Plus className="w-5 h-5 text-slate-500 flex-shrink-0" />
            )}
          </button>
          <motion.div
            initial={false}
            animate={{ height: openIndex === index ? 'auto' : 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50 mt-2">
              {item.a}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

const faqs = [
  {
    q: "Do you work with independent artists or just corporations?",
    a: "We work with both! While we have large enterprise clients for our software solutions, we are passionate about music and regularly collaborate with independent artists for production, mixing, and sound design."
  },
  {
    q: "What is your typical timeline for a custom software project?",
    a: "Timelines vary greatly depending on scope. A simple MVP might take 4-8 weeks, while a complex enterprise platform could take 6-12 months. We work in agile sprints to deliver value incrementally."
  },
  {
    q: "Do you retain ownership of the IP you create?",
    a: "For client work, we typically operate on a 'work for hire' basis, meaning you own the IP once final payment is settled. For our internal products (like our VSTs), CHEFU TECHNOLOGIES retains ownership."
  },
  {
    q: "Can you help integrate AI into our existing legacy systems?",
    a: "Yes, this is one of our specialties. We can build API layers or microservices that allow your legacy infrastructure to leverage modern AI capabilities without a complete rewrite."
  },
  {
    q: "How do you handle data privacy and security?",
    a: "Security is built into our process from day one. We follow industry best practices, use encrypted communications, and comply with GDPR/CCPA regulations where applicable."
  }
];

export function FAQPage() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20 pt-32 text-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start gap-16 md:flex-row">
          
          <div className="sticky top-32 md:w-1/3">
            <span className="mb-2 block text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Support</span>
            <h1 className="mb-6 text-4xl font-bold text-slate-900">Frequently Asked Questions</h1>
            <p className="mb-8 text-slate-600">
              Can't find the answer you're looking for? Reach out to our support team directly.
            </p>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-auto md:h-64">
                <Image
                    src="https://images.unsplash.com/photo-1618218168350-6e7c81151b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBoZWxwJTIwZmFxJTIwcXVlc3Rpb25zfGVufDF8fHx8MTc3MDk4NzQ5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Support"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-violet-900/10" />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <SimpleAccordion items={faqs} />
          </div>

        </div>
      </div>
    </div>
  );
}
