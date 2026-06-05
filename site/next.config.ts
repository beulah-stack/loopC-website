import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/solutions", destination: "/services", permanent: true },
      { source: "/service", destination: "/services", permanent: true },
      { source: "/demo", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
