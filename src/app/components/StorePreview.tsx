import { ArrowUpRight, Package } from 'lucide-react';
import Link from 'next/link';
import { formatZar, type Product } from '../../lib/products';

export function StorePreview({ products }: { products: Product[] }) {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Tools for focused work.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              Desk and technology essentials designed by CHEFU Technologies.
            </p>
          </div>
          <Link
            href="/store"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Shop Now <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-8 text-slate-400">
            New products are arriving soon.
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <Link
                key={product.id}
                href={`/store/products/${product.slug}`}
                className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition hover:-translate-y-1 hover:border-cyan-400/60"
              >
                <div className="mb-8 flex h-28 items-center justify-between">
                  <Package className="h-14 w-14 text-cyan-400/80" strokeWidth={1.2} />
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-300">
                  {product.name}
                </h3>
                <p className="mt-2 min-h-12 text-sm leading-relaxed text-slate-400">
                  {product.shortDescription}
                </p>
                <p className="mt-6 font-semibold text-white">{formatZar(product.priceMinor)}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}