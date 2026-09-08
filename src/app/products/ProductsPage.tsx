import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { companyProducts } from "./product-data";

export function ProductsPage() {
    return (
        <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-32 text-slate-200">
            <div className="mx-auto max-w-7xl">
                <header className="max-w-3xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                        Built by CHEFU
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                        Products we build and operate.
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-400 md:text-xl">
                        CHEFU TECHNOLOGIES develops software, AI systems, and digital products for focused work, learning, communication, and creative technology.
                    </p>
                </header>

                <section aria-labelledby="product-grid-heading" className="mt-16">
                    <div className="mb-8 flex items-end justify-between gap-6">
                        <div>
                            <h2 id="product-grid-heading" className="text-2xl font-bold text-white md:text-3xl">
                                The CHEFU product ecosystem
                            </h2>
                            <p className="mt-2 text-slate-400">
                                Explore the products and platforms built across the company.
                            </p>
                        </div>
                        <Link href="/services" className="hidden items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200 md:inline-flex">
                            Need a product built? <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {companyProducts.map((product) => (
                            <article key={product.name} className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 transition-colors hover:border-cyan-400/50">
                                <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                                    <Image
                                        src={product.image}
                                        alt={`${product.name} product interface`}
                                        fill
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                        className={product.imageFit === "contain" ? "object-contain p-16 transition-transform duration-500 group-hover:scale-105" : "object-cover transition-transform duration-500 group-hover:scale-105"}
                                    />
                                </div>
                                <div className="p-6 md:p-8">
                                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">{product.category}</p>
                                    <h3 className="mt-3 text-2xl font-bold text-white">{product.name}</h3>
                                    <p className="mt-3 leading-7 text-slate-400">{product.description}</p>
                                    <a href={product.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-300">
                                        Visit product <ExternalLink className="h-4 w-4" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section aria-labelledby="product-engineering-heading" className="mt-20 border-t border-slate-800 pt-12">
                    <div className="flex max-w-3xl items-start gap-4">
                        <Code2 className="mt-1 h-6 w-6 shrink-0 text-cyan-400" />
                        <div>
                            <h2 id="product-engineering-heading" className="text-2xl font-bold text-white">From product idea to production system.</h2>
                            <p className="mt-3 leading-7 text-slate-400">
                                The same engineering capabilities behind CHEFU products are available to organizations that need software platforms, AI systems, and connected digital experiences.
                            </p>
                            <Link href="/contact?service=Digital%20Product" className="mt-5 inline-flex items-center gap-2 font-semibold text-cyan-300 hover:text-cyan-200">
                                Discuss a product <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
