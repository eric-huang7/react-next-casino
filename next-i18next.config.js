const I18NextHttpBackend = require('i18next-http-backend')

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    defaultNS: [],
    localeDetection: true,

    backend: {
      loadPath: `${process.env.NEXT_PUBLIC_SERVER_API_URL}${process.env.NEXT_PUBLIC_SERVER_API_PORT}/i18n?ns={{ns}}&lng={{lng}}`
    },
  },

  use: [I18NextHttpBackend],

  serializeConfig: false,

  ns: ['common', 'navbarLinks', 'newsData', 'privacyPolicy', 'promotionsPage', 'termsAndConditions']
};
