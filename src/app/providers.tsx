"use client";

import { Toaster } from "sonner";
import { CartProvider } from "../lib/cart";

export function AppProviders() {
    return <CartProvider><Toaster position="top-right" /></CartProvider>;
}
