import {formatDuration, intervalToDuration, format} from "date-fns";
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

export const dateTimer = (time, locale) => {
  let res = '';

  try {
    let duration = intervalToDuration({
      start: new Date(time * 1000),
      end: new Date(),
    });

    let timer = formatDuration(duration, {
      delimiter: ' ',
      locale: locales[locale],

    });
    timer.split(' ').map((el) => {
      if (Number(el)) {
        return el;
      } else {
        return el.slice(0, 1);
      }
    }).map((el, ind) => {
      if (ind % 2 === 0) {
        return res += ' ' + el;
      } else {
        return res += el;
      }
    })
  } catch (e) {
    return res = null
  }


  return res;
}

export function delay(fn, ms) {
  let timer = 0
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(fn.bind(this, ...args), ms || 0)
  }
}
