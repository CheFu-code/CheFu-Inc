import type { MetadataRoute } from "next";
import { routes, siteUrl } from "./site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return routes.map((route) => ({
        url: new URL(route, siteUrl).toString(),
        lastModified,
        changeFrequency: "weekly",
        priority: route === "/" ? 1 : 0.8,
    }));
}
