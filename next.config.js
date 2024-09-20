/* eslint-disable @typescript-eslint/no-var-requires */
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cv-lake-eta.vercel.app',
        pathname: '**',
      },

      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'topcv-1.s3.amazonaws.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '**',
      },
    ],
  },
};
module.exports = withNextIntl(nextConfig);
