import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.ibb.co", "github.com","ibb.co"], // Added 'github.com' to the allowed domains
  },
};

export default nextConfig;
