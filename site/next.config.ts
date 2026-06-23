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
      { source: "/solutions", destination: "/features", permanent: true },
      { source: "/service", destination: "/features", permanent: true },
      { source: "/services", destination: "/features", permanent: true },
      { source: "/demo", destination: "/free-demo", permanent: true },
      { source: "/request-demo", destination: "/free-demo", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:slug", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
