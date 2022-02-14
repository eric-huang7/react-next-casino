const I18NextHttpBackend = require('i18next-http-backend')

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    defaultNS: [],
    localeDetection: true,

    backend: {
      loadPath: `http://t-gpb.slotsidol.com:7000/i18n?ns={{ns}}&lng={{lng}}`
    },
  },

  use: [I18NextHttpBackend],

  serializeConfig: false,

  ns: ['common', 'navbarLinks', 'newsData', 'privacyPolicy', 'promotionsPage', 'termsAndConditions']
};
