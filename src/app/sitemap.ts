import type { MetadataRoute } from "next";
import { getProducts } from "../lib/products";
import { routes, siteUrl } from "./site-metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const products = await getProducts();

    const staticRoutes = routes.map((route) => ({
        url: new URL(route, siteUrl).toString(),
        changeFrequency: route === "/" ? "monthly" as const : "yearly" as const,
        priority: route === "/" ? 1 : 0.6,
    }));

    const productRoutes = products
        .filter((product) => product.status === "ACTIVE" && product.slug)
        .map((product) => ({
            url: new URL(`/store/products/${product.slug}`, siteUrl).toString(),
            lastModified: product.updatedAt ? new Date(product.updatedAt) : undefined,
            changeFrequency: "weekly" as const,
            priority: 0.7,
        }));

    return [...staticRoutes, ...productRoutes];
}
