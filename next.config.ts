/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sereno.ke.app',
      },
      {
        protocol: 'https',
        hostname: 'sereno.ke.com',
      },
    ],
  },
  // CORRECT WAY: Set to false to completely hide the dev indicator
  devIndicators: false,
  output: 'export',
  trailingSlash: true,
  telemetry: false,
}

export default nextConfig