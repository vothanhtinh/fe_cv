module.exports = {
  images: {
    domains: ['localhost', 'cv-lake-eta.vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cv-lake-eta.vercel.app',
        pathname: '**',
      },
    ],
  },
};
