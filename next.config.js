/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://saraegio.github.io' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/saraegio.github.io' : '',
}

module.exports = nextConfig;