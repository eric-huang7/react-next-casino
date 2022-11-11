import {handleActions} from "redux-actions";
import {setLangAction} from "./action";
import {languages} from "../../envs/languages";

const initialState = {
  activeLang: "en",
  languages: languages
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
