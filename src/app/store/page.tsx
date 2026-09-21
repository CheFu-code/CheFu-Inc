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
        <main className="min-h-screen bg-[#f5f5f4] px-4 pb-20 pt-20 text-slate-800 sm:px-6 sm:pt-24">
            <div className="mx-auto w-full max-w-6xl">
                <div className="mb-6 border-b border-[#e5e1dc] pb-5">
                    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-[2.2rem]">
                                Shop essentials
                            </h1>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-slate-600 sm:text-sm">
                            <span className="rounded-full border border-[#e5e1dc] bg-white px-2.5 py-1 sm:px-3 sm:py-1.5">
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
