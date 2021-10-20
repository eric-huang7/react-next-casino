import { SHOW_MOBILE_MENU } from "./types";

export const showMobileMenu = (isShow) => {
  return {
    type: SHOW_MOBILE_MENU,
    payload: isShow
  };
}