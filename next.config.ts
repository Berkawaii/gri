import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  basePath: '/gri',
  assetPrefix: '/gri',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
} as any;

export default nextConfig;
