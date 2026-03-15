/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "turbocharity.com",
      },
    ],
  },
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
