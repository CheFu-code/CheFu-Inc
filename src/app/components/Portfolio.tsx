'use client';

import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { companyProducts } from '../products/product-data';

export function Portfolio() {
  return (
    <section className="py-24 bg-slate-900/90">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Products built by CHEFU
            </h2>
            <p className="text-slate-400 text-lg">
              Software, AI, learning, communication, and music products built across the CHEFU ecosystem.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden md:inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors mt-4 md:mt-0"
          >
            Explore products <ExternalLink className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companyProducts.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden aspect-video bg-slate-800"
            >
              <Image
                src={project.image}
                alt={`${project.name} product interface`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className={`transition-transform duration-700 group-hover:scale-105 ${project.imageFit === 'contain'
                  ? 'object-contain p-12 opacity-95'
                  : 'object-cover opacity-80 group-hover:opacity-100'
                  }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
              <div className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <ExternalLink className="size-4" />
              </div>

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-slate-300 line-clamp-2">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
          >
            Explore products <ExternalLink className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
