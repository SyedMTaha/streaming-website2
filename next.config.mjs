import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.(mp4|webm|ogg)$/i,
          type: 'asset/resource',
        });
        return config;
      },
};

export default withNextVideo(nextConfig);