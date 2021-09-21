import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeLang: "en",
  languages: [
    {name: "eng", lang: "en"},
    {name: "rus", lang: "ru"},
    {name: "chn", lang: "cn"},
    {name: "jpn", lang: "jp"},
    {name: "prt", lang: "pt"},
    {name: "esp", lang: "es"},
    {name: "deu", lang: "de"},
    {name: "fra", lang: "fr"},
    {name: "swe", lang: "se"},
    {name: "ita", lang: "it"},
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