import { createAction } from "redux-actions";

export const setLangAction = createAction("SET_LANG");

export const setLang = ({lang, setCookie}) => dispatch => {
  let today = new Date();
  let nextYear = new Date();
  nextYear.setFullYear(today.getFullYear() + 1);
  if (setCookie && typeof setCookie === 'function') {
    setCookie('language', lang, {path: '/', expires: nextYear});
  }
  dispatch(setLangAction(lang))
}
