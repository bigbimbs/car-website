/** @type {import('next').NextConfig} */
const nextConfig = {
  future: {
    webpack5: false,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
