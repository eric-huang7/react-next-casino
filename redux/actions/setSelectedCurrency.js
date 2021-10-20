import {SET_USER_CURRENCY_SWITCHER} from "./types";

export const setUserCurrencySwitcher = (userCurrency) => {
  return {
   type: SET_USER_CURRENCY_SWITCHER,
   payload: userCurrency,
  }
}