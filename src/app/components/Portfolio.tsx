import Image from 'next/image';
import Link from 'next/link';
import { companyProducts } from '../products/product-data';

export function Portfolio() {
  return (
    <section className="bg-[#f7f5f3] py-16 md:py-20">
      <div className="container mx-auto px-5 md:px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            
            <h2 className="text-2xl font-semibold tracking-[-0.05em] text-[#111827] md:text-3xl">
              Our Products.
            </h2>
          </div>
          <Link href="/products" className="text-sm font-medium text-[#111827] transition-colors hover:text-[#1f3c5b]">
            Explore products
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {companyProducts.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
            
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-[1rem] border border-[#e5e1dc] bg-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-[#e5e1dc] bg-[#f3f2ef]">
                <Image
                  src={project.image}
                  alt={`${project.name} product interface`}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className={`transition-transform duration-500 group-hover:scale-[1.02] ${project.imageFit === 'contain' ? 'object-contain p-8' : 'object-cover'}`}
                />
              </div>

              <div className="p-4 md:p-5">
                <div className="mb-2 text-[9px] font-medium uppercase tracking-[0.16em] text-[#6b7280]">
                  {project.category}
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-[-0.04em] text-[#111827]">
                  {project.name}
                </h3>
                <p className="text-xs leading-5 text-[#5f5b56]">
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
