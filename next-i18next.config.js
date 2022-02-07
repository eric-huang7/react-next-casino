const I18NextHttpBackend = require('i18next-http-backend')

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    defaultNS: [],
    localeDetection: true,

    backend: {
      loadPath: `http://tst-si-site.slotsidol.com:3030/locale_demo.php?lng={{lng}}&ns={{ns}}`
    },
  },

  use: [I18NextHttpBackend],

  serializeConfig: false,

  ns: ['common', 'navbarLinks', 'newsData', 'privacyPolicy', 'promotionsPage', 'termsAndConditions']
};