import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { companyProducts } from "./product-data";

export function ProductsPage() {
    return (
        <main className="min-h-screen bg-stone-50 px-4 pb-20 pt-24 text-slate-800 sm:px-6 sm:pt-28">
            <div className="mx-auto max-w-6xl">
                <header className="max-w-3xl">
                    <h1 className="text-2xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-3xl md:text-4xl">
                        Products we build and operate.
                    </h1>
                    <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base md:text-lg md:leading-7">
                        Chefu Technologies develops software, AI systems, and digital products for focused work, learning, communication, and creative technology.
                    </p>
                </header>

                <section aria-labelledby="product-grid-heading" className="mt-10 sm:mt-12">
                    <div className="mb-6 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-sm text-slate-600">
                                Explore the products and platforms built across the company.
                            </p>
                        </div>
                        <Link href="/services" className="hidden items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-600 md:inline-flex">
                            Need a product built? <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2 md:gap-4">
                        {companyProducts.map((product) => (
                            <article key={product.name} className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-cyan-400/60 hover:shadow-sm">
                                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                                    <Image
                                        src={product.image}
                                        alt={`${product.name} product interface`}
                                        fill
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                        className={product.imageFit === "contain" ? "object-contain p-9 transition-transform duration-500 group-hover:scale-105 sm:p-10" : "object-cover transition-transform duration-500 group-hover:scale-105"}
                                    />
                                </div>
                                <div className="p-3 sm:p-4">
                                    <p className="text-[8.5px] font-semibold uppercase tracking-[0.16em] text-cyan-700">{product.category}</p>
                                    <h3 className="mt-2 text-base font-semibold tracking-[-0.03em] text-slate-900 sm:text-lg">{product.name}</h3>
                                    <p className="mt-2 text-[11px] leading-5 text-slate-600 sm:text-xs">{product.description}</p>
                                    <a href={product.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-[11px] font-medium text-slate-900 hover:text-cyan-700 sm:text-xs">
                                        Visit product <ExternalLink className="h-3.5 w-3.5" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section aria-labelledby="product-engineering-heading" className="mt-20 border-t border-slate-200 pt-12">
                    <div className="flex max-w-3xl items-start gap-4">
                        <Code2 className="mt-1 h-6 w-6 shrink-0 text-cyan-600" />
                        <div>
                            <h2 id="product-engineering-heading" className="text-xl font-semibold tracking-[-0.03em] text-slate-900 md:text-2xl">From product idea to production system.</h2>
                            <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
                                The same engineering capabilities behind our products are available to organizations that need software platforms, AI systems, and connected digital experiences.
                            </p>
                            <Link href="/contact?service=Digital%20Product" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-700 hover:text-cyan-600">
                                Discuss a product <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
