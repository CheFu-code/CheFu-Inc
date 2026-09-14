'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Music Production',
    link: '/services/music',
    description: 'From beat production to mixing and mastering, we engineer sonic landscapes that resonate.',
    features: ['Beat Production', 'Mixing & Mastering', 'Sound Design & Foley'],
    image: 'https://images.unsplash.com/photo-1598847873329-ed1608fb858b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHByb2R1Y3Rpb24lMjBtaXhpbmclMjBjb25zb2xlfGVufDF8fHx8MTc3MDk4NTYyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'AI Solutions',
    link: '/services/ai',
    description: 'Leverage the power of machine learning and voice technology to automate and innovate.',
    features: ['AI-Powered Apps', 'Machine Learning Systems', 'Voice Technology'],
    image: 'https://images.unsplash.com/photo-1750365919971-7dd273e7b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnJhaW4lMjBuZXR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzA5ODU2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'Software Development',
    link: '/services/software',
    description: 'Scalable web and mobile applications built with modern frameworks and robust architecture.',
    features: ['Web Applications', 'Mobile App Development', 'Custom Systems'],
    image: 'https://images.unsplash.com/photo-1608306448197-e83633f1261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZyUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcwOTg1NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Services() {
  return (
    <section className="relative bg-[#f5f5f4] py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-[#111827] md:text-5xl">
            Our Expertise
          </h2>
          <p className="text-lg text-[#57534e]">
            We don't just build; we craft. Explore our core service areas designed to push boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.45 }}
              viewport={{ once: true }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e7e5e4] bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-grow flex-col p-8">
                <h3 className="mb-3 text-2xl font-bold text-[#111827]">
                  {service.title}
                </h3>
                <p className="mb-6 leading-relaxed text-[#57534e]">
                  {service.description}
                </p>

                <ul className="mb-8 flex-grow space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-[#374151]">
                      <span className="mr-2 h-2 w-2 rounded-full bg-[#2563eb]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.link}
                  className="mt-auto inline-flex items-center text-sm font-semibold text-[#111827] transition-colors hover:text-[#2563eb]"
                >
                  Learn more
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
