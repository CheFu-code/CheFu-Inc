import { apiUrl } from "./chefu-account";
import {
    parseCheckoutSession, parseVerification,
    type CheckoutItem, type DeliveryDetails, type PaymentAttempt,
} from "./store-checkout";

export const checkoutEnabled = process.env.NEXT_PUBLIC_CHECKOUT_ENABLED === "true";

export type PendingPayment = PaymentAttempt & { items: CheckoutItem[] };
const pendingKey = "chefu-pending-payment";

export function readPendingPayment(): PendingPayment | null {
    if (typeof window === "undefined") return null;
    try {
        const value = JSON.parse(window.sessionStorage.getItem(pendingKey) ?? "null");
        if (!value || !Array.isArray(value.items) || !value.items.length ||
            typeof value.reference !== "string" || !/^[a-zA-Z0-9.=-]{1,128}$/.test(value.reference) ||
            !Number.isSafeInteger(value.amountMinor) || value.amountMinor <= 0 ||
            !value.items.every((item: CheckoutItem) => item && typeof item.productId === "string" &&
                Number.isSafeInteger(item.quantity) && item.quantity > 0 &&
                (item.variantId === undefined || typeof item.variantId === "string"))) return null;
        return value;
    } catch { return null; }
}

export function rememberPendingPayment(attempt: PendingPayment | null) {
    try {
        if (attempt) window.sessionStorage.setItem(pendingKey, JSON.stringify(attempt));
        else window.sessionStorage.removeItem(pendingKey);
    } catch { /* Checkout still works in memory if session storage is blocked. */ }
}

async function checkoutRequest(path: string, body: unknown, idempotencyKey?: string): Promise<unknown> {
    const response = await fetch(apiUrl(path), {
        method: "POST",
        credentials: "include",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
            ...(idempotencyKey ? { "Idempotency-Key": idempotencyKey } : {}),
        },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(20_000),
    });
    if ([404, 405, 501, 503].includes(response.status)) {
        throw new Error("Online payments are not available right now. Your cart has been kept.");
    }
    if (!response.ok) {
        if (response.status === 409) throw new Error("An item's price or availability has changed. Return to your cart and review your items.");
        throw new Error("We could not connect to checkout. Please try again.");
    }
    return response.json();
}

export async function initializeCheckout(items: CheckoutItem[], delivery: DeliveryDetails, idempotencyKey: string) {
    const normalizedDelivery = Object.fromEntries(Object.entries(delivery).map(([key, value]) => [key, value.trim()]));
    return parseCheckoutSession(await checkoutRequest("/store/checkout/initialize", {
        items, delivery: normalizedDelivery, currency: "ZAR", termsAccepted: true,
    }, idempotencyKey));
}

export async function verifyCheckout(attempt: PaymentAttempt) {
    return parseVerification(await checkoutRequest("/store/checkout/verify", { reference: attempt.reference }), attempt);
}
