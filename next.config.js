const {i18n} = require('./next-i18next.config');

module.exports = {
  i18n,

  images: {
    domains: ['cimagehost1.sos-ch-gva-2.exoscale-cdn.com']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
