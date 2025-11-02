import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/deploy_github',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
