import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      'fastly.picsum.photos'
    ]
  }
};

export default nextConfig;
