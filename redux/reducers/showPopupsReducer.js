import {
  ACTIVATE_ERROR_POPUP,
  BACK_BUTTON_SHOULD_DO, CLOSE_All, DEACTIVATE_ERROR_POPUP, SHOW_CREDIT_CARD_MODAL, SHOW_CRYPTO_MODAL,
  SHOW_CURRENCY_SWITCHER,
  SHOW_DEPOSIT_MODAL,
  SHOW_MANAGE_SUBSCRIPTIONS, SHOW_MOBILE_PAYMENTS_STEPPER,
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
  isShowCreditCardModal: false,
  isShowCryptoModal: false,
  isShowMobilePaymentsStepper: false,
  actionForBackButtonPayments: false,
  showErrorPopup: false,
  errorPopupData: null,
}

function showPopupsReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case ACTIVATE_ERROR_POPUP :
      return {
        ...state,
        showErrorPopup: true,
        errorPopupData: payload,
      }
    case DEACTIVATE_ERROR_POPUP :
      return {
        ...state,
        showErrorPopup: false,
        errorPopupData: payload,
      }
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
        isShowCreditCardModal: false,
        isShowCryptoModal: false,
      }
    case SHOW_CREDIT_CARD_MODAL:
      return {
        ...state,
        isShowCreditCardModal: payload
      }
    case SHOW_MOBILE_PAYMENTS_STEPPER:
      return {
        ...state,
        isShowMobilePaymentsStepper: payload,
      }
    case SHOW_CRYPTO_MODAL:
      return {
        ...state,
        isShowCryptoModal: payload
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