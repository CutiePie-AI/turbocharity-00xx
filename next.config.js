/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['turbocharity.com'],
  },
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
    ];
  },
};
module.exports = nextConfig;
