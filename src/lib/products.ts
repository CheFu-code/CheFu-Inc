import { apiUrl } from './chefu-account';

export type ProductImage = { url: string; publicId?: string; alt: string; sortOrder: number };
export type ProductVariant = { id: string; name: string; sku: string; priceMinor: number; inventoryQuantity: number; options: Record<string, string> };
export type Product = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  priceMinor: number;
  compareAtPriceMinor?: number;
  currency: 'ZAR';
  category: string;
  sku: string;
  images: ProductImage[];
  thumbnail?: string;
  inventoryQuantity: number;
  lowStockThreshold: number;
  status: 'ACTIVE' | 'DRAFT' | 'ARCHIVED' | 'OUT_OF_STOCK';
  featured: boolean;
  variants: ProductVariant[];
  tags: string[];
  seoDescription?: string;
  createdAt: string;
  updatedAt: string;
};

export function formatZar(minor: number) {
  return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 2 }).format(minor / 100);
}

export async function getProducts() {
  try {
    const response = await fetch(apiUrl('/products'), { next: { revalidate: 60, tags: ['products'] } });
    if (!response.ok) return [];
    return (await response.json() as { products?: Product[] }).products || [];
  } catch {
    return [];
  }
}

export async function getProduct(slug: string) {
  try {
    const response = await fetch(apiUrl(`/products/slug/${encodeURIComponent(slug)}`), { next: { revalidate: 60, tags: [`product:${slug}`] } });
    if (!response.ok) return null;
    return await response.json() as Product;
  } catch {
    return null;
  }
}