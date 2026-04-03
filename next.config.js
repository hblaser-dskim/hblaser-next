/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  experimental: { forceSwcTransforms: false },
  webpack: (config) => config,
}
module.exports = nextConfig
