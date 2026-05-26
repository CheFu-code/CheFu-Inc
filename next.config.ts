import type { NextConfig } from "next";
import { agentLinkHeader } from "./src/lib/agentDiscovery";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value: agentLinkHeader,
          },
          {
            key: "Vary",
            value: "Accept",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
