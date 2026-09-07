import { ArrowUpRight, Package, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatZar, type Product } from "../../lib/products";

export function StorePreview({ products }: { products: Product[] }) {
    const previewProducts = products.slice(0, 4);

    return (
        <section className="relative overflow-hidden bg-slate-900 py-24">
            {/* Ambient background */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

            <div className="container relative mx-auto px-6">
                {/* Header */}
                <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                        <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                            CHEFU Store
                        </span>

                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                            Tools for focused work.
                        </h2>

                        <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400">
                            Desk and technology essentials designed by CHEFU
                            Technologies for modern creators, developers, and
                            professionals.
                        </p>
                    </div>

                    <Link
                        href="/store"
                        className="group inline-flex w-fit items-center gap-2 rounded-full border border-slate-700 bg-slate-950/30 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-300"
                    >
                        Shop Now
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>

                {/* Empty state */}
                {previewProducts.length === 0 ? (
                    <div className="rounded-3xl border border-slate-800 bg-slate-950/40 p-10 text-center">
                        <Package className="mx-auto mb-4 h-10 w-10 text-slate-700" />

                        <h3 className="text-lg font-semibold text-white">
                            New products are arriving soon.
                        </h3>

                        <p className="mt-2 text-sm text-slate-500">
                            Check back soon for the latest CHEFU essentials.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {previewProducts.map((product) => {
                            const image =
                                product.thumbnail ??
                                product.images?.[0]?.url ??
                                null;

                            const isOutOfStock =
                                product.status === "OUT_OF_STOCK" ||
                                product.inventoryQuantity <= 0;

                            const isLowStock =
                                !isOutOfStock &&
                                product.inventoryQuantity <=
                                product.lowStockThreshold;

                            const hasDiscount =
                                product.compareAtPriceMinor &&
                                product.compareAtPriceMinor >
                                product.priceMinor;

                            return (
                                <Link
                                    key={product.id}
                                    href={`/store/products/${product.slug}`}
                                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/60 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-950"
                                >
                                    {/* Product image */}
                                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                                        {image ? (
                                            <Image
                                                src={image}
                                                alt={product.name}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center">
                                                <Package
                                                    className="h-16 w-16 text-cyan-400/30 transition-transform duration-500 group-hover:scale-110"
                                                    strokeWidth={1.2}
                                                />
                                            </div>
                                        )}

                                        {/* Image overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />

                                        {/* Featured badge */}
                                        {product.featured && (
                                            <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/70 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                                                <Star className="h-3 w-3 fill-cyan-400 text-cyan-400" />
                                                Featured
                                            </div>
                                        )}

                                        {/* Stock badge */}
                                        <div className="absolute right-4 top-4">
                                            {isOutOfStock ? (
                                                <span className="rounded-full border border-slate-700 bg-slate-950/80 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400 backdrop-blur-md">
                                                    Out of stock
                                                </span>
                                            ) : isLowStock ? (
                                                <span className="rounded-full border border-cyan-400/20 bg-slate-950/80 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                                                    Low stock
                                                </span>
                                            ) : null}
                                        </div>
                                    </div>

                                    {/* Product information */}
                                    <div className="flex flex-1 flex-col p-5">
                                        <div className="mb-3 flex items-center justify-between gap-3">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                                                {product.category}
                                            </span>

                                            {product.tags?.[0] && (
                                                <span className="truncate text-[10px] font-medium uppercase tracking-wider text-slate-600">
                                                    {product.tags[0]}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
                                            {product.name}
                                        </h3>

                                        <p className="mt-2 line-clamp-2 min-h-[2.75rem] text-sm leading-relaxed text-slate-400">
                                            {product.shortDescription}
                                        </p>

                                        {/* Price */}
                                        <div className="mt-auto pt-5">
                                            <div className="flex items-end gap-2">
                                                <span className="text-base font-semibold text-white">
                                                    {formatZar(
                                                        product.priceMinor,
                                                    )}
                                                </span>

                                                {hasDiscount && (
                                                    <span className="text-xs text-slate-600 line-through">
                                                        {formatZar(
                                                            product.compareAtPriceMinor!,
                                                        )}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-4">
                                                <span className="text-xs text-slate-500">
                                                    {isOutOfStock
                                                        ? "Currently unavailable"
                                                        : "View product"}
                                                </span>

                                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 group-hover:text-cyan-300">
                                                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}