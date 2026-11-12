"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useCart } from "../../../lib/cart";
import { acknowledgeCheckout, CheckoutError, checkoutEnabled, claimLegacyCheckout, recoverCheckout, rememberPendingPayment, readPendingPayment, type PendingPayment } from "../../../lib/checkout-client";
import { accountAppUrl } from "../../../lib/account-app";
import { formatZar } from "../../../lib/products";
import {
    availableQuantity, cartLineId, checkoutItems, deliveryErrors, emptyDeliveryDetails,
    estimateOrder, isPurchasable, unitPrice,
    type CartLine, type CheckoutItem, type CheckoutSession, type PaymentVerification,
} from "../../../lib/store-checkout";
import { CheckoutDeliveryForm } from "./CheckoutDeliveryForm";
import { CheckoutPayment } from "./CheckoutPayment";

type Step = "cart" | "delivery" | "payment";
const steps: { id: Step; label: string }[] = [
    { id: "cart", label: "Cart" },
    { id: "delivery", label: "Delivery" },
    { id: "payment", label: "Review & pay" },
];

function CartItem({ line, onQuantity, onRemove, disabled }: {
    line: CartLine; onQuantity: (quantity: number) => void; onRemove: () => void; disabled: boolean;
}) {
    const image = line.product.thumbnail || line.product.images[0]?.url;
    const available = isPurchasable(line);
    return (
        <li className="flex min-w-0 gap-3 py-5 sm:gap-5">
            <Link href={`/store/products/${encodeURIComponent(line.product.slug)}`} className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-[#e5e1dc] bg-[#f7f5f3] sm:h-24 sm:w-24">
                {image ? <Image src={image} alt={line.product.name} fill sizes="96px" className="object-contain p-2" /> : <span className="flex h-full items-center justify-center px-2 text-center text-xs text-[#6b7280]">No image</span>}
            </Link>
            <div className="min-w-0 flex-1">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-4">
                    <div className="min-w-0">
                        <Link href={`/store/products/${encodeURIComponent(line.product.slug)}`} className="break-words text-sm font-semibold leading-5 hover:underline sm:text-base">{line.product.name}</Link>
                        {line.variant && <p className="mt-1 text-xs text-[#5f5b56]">{line.variant.name}</p>}
                        <p className="mt-1 text-xs text-[#6b7280]">{formatZar(unitPrice(line))} each</p>
                    </div>
                    <p className="shrink-0 text-sm font-semibold">{formatZar(unitPrice(line) * line.quantity)}</p>
                </div>
                {!available && <p className="mt-2 text-xs leading-5 text-red-700">This quantity or item is no longer available. Update or remove it to continue.</p>}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                    <div className="inline-flex items-center rounded-lg border border-[#e5e1dc]">
                        <button type="button" aria-label={`Decrease ${line.product.name} quantity`} onClick={() => line.quantity === 1 ? onRemove() : onQuantity(line.quantity - 1)} disabled={disabled} className="flex h-11 w-11 items-center justify-center rounded-l-lg hover:bg-[#f7f5f3] disabled:opacity-40"><Minus aria-hidden="true" className="h-3.5 w-3.5" /></button>
                        <span aria-label={`Quantity: ${line.quantity}`} className="min-w-7 text-center text-sm tabular-nums">{line.quantity}</span>
                        <button type="button" aria-label={`Increase ${line.product.name} quantity`} onClick={() => onQuantity(line.quantity + 1)} disabled={disabled || line.quantity >= availableQuantity(line)} className="flex h-11 w-11 items-center justify-center rounded-r-lg hover:bg-[#f7f5f3] disabled:opacity-40"><Plus aria-hidden="true" className="h-3.5 w-3.5" /></button>
                    </div>
                    <button type="button" onClick={onRemove} disabled={disabled} className="min-h-11 text-xs text-[#5f5b56] underline underline-offset-4 hover:text-red-700 disabled:opacity-40">Remove<span className="sr-only"> {line.product.name}</span></button>
                </div>
            </div>
        </li>
    );
}

export default function CartPage() {
    const { lines, count, isHydrated, setQuantity, remove, clear, completePurchase } = useCart();
    const [pending, setPending] = useState<PendingPayment | null>(readPendingPayment);
    const [step, setStep] = useState<Step>(() => readPendingPayment() ? "payment" : "cart");
    const [delivery, setDelivery] = useState({ ...emptyDeliveryDetails });
    const [session, setSession] = useState<CheckoutSession | null>(null);
    const [receipt, setReceipt] = useState<PaymentVerification | null>(null);
    const [busy, setBusy] = useState(false);
    const [recovery, setRecovery] = useState<'loading' | 'ready' | 'signin' | 'error'>(checkoutEnabled ? 'loading' : 'ready');
    const [recoveryMessage, setRecoveryMessage] = useState('');
    const recoveryInFlight = useRef(false);
    const restore = useCallback(async () => {
        if (recoveryInFlight.current) return;
        recoveryInFlight.current = true;
        try {
            let saved = await recoverCheckout();
            const local = readPendingPayment();
            if (!saved && local) {
                // Account linking requires the original HttpOnly guest cookie as proof.
                try { saved = await claimLegacyCheckout(local.reference); }
                catch (error) {
                    if (!(error instanceof CheckoutError) || ![401, 404].includes(error.status)) throw error;
                    rememberPendingPayment(null);
                }
            }
            if (saved?.status === 'paid') {
                setReceipt(saved);
                setPending(null);
                rememberPendingPayment(null);
            } else if (saved) {
                const attempt = { reference: saved.reference, amountMinor: saved.amountMinor, items: saved.items };
                setPending(attempt);
                rememberPendingPayment(attempt);
                setSession(saved.session);
                setStep('payment');
            } else {
                setPending(null);
                setSession(null);
            }
            setRecovery('ready');
        } catch (error) {
            setRecovery(error instanceof CheckoutError && error.status === 401 ? 'signin' : 'error');
            setRecoveryMessage(error instanceof Error ? error.message : 'Your order may be saved. Reconnect to check its status before paying again.');
        } finally { recoveryInFlight.current = false; }
    }, []);
    useEffect(() => {
        if (!checkoutEnabled) return;
        void restore();
        const reconnect = () => { void restore(); };
        window.addEventListener('online', reconnect);
        window.addEventListener('pageshow', reconnect);
        return () => { window.removeEventListener('online', reconnect); window.removeEventListener('pageshow', reconnect); };
    }, [restore]);
    const checkoutHeading = useRef<HTMLHeadingElement>(null);
    const estimate = estimateOrder(lines);
    const validCart = lines.length > 0 && lines.every(isPurchasable) && Number.isSafeInteger(estimate.totalMinor) && estimate.totalMinor > 0;
    const items = validCart ? checkoutItems(lines) : [];
    const validDelivery = Object.keys(deliveryErrors(delivery)).length === 0;
    const currentStep = steps.findIndex((entry) => entry.id === step);
    const locked = busy || Boolean(pending) || recovery !== 'ready';
    const totalMinor = session?.amountMinor ?? pending?.amountMinor ?? estimate.totalMinor;
    const summaryItems = pending
        ? pending.items.map((item) => {
            const line = lines.find((entry) => entry.product.id === item.productId && entry.variant?.id === item.variantId);
            return { id: `${item.productId}:${item.variantId ?? "base"}`, name: line?.product.name ?? "Item from your order", variant: line?.variant?.name, quantity: item.quantity, priceMinor: undefined };
        })
        : lines.map((line) => ({ id: cartLineId(line), name: line.product.name, variant: line.variant?.name, quantity: line.quantity, priceMinor: session ? undefined : unitPrice(line) * line.quantity }));

    function navigate(next: Step) {
        if (locked || next === step) return;
        setSession(null);
        setStep(next);
        requestAnimationFrame(() => {
            checkoutHeading.current?.focus();
            checkoutHeading.current?.scrollIntoView({ behavior: "instant", block: "start" });
        });
    }
    function confirmed(result: PaymentVerification, purchasedItems: CheckoutItem[]) {
        completePurchase(purchasedItems);
        setReceipt(result);
    }
    async function finishOrder() {
        if (!receipt || busy) return;
        setBusy(true);
        try {
            await acknowledgeCheckout(receipt.reference);
            rememberPendingPayment(null);
            window.location.assign('/store');
        } catch { setRecoveryMessage('Your payment is confirmed. Reconnect before continuing to shop.'); }
        finally { setBusy(false); }
    }

    return (
        <main className="min-h-screen bg-[#f7f5f3] px-4 pb-16 pt-24 text-[#111827] sm:px-6 sm:pb-20 sm:pt-28">
            <div className="mx-auto max-w-6xl">
                <header className="mb-6">
                    <h1 ref={checkoutHeading} tabIndex={-1} className="scroll-mt-24 text-2xl font-semibold tracking-[-0.05em] outline-none sm:text-3xl">{!isHydrated ? "Your shopping cart" : receipt ? "Order confirmed" : step === "cart" ? "Your shopping cart" : "Checkout"}</h1>
                    <p className="mt-2 text-sm leading-6 text-[#5f5b56]">{receipt ? "Thank you for shopping with Chefu Technologies." : "Review your items and order total. Prices in South African rand (ZAR)."}</p>
                </header>

                {recovery !== 'ready' ? (
                    <section className="rounded-2xl border border-[#e5e1dc] bg-white p-6 text-sm">
                        <p role="status">{recovery === 'loading' ? 'Restoring your saved checkout…' : recovery === 'signin' ? 'Sign in to check out and recover orders across your devices.' : 'We lost connection while restoring your order. Check its status before paying again.'}</p>
                        {recovery === 'signin' && <a className="mt-4 inline-flex min-h-11 items-center underline" href={accountAppUrl('/login', { app: 'root', returnTo: typeof window !== 'undefined' ? `${window.location.origin}/store/cart` : '/store/cart' })}>Sign in to continue</a>}
                        {recovery === 'error' && <button type="button" onClick={() => void restore()} className="mt-4 min-h-11 underline">Restore saved order</button>}
                    </section>
                ) : !isHydrated ? (
                    <p role="status" className="rounded-2xl border border-[#e5e1dc] bg-white p-6 text-sm text-[#5f5b56]">Loading your cart…</p>
                ) : receipt ? (
                    <section className="max-w-2xl rounded-2xl border border-[#e5e1dc] bg-white p-5 sm:p-8">
                        <h2 className="text-xl font-semibold">Payment confirmed</h2>
                        <dl className="mt-5 space-y-4 text-sm">
                            <div><dt className="text-[#6b7280]">Order number</dt><dd className="mt-1 break-all font-medium">{receipt.orderId}</dd></div>
                            <div><dt className="text-[#6b7280]">Paid</dt><dd className="mt-1 font-medium">{formatZar(receipt.amountMinor)}</dd></div>
                            <div><dt className="text-[#6b7280]">Payment reference</dt><dd className="mt-1 break-all">{receipt.reference}</dd></div>
                        </dl>
                        <p className="mt-5 text-sm leading-6 text-[#5f5b56]">Keep your order number for any questions about your purchase.</p>
                        <button type="button" disabled={busy} onClick={() => void finishOrder()} className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-white">Back to the store</button>
                        {recoveryMessage && <p role="status" className="mt-3 text-sm">{recoveryMessage}</p>}
                    </section>
                ) : lines.length === 0 && !pending ? (
                    <section className="rounded-2xl border border-[#e5e1dc] bg-white px-5 py-12 sm:py-16">
                        <h2 className="text-xl font-semibold tracking-[-0.03em]">Your cart is empty</h2>
                        <p className="mt-3 max-w-md text-sm leading-6 text-[#5f5b56]">Browse our store and add the products you want to buy. They will appear here when you are ready to check out.</p>
                        <Link href="/store" className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-white">Browse the store</Link>
                    </section>
                ) : (
                    <>
                        <nav aria-label="Checkout progress" className="mb-6">
                            <ol className="grid grid-cols-3 gap-2 sm:gap-4">
                                {steps.map((entry, index) => (
                                    <li key={entry.id} className={`border-b-2 pb-2 ${index === currentStep ? "border-[#1f3c5b]" : "border-[#e5e1dc]"}`}>
                                        <button type="button" aria-current={step === entry.id ? "step" : undefined} disabled={locked || index > currentStep} onClick={() => navigate(entry.id)} className={`min-h-11 w-full text-left text-xs sm:text-sm ${index === currentStep ? "font-semibold text-[#111827]" : "text-[#6b7280]"} disabled:cursor-default`}>
                                            <span className="mr-1.5 text-[10px] tabular-nums sm:mr-2 sm:text-xs">0{index + 1}</span>{entry.label}
                                        </button>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-6">
                            <div className={`min-w-0 ${step === "payment" ? "order-2 lg:order-1" : ""}`}>
                                {step === "cart" && (
                                    <section aria-labelledby="cart-items-heading" className="rounded-2xl border border-[#e5e1dc] bg-white px-4 sm:px-6">
                                        <div className="flex items-center justify-between gap-3 border-b border-[#e5e1dc] py-4">
                                            <h2 id="cart-items-heading" className="text-base font-semibold">Your items <span className="ml-1 text-sm font-normal text-[#6b7280]">({count})</span></h2>
                                            <button type="button" onClick={clear} disabled={locked} className="min-h-11 text-xs text-[#5f5b56] underline underline-offset-4 hover:text-red-700">Clear cart</button>
                                        </div>
                                        <ul className="divide-y divide-[#e5e1dc]">
                                            {lines.map((line) => <CartItem key={cartLineId(line)} line={line} disabled={locked} onQuantity={(quantity) => setQuantity(cartLineId(line), quantity)} onRemove={() => remove(cartLineId(line))} />)}
                                        </ul>
                                    </section>
                                )}
                                {step === "delivery" && <CheckoutDeliveryForm details={delivery} onChange={setDelivery} onBack={() => navigate("cart")} onContinue={() => navigate("payment")} />}
                                {step === "payment" && <CheckoutPayment items={items} delivery={delivery} estimatedTotal={estimate.totalMinor} pending={pending} recoveredSession={session} onRecover={restore} canInitialize={validCart && validDelivery && recovery === 'ready'} onPending={setPending} onSession={setSession} onConfirmed={confirmed} onEdit={() => navigate("delivery")} onBusy={setBusy} />}
                            </div>
                            <aside aria-labelledby="order-summary-heading" className={`min-w-0 rounded-2xl border border-[#e5e1dc] bg-white p-4 sm:p-6 lg:sticky lg:top-24 ${step === "payment" ? "order-1 lg:order-2" : ""}`}>
                                <h2 id="order-summary-heading" className="text-lg font-semibold tracking-[-0.03em]">Order summary</h2>
                                {step !== "cart" && summaryItems.length > 0 && <ul className="mt-4 space-y-3 border-b border-[#e5e1dc] pb-4 text-sm">{summaryItems.map((item) => <li key={item.id} className="flex justify-between gap-3"><span className="min-w-0 break-words text-[#5f5b56]">{item.name}{item.variant ? ` (${item.variant})` : ""} <span className="whitespace-nowrap">× {item.quantity}</span></span>{item.priceMinor !== undefined && <span className="shrink-0">{formatZar(item.priceMinor)}</span>}</li>)}</ul>}
                                {(!pending || session) && <dl className="mt-4 space-y-3 border-b border-[#e5e1dc] pb-4 text-sm">
                                    <div className="flex justify-between gap-4"><dt className="text-[#5f5b56]">Subtotal</dt><dd>{formatZar(session?.subtotalMinor ?? estimate.subtotalMinor)}</dd></div>
                                    <div className="flex justify-between gap-4"><dt className="text-[#5f5b56]">{session ? "Delivery" : "Estimated delivery"}</dt><dd>{(session?.deliveryMinor ?? estimate.deliveryMinor) === 0 ? "Free" : formatZar(session?.deliveryMinor ?? estimate.deliveryMinor)}</dd></div>
                                </dl>}
                                <div className="mt-4 flex items-baseline justify-between gap-4"><p className="text-sm font-medium">{session ? "Total to pay" : pending ? "Payment amount" : "Estimated total"}</p><p className="text-xl font-semibold tracking-[-0.04em] sm:text-2xl">{formatZar(totalMinor)}</p></div>
                                {!session && !pending && <p className="mt-3 text-xs leading-5 text-[#6b7280]">Delivery is estimated at R60, or free from R1,000. Prices, stock, and the final delivery charge are confirmed before payment.</p>}
                                {step === "cart" && <>
                                    <button type="button" onClick={() => navigate("delivery")} disabled={!validCart || locked} className="mt-5 min-h-12 w-full rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-white hover:bg-[#1f2937] disabled:cursor-not-allowed disabled:opacity-50">Continue to checkout</button>
                                    {!validCart && <p role="alert" className="mt-3 text-xs leading-5 text-red-700">Update unavailable items before continuing.</p>}
                                </>}
                                <div className="mt-3 flex flex-wrap gap-x-4 text-xs text-[#5f5b56]"><Link href="/shipping" className="inline-flex min-h-11 items-center underline underline-offset-4">Delivery & returns</Link><Link href="/contact" className="inline-flex min-h-11 items-center underline underline-offset-4">Need help?</Link></div>
                            </aside>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}
