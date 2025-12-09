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
  // Turbopack configuration for Next.js 16
  // Empty config to silence the warning - webpack config below handles SVG as asset/resource
  turbopack: {},
  // Configure webpack for SVG and image imports
  webpack(config, { isServer }) {
    // Find existing rules that might handle SVG files
    const rules = config.module.rules
    const fileLoaderRule = rules.find((rule) => {
      if (typeof rule === 'object' && rule !== null && 'test' in rule) {
        return rule.test && rule.test.toString().includes('svg')
      }
      return false
    })

    // Exclude SVG from default file/image loaders
    if (fileLoaderRule && typeof fileLoaderRule === 'object') {
      fileLoaderRule.exclude = /\.svg$/i
    }

    // Handle SVG files as static assets (return URL string)
    // This must come after other rules to take precedence
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.(js|jsx|ts|tsx)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/images/[name].[hash][ext]',
      },
    })
    
    // Handle PNG/JPG files as static assets
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|webp)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/images/[name].[hash][ext]',
      },
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


