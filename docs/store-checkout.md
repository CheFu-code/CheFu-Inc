# Store checkout: client integration

The cart at `/store/cart` now collects delivery details, reviews the order, and
supports Paystack InlineJS v2. **The backend is not implemented in this change.**

`NEXT_PUBLIC_CHECKOUT_ENABLED=false` is the default. Customers can review the
checkout form, but cannot start a payment. Set it to `true` and rebuild only once
the endpoints below are available. Start with Paystack test credentials on the
backend. There is no Paystack secret or public key required in this frontend;
InlineJS resumes a transaction using the backend-issued access code.

## Endpoints to implement next

Both URLs use `NEXT_PUBLIC_API_BASE_URL` through the existing `apiUrl()` helper.
Requests use credentials, JSON, and a 20-second timeout. Configure the backend's
CORS, CSRF/origin checks, and order access controls for this frontend.

### POST /store/checkout/initialize

Request header: `Idempotency-Key: <browser-generated UUID>`. Repeated requests
with the same key and body must return the same unpaid transaction; reject a
reused key with a different body. Network retries reuse the key.

```json
{
  "items": [{ "productId": "product-id", "variantId": "optional-variant-id", "quantity": 1 }],
  "currency": "ZAR",
  "termsAccepted": true,
  "delivery": {
    "firstName": "Customer",
    "lastName": "Example",
    "email": "customer@example.com",
    "phone": "+27 60 123 4567",
    "addressLine1": "1 Example Street",
    "addressLine2": "",
    "city": "Pretoria",
    "province": "Gauteng",
    "postalCode": "0123",
    "country": "ZA",
    "notes": ""
  }
}
```

The backend must validate every field and product/variant relationship, obtain
current prices and stock, calculate taxes/delivery, reserve stock as appropriate,
create an unpaid order, and initialize the Paystack transaction using its secret
key. Never accept browser prices, totals, stock counts, or a claimed payment
status as authoritative. Bind the pending order to the customer/session.

Return this frontend contract, not the raw Paystack API wrapper:

```json
{
  "accessCode": "access_code_from_paystack",
  "reference": "unique-order-reference",
  "currency": "ZAR",
  "subtotalMinor": 50000,
  "deliveryMinor": 6000,
  "amountMinor": 56000
}
```

All money is integer **cents**. The positive total must equal subtotal plus
delivery. Include applicable taxes in the subtotal. If stock or product prices
have changed, return `409` so the customer can review the cart; return refreshed
product data through the product endpoints. The customer explicitly confirms
the returned total before the client calls `resumeTransaction()`.

The displayed delivery estimate follows the existing store presentation: R60,
free from R1,000, South Africa only. It is not a fulfillment promise; the backend
must supply the final delivery amount and supported service areas. Synchronize
these display rules with the eventual delivery policy.

### POST /store/checkout/verify

```json
{ "reference": "unique-order-reference" }
```

Verify the transaction with Paystack on the server, including its amount,
currency, order ownership and reference. Use webhooks and idempotent order
updates to reconcile payments even if the customer closes the browser. Fulfill
each paid order once. Return:

```json
{
  "reference": "unique-order-reference",
  "currency": "ZAR",
  "amountMinor": 56000,
  "status": "paid",
  "orderId": "customer-facing-order-number"
}
```

Allowed statuses: `paid`, `pending`, `failed`. `paid` requires an order ID.
Map uncertain/ongoing states to `pending`, and only return `failed` when a
transaction is terminal and safe to retry. Verification must be authorized for
the order's customer/session rather than using the reference as a credential.

## Client behavior

- Paystack loads on demand from `https://js.paystack.co/v2/inline.js`.
- No card information is collected by the store form.
- Delivery/contact information stays in React state, not browser storage.
- Before opening Paystack, the tab retains the payment reference, amount, and
  purchased item identifiers/quantities in session storage for recovery.
- Paystack callbacks trigger backend verification. They do not mark orders paid.
- Unknown/failed verification preserves the cart and offers a status check.
- After reload, an outstanding reference returns to status recovery rather than
  starting another charge. If session storage is blocked, recovery is limited
  to the current page; backend reconciliation remains essential.
- Only a verified paid response removes the purchased quantities. Items added
  separately, including in another tab, stay in the cart.
- Cancellation resumes/verifies the same reference instead of making a new one.
- `404`, `405`, `501`, and `503` produce an unavailable-payment message.
- Payment success emails, receipts, stock reservations, tax calculations, and
  shipment tracking still need the backend; the UI does not claim they exist.

## Checks

Run `npm run typecheck`, `npx eslint src/app/store/cart src/lib/cart.tsx
src/lib/store-checkout.ts src/lib/checkout-client.ts src/lib/paystack.ts`, and
`npm run test:checkout`.

Documentation:
- https://paystack.com/docs/payments/accept-payments/
- https://paystack.com/docs/payments/verify-payments/
- https://paystack.com/docs/developer-tools/inlinejs/
