import test from "node:test";
import assert from "node:assert/strict";
import {
    availableQuantity, checkoutItems, deliveryErrors, emptyDeliveryDetails,
    estimateOrder, isPurchasable, parseCheckoutSession, parsePaymentAttempt,
    parseVerification, unitPrice,
} from "../src/lib/store-checkout.ts";

const product = { id: "product-1", status: "ACTIVE", currency: "ZAR", priceMinor: 25_000, inventoryQuantity: 5 };
const line = { product, quantity: 2 };
const session = { accessCode: "test_access", reference: "order-test-123", currency: "ZAR", subtotalMinor: 50_000, deliveryMinor: 6_000, amountMinor: 56_000 };
const delivery = {
    ...emptyDeliveryDetails, firstName: "Test", lastName: "Customer", email: "customer@example.com",
    phone: "+27 60 123 4567", addressLine1: "1 Example Street", city: "Pretoria", province: "Gauteng", postalCode: "0123",
};

test("delivery estimates handle empty carts and the free-delivery threshold in cents", () => {
    assert.deepEqual(estimateOrder([]), { subtotalMinor: 0, deliveryMinor: 0, totalMinor: 0 });
    assert.equal(estimateOrder([line]).totalMinor, 56_000);
    assert.equal(estimateOrder([{ ...line, quantity: 4 }]).deliveryMinor, 0);
    assert.equal(estimateOrder([{ product: { ...product, priceMinor: 99_999 }, quantity: 1 }]).deliveryMinor, 6_000);
});

test("zero-priced and zero-stock variants do not fall back to base values", () => {
    const variantLine = { ...line, variant: { id: "variant-1", priceMinor: 0, inventoryQuantity: 0 } };
    assert.equal(unitPrice(variantLine), 0);
    assert.equal(availableQuantity(variantLine), 0);
    assert.equal(isPurchasable(variantLine), false);
});

test("checkout rejects unavailable, non-integer, negative and unsupported-currency cart lines", () => {
    for (const invalid of [
        { ...line, quantity: 0 }, { ...line, quantity: 1.5 }, { ...line, quantity: 6 },
        { ...line, product: { ...product, status: "DRAFT" } },
        { ...line, product: { ...product, currency: "USD" } },
        { ...line, product: { ...product, priceMinor: -1 } },
    ]) assert.throws(() => checkoutItems([invalid]));
    assert.throws(() => checkoutItems([]));
    assert.throws(() => checkoutItems([{ ...line, product: { ...product, priceMinor: Number.MAX_SAFE_INTEGER } }]));
});

test("the order request contains identifiers and quantities, never client prices", () => {
    assert.deepEqual(checkoutItems([line]), [{ productId: "product-1", quantity: 2 }]);
    assert.deepEqual(checkoutItems([{ ...line, variant: { id: "variant-1", priceMinor: 12_000, inventoryQuantity: 3 } }]), [
        { productId: "product-1", variantId: "variant-1", quantity: 2 },
    ]);
});

test("valid South African delivery details preserve leading-zero postal codes", () => {
    assert.deepEqual(deliveryErrors(delivery), {});
    assert.equal(delivery.postalCode, "0123");
    assert.ok(deliveryErrors({ ...delivery, country: "US" }).country);
    assert.ok(deliveryErrors({ ...delivery, province: "Unknown" }).province);
    assert.ok(deliveryErrors({ ...delivery, postalCode: "123" }).postalCode);
});

test("contact and address validation catches blank and malformed fields", () => {
    const errors = deliveryErrors({ ...delivery, firstName: " ", email: "bad-email", phone: "123", addressLine1: " ", city: " " });
    for (const key of ["firstName", "email", "phone", "addressLine1", "city"]) assert.ok(errors[key]);
});

test("payment sessions require a consistent integer ZAR total and valid access code", () => {
    assert.deepEqual(parseCheckoutSession(session), session);
    for (const overrides of [
        { amountMinor: 55_000 }, { currency: "USD" }, { amountMinor: 1.5 },
        { deliveryMinor: -1 }, { accessCode: "" }, { reference: "bad/reference" },
    ]) assert.throws(() => parseCheckoutSession({ ...session, ...overrides }));
});

test("payment recovery accepts only a valid reference and positive integer amount", () => {
    assert.deepEqual(parsePaymentAttempt(session), { reference: session.reference, amountMinor: session.amountMinor });
    assert.equal(parsePaymentAttempt({ reference: "../bad", amountMinor: 100 }), null);
    assert.equal(parsePaymentAttempt({ reference: "valid-ref", amountMinor: -1 }), null);
});

test("a paid response needs a matching reference, amount, currency and order ID", () => {
    const paid = { reference: session.reference, amountMinor: session.amountMinor, currency: "ZAR", status: "paid", orderId: "order-1" };
    assert.deepEqual(parseVerification(paid, session), paid);
    for (const overrides of [
        { amountMinor: 1 }, { reference: "some-other-payment" }, { currency: "USD" }, { orderId: "" }, { status: "success" },
    ]) assert.throws(() => parseVerification({ ...paid, ...overrides }, session));
});

test("pending and failed responses are not promoted to confirmed orders", () => {
    for (const status of ["pending", "failed"]) {
        const result = parseVerification({ reference: session.reference, amountMinor: session.amountMinor, currency: "ZAR", status }, session);
        assert.equal(result.status, status);
        assert.equal(result.orderId, undefined);
    }
});
