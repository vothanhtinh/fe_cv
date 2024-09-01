module.exports = {
  images: {
    domains: ['localhost', 'cv-lake-eta.vercel.app', 'media.istockphoto.com'],
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
    ],
  },
};
