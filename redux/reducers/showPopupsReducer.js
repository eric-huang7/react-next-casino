import {
  ACTIVATE_ERROR_POPUP,
  BACK_BUTTON_SHOULD_DO,
  CLOSE_All,
  DEACTIVATE_ERROR_POPUP, SET_DEPOSIT_STEP,
  SHOW_CREDIT_CARD_MODAL,
  SHOW_CRYPTO_MODAL,
  SHOW_CURRENCY_SWITCHER,
  SHOW_DEPOSIT_MODAL,
  SHOW_EXIT_INTENT_POPUP, SHOW_FORGOT_PASSWORD,
  SHOW_MANAGE_SUBSCRIPTIONS, SHOW_MOBILE_CRYPTO_PAYMENTS,
  SHOW_MOBILE_PAYMENTS_STEPPER,
  SHOW_NOTIFICATIONS_POPUP,
  SHOW_PAYMENT_CURRENCY_SWITCHER,
  SHOW_PLAY_SAFE,
  SHOW_SEARCH_MODAL,
  SHOW_TOURNAMENTS,
  SHOW_TOURNAMENTS_DETAILS
} from "../actions/types";
import {showMobileCryptoPayments} from "../actions/showPopups";

const initialState = {
  isShowCurrencySwitcher: false,
  isShowPaymentCurrencySwitcher: false,
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
  isShowExitIntentPopup: true,
  depositModalStep: 1,
  isShowMobileCryptoPayments: false,
  isShowForgotPassword: false,
}

function showPopupsReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SHOW_FORGOT_PASSWORD :
      return {
        ...state,
        isShowForgotPassword: payload,
      }

    case ACTIVATE_ERROR_POPUP :
      return {
        ...state,
        showErrorPopup: true,
        errorPopupData: payload,
      }
    case SET_DEPOSIT_STEP :
      return {
        ...state,
        depositModalStep: payload,
      }
    case DEACTIVATE_ERROR_POPUP :
      return {
        ...state,
        showErrorPopup: false,
        errorPopupData: payload,
      }
    case SHOW_EXIT_INTENT_POPUP :
      return {
        ...state,
        isShowExitIntentPopup: payload,
      }
    case SHOW_CURRENCY_SWITCHER :
      return {
        ...state,
        isShowCurrencySwitcher: payload,
      }
    case SHOW_PAYMENT_CURRENCY_SWITCHER :
      return {
        ...state,
        isShowPaymentCurrencySwitcher: payload,
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
        isShowMobilePaymentsStepper: false,
        actionForBackButtonPayments: false,
        showErrorPopup: false,
        errorPopupData: null,
        depositModalStep: 1,
        isShowPaymentCurrencySwitcher: false,
        isShowMobileCryptoPayments: false,
        isShowForgotPassword: false,
      }
    case SHOW_MOBILE_CRYPTO_PAYMENTS:
      return {
        ...state,
        isShowMobileCryptoPayments: payload
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