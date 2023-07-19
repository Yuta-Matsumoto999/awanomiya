/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: process.env.ALLOWED_IMAGE_HOST.split(',')
  }
}

module.exports = nextConfig
