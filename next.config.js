/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ['turbocharity.com'] },
  async redirects() {
    return [];
  },
};
module.exports = nextConfig;
