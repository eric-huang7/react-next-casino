import {HIDE_REGISTER, SHOW_REGISTER} from "./types";

export const showRegister = (isShow) => {
  return {
    type: SHOW_REGISTER,
    payload: isShow
  };
}
export const hideRegister = (isShow) => {
  return {
    type: HIDE_REGISTER,
    payload: isShow
  }
}