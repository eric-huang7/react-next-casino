import {BACK_BUTTON_SHOULD_DO, SHOW_CURRENCY_SWITCHER, SHOW_DEPOSIT_MODAL, SHOW_MANAGE_SUBSCRIPTIONS} from "./types";

export const showCurrencySwitcher = (isShow) => {
  return {
    type: SHOW_CURRENCY_SWITCHER,
    payload: isShow
  };
}

export const showDepositModal = (isShow) => {
  return {
    type: SHOW_DEPOSIT_MODAL,
    payload: isShow
  };
}

export const backButtonShouldDo = (backButtonAction) => {
  return {
    type: BACK_BUTTON_SHOULD_DO,
    payload: backButtonAction,
  }
}

export const showManageSubscriptions = (isShow) => {
  return {
    type : SHOW_MANAGE_SUBSCRIPTIONS,
    payload: isShow,
  }
}