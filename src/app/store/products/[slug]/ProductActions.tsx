'use client';
import { useState } from 'react';
import { useCart } from '../../../../lib/cart';
import type { Product } from '../../../../lib/products';
export function ProductActions({ product, disabled }: { product: Product; disabled: boolean }) { const { add } = useCart(); const [added, setAdded] = useState(false); return <button disabled={disabled} onClick={() => { add(product); setAdded(true); }} className="mt-8 w-full rounded-full bg-cyan-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400">{disabled ? 'Unavailable' : added ? 'Added to cart' : 'Add to cart'}</button>; }