import { SHOW_CURRENCY_SWITCHER } from "./types";

export const showCurrencySwitcher = (isShow) => {
  return {
    type: SHOW_CURRENCY_SWITCHER,
    payload: isShow
  };
}