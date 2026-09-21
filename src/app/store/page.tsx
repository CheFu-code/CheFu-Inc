import { getProducts } from "../../lib/products";
import { pageMetadata } from "../site-metadata";
import { StoreCatalogClient } from "./StoreCatalogClient";

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
        <main className="min-h-screen bg-[#f5f5f4] px-4 pb-24 pt-24 text-slate-800 sm:px-6 sm:pt-28">
            <div className="mx-auto w-full max-w-6xl">
                <div className="mb-8 border-b border-[#e5e1dc] pb-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                Shop essentials
                            </h1>
                        </div>

                        <div className="flex items-center gap-3 text-sm text-slate-600">
                            <span className="rounded-full border border-[#e5e1dc] bg-white px-3 py-1.5">
                                {products.length} products
                            </span>
                            <span className="hidden sm:inline">Free delivery over ZAR 1,000</span>
                        </div>
                    </div>
                </div>

                {products.length === 0 ? (
                    <p className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-600">
                        The store is being stocked. Check back soon.
                    </p>
                ) : (
                    <StoreCatalogClient initialProducts={products} />
                )}
            </div>
        </main>
    );
}
