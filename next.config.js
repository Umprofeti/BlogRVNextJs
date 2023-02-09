/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['apiblog.rendezvouscorp.com', 'localhost', 'panel.rendezvouscorp.com']
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    });
    return config;
  }, 
}

module.exports = nextConfig
