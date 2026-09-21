import Link from "next/link";
import {
    ArrowLeft,
    CheckCircle2,
    ChevronDown,
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
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "../../../components/ui/collapsible";
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
        <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-stone-50 text-slate-800">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productSchema).replace(
                        /</g,
                        "\\u003c",
                    ),
                }}
            />
            <div className="mx-auto w-full max-w-[1440px] min-w-0 px-4 pb-32 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
                <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-[11px] text-slate-500 sm:mb-6">
                    <Link
                        href="/store"
                        className="inline-flex min-h-9 items-center gap-1.5 font-medium transition-colors hover:text-[#1f3c5b]"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Store
                    </Link>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                    <span>{product.category}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                    <span className="max-w-[180px] truncate text-slate-700">{product.name}</span>
                </nav>

                <div className="grid min-w-0 gap-5 sm:gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:items-start lg:gap-8">
                    <div className="min-w-0 lg:sticky lg:top-28">
                        <ProductGallery
                            productName={product.name}
                            images={galleryImages}
                            featured={product.featured}
                            hasDiscount={hasDiscount}
                            discountPercentage={discountPercentage}
                        />
                    </div>

                    <section className="min-w-0 rounded-xl border border-[#e5e1dc] bg-white p-4 shadow-sm sm:p-5">
                        <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1f3c5b] sm:text-[11px]">
                            <span>{product.category}</span>
                            {product.featured && (
                                <span className="inline-flex items-center gap-1 border-l border-[#e5e1dc] pl-2 text-slate-500">
                                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                                    Featured product
                                </span>
                            )}
                        </div>

                        <h1 className="mt-3 text-[1.4rem] font-bold leading-tight tracking-tight text-slate-900 sm:text-[1.8rem]">
                            {product.name}
                        </h1>

                        <p className="mt-2 text-[12.5px] leading-5 text-slate-600 sm:text-sm sm:leading-6">
                            {product.shortDescription || product.description}
                        </p>

                        <div className="mt-4 border-y border-[#e5e1dc] py-4">
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                <span className="text-[1.65rem] font-bold tracking-tight text-slate-900 sm:text-[2rem]">
                                    {formatZar(product.priceMinor)}
                                </span>
                                {hasDiscount && (
                                    <>
                                        <span className="text-sm text-slate-400 line-through">
                                            {formatZar(product.compareAtPriceMinor!)}
                                        </span>
                                        <span className="text-[11px] font-bold text-rose-600">
                                            {discountPercentage}% off
                                        </span>
                                    </>
                                )}
                            </div>
                            <p className="mt-1 text-[10.5px] text-slate-500 sm:text-xs">Price includes VAT where applicable</p>
                            <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold sm:text-xs">
                                {unavailable ? (
                                    <span className="text-rose-600">Currently unavailable</span>
                                ) : lowStock ? (
                                    <span className="text-amber-700">Only {product.inventoryQuantity} left in stock</span>
                                ) : (
                                    <span className="text-emerald-700">In stock and ready to order</span>
                                )}
                            </div>
                        </div>

                        <div className="mt-4 hidden lg:block">
                            <ProductActions product={product} disabled={unavailable} />
                        </div>

                        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                            <ProductShareButton
                                productName={product.name}
                                productDescription={product.shortDescription || product.description}
                                productUrl={productUrl}
                            />
                            <span className="text-xs text-slate-500">SKU: {product.sku}</span>
                        </div>

                        <div className="mt-5 divide-y divide-[#e5e1dc] border-y border-[#e5e1dc] text-sm">
                            <div className="flex gap-3 py-3.5">
                                <Truck className="mt-0.5 h-4 w-4 shrink-0 text-[#1f3c5b]" />
                                <div><p className="font-semibold text-slate-900">Delivery options</p><p className="mt-1 text-xs text-slate-500">Shipping availability depends on your location and this product.</p></div>
                            </div>
                            <div className="flex gap-3 py-3.5">
                                <RotateCcw className="mt-0.5 h-4 w-4 shrink-0 text-[#1f3c5b]" />
                                <div><p className="font-semibold text-slate-900">Simple returns</p><p className="mt-1 text-xs text-slate-500">We are here to help if your order is not right.</p></div>
                            </div>
                            <div className="flex gap-3 py-3.5">
                                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#1f3c5b]" />
                                <div><p className="font-semibold text-slate-900">Secure checkout</p><p className="mt-1 text-xs text-slate-500">Your payment details are handled securely.</p></div>
                            </div>
                        </div>
                    </section>
                </div>

                <Collapsible className="mt-8 w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-[#e5e1dc] bg-white shadow-sm lg:hidden">
                    <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f3c5b]/50 focus-visible:ring-inset">
                        <span className="break-words text-lg font-bold text-slate-900">Product details</span>
                        <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 [[data-state=open]_&]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="border-t border-[#e5e1dc]">
                        <div className="grid min-w-0 gap-8 px-4 py-6">
                        <div className="min-w-0">
                            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">Description</h3>
                            <p className="mt-3 whitespace-pre-line break-words text-sm leading-7 text-slate-600 [overflow-wrap:anywhere]">
                                {product.description || product.shortDescription}
                            </p>
                        </div>
                        <aside className="min-w-0 border-t border-[#e5e1dc] pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">Sold by</h3>
                            <div className="mt-3 flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1f3c5b]" />
                                <div className="min-w-0 max-w-full"><p className="break-words font-semibold text-slate-900 [overflow-wrap:anywhere]">Chefu Technologies</p><p className="mt-1 break-words text-xs leading-5 text-slate-500 [overflow-wrap:anywhere]">Thoughtfully selected technology for modern workspaces.</p></div>
                            </div>
                            <div className="mt-5 flex items-start gap-3 text-xs text-slate-500">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                                South Africa
                            </div>
                        </aside>
                        </div>
                        {product.tags?.length > 0 && (
                            <div className="border-t border-[#e5e1dc] px-4 py-5">
                            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">Product tags</h3>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {product.tags.map((tag) => (
                                    <span key={tag} className="inline-flex items-center gap-1.5 rounded-md border border-[#e5e1dc] bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                                        <Tag className="h-3.5 w-3.5" />{tag}
                                    </span>
                                ))}
                            </div>
                            </div>
                        )}
                    </CollapsibleContent>
                </Collapsible>

                <section className="mt-8 hidden w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-[#e5e1dc] bg-white shadow-sm lg:block">
                    <div className="border-b border-[#e5e1dc] px-5 py-4 sm:px-7">
                        <h2 className="break-words text-lg font-bold text-slate-900">Product details</h2>
                    </div>
                    <div className="grid min-w-0 gap-8 px-5 py-6 sm:px-7 lg:grid-cols-[minmax(0,1fr)_280px]">
                        <div className="min-w-0">
                            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">Description</h3>
                            <p className="mt-3 whitespace-pre-line break-words text-sm leading-7 text-slate-600 [overflow-wrap:anywhere]">
                                {product.description || product.shortDescription}
                            </p>
                        </div>
                        <aside className="min-w-0 border-t border-[#e5e1dc] pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">Sold by</h3>
                            <div className="mt-3 flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1f3c5b]" />
                                <div className="min-w-0 max-w-full"><p className="break-words font-semibold text-slate-900 [overflow-wrap:anywhere]">Chefu Technologies</p><p className="mt-1 break-words text-xs leading-5 text-slate-500 [overflow-wrap:anywhere]">Thoughtfully selected technology for modern workspaces.</p></div>
                            </div>
                            <div className="mt-5 flex items-start gap-3 text-xs text-slate-500">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                                South Africa
                            </div>
                        </aside>
                    </div>
                    {product.tags?.length > 0 && (
                        <div className="border-t border-[#e5e1dc] px-5 py-5 sm:px-7">
                            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">Product tags</h3>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {product.tags.map((tag) => (
                                    <span key={tag} className="inline-flex items-center gap-1.5 rounded-md border border-[#e5e1dc] bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
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
                <div className="fixed inset-x-0 bottom-0 z-50 w-full max-w-full overflow-hidden border-t border-[#e5e1dc] bg-white/95 px-3 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-8px_25px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-4 lg:hidden">
                    <div className="mx-auto flex w-full min-w-0 max-w-7xl items-center gap-2 sm:gap-3">
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-[11px] font-medium text-slate-500">
                                {product.name}
                            </p>

                            <p className="mt-0.5 text-sm font-bold text-slate-900">
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