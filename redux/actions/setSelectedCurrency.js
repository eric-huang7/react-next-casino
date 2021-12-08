import {CURRENCY_SELECTOR_TYPE, SET_USER_CURRENCY_SWITCHER} from "./types";

export const setUserCurrencySwitcher = (userCurrency) => {
  return {
   type: SET_USER_CURRENCY_SWITCHER,
   payload: userCurrency,
  }
}

export const setCurrencySelectorType = (selectorType) => {

  return {
    type: CURRENCY_SELECTOR_TYPE,
    payload: selectorType
  }
}