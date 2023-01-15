 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ["image/webp"],
    domains: ['pbs.twimg.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        // pathname: '/images/themes/**',
      },
    ],
  },
}

module.exports = nextConfig
  