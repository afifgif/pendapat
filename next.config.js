/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow images from localhost:3845 (Figma MCP server)
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3845',
        pathname: '/assets/**',
      },
    ],
    unoptimized: true,
  },
  // Configure webpack for SVG and image imports
  webpack(config) {
    // Handle SVG files as static assets (return URL string)
    config.module.rules.push({
      test: /\.svg$/,
      type: 'asset/resource',
    })
    // Handle PNG/JPG files as static assets
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|webp)$/i,
      type: 'asset/resource',
    })
    return config
  },
  // Allow external images
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig


