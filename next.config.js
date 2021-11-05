const {i18n} = require('./next-i18next.config');

module.exports = {
  i18n: {
    localeDetection: true,
    locales: ["en", "ru"],
    defaultLocale: "en",
    http: true
  },
  images: {
    domains: ['cimagehost1.sos-ch-gva-2.exoscale-cdn.com']
  }
}
