import {
  BACK_BUTTON_SHOULD_DO, CLOSE_All,
  SHOW_CURRENCY_SWITCHER,
  SHOW_DEPOSIT_MODAL,
  SHOW_MANAGE_SUBSCRIPTIONS,
  SHOW_NOTIFICATIONS_POPUP, SHOW_PLAY_SAFE, SHOW_SEARCH_MODAL, SHOW_TOURNAMENTS, SHOW_TOURNAMENTS_DETAILS
} from "../actions/types";

const initialState = {
  isShowCurrencySwitcher: false,
  isShowDepositModal: false,
  actionForBackButton: false,
  isShowManageSubscriptions: false,
  isShowNotifications: false,
  isShowSearchModal: false,
  isShowPlaySafe: false,
  isShowTournaments: false,
  isShowTournamentsDetails: false,
}

function showPopupsReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SHOW_CURRENCY_SWITCHER :
      return {
        ...state,
        isShowCurrencySwitcher: payload,
      }
    case CLOSE_All :
      return {
        ...state,
        isShowCurrencySwitcher: false,
        isShowDepositModal: false,
        actionForBackButton: false,
        isShowManageSubscriptions: false,
        isShowNotifications: false,
        isShowSearchModal: false,
        isShowPlaySafe: false,
        isShowTournaments: false,
        isShowTournamentsDetails: false,
      }
    case SHOW_TOURNAMENTS:
      return {
        ...state,
        isShowTournaments: payload
      }
    case SHOW_TOURNAMENTS_DETAILS:
      return {
        ...state,
        isShowTournamentsDetails: payload
      }
    case SHOW_DEPOSIT_MODAL :
      return {
        ...state,
        isShowDepositModal: payload,
      }

    case BACK_BUTTON_SHOULD_DO:
      return {
        ...state,
        actionForBackButton: payload,
      }
    case SHOW_MANAGE_SUBSCRIPTIONS:
      return {
        ...state,
        isShowManageSubscriptions: payload,
      }
    case SHOW_NOTIFICATIONS_POPUP:
      return {
        ...state,
        isShowNotifications: payload,
      }
    case SHOW_SEARCH_MODAL:
      return {
        ...state,
        isShowSearchModal: payload
      }
    case SHOW_PLAY_SAFE:
      return {
        ...state,
        isShowPlaySafe: payload
      }

    default:
      return state
  }
}

export default showPopupsReducer;