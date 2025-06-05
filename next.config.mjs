import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MUX_TOKEN_ID: process.env.MUX_TOKEN_ID,
    MUX_TOKEN_SECRET: process.env.MUX_TOKEN_SECRET,
  },
  // Enable strict mode for better development practices
  reactStrictMode: true,
  // Configure environment-specific settings
  serverRuntimeConfig: {
    // Will only be available on the server side
    MUX_TOKEN_ID: process.env.MUX_TOKEN_ID,
    MUX_TOKEN_SECRET: process.env.MUX_TOKEN_SECRET,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    MUX_ENV: process.env.NEXT_PUBLIC_MUX_ENV_KEY || 'production'
  },
  webpack: (config, { isServer }) => {
    // Audio/video support
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/media/',
          outputPath: 'static/media/',
          name: '[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
};

export default withNextVideo(nextConfig);