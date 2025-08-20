const path = require('path')

module.exports = {
  trailingSlash: true,
  reactStrictMode: true, // Enable React Strict Mode to catch hydration issues
  experimental: {
    esmExternals: false,
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
    }

    return config
  }
}
