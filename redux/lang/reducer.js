import {handleActions} from "redux-actions";
import {setLangAction} from "./action";

const initialState = {
  activeLang: "en",
  languages: [
    {name: "eng", lang: "en", language: "English", icon: "/assets/icons/flags/svg/uk.svg"},
    {name: "chn", lang: "cn", language: "中国人", icon: "/assets/icons/flags/svg/china.svg"},
    {name: "cht", lang: "ct", language: "繁體中文", icon: "/assets/icons/flags/svg/china.svg"},
    {name: "kor", lang: "kr", language: "Korean", icon: "/assets/icons/flags/svg/south_korea.svg"},
    {name: "rus", lang: "ru", language: "Русский", icon: "/assets/icons/flags/svg/russia.svg"},
    {name: "esp", lang: "es", language: "Español", icon: "/assets/icons/flags/svg/spain.svg"},
    {name: "jpn", lang: "ja", language: "日本", icon: "/assets/icons/flags/svg/japan.svg"},
    {name: "prt", lang: "pt", language: "Português", icon: "/assets/icons/flags/svg/portugal.svg"},
    {name: "fra", lang: "fr", language: "Français", icon: "/assets/icons/flags/svg/france.svg"},
    {name: "vie", lang: "vi", language: "Tiếng Việt", icon: "/assets/icons/flags/svg/vietnam.svg"},
    {name: "nld", lang: "nl", language: "Dutch", icon: "/assets/icons/flags/svg/netherlands.svg"},
    {name: "ita", lang: "it", language: "Italiano", icon: "/assets/icons/flags/svg/italy.svg"},
    {name: "idn", lang: "id", language: "Indonesian", icon: "/assets/icons/flags/svg/indonesia.svg"},
    {name: "deu", lang: "de", language: "Deutsch", icon: "/assets/icons/flags/svg/germany.svg"},
    {name: "tur", lang: "tr", language: "Turkish", icon: "/assets/icons/flags/svg/turkey.svg"},
    {name: "pol", lang: "pl", language: "Polish", icon: "/assets/icons/flags/svg/poland.svg"},
    {name: "ukr", lang: "ua", language: "Ukrainian", icon: "/assets/icons/flags/svg/ukraine.svg"},
  ]
};
const handlers = {
  [setLangAction]: (state, {payload}) => {
    const languages = [...state.languages];
    const activeLang = payload || 'en';

    languages.sort((item) => {
      let res = item.lang === activeLang ? -1 : 1
      return res;
    })
    console.log('languages', payload, languages)
    return {
      ...state,
      activeLang,
      languages: [...languages]
    }
  },
}

export default handleActions(handlers, initialState);
