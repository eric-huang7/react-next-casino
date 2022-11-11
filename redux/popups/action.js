import {createAction} from "redux-actions";

export const closeAll = createAction("CLOSE_All");
export const showExitIntentPopup = createAction("SHOW_EXIT_INTENT_POPUP");
export const showTwoFaPopup = createAction("SHOW_TWO_FA_WINDOW");
export const showEmailValidationSuccessPopup = createAction("SHOW_EMAIL_VALIDATION_SUCCESS");
export const showEmailValidationErrorPopup = createAction("SHOW_EMAIL_VALIDATION_ERROR");
export const showForgotPasswordPopup = createAction("SHOW_FORGOT_PASSWORD");
export const showChangePasswordPopup = createAction("SHOW_CHANGE_PASSWORD_WINDOW");
export const showMobilePaymentsStepper = createAction("SHOW_MOBILE_PAYMENTS_STEPPER");
export const showMobileCryptoPayments = createAction("SHOW_MOBILE_CRYPTO_PAYMENTS");
export const errorPopupActivateAction = createAction("ACTIVATE_ERROR_POPUP");
export const errorPopupDeactivate = createAction("DEACTIVATE_ERROR_POPUP");
export const messagePopupActivateAction = createAction("ACTIVATE_MESSAGE_POPUP");
export const messagePopupDeactivate = createAction("DEACTIVATE_MESSAGE_POPUP");
export const showCreditCardModal = createAction("SHOW_CREDIT_CARD_MODAL");
export const showCryptoModal = createAction("SHOW_CRYPTO_MODAL");
export const showTournaments = createAction("SHOW_TOURNAMENTS");
export const showTournamentsDetails = createAction("SHOW_TOURNAMENTS_DETAILS");
export const showPlaySafe = createAction("SHOW_PLAY_SAFE");
export const showSearchModal = createAction("SHOW_SEARCH_MODAL");
export const showPaymentCurrencySwitcher = createAction("SHOW_PAYMENT_CURRENCY_SWITCHER");
export const showDepositModal = createAction("SHOW_DEPOSIT_MODAL");
export const setStepDepositModal = createAction("SET_DEPOSIT_STEP");
export const backButtonShouldDo = createAction("BACK_BUTTON_SHOULD_DO");
export const showManageSubscriptions = createAction("SHOW_MANAGE_SUBSCRIPTIONS");
export const showNotifications = createAction("SHOW_NOTIFICATIONS_POPUP");
export const showRedeemModal = createAction("SHOW_REDEEM_POPUP");
export const showTournamentAwardModal = createAction("SHOW_TOURNAMENT_AWARD_POPUP");
export const showTermsModal = createAction("SHOW_TERMS_POPUP");

export const errorPopupActivate = (errorData) => dispatch => {
  setTimeout(() => {
    dispatch(errorPopupDeactivate());
  }, 5000);

  dispatch (errorPopupActivateAction(errorData));
}

export const messagePopupActivate = (messageData, messageColor = '#d7a33c') => {
  return messagePopupActivateAction({data: messageData, color: messageColor});
}
