import {
  ACTIVATE_ERROR_POPUP,
  BACK_BUTTON_SHOULD_DO, CLOSE_All, DEACTIVATE_ERROR_POPUP, SET_DEPOSIT_STEP,
  SHOW_CREDIT_CARD_MODAL,
  SHOW_CRYPTO_MODAL,
  SHOW_CURRENCY_SWITCHER,
  SHOW_DEPOSIT_MODAL, SHOW_EXIT_INTENT_POPUP,
  SHOW_MANAGE_SUBSCRIPTIONS,
  SHOW_MOBILE_PAYMENTS_STEPPER,
  SHOW_NOTIFICATIONS_POPUP, SHOW_PAYMENT_CURRENCY_SWITCHER,
  SHOW_PLAY_SAFE,
  SHOW_SEARCH_MODAL,
  SHOW_TOURNAMENTS,
  SHOW_TOURNAMENTS_DETAILS,
} from "./types";
import {log} from "qrcode/lib/core/galois-field";


export const closeAll = (isShow) => {
  return {
    type: CLOSE_All,
    payload: isShow
  }
}

export const showExitIntentPopup = (isShow) => {
  return {
    type: SHOW_EXIT_INTENT_POPUP,
    payload: isShow
  }
}

export const showMobilePaymentsStepper = (isShow) => {
  return {
    type: SHOW_MOBILE_PAYMENTS_STEPPER,
    payload: isShow
  }
}

export const errorPopupActivate = (errorData) => async dispatch => {
  setTimeout(() => {
    dispatch(errorPopupDeactivate());
  }, 5000);

  dispatch ({
    type: ACTIVATE_ERROR_POPUP,
    payload: errorData
  })
}
export const errorPopupDeactivate = () => {
  return {
    type: DEACTIVATE_ERROR_POPUP,
    payload: null
  }
}

export const showCreditCardModal = (isShow) => {
  return {
    type: SHOW_CREDIT_CARD_MODAL,
    payload: isShow
  }
}
export const showCryptoModal = (isShow) => {
  return {
    type: SHOW_CRYPTO_MODAL,
    payload: isShow
  }
}

export const showTournaments = (isShow) => {
  return {
    type: SHOW_TOURNAMENTS,
    payload: isShow
  }
}
export const showTournamentsDetails = (isShow) => {
  return {
    type: SHOW_TOURNAMENTS_DETAILS,
    payload: isShow
  }
}

export const showPlaySafe = (isShow) => {
  return {
    type: SHOW_PLAY_SAFE,
    payload: isShow
  }
}

export const showSearchModal = (isShow) => {
  return {
    type: SHOW_SEARCH_MODAL,
    payload: isShow
  }
}

export const showCurrencySwitcher = (isShow) => {
  return {
    type: SHOW_CURRENCY_SWITCHER,
    payload: isShow
  };
}

export const showPaymentCurrencySwitcher = (isShow) => {
  return {
    type: SHOW_PAYMENT_CURRENCY_SWITCHER,
    payload: isShow
  };
}

export const showDepositModal = (isShow) => {
  return {
    type: SHOW_DEPOSIT_MODAL,
    payload: isShow
  };
}
export const setStepDepositModal = (step) => {
  return {
    type: SET_DEPOSIT_STEP,
    payload: step
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
    type: SHOW_MANAGE_SUBSCRIPTIONS,
    payload: isShow,
  }
}

export const showNotifications = (isShow) => {
  return {
    type: SHOW_NOTIFICATIONS_POPUP,
    payload: isShow,
  }
}