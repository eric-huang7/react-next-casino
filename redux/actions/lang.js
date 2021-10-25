import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeLang: "en",
  languages: [
    {name: "eng", lang: "en", language: "English"},
    {name: "rus", lang: "ru", language: "Русский"},
    {name: "chn", lang: "cn", language: "中国人"},
    {name: "jpn", lang: "ja", language: "日本"},
    {name: "prt", lang: "pt", language: "Português"},
    {name: "esp", lang: "es", language: "Español"},
    {name: "deu", lang: "de", language: "Deutsch"},
    {name: "fra", lang: "fr", language: "Français"},
    {name: "swe", lang: "sv", language: "Svenska"},
    {name: "ita", lang: "it", language: "Italiano"},
  ]
};

const langSlice = createSlice({
  name: 'Lang',
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.activeLang = action.payload;
    },
    setLangArr: (state, action) => {
      state.languages = action.payload;
    },
  },
})

export const { setLang } = langSlice.actions;
export default langSlice.reducer;