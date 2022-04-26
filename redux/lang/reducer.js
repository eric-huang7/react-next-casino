import {handleActions} from "redux-actions";
import {setLangAction} from "./action";

const initialState = {
  activeLang: "en",
  languages: [
    {name: "eng", lang: "en", language: "English", icon: "/assets/icons/roundFlags/United-Kingdom.webp"},
    {name: "rus", lang: "ru", language: "Русский", icon: "/assets/icons/roundFlags/Russia.webp"},
    {name: "chn", lang: "cn", language: "中国人", icon: "/assets/icons/roundFlags/China.webp"},
    {name: "jpn", lang: "ja", language: "日本", icon: "/assets/icons/roundFlags/Japan.webp"},
    {name: "prt", lang: "pt", language: "Português", icon: "/assets/icons/roundFlags/Portugal.webp"},
    {name: "esp", lang: "es", language: "Español", icon: "/assets/icons/roundFlags/Spain.webp"},
    {name: "deu", lang: "de", language: "Deutsch", icon: "/assets/icons/roundFlags/Germany.webp"},
    {name: "fra", lang: "fr", language: "Français", icon: "/assets/icons/roundFlags/France.webp"},
    {name: "swe", lang: "sv", language: "Svenska", icon: "/assets/icons/roundFlags/Sweden.webp"},
    {name: "ita", lang: "it", language: "Italiano", icon: "/assets/icons/roundFlags/Italy.webp"},
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
