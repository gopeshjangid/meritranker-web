/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for catching potential problems in React
  swcMinify: true, // Enables SWC minifier for faster builds and smaller bundles
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  images: {
    // If you were using external images, you'd configure domains here.
    // For placeholder.svg or images in /public, this might not be strictly needed
    // but good practice if you anticipate adding image providers.
    // domains: ['your-image-provider.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '**.example.com', // Example pattern
    //   },
    // ],
    domains: [ 
      "lh3.googleusercontent.com",
      "picsum.photos",
      "github.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "graciousquotes.com",
      "developers.elementor.com",
      "cdn3.iconfinder.com",
      "cdn.sanity.io",
    ]
  },
  // experimental: {
  //   appDir: true, // This is true by default in Next.js 13.4+
  //   // typedRoutes: true, // If you want to enable typed routes
  // },

  // If you need to set custom headers, redirects, or rewrites, you can do it here.
  // Example:
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: [
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff',
  //         },
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'SAMEORIGIN',
  //         },
  //         {
  //           key: 'X-XSS-Protection',
  //           value: '1; mode=block',
  //         },
  //       ],
  //     },
  //   ];
  // },
  async redirects() {
    return [
      {
        source: '/sitemap',
        destination: '/sitemap.xml',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
