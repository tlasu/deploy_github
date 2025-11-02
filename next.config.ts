import type { NextConfig } from "next";

// デプロイターゲットに応じて設定を切り替え
// NEXT_PUBLIC_DEPLOY_TARGET: 'github-pages' | 'ec2' | undefined
const deployTarget = process.env.NEXT_PUBLIC_DEPLOY_TARGET;
const isProd = process.env.NODE_ENV === 'production';

// GitHub Pagesの場合のみbasePathを設定
const basePath = isProd && deployTarget === 'github-pages' ? '/deploy_github' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
