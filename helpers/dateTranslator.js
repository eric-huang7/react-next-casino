import {formatDistance} from "date-fns";
import {ru, it, enUS, zhCN, ja, pt, es, de, fr, sv} from "date-fns/locale";

const locales = {
  ru: ru,
  it: it,
  en: enUS,
  cn: zhCN,
  ja: ja,
  pt: pt,
  es: es,
  de: de,
  fr: fr,
  sv: sv
}

export const dateTranslator = (time, locale) => {

  return formatDistance(new Date(Math.trunc(Number(time) * 1000)), new Date(), {addSuffix: false, locale: locales[locale]});
}