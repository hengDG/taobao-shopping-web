import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.alicdn.com",
      },
      {
        protocol: "https",
        hostname: "gw.alicdn.com",
      },
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
      },
      
    ],
  },
};

export default nextConfig;
