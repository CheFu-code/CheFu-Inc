'use client';

import Image from 'next/image';

export function About() {
  return (
    <section className="border-t border-[#e5e1dc] bg-[#f5f1ed] py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#6b7280]">
              About
            </p>
            <h2 className="mb-6 max-w-xl text-3xl font-semibold tracking-[-0.05em] text-[#111827] md:text-5xl">
              A technology company built around products.
            </h2>
            <p className="mb-5 max-w-2xl text-lg leading-8 text-[#5f5b56]">
              CHEFU TECHNOLOGIES builds software platforms, practical AI systems, and digital products. We work at the intersection of product thinking and engineering execution.
            </p>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-[#5f5b56]">
              We build products internally and partner with teams that need a capable engineering partner from concept through launch. Music and audio remain a core capability, but software and AI are the foundation of the business.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                'Product engineering',
                'Software and AI systems',
                'Concept to production',
                'Security-conscious delivery',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 border-b border-[#e5e1dc] bg-transparent py-3">
                  <span className="h-2 w-2 rounded-full bg-[#1f3c5b]" />
                  <span className="text-sm font-medium text-[#1f2937]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.25rem] border border-[#e5e1dc] bg-white">
            <Image
              src="https://images.unsplash.com/photo-1758691737182-d42aefd6dee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbW9kZXJuJTIwb2ZmaWNlJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcwOTg1NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern Team"
              width={1080}
              height={720}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
