import { getProducts } from "../../lib/products";
import { StoreProductCard } from "./StoreProductCard";
import { pageMetadata } from "../site-metadata";

export const metadata = pageMetadata({
    title: "Store | Technology for the way you work",
    description:
        "Products from Chefu Technologies for focused work and everyday technology.",
    path: "/store",
});
export const dynamic = "force-dynamic";

export default async function StorePage() {
    const products = await getProducts();
    return (
        <main className="min-h-screen bg-stone-50 px-4 pb-24 pt-28 text-slate-800 sm:px-6 sm:pt-36">
            <div className="mx-auto w-full max-w-5xl">
                <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end">
                    <div>
                        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                            Built for the way you work.
                        </h1>
                        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-relaxed">
                            Essentials for developers, creators, and modern teams—thoughtful, functional, and designed for everyday use.
                        </p>
                    </div>
                </div>
                {products.length === 0 ? (
                    <p className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-600">
                        The store is being stocked. Check back soon.
                    </p>
                ) : (
                    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
                        {products.map((product) => (
                            <StoreProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
