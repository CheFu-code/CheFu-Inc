import { Suspense } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getProducts } from "../../../lib/products";
import { StorePreview } from "../StorePreview";

async function StorePreviewProducts() {
    const products = await getProducts();

    return <StorePreview products={products.slice(0, 4)} />;
}

function StorePreviewSkeleton() {
    return (
        <div role="status" aria-busy="true">
            <span className="sr-only">Loading store products…</span>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4" aria-hidden="true">
                {Array.from({ length: 4 }, (_, index) => (
                    <div key={index} className="overflow-hidden rounded-[1.25rem] border border-[#e5e1dc] bg-white">
                        <div className="aspect-[4/3] bg-[#f3f2ef]" />
                        <div className="space-y-4 p-4">
                            <div className="h-3 w-1/2 rounded bg-[#f3f2ef]" />
                            <div className="h-5 w-3/4 rounded bg-[#f3f2ef]" />
                            <div className="h-12 rounded bg-[#f3f2ef]" />
                            <div className="h-6 w-1/3 rounded bg-[#f3f2ef]" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function StorePreviewSection() {
    return (
        <section className="bg-[#f5f1ed] py-20 md:py-24">
            <div className="container mx-auto px-6">
                <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                        <h2 className="text-2xl font-semibold tracking-[-0.05em] text-[#111827] md:text-4xl">
                            Tools for focused work.
                        </h2>
                    </div>
                    <Link
                        href="/store?utm_source=store_preview&utm_medium=header&utm_campaign=shop_now"
                        className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[#111827] transition-colors hover:text-[#1f3c5b]"
                    >
                        Shop now
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
                <Suspense fallback={<StorePreviewSkeleton />}>
                    <StorePreviewProducts />
                </Suspense>
            </div>
        </section>
    );
}
