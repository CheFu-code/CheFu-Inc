"use client";

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import type { Product, ProductVariant } from "./products";

type CartLine = {
    product: Product;
    quantity: number;
    variant?: ProductVariant;
};
type CartContextValue = {
    lines: CartLine[];
    count: number;
    subtotalMinor: number;
    add: (product: Product, variant?: ProductVariant) => void;
    setQuantity: (id: string, quantity: number) => void;
    remove: (id: string) => void;
    clear: () => void;
};
const CartContext = createContext<CartContextValue | null>(null);
const key = (line: CartLine) =>
    `${line.product.id}:${line.variant?.id || "base"}`;

function readStoredCart(): CartLine[] {
    if (typeof window === "undefined") return [];

    try {
        const stored = window.localStorage.getItem("chefu-cart");
        return stored ? (JSON.parse(stored) as CartLine[]) : [];
    } catch {
        return [];
    }
}

export function CartProvider({ children }: { children: ReactNode }) {
    const [lines, setLines] = useState<CartLine[]>(readStoredCart);
    useEffect(() => {
        localStorage.setItem("chefu-cart", JSON.stringify(lines));
    }, [lines]);
    const value = useMemo(
        () => ({
            lines,
            count: lines.reduce((total, line) => total + line.quantity, 0),
            subtotalMinor: lines.reduce(
                (total, line) =>
                    total +
                    (line.variant?.priceMinor || line.product.priceMinor) * line.quantity,
                0,
            ),
            add: (product: Product, variant?: ProductVariant) =>
                setLines((current) => {
                    const id = `${product.id}:${variant?.id || "base"}`;
                    const existing = current.find((line) => key(line) === id);
                    return existing
                        ? current.map((line) =>
                            key(line) === id
                                ? {
                                    ...line,
                                    quantity: Math.min(
                                        line.quantity + 1,
                                        variant?.inventoryQuantity || product.inventoryQuantity,
                                    ),
                                }
                                : line,
                        )
                        : [...current, { product, variant, quantity: 1 }];
                }),
            setQuantity: (id: string, quantity: number) =>
                setLines((current) =>
                    current.map((line) =>
                        key(line) === id
                            ? {
                                ...line,
                                quantity: Math.max(
                                    1,
                                    Math.min(
                                        quantity,
                                        line.variant?.inventoryQuantity ||
                                        line.product.inventoryQuantity,
                                    ),
                                ),
                            }
                            : line,
                    ),
                ),
            remove: (id: string) =>
                setLines((current) => current.filter((line) => key(line) !== id)),
            clear: () => setLines([]),
        }),
        [lines],
    );
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used inside CartProvider");
    return context;
}
