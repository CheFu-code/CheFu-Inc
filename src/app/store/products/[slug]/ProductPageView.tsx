import Link from "next/link";
import {
    ArrowLeft,
    CheckCircle2,
    ChevronRight,
    MapPin,
    RotateCcw,
    ShieldCheck,
    Star,
    Tag,
    Truck,
} from "lucide-react";
import { formatZar, type Product } from "../../../../lib/products";
import { ProductActions } from "./ProductActions";
import { ProductGallery } from "./ProductGallery";
import { ProductShareButton } from "../ProductShareButton";
import type { ProductPageData } from "./product-page.utils";

type ProductPageViewProps = {
    product: Product;
    pageData: ProductPageData;
};

export function ProductPageView({
    product,
    pageData,
}: ProductPageViewProps) {
    const {
        unavailable,
        lowStock,
        hasDiscount,
        discountPercentage,
        productUrl,
        galleryImages,
        productSchema,
    } = pageData;

    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productSchema).replace(
                        /</g,
                        "\\u003c",
                    ),
                }}
            />
            <div className="mx-auto max-w-[1440px] px-4 pb-32 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
                <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1 text-xs text-slate-400 sm:mb-7">
                    <Link
                        href="/store"
                        className="inline-flex min-h-9 items-center gap-1.5 font-medium transition-colors hover:text-cyan-300"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Store
                    </Link>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
                    <span>{product.category}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
                    <span className="max-w-[180px] truncate text-slate-200">{product.name}</span>
                </nav>

                <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(390px,0.9fr)] lg:items-start lg:gap-10">
                    <div className="min-w-0 lg:sticky lg:top-28">
                        <ProductGallery
                            productName={product.name}
                            images={galleryImages}
                            featured={product.featured}
                            hasDiscount={hasDiscount}
                            discountPercentage={discountPercentage}
                        />
                    </div>

                    <section className="min-w-0 rounded-xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm sm:p-7">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-cyan-400">
                            <span>{product.category}</span>
                            {product.featured && (
                                <span className="inline-flex items-center gap-1 border-l border-slate-700 pl-2 text-slate-400">
                                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                                    Featured product
                                </span>
                            )}
                        </div>

                        <h1 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                            {product.name}
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            {product.shortDescription || product.description}
                        </p>

                        <div className="mt-5 border-y border-slate-800 py-5">
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                <span className="text-3xl font-bold tracking-tight text-white">
                                    {formatZar(product.priceMinor)}
                                </span>
                                {hasDiscount && (
                                    <>
                                        <span className="text-sm text-slate-500 line-through">
                                            {formatZar(product.compareAtPriceMinor!)}
                                        </span>
                                        <span className="text-xs font-bold text-rose-300">
                                            {discountPercentage}% off
                                        </span>
                                    </>
                                )}
                            </div>
                            <p className="mt-1 text-xs text-slate-500">Price includes VAT where applicable</p>
                            <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                                {unavailable ? (
                                    <span className="text-rose-300">Currently unavailable</span>
                                ) : lowStock ? (
                                    <span className="text-amber-300">Only {product.inventoryQuantity} left in stock</span>
                                ) : (
                                    <span className="text-emerald-300">In stock and ready to order</span>
                                )}
                            </div>
                        </div>

                        <div className="mt-5">
                            <ProductActions product={product} disabled={unavailable} />
                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                            <ProductShareButton
                                productName={product.name}
                                productDescription={product.shortDescription || product.description}
                                productUrl={productUrl}
                            />
                            <span className="text-xs text-slate-500">SKU: {product.sku}</span>
                        </div>

                        <div className="mt-6 divide-y divide-slate-800 border-y border-slate-800 text-sm">
                            <div className="flex gap-3 py-4">
                                <Truck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                                <div><p className="font-semibold text-white">Delivery options</p><p className="mt-1 text-xs text-slate-500">Shipping availability depends on your location and this product.</p></div>
                            </div>
                            <div className="flex gap-3 py-4">
                                <RotateCcw className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                                <div><p className="font-semibold text-white">Simple returns</p><p className="mt-1 text-xs text-slate-500">We are here to help if your order is not right.</p></div>
                            </div>
                            <div className="flex gap-3 py-4">
                                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                                <div><p className="font-semibold text-white">Secure checkout</p><p className="mt-1 text-xs text-slate-500">Your payment details are handled securely.</p></div>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900/70 shadow-sm">
                    <div className="border-b border-slate-800 px-5 py-4 sm:px-7">
                        <h2 className="text-lg font-bold text-white">Product details</h2>
                    </div>
                    <div className="grid gap-8 px-5 py-6 sm:px-7 lg:grid-cols-[minmax(0,1fr)_280px]">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">Description</h3>
                            <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-400">
                                {product.description || product.shortDescription}
                            </p>
                        </div>
                        <aside className="border-t border-slate-800 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">Sold by</h3>
                            <div className="mt-3 flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                                <div><p className="font-semibold text-white">CHEFU Technologies</p><p className="mt-1 text-xs leading-5 text-slate-500">Thoughtfully selected technology for modern workspaces.</p></div>
                            </div>
                            <div className="mt-5 flex items-start gap-3 text-xs text-slate-400">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                                South Africa
                            </div>
                        </aside>
                    </div>
                    {product.tags?.length > 0 && (
                        <div className="border-t border-slate-800 px-5 py-5 sm:px-7">
                            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">Product tags</h3>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {product.tags.map((tag) => (
                                    <span key={tag} className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-400">
                                        <Tag className="h-3.5 w-3.5" />{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </section>
            </div>

            {/* Mobile purchase bar */}
            {!unavailable && (
                <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-800 bg-slate-950/95 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-8px_25px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:hidden">
                    <div className="mx-auto flex max-w-7xl items-center gap-3">
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-[11px] font-medium text-slate-500">
                                {product.name}
                            </p>

                            <p className="mt-0.5 text-sm font-bold text-white">
                                {formatZar(product.priceMinor)}
                            </p>
                        </div>

                        <ProductActions
                            product={product}
                            disabled={unavailable}
                            compact
                        />
                    </div>
                </div>
            )}
        </main>
    );
}