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

    const handleCheckout = () => {
        toast.info("Secure checkout is being prepared.", {
            description: "Your cart and stock will be revalidated before payment.",
        });
    };

    return (
        <main className="min-h-screen bg-slate-950 px-4 pb-24 pt-20 text-slate-100 sm:px-6 sm:pt-34">
            <div className="mx-auto w-full max-w-6xl">
                <nav
                    aria-label="Breadcrumb"
                    className="mb-5 flex items-center gap-2 text-xs text-slate-500"
                >
                    <Link
                        href="/store"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-cyan-300"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Store
                    </Link>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-700" />
                    <span className="text-slate-300">Shopping cart</span>
                </nav>

                <div className="flex flex-col gap-3 border-b border-slate-800 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                       
                        <h1 className=" text-3xl font-bold tracking-tight text-white sm:text-5xl">
                            Shopping cart
                        </h1>
                        {lines.length > 0 && (
                            <p className="mt-2 text-sm text-slate-500">
                                {count} {count === 1 ? "item" : "items"} ready for checkout
                            </p>
                        )}
                    </div>
                    {lines.length > 0 && (
                        <button
                            type="button"
                            onClick={clear}
                            className="inline-flex w-fit items-center gap-2 text-sm text-slate-500 transition-colors hover:text-rose-300"
                        >
                            <Trash2 className="h-4 w-4" />
                            Clear cart
                        </button>
                    )}
                </div>

                {lines.length === 0 ? (
                    <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900/60 px-6 py-16 text-center">
                        <ShoppingBag className="mx-auto h-10 w-10 text-slate-600" />
                        <h2 className="mt-5 text-xl font-semibold text-white">
                            Your cart is empty
                        </h2>
                        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                            Explore the store and find something useful for your workspace.
                        </p>
                        <Link
                            href="/store"
                            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                        >
                            Continue shopping
                        </Link>
                    </div>
                ) : (
                    <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
                        <section
                            aria-labelledby="cart-items-heading"
                            className="min-w-0 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60"
                        >
                            <div className="flex items-center justify-between border-b border-slate-800 px-4 py-4 sm:px-6">
                                <h2
                                    id="cart-items-heading"
                                    className="font-semibold text-white"
                                >
                                    Cart items
                                </h2>
                                <span className="text-xs text-slate-500">Price</span>
                            </div>
                            <div className="divide-y divide-slate-800">
                                {lines.map((line) => {
                                    const lineId = `${line.product.id}:${line.variant?.id || "base"}`;
                                    const unitPrice =
                                        line.variant?.priceMinor || line.product.priceMinor;
                                    const image =
                                        line.product.thumbnail || line.product.images?.[0]?.url;

                                    return (
                                        <article
                                            key={lineId}
                                            className="flex min-w-0 gap-3 px-4 py-5 sm:gap-5 sm:px-6"
                                        >
                                            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-slate-800 bg-slate-950 sm:h-24 sm:w-24">
                                                {image ? (
                                                    <Image
                                                        src={image}
                                                        alt={line.product.name}
                                                        fill
                                                        sizes="96px"
                                                        className="object-contain p-2"
                                                    />
                                                ) : (
                                                    <ShoppingBag className="absolute inset-0 m-auto h-7 w-7 text-slate-700" />
                                                )}
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-start justify-between gap-3">
                                                    <div className="min-w-0">
                                                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-400">
                                                            {line.product.category}
                                                        </p>
                                                        <h3 className="mt-1 break-words font-semibold leading-5 text-white">
                                                            {line.product.name}
                                                        </h3>
                                                        <p className="mt-1 text-xs text-slate-500">
                                                            {formatZar(unitPrice)} each
                                                        </p>
                                                    </div>
                                                    <p className="shrink-0 text-right text-sm font-bold text-white sm:text-base">
                                                        {formatZar(unitPrice * line.quantity)}
                                                    </p>
                                                </div>
                                                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                                                    <div className="inline-flex items-center overflow-hidden rounded-md border border-slate-700 bg-slate-950">
                                                        <button
                                                            type="button"
                                                            aria-label={`Decrease ${line.product.name} quantity`}
                                                            onClick={() =>
                                                                line.quantity > 1
                                                                    ? setQuantity(lineId, line.quantity - 1)
                                                                    : remove(lineId)
                                                            }
                                                            className="flex h-8 w-8 items-center justify-center text-slate-400 transition hover:bg-slate-800 hover:text-white"
                                                        >
                                                            <Minus className="h-3.5 w-3.5" />
                                                        </button>
                                                        <span className="flex h-8 min-w-9 items-center justify-center border-x border-slate-700 px-2 text-xs font-semibold text-white">
                                                            {line.quantity}
                                                        </span>
                                                        <button
                                                            type="button"
                                                            aria-label={`Increase ${line.product.name} quantity`}
                                                            onClick={() =>
                                                                setQuantity(lineId, line.quantity + 1)
                                                            }
                                                            className="flex h-8 w-8 items-center justify-center text-slate-400 transition hover:bg-slate-800 hover:text-white"
                                                        >
                                                            <Plus className="h-3.5 w-3.5" />
                                                        </button>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => remove(lineId)}
                                                        className="inline-flex items-center gap-1.5 text-xs text-slate-500 transition hover:text-rose-300"
                                                    >
                                                        <Trash2 className="h-3.5 w-3.5" />
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                            <div className="border-t border-slate-800 px-4 py-4 sm:px-6">
                                <Link
                                    href="/store"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Continue shopping
                                </Link>
                            </div>
                        </section>

                        <aside className="min-w-0 lg:sticky lg:top-28">
                            <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
                                <h2 className="text-lg font-bold text-white">Order summary</h2>
                                <div className="mt-5 space-y-3 border-b border-slate-800 pb-5 text-sm">
                                    <div className="flex justify-between gap-4 text-slate-400">
                                        <span>Subtotal</span>
                                        <span className="font-medium text-slate-200">
                                            {formatZar(subtotalMinor)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between gap-4 text-slate-400">
                                        <span>Delivery</span>
                                        <span className="text-right text-xs text-slate-500">
                                            Calculated at checkout
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-end justify-between gap-4 py-5">
                                    <div>
                                        <p className="font-semibold text-white">Total</p>
                                        <p className="mt-1 text-xs text-slate-500">
                                            Including applicable VAT
                                        </p>
                                    </div>
                                    <p className="text-2xl font-bold text-white">
                                        {formatZar(subtotalMinor)}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleCheckout}
                                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 hover:shadow-[0_12px_30px_rgba(34,211,238,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                                >
                                    <LockKeyhole className="h-4 w-4" />
                                    Proceed to secure checkout
                                </button>
                                <p className="mt-3 text-center text-[11px] leading-5 text-slate-500">
                                    Prices and stock are revalidated before payment.
                                </p>
                            </section>
                            <section className="mt-4 divide-y divide-slate-800 rounded-xl border border-slate-800 bg-slate-900/40 px-5 sm:px-6">
                                <div className="flex gap-3 py-4">
                                    <Truck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                                    <div>
                                        <p className="text-sm font-semibold text-white">
                                            Delivery you can track
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-slate-500">
                                            Shipping details are confirmed with your order.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3 py-4">
                                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                                    <div>
                                        <p className="text-sm font-semibold text-white">
                                            Secure payment
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-slate-500">
                                            Payment details are handled securely.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3 py-4">
                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                                    <div>
                                        <p className="text-sm font-semibold text-white">
                                            Order protection
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-slate-500">
                                            We recheck availability before charging.
                                        </p>
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
