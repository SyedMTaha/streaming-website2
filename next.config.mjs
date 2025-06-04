import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */
const nextConfig = {
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