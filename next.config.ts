import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "legacystructuresusa.com",
      },
      {
        protocol: "https",
        hostname: "barndealer.com",
      },
      {
        protocol: "https",
        hostname: "orders.barnportal.com",
      },
    ],
  },
};

export default nextConfig;
