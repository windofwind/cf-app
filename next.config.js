/** @type {import('next').NextConfig} */

const nextConfi = {
  experimental: {
    runtime: "experimental-edge",
    appDir: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  compiler: {},
  env: {},
};

module.exports = nextConfig;
