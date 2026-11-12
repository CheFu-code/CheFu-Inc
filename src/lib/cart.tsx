"use client";

import { createContext, useContext, useMemo, useSyncExternalStore, type ReactNode } from "react";
import type { Product, ProductVariant } from "./products";
import { availableQuantity, cartLineId, estimateOrder, type CartLine, type CheckoutItem } from "./store-checkout";

export type { CartLine } from "./store-checkout";

type CartContextValue = {
    lines: CartLine[];
    isHydrated: boolean;
    count: number;
    subtotalMinor: number;
    add: (product: Product, variant?: ProductVariant) => void;
    setQuantity: (id: string, quantity: number) => void;
    remove: (id: string) => void;
    clear: () => void;
    completePurchase: (items: CheckoutItem[]) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "chefu-cart";
const changeEvent = "chefu-cart-change";
let memoryCart = "[]";
let storageUnavailable = false;

function snapshot() {
    if (storageUnavailable) return memoryCart;
    try { return window.localStorage.getItem(storageKey) ?? "[]"; }
    catch { storageUnavailable = true; return memoryCart; }
}
function serverSnapshot() { return null; }
function subscribe(callback: () => void) {
    const onStorage = (event: StorageEvent) => {
        if (event.key === storageKey || event.key === null) callback();
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener(changeEvent, callback);
    return () => {
        window.removeEventListener("storage", onStorage);
        window.removeEventListener(changeEvent, callback);
    };
}

function parseLines(stored: string | null): CartLine[] {
    try {
        const parsed: unknown = JSON.parse(stored ?? "[]");
        if (!Array.isArray(parsed)) return [];
        return parsed.filter((line): line is CartLine => {
            const product = line?.product;
            const variant = line?.variant;
            return product && typeof product.id === "string" && typeof product.name === "string" &&
                typeof product.slug === "string" && Array.isArray(product.images) &&
                Number.isSafeInteger(product.priceMinor) && product.priceMinor >= 0 &&
                Number.isSafeInteger(product.inventoryQuantity) && product.inventoryQuantity >= 0 &&
                Number.isSafeInteger(line.quantity) && line.quantity > 0 &&
                (!variant || (typeof variant.id === "string" && Number.isSafeInteger(variant.priceMinor) &&
                    variant.priceMinor >= 0 && Number.isSafeInteger(variant.inventoryQuantity) && variant.inventoryQuantity >= 0));
        });
    } catch { return []; }
}

function updateCart(update: (current: CartLine[]) => CartLine[]) {
    const next = update(parseLines(snapshot()));
    memoryCart = JSON.stringify(next);
    try { window.localStorage.setItem(storageKey, memoryCart); } catch { storageUnavailable = true; }
    window.dispatchEvent(new Event(changeEvent));
}

export function CartProvider({ children }: { children: ReactNode }) {
    const stored = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
    const lines = useMemo(() => parseLines(stored), [stored]);
    const value = useMemo<CartContextValue>(() => ({
        lines,
        isHydrated: stored !== null,
        count: lines.reduce((total, line) => total + line.quantity, 0),
        subtotalMinor: estimateOrder(lines).subtotalMinor,
        add: (product, variant) => updateCart((current) => {
            const nextLine = { product, variant, quantity: 1 };
            const stock = availableQuantity(nextLine);
            if (product.status !== "ACTIVE" || stock <= 0) return current;
            const id = cartLineId(nextLine);
            return current.some((line) => cartLineId(line) === id)
                ? current.map((line) => cartLineId(line) === id ? { ...line, product, variant, quantity: Math.min(line.quantity + 1, stock) } : line)
                : [...current, nextLine];
        }),
        setQuantity: (id, quantity) => updateCart((current) => current.map((line) =>
            cartLineId(line) === id && Number.isFinite(quantity)
                ? { ...line, quantity: Math.max(1, Math.min(Math.floor(quantity), availableQuantity(line))) }
                : line)),
        remove: (id) => updateCart((current) => current.filter((line) => cartLineId(line) !== id)),
        clear: () => updateCart(() => []),
        completePurchase: (items) => updateCart((current) => current.flatMap((line) => {
            const purchased = items.find((item) => item.productId === line.product.id && item.variantId === line.variant?.id);
            if (!purchased) return [line];
            const quantity = line.quantity - purchased.quantity;
            return quantity > 0 ? [{ ...line, quantity }] : [];
        })),
    }), [lines, stored]);
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used inside CartProvider");
    return context;
}
