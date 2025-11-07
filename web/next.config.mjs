import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable hot reloading in Docker
  experimental: {
    // Enable polling for file changes in Docker
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // Configure for Docker development
  env: {
    WATCHPACK_POLLING: 'true',
  },
  webpack: (config, { isServer, dev }) => {
    // Enable polling for file changes in Docker development
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    
    if (!isServer) {
      config.plugins.push(
        new ForkTsCheckerWebpackPlugin({
          async: true, // Run type checking asynchronously
          typescript: {
            configOverwrite: {
              compilerOptions: {
                skipLibCheck: true,
              },
            },
            build: false, // Don't block on type errors during dev
            mode: 'write-references', // Only write references, don't fail on errors
          },
          issue: {
            exclude: [
              { file: '**/.next/**' },
              { file: '**/node_modules/**' },
            ],
          },
        })
      );
    }
    return config;
  },
};

export default nextConfig;