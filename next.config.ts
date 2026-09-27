import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Use the TypeScript compiler API so builds remain portable across CI hosts.
    useTypeScriptCli: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
