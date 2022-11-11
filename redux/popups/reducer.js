import {handleActions} from "redux-actions";
import {
  backButtonShouldDo,
  closeAll, errorPopupActivateAction, errorPopupDeactivate, messagePopupActivateAction,
  messagePopupDeactivate,
  setStepDepositModal, showChangePasswordPopup,
  showCreditCardModal,
  showCryptoModal,
  showDepositModal, showEmailValidationErrorPopup, showEmailValidationSuccessPopup,
  showExitIntentPopup, showForgotPasswordPopup,
  showManageSubscriptions,
  showMobileCryptoPayments,
  showMobilePaymentsStepper,
  showNotifications,
  showPaymentCurrencySwitcher,
  showPlaySafe, showRedeemModal,
  showSearchModal,
  showTournamentAwardModal,
  showTournaments,
  showTournamentsDetails,
  showTwoFaPopup,
  showTermsModal
} from "./action";

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
  showMessagePopup: false,
  messagePopupData: null,
  isShowExitIntentPopup: true,
  depositModalStep: 1,
  isShowMobileCryptoPayments: false,
  isShowForgotPassword: false,
  isShowChangePassword: false,
  isShowEmailValidationSuccess: false,
  isShowEmailValidationError: false,
  isShowTwoFaPopup: false,
  isShowRedeemModal: false,
  isTournamentAwardModal: false,
  isShowTermsModal: false
}

const handlers = {
  [showForgotPasswordPopup]: (state, {payload}) => {
    return {
      ...state,
      isShowForgotPassword: payload,
    }
  },
  [showTwoFaPopup]: (state, {payload}) => {
    return {
      ...state,
      isShowTwoFaPopup: payload,
    }
  },
  [showEmailValidationSuccessPopup]: (state, {payload}) => {
    return {
      ...state,
      isShowEmailValidationSuccess: payload,
    }
  },
  [showEmailValidationErrorPopup]: (state, {payload}) => {
    return {
      ...state,
      isShowEmailValidationError: payload,
    }
  },
  [showChangePasswordPopup]: (state, {payload}) => {
    return {
      ...state,
      isShowChangePassword: payload,
    }
  },
  [errorPopupActivateAction]: (state, {payload}) => {
    return {
      ...state,
      showErrorPopup: true,
      errorPopupData: payload,
    }
  },
  [errorPopupDeactivate]: (state, {payload}) => {
    return {
      ...state,
      showErrorPopup: false,
      errorPopupData: payload,
    }
  },
  [messagePopupActivateAction]: (state, {payload}) => {
    return {
      ...state,
      showMessagePopup: true,
      messagePopupData: payload,
    }
  },
  [messagePopupDeactivate]: (state, {payload}) => {
    return {
      ...state,
      showMessagePopup: false,
      messagePopupData: null,
    }
  },
  [setStepDepositModal]: (state, {payload}) => {
    return {
      ...state,
      depositModalStep: payload,
    }
  },
  [showExitIntentPopup]: (state, {payload}) => {
    return {
      ...state,
      isShowExitIntentPopup: payload,
    }
  },
  [showPaymentCurrencySwitcher]: (state, {payload}) => {
    return {
      ...state,
      isShowPaymentCurrencySwitcher: payload,
    }
  },
  [closeAll]: (state, {payload}) => {
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
      showMessagePopup: false,
      messagePopupData: null,
      depositModalStep: 1,
      isShowPaymentCurrencySwitcher: false,
      isShowMobileCryptoPayments: false,
      isShowForgotPassword: false,
      isShowChangePassword: false,
      isShowEmailValidationSuccess: false,
      isShowEmailValidationError: false,
      isShowTwoFaPopup: false,
      isShowRedeemModal: false,
      isTournamentAwardModal: false,
      isShowTermsModal: false
    }
  },
  [showMobileCryptoPayments]: (state, {payload}) => {
    return {
      ...state,
      isShowMobileCryptoPayments: payload
    }
  },
  [showCreditCardModal]: (state, {payload}) => {
    return {
      ...state,
      isShowCreditCardModal: payload
    }
  },
  [showMobilePaymentsStepper]: (state, {payload}) => {
    return {
      ...state,
      isShowMobilePaymentsStepper: payload,
    }
  },
  [showCryptoModal]: (state, {payload}) => {
    return {
      ...state,
      isShowCryptoModal: payload
    }
  },
  [showTournaments]: (state, {payload}) => {
    return {
      ...state,
      isShowTournaments: payload
    }
  },
  [showTournamentsDetails]: (state, {payload}) => {
    return {
      ...state,
      isShowTournamentsDetails: payload
    }
  },
  [showDepositModal]: (state, {payload}) => {
    return {
      ...state,
      isShowDepositModal: payload,
    }
  },
  [backButtonShouldDo]: (state, {payload}) => {
    return {
      ...state,
      actionForBackButton: payload,
    }
  },
  [showManageSubscriptions]: (state, {payload}) => {
    return {
      ...state,
      isShowManageSubscriptions: payload,
    }
  },
  [showNotifications]: (state, {payload}) => {
    return {
      ...state,
      isShowNotifications: payload,
    }
  },
  [showSearchModal]: (state, {payload}) => {
    return {
      ...state,
      isShowSearchModal: payload
    }
  },
  [showPlaySafe]: (state, {payload}) => {
    return {
      ...state,
      isShowPlaySafe: payload
    }
  },
  [showRedeemModal]: (state, {payload}) => {
    return {
      ...state,
      isShowRedeemModal: payload,
    }
  },
  [showTournamentAwardModal]: (state, {payload}) => {
    return {
      ...state,
      isTournamentAwardModal: payload,
    }
  },
  [showTermsModal]: (state, {payload}) => {
    return {
      ...state,
      isShowTermsModal: payload,
    }
  },
}

export default handleActions(handlers, initialState);
