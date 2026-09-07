import Link from "next/link";
import Image from "next/image";
import { getProducts, formatZar } from "../../lib/products";

export const metadata = {
    title: "CHEFU Store | Technology for the way you work",
    description:
        "Physical products from CHEFU TECHNOLOGIES for focused work and everyday technology.",
};
export const dynamic = "force-dynamic";

export default async function StorePage() {
    const products = await getProducts();
    return (
        <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-36 text-slate-100">
            <div className="mx-auto max-w-6xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                    STORE
                </p>
                <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
                            Built for the way you work.
                        </h1>
                        <p className="mt-5 max-w-xl text-lg text-slate-400">
                            Thoughtfully designed essentials for developers, creators, and modern workspaces—simple, functional, and made to be part of your everyday setup.
                        </p>
                    </div>
                    <Link
                        href="/store/cart"
                        className="w-fit rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold hover:border-cyan-400 hover:text-cyan-300"
                    >
                        View cart
                    </Link>
                </div>
                {products.length === 0 ? (
                    <p className="rounded-2xl border border-slate-800 p-8 text-slate-400">
                        The store is being stocked. Check back soon.
                    </p>
                ) : (
                    <div className="grid gap-6 md:grid-cols-3">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                href={`/store/products/${product.slug}`}
                                className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition hover:-translate-y-1 hover:border-cyan-400/60"
                            >
                                <div className="relative flex aspect-[4/3] items-center justify-center bg-slate-800/80 p-8">
                                    {product.thumbnail || product.images[0]?.url ? (
                                        <Image
                                            fill
                                            sizes="(min-width: 768px) 33vw, 100vw"
                                            src={product.thumbnail || product.images[0]?.url || ""}
                                            alt={product.images[0]?.alt || product.name}
                                            className="object-contain"
                                        />
                                    ) : (
                                        <span className="text-6xl font-bold text-slate-700">C</span>
                                    )}
                                </div>
                                <div className="p-6">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                                        {product.category}
                                    </p>
                                    <h2 className="mt-3 text-2xl font-semibold">
                                        {product.name}
                                    </h2>
                                    <p className="mt-2 min-h-12 text-sm text-slate-400">
                                        {product.shortDescription}
                                    </p>
                                    <div className="mt-6 flex items-center justify-between">
                                        <span className="font-semibold">
                                            {formatZar(product.priceMinor)}
                                        </span>
                                        <span
                                            className={
                                                product.status === "OUT_OF_STOCK" ||
                                                    product.inventoryQuantity === 0
                                                    ? "text-sm text-rose-300"
                                                    : "text-sm text-emerald-300"
                                            }
                                        >
                                            {product.status === "OUT_OF_STOCK" ||
                                                product.inventoryQuantity === 0
                                                ? "Out of stock"
                                                : "Available"}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
