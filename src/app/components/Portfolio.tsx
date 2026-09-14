'use client';

import Image from 'next/image';
import Link from 'next/link';
import { companyProducts } from '../products/product-data';

export function Portfolio() {
  return (
    <section className="bg-[#f7f5f3] py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#6b7280]">
              Portfolio
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[#111827] md:text-5xl">
              Our Products.
            </h2>
          </div>
          <Link href="/products" className="text-sm font-medium text-[#111827] transition-colors hover:text-[#1f3c5b]">
            Explore products
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {companyProducts.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-[1.25rem] border border-[#e5e1dc] bg-white"
            >
              <div className="relative aspect-video overflow-hidden border-b border-[#e5e1dc] bg-[#f3f2ef]">
                <Image
                  src={project.image}
                  alt={`${project.name} product interface`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={`transition-transform duration-500 group-hover:scale-[1.02] ${project.imageFit === 'contain' ? 'object-contain p-10' : 'object-cover'}`}
                />
              </div>

              <div className="p-6">
                <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#6b7280]">
                  {project.category}
                </div>
                <h3 className="mb-2 text-2xl font-semibold tracking-[-0.04em] text-[#111827]">
                  {project.name}
                </h3>
                <p className="text-base leading-7 text-[#5f5b56]">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
