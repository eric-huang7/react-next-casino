import {format, formatDistance} from "date-fns";
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

export const birthdayFormatter = (time) => {
  let firstPart = time.split('.')[0];
  let secondPart = time.split('.')[1].slice(0,3);

  let birthdayDate = new Date(Number(firstPart + secondPart));

  let day = birthdayDate.getDate();
  let month = birthdayDate.getMonth();
  let year = birthdayDate.getFullYear();

  return {
    day: day,
    month: month,
    year: year
  }
}


export const dateFormatter = (time, locale) => {
  let firstPart = time.split('.')[0];
  let secondPart = time.split('.')[1].slice(0,3);

  if (locale === 'ru') {
    let res = format(new Date(Number(firstPart + secondPart)), 'dd MMMM yyyy, HH:mm:ss', {locale: locales[locale]});

    return res;

  } else {

    let res = format(new Date(Number(firstPart + secondPart)), 'LLLL dd, yyyy HH:mm:ss', {locale: locales[locale]});

    return res;
  }

}