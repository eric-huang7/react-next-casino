import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";
import ru from "i18n-iso-countries/langs/ru.json";
import it from "i18n-iso-countries/langs/it.json";
import cn from "i18n-iso-countries/langs/zh.json";
import ja from "i18n-iso-countries/langs/ja.json";
import pt from "i18n-iso-countries/langs/pt.json";
import es from "i18n-iso-countries/langs/es.json";
import de from "i18n-iso-countries/langs/de.json";
import fr from "i18n-iso-countries/langs/fr.json";
import sv from "i18n-iso-countries/langs/sv.json";

const locales = {
  ru: ru,
  it: it,
  en: en,
  cn: cn,
  ja: ja,
  pt: pt,
  es: es,
  de: de,
  fr: fr,
  sv: sv
}


export const countryISOCreator = (countryISOCode, locale) => {
  countries.registerLocale(locales[locale]);

  let countryAbbr = countries.numericToAlpha2(countryISOCode);
  let countryName = countries.getName(countryISOCode, locale, {select: "official"})

  return {
    countryCode: countryAbbr,
    countryName: countryName
  }
}