"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { acknowledgeCheckout, checkoutEnabled, initializeCheckout, rememberPendingPayment, verifyCheckout, type PendingPayment } from "../../../lib/checkout-client";
import { accountAppUrl } from "../../../lib/account-app";
import { loadPaystack } from "../../../lib/paystack";
import { formatZar } from "../../../lib/products";
import { type CheckoutItem, type CheckoutSession, type DeliveryDetails, type PaymentVerification } from "../../../lib/store-checkout";

type Phase = "idle" | "preparing" | "ready" | "opening" | "verifying" | "pending";

export function CheckoutPayment({ items, delivery, estimatedTotal, pending, canInitialize, recoveredSession, onRecover, onPending, onSession, onConfirmed, onEdit, onBusy }: {
    items: CheckoutItem[];
    delivery: DeliveryDetails;
    estimatedTotal: number;
    pending: PendingPayment | null;
    canInitialize: boolean;
    recoveredSession?: CheckoutSession | null;
    onRecover: () => Promise<void>;
    onPending: (attempt: PendingPayment | null) => void;
    onSession: (session: CheckoutSession | null) => void;
    onConfirmed: (result: PaymentVerification, items: CheckoutItem[]) => void;
    onEdit: () => void;
    onBusy: (busy: boolean) => void;
}) {
    const [localSession, setSession] = useState<CheckoutSession | null>(null);
    const session = localSession ?? recoveredSession ?? null;
    const [phase, setPhase] = useState<Phase>(pending ? "pending" : "idle");
    const [message, setMessage] = useState("");
    const [accepted, setAccepted] = useState(false);
    const operation = useRef(false);
    const confirmed = useRef(false);
    const idempotencyKey = useRef<string | null>(null);
    const preparedItems = useRef<CheckoutItem[]>([]);
    const cartChanged = Boolean(session) && JSON.stringify(items) !== JSON.stringify(preparedItems.current);
    const busy = ["preparing", "opening", "verifying"].includes(phase);

    function start(next: Phase) {
        if (operation.current) return false;
        operation.current = true;
        setPhase(next);
        setMessage("");
        onBusy(true);
        return true;
    }
    function finish(next: Phase) {
        operation.current = false;
        setPhase(next);
        onBusy(false);
    }
    function save(attempt: PendingPayment | null) {
        rememberPendingPayment(attempt);
        onPending(attempt);
    }

    async function verify(attempt: PendingPayment) {
        if (confirmed.current || !start("verifying")) return;
        try {
            const result = await verifyCheckout(attempt);
            if (result.status === "paid") {
                if (!confirmed.current) {
                    confirmed.current = true;
                    onConfirmed(result, attempt.items);
                    save(null);
                }
                finish("idle");
            } else if (result.status === "failed") {
                await acknowledgeCheckout(attempt.reference);
                save(null);
                setSession(null);
                onSession(null);
                idempotencyKey.current = null;
                setMessage("This payment was not completed. Your cart is still here; you can try again.");
                finish("idle");
            } else {
                setMessage("Your payment has not been confirmed yet. Check its status before making another payment.");
                finish("pending");
            }
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "We lost connection while checking your payment. Your order is saved. Reconnect to check its status.");
            finish("pending");
        }
    }

    async function prepare() {
        if (!checkoutEnabled || !canInitialize || !accepted || pending || !start("preparing")) return;
        try {
            preparedItems.current = items.map((item) => ({ ...item }));
            await loadPaystack();
            idempotencyKey.current ??= window.crypto.randomUUID();
            const next = await initializeCheckout(items, delivery, idempotencyKey.current);
            // Save recovery metadata as soon as initialization returns, before opening Paystack.
            save({ reference: next.reference, amountMinor: next.amountMinor, items: preparedItems.current });
            setSession(next);
            onSession(next);
            if (next.amountMinor !== estimatedTotal) setMessage("Your final total has been updated. Review it below before paying.");
            finish("ready");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Checkout could not connect. Your cart has been kept.");
            await onRecover();
            finish("idle");
        }
    }

    async function pay() {
        if (!session || (!pending && !accepted) || (!pending && cartChanged) || !start("opening")) return;
        const attempt: PendingPayment = pending ?? { reference: session.reference, amountMinor: session.amountMinor, items: preparedItems.current };
        try {
            const Paystack = await loadPaystack();
            save(attempt);
            new Paystack().resumeTransaction(session.accessCode, {
                onSuccess: () => {
                    finish("pending");
                    void verify(attempt);
                },
                onCancel: () => {
                    finish("pending");
                    void verify(attempt);
                },
                onError: () => {
                    setMessage("The payment window could not complete. Check the payment status before trying again.");
                    finish("pending");
                },
            });
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "The payment window could not open.");
            finish(pending ? "pending" : "ready");
        }
    }

    return (
        <section aria-labelledby="checkout-payment-heading" className="rounded-2xl border border-[#e5e1dc] bg-white p-4 sm:p-6">
            <h2 id="checkout-payment-heading" className="text-lg font-semibold tracking-[-0.03em]">Review & payment</h2>
            {delivery.email && (
                <div className="mt-4 border-b border-[#e5e1dc] pb-4">
                    <div className="flex items-center justify-between gap-3">
                        <h3 className="text-sm font-medium">Deliver to</h3>
                        <button type="button" onClick={onEdit} disabled={busy || Boolean(pending)} className="min-h-11 text-sm text-[#1f3c5b] underline underline-offset-4 disabled:opacity-50">Edit</button>
                    </div>
                    <p className="text-sm leading-6 text-[#5f5b56]">{delivery.firstName} {delivery.lastName}<br />{delivery.addressLine1}{delivery.addressLine2 ? `, ${delivery.addressLine2}` : ""}<br />{delivery.city}, {delivery.province}, {delivery.postalCode}<br />South Africa</p>
                    <p className="mt-2 break-words text-sm leading-6 text-[#5f5b56]">{delivery.email}<br />{delivery.phone}</p>
                    {delivery.notes && <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-6 text-[#5f5b56]">Delivery instructions: {delivery.notes}</p>}
                </div>
            )}
            
            {!checkoutEnabled && !pending && <p className="mt-4 text-sm leading-6 text-[#5f5b56]">Online payments are not open yet. You can review your items and delivery details, but no payment will be taken.</p>}
            {pending && <p className="mt-4 break-all text-xs leading-5 text-[#5f5b56]">Payment reference: <span className="font-medium">{pending.reference}</span></p>}
            {!pending && (
                <label className="mt-4 flex items-start gap-3 text-xs leading-5 text-[#5f5b56] sm:text-sm sm:leading-6">
                    <input id="checkout-terms" type="checkbox" checked={accepted} onChange={(event) => setAccepted(event.target.checked)} disabled={busy || Boolean(session)} className="mt-1 h-4 w-4 shrink-0 accent-[#1f3c5b]" />
                    <span>I agree to the <Link href="/terms" className="text-[#1f3c5b] underline underline-offset-4">Terms of Service</Link> and have read the <Link href="/shipping" className="text-[#1f3c5b] underline underline-offset-4">delivery and returns policy</Link>.</span>
                </label>
            )}
            <div role="status" aria-live="polite" className="mt-4 text-sm leading-6 text-[#5f5b56]">
                {busy ? phase === "verifying" ? "Checking your payment…" : phase === "opening" ? "Complete your payment in the Paystack window." : "Confirming prices and availability…" : message}
            </div>
            {session && !pending && <p className="mt-3 text-sm font-medium">Final total: {formatZar(session.amountMinor)}</p>}
            {pending ? (
                <div className="mt-4 flex flex-wrap gap-3">
                    <button type="button" onClick={() => void verify(pending)} disabled={busy} className="min-h-12 rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-white disabled:opacity-50">{phase === "verifying" ? "Checking payment…" : "Check payment status"}</button>
                    {session && <button type="button" onClick={() => void pay()} disabled={busy} className="min-h-12 rounded-full border border-[#e5e1dc] px-5 py-3 text-sm font-medium disabled:opacity-50">Pay {formatZar(session.amountMinor)} with Paystack</button>}
                    <Link href="mailto:hello@chefu.co.za" className="inline-flex min-h-11 items-center text-sm text-[#1f3c5b] underline underline-offset-4">Contact support</Link>
                    <a href={accountAppUrl('/login', { app: 'root', returnTo: typeof window !== 'undefined' ? `${window.location.origin}/store/cart` : '/store/cart' })} className="inline-flex min-h-11 items-center text-sm underline">Sign in to recover your order</a>
                </div>
            ) : (
                <button type="button" onClick={() => void (session ? pay() : prepare())} disabled={!checkoutEnabled || !canInitialize || !accepted || busy || cartChanged} className="mt-4 min-h-12 w-full rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-white hover:bg-[#1f2937] disabled:cursor-not-allowed disabled:opacity-50">
                    {!checkoutEnabled ? "Online payments coming soon" : busy ? "Please wait…" : session ? `Pay ${formatZar(session.amountMinor)} with Paystack` : "Continue to payment"}
                </button>
            )}
            {cartChanged && !pending && <p className="mt-3 text-sm text-amber-800">Your cart has changed. Return to the cart and review your items before paying.</p>}
            {!canInitialize && !pending && <button type="button" onClick={onEdit} className="mt-2 min-h-11 text-sm text-[#1f3c5b] underline underline-offset-4">Complete your delivery details</button>}
            <p className="mt-3 text-xs leading-5 text-[#6b7280]">Your order is confirmed only after payment verification. Please keep this page open while paying.</p>
        </section>
    );
}
