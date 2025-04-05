/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  images: {
    domains: ["fakestoreapi.com"], 
  },
  experimental: {
    turbopack: false,
  },
};

module.exports = nextConfig;
