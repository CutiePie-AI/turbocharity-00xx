/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'turbocharity.com',
      },
      {
        protocol: 'https',
        hostname: '*.turbocharity.com',
      },
    ],
  },
};
module.exports = nextConfig;
