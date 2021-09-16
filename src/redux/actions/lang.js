import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeLang : "en",
  languages: [
    {name: "eng", lang: "en"},
    {name: "rus", lang: "ru"},
    {name: "ukr", lang: "ua"},
  ]
}

const langSlice = createSlice({
  name: "Lang",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.activeLang = action.payload;
    },
  },
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;