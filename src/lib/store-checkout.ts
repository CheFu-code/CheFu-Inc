import type { Product, ProductVariant } from "./products";

export type CartLine = { product: Product; quantity: number; variant?: ProductVariant };
export type CheckoutItem = { productId: string; variantId?: string; quantity: number };
export type DeliveryDetails = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    province: string;
    postalCode: string;
    country: "ZA";
    notes: string;
};
export const southAfricanProvinces = [
    "Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo",
    "Mpumalanga", "North West", "Northern Cape", "Western Cape",
] as const;

export const emptyDeliveryDetails: DeliveryDetails = {
    firstName: "", lastName: "", email: "", phone: "", addressLine1: "", addressLine2: "",
    city: "", province: "", postalCode: "", country: "ZA", notes: "",
};

export function cartLineId(line: CartLine) {
    return `${line.product.id}:${line.variant?.id ?? "base"}`;
}

export function unitPrice(line: CartLine) {
    return line.variant?.priceMinor ?? line.product.priceMinor;
}

export function availableQuantity(line: CartLine) {
    return line.variant?.inventoryQuantity ?? line.product.inventoryQuantity;
}

export function isPurchasable(line: CartLine) {
    return line.product.status === "ACTIVE" && line.product.currency === "ZAR" &&
        Number.isSafeInteger(unitPrice(line)) && unitPrice(line) >= 0 &&
        Number.isSafeInteger(line.quantity) && line.quantity > 0 &&
        line.quantity <= availableQuantity(line);
}

export function estimateOrder(lines: CartLine[]) {
    const subtotalMinor = lines.reduce((sum, line) => sum + unitPrice(line) * line.quantity, 0);
    // Display estimate only. The backend must calculate the actual delivery charge.
    const deliveryMinor = lines.length === 0 || subtotalMinor >= 100_000 ? 0 : 6_000;
    return { subtotalMinor, deliveryMinor, totalMinor: subtotalMinor + deliveryMinor };
}

export function checkoutItems(lines: CartLine[]): CheckoutItem[] {
    if (!lines.length || !lines.every(isPurchasable)) {
        throw new Error("Please update unavailable items in your cart before checking out.");
    }
    const total = estimateOrder(lines).totalMinor;
    if (!Number.isSafeInteger(total) || total <= 0) throw new Error("This cart cannot be checked out.");
    return lines.map((line) => ({
        productId: line.product.id,
        ...(line.variant ? { variantId: line.variant.id } : {}),
        quantity: line.quantity,
    }));
}

export function deliveryErrors(details: DeliveryDetails) {
    const errors: Partial<Record<keyof DeliveryDetails, string>> = {};
    if (!details.firstName.trim()) errors.firstName = "Enter your first name.";
    if (!details.lastName.trim()) errors.lastName = "Enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email.trim())) errors.email = "Enter a valid email address.";
    if (!/^\+?[\d\s()-]+$/.test(details.phone.trim()) || details.phone.replace(/\D/g, "").length < 9 || details.phone.replace(/\D/g, "").length > 15) {
        errors.phone = "Enter a valid contact number.";
    }
    if (!details.addressLine1.trim()) errors.addressLine1 = "Enter your street address.";
    if (!details.city.trim()) errors.city = "Enter your town or city.";
    if (!(southAfricanProvinces as readonly string[]).includes(details.province)) errors.province = "Choose a province.";
    if (!/^\d{4}$/.test(details.postalCode.trim())) errors.postalCode = "Enter a four-digit postal code.";
    if (details.country !== "ZA") errors.country = "Delivery is currently limited to South Africa.";
    return errors;
}

export type CheckoutSession = {
    accessCode: string;
    reference: string;
    currency: "ZAR";
    subtotalMinor: number;
    deliveryMinor: number;
    amountMinor: number;
};
export type PaymentAttempt = { reference: string; amountMinor: number };
export type PaymentVerification = PaymentAttempt & {
    currency: "ZAR";
    status: "paid" | "pending" | "failed";
    orderId?: string;
};

function record(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === "object";
}
function minorAmount(value: unknown): value is number {
    return typeof value === "number" && Number.isSafeInteger(value) && value >= 0;
}
function reference(value: unknown): value is string {
    return typeof value === "string" && /^[a-zA-Z0-9.=-]{1,128}$/.test(value);
}

export function parseCheckoutSession(value: unknown): CheckoutSession {
    if (!record(value) || typeof value.accessCode !== "string" || !/^[a-zA-Z0-9_-]{1,256}$/.test(value.accessCode) ||
        !reference(value.reference) || value.currency !== "ZAR" ||
        !minorAmount(value.subtotalMinor) || !minorAmount(value.deliveryMinor) ||
        !minorAmount(value.amountMinor) || value.amountMinor <= 0 ||
        value.subtotalMinor + value.deliveryMinor !== value.amountMinor) {
        throw new Error("We could not confirm your order total. Please try again.");
    }
    return value as CheckoutSession;
}

export function parsePaymentAttempt(value: unknown): PaymentAttempt | null {
    return record(value) && reference(value.reference) && minorAmount(value.amountMinor) && value.amountMinor > 0
        ? { reference: value.reference, amountMinor: value.amountMinor } : null;
}

export function parseVerification(value: unknown, attempt: PaymentAttempt): PaymentVerification {
    if (!record(value) || value.reference !== attempt.reference || value.currency !== "ZAR" ||
        value.amountMinor !== attempt.amountMinor || !["paid", "pending", "failed"].includes(String(value.status)) ||
        (value.status === "paid" && (typeof value.orderId !== "string" || !value.orderId.trim() || value.orderId.length > 128))) {
        throw new Error("Payment could not be confirmed. Check its status before trying another payment.");
    }
    return value as PaymentVerification;
}
