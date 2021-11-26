import {
  BACK_BUTTON_SHOULD_DO,
  SHOW_CURRENCY_SWITCHER,
  SHOW_DEPOSIT_MODAL,
  SHOW_MANAGE_SUBSCRIPTIONS,
  SHOW_NOTIFICATIONS_POPUP, SHOW_PLAY_SAFE,
  SHOW_SEARCH_MODAL, SHOW_TOURNAMENTS, SHOW_TOURNAMENTS_DETAILS
} from "./types";

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

export const showNotifications = (isShow) => {
  return {
    type : SHOW_NOTIFICATIONS_POPUP,
    payload: isShow,
  }
}