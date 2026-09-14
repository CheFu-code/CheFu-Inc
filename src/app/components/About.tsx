'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function About() {
  return (
    <section className="overflow-hidden bg-[#f3f2f0] py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-[#111827] md:text-5xl">
                A technology company built around products
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-[#57534e]">
                CHEFU TECHNOLOGIES (Pty) Ltd is a South African technology company that builds software platforms, practical AI systems, and digital products. Our work combines product thinking with full-stack engineering.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-[#57534e]">
                We build our own products and work with organizations that need a capable engineering partner from product definition through production. Music and audio remain a genuine creative technology capability, but software and AI are our core.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  'Product engineering',
                  'Software and AI systems',
                  'Concept to production',
                  'Security-conscious delivery'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-[#e7e5e4] bg-white p-3 shadow-sm">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#2563eb]" />
                    <span className="font-medium text-[#1f2937]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10 overflow-hidden rounded-2xl border border-[#d6d3d1] bg-white shadow-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1758691737182-d42aefd6dee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbW9kZXJuJTIwb2ZmaWNlJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcwOTg1NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Team"
                width={1080}
                height={720}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
