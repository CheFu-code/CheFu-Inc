import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        sitemap({
            hostname: "https://chefuinc.com",
            dynamicRoutes: [
                "/",
                "/about",
                "/services",
                "/services/music",
                "/services/software",
                "/services/ai",
                "/portfolio",
                "/contact",
                "/login",
                "/register",
                "/careers",
                "/blog",
                "/faq",
                "/privacy",
                "/terms",
            ],
        }),
    ],
});
