import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/#work',
        permanent: true,
      },
      {
        source: '/portfolio/food-app',
        destination: '/work/food-ordering-app',
        permanent: true,
      },
      {
        source: '/portfolio/yoga-app',
        destination: '/work/appointment-app',
        permanent: true,
      },
      {
        source: '/portfolio/Beqube',
        destination: '/work/beqube',
        permanent: true,
      },
      {
        source: '/portfolio/:slug',
        destination: '/work/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
