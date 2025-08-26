import type { NextConfig } from "next";

const env = process.env.NEXT_CONFIG_ENV || 'development';

const configuration: Record<string, NextConfig> = {
  static: {

  },
  production: {
    /**
     * Enable static exports.
     *
     * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
     */
    output: "export",

    /**
     * Set base path. This is the slug of your GitHub repository.
     *
     * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
     */
    basePath: "/grayyy.github.io",

    /**
     * Disable server-based image optimization. Next.js does not support
     * dynamic features with static exports.
     *
     * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
     */
    images: {
      unoptimized: true,
    },
  },
  development: {

  },
};

const nextConfig: NextConfig = {
  ...configuration[env],
};

export default nextConfig;