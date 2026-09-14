'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Music, Brain, Code, ArrowRight, Mic2, Layers, Smartphone, Server, Radio, ArrowUpRight, Workflow, Database } from 'lucide-react';

const serviceDetails = [
  {
    id: 'software',
    title: 'Software Development',
    link: '/services/software',
    icon: Code,
    description: 'Scalable web, mobile, backend, and cloud applications engineered around the way your organization works.',
    items: [
      { title: 'Digital Products', desc: 'Turn a product idea into a usable, maintainable application.', icon: Layers },
      { title: 'Web and Mobile Applications', desc: 'Build reliable experiences for customers, teams, and communities.', icon: Smartphone },
      { title: 'Cloud Systems', desc: 'Connect services, data, and infrastructure into a production-ready system.', icon: Server },
    ]
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    link: '/services/ai',
    icon: Brain,
    description: 'Practical AI systems that help organizations automate work, interpret information, and build better products.',
    items: [
      { title: 'AI Applications', desc: 'Create useful AI features and products around real user needs.', icon: Brain },
      { title: 'Automation and Agents', desc: 'Connect models, tools, and workflows to reduce repetitive work.', icon: Workflow },
      { title: 'Data and Machine Learning', desc: 'Use data-informed systems where prediction or classification adds value.', icon: Database },
    ]
  },
  {
    id: 'music',
    title: 'Audio & Music Production',
    link: '/services/music',
    icon: Music,
    description: 'A specialized creative technology capability for artists, brands, games, apps, and digital media.',
    items: [
      { title: 'Beat Production', desc: 'Custom instrumentals tailored to your genre and style.', icon: Layers },
      { title: 'Mixing & Mastering', desc: 'Industry-standard polishing to make your tracks radio-ready.', icon: Mic2 },
      { title: 'Sound Design', desc: 'Creating unique soundscapes for games, films, and apps.', icon: Radio },
    ]
  }
];


export function ServicesPage() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20 pt-32 text-slate-800">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-6xl">Our Services</h1>
          <p className="text-xl text-slate-600">
            Product engineering and specialist capabilities for organizations building useful digital systems.
          </p>
        </div>

        <div className="space-y-32">
          {serviceDetails.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start gap-16`}>
              <div className="flex-1">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                    <service.icon className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                </div>
                <p className="mb-10 text-xl leading-relaxed text-slate-600">
                  {service.description}
                </p>

                <div className="grid gap-6">
                  {service.items.map((item) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="flex gap-4 rounded-xl p-4 transition-colors hover:bg-white"
                    >
                      <div className="mt-1">
                        <item.icon className="h-6 w-6 text-violet-600" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-bold text-slate-900">{item.title}</h3>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10 flex flex-wrap gap-4">
                   <Link 
                      href={service.link}
                      className="inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 font-bold text-white transition-colors hover:bg-slate-800"
                   >
                      Explore {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                   </Link>
                </div>
              </div>

              <div className="w-full flex-1">
                <Link href={service.link} className="group relative block aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-white lg:aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-white to-slate-100" />
                   <div className="absolute inset-0 flex items-center justify-center opacity-20 transition-opacity group-hover:opacity-10">
                      <service.icon className="h-64 w-64 text-slate-900" />
                   </div>
                   <Image
                      src={
                        index === 0 ? "https://images.unsplash.com/photo-1745848413113-4f39bdad5769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHJlY29yZGluZyUyMGVxdWlwbWVudCUyMGRhcmt8ZW58MXx8fHwxNzcwOTg3MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                        index === 1 ? "https://images.unsplash.com/photo-1761123044903-1671e0edc3f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGNvZGUlMjBkaWdpdGFsJTIwc2NyZWVuJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzA5ODcwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                        "https://images.unsplash.com/photo-1608306448197-e83633f1261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZyUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcwOTg1NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      }
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-bold text-slate-900 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                      View Details <ArrowUpRight className="h-3 w-3" />
                   </div>
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
