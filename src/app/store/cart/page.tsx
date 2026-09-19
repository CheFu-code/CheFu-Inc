"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    Check,
    ChevronRight,
    LockKeyhole,
    Minus,
    Plus,
    ShieldCheck,
    ShoppingBag,
    Trash2,
    Truck,
} from "lucide-react";
import { toast } from "sonner";
import { useCart } from "../../../lib/cart";
import { formatZar } from "../../../lib/products";

export default function CartPage() {
    const { lines, count, subtotalMinor, setQuantity, remove, clear } = useCart();
    const deliveryMinor = 6000;
    const totalMinor = subtotalMinor + deliveryMinor;

    const handleCheckout = () => {
        toast.info("Secure checkout is being prepared.", {
            description: "Your cart and stock will be revalidated before payment.",
        });
    };

    return (
        <main className="min-h-screen bg-[#f7f5f3] px-4 pb-24 pt-20 text-slate-800 sm:px-6 sm:pt-28">
            <div className="mx-auto w-full max-w-6xl">
                <nav
                    aria-label="Breadcrumb"
                    className="mb-5 flex items-center gap-2 text-xs text-slate-500"
                >
                    <Link
                        href="/store"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-slate-800"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Store
                    </Link>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                    <span className="text-slate-400">Shopping cart</span>
                </nav>

                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                       
                        <h1 className="text-2xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-3xl">
                            Shopping cart
                        </h1>
                    </div>
                   
                </div>

                {lines.length === 0 ? (
                    <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                            <ShoppingBag className="h-8 w-8 text-slate-500" />
                        </div>
                        <h2 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-slate-900">
                            Your cart is empty
                        </h2>
                        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
                            Explore the store and find essentials made for focused work and everyday routines.
                        </p>
                        <Link
                            href="/store"
                            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-700"
                        >
                            Browse products
                        </Link>
                    </div>
                ) : (
                    <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
                        <section
                            aria-labelledby="cart-items-heading"
                            className="min-w-0 overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-sm"
                        >
                            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 sm:px-6">
                                <div>
                                    <h2
                                        id="cart-items-heading"
                                        className="text-base font-semibold text-slate-900"
                                    >
                                        Cart items
                                    </h2>
                                    <p className="mt-1 text-xs text-slate-500">
                                        {count} {count === 1 ? "item" : "items"} selected
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={clear}
                                    className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 transition-colors hover:text-rose-600"
                                >
                                    <Trash2 className="h-3.5 w-3.5" />
                                    Clear cart
                                </button>
                            </div>
                            <div className="divide-y divide-slate-200">
                                {lines.map((line) => {
                                    const lineId = `${line.product.id}:${line.variant?.id || "base"}`;
                                    const unitPrice =
                                        line.variant?.priceMinor || line.product.priceMinor;
                                    const image =
                                        line.product.thumbnail || line.product.images?.[0]?.url;

                                    return (
                                        <article
                                            key={lineId}
                                            className="flex min-w-0 gap-4 px-4 py-5 sm:gap-5 sm:px-6"
                                        >
                                            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 sm:h-28 sm:w-28">
                                                {image ? (
                                                    <Image
                                                        src={image}
                                                        alt={line.product.name}
                                                        fill
                                                        sizes="112px"
                                                        className="object-contain p-2"
                                                    />
                                                ) : (
                                                    <ShoppingBag className="absolute inset-0 m-auto h-8 w-8 text-slate-400" />
                                                )}
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                                    <div className="min-w-0">
                                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                                                            {line.product.category}
                                                        </p>
                                                        <h3 className="mt-2 break-words text-sm font-semibold leading-5 text-slate-900 sm:text-base">
                                                            {line.product.name}
                                                        </h3>
                                                        <p className="mt-1 text-xs text-slate-600">
                                                            {formatZar(unitPrice)} each
                                                        </p>
                                                    </div>
                                                    <p className="shrink-0 text-sm font-bold text-slate-900 sm:text-base">
                                                        {formatZar(unitPrice * line.quantity)}
                                                    </p>
                                                </div>

                                                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                                                    <div className="inline-flex items-center overflow-hidden rounded-full border border-slate-200 bg-slate-50">
                                                        <button
                                                            type="button"
                                                            aria-label={`Decrease ${line.product.name} quantity`}
                                                            onClick={() =>
                                                                line.quantity > 1
                                                                    ? setQuantity(lineId, line.quantity - 1)
                                                                    : remove(lineId)
                                                            }
                                                            className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
                                                        >
                                                            <Minus className="h-3.5 w-3.5" />
                                                        </button>
                                                        <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 px-3 text-sm font-semibold text-slate-900">
                                                            {line.quantity}
                                                        </span>
                                                        <button
                                                            type="button"
                                                            aria-label={`Increase ${line.product.name} quantity`}
                                                            onClick={() =>
                                                                setQuantity(lineId, line.quantity + 1)
                                                            }
                                                            className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
                                                        >
                                                            <Plus className="h-3.5 w-3.5" />
                                                        </button>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={() => remove(lineId)}
                                                        className="inline-flex items-center gap-1.5 text-sm text-slate-600 transition hover:text-rose-600"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </section>

                        <aside className="min-w-0 lg:sticky lg:top-24">
                            <section className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                                <div className="flex items-center justify-between gap-3">
                                    <h2 className="text-base font-semibold text-slate-900">Order summary</h2>
                                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-600">
                                        {count} item{count === 1 ? "" : "s"}
                                    </span>
                                </div>

                                <div className="mt-5 space-y-3 border-b border-slate-200 pb-5 text-sm">
                                    <div className="flex items-center justify-between gap-4 text-slate-600">
                                        <span>Subtotal</span>
                                        <span className="font-medium text-slate-900">
                                            {formatZar(subtotalMinor)}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between gap-4 text-slate-600">
                                        <span>Delivery</span>
                                        <span className="font-medium text-slate-900">
                                            {formatZar(deliveryMinor)}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-end justify-between gap-4 py-5">
                                    <div>
                                        <p className="text-sm font-medium text-slate-500">Total</p>
                                        <p className="mt-1 text-xs text-slate-500">
                                            Including VAT where applicable
                                        </p>
                                    </div>
                                    <p className="text-2xl font-bold tracking-[-0.04em] text-slate-900">
                                        {formatZar(totalMinor)}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleCheckout}
                                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                                >
                                    <LockKeyhole className="h-4 w-4" />
                                    Proceed to secure checkout
                                </button>
                                <p className="mt-3 text-center text-[11px] leading-5 text-slate-500">
                                    Prices and stock are revalidated before payment.
                                </p>
                            </section>

                            <section className="mt-4 rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <Truck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">
                                                Delivery you can track
                                            </p>
                                            <p className="mt-1 text-xs leading-5 text-slate-600">
                                                Shipping details are confirmed with your order.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">
                                                Secure payment
                                            </p>
                                            <p className="mt-1 text-xs leading-5 text-slate-600">
                                                Payment details are handled securely.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">
                                                Order protection
                                            </p>
                                            <p className="mt-1 text-xs leading-5 text-slate-600">
                                                We recheck availability before charging.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </aside>
                    </div>
                )}
            </div>
        </main>
    );
}
