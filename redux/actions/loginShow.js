import {SHOW_LOGIN, HIDE_LOGIN} from "./types";

export const showLogin = (isShow) => {
  return {
    type: SHOW_LOGIN,
    payload: isShow
  };
}
export const hideLogin = (isShow) => {
  return {
    type: HIDE_LOGIN,
    payload: isShow
  }
}