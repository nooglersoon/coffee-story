/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/coffee',
        destination: '/',
      },
    ]
  },
}