import {handleActions} from "redux-actions";
import {
  annulCryptoPayment,
  errorCreditCardPayment,
  errorCryptoPayment,
  postCreditCardPaymentAction,
  postCryptoPaymentAction
} from "./action";

const initialState = {
  isCryptoPaymentDataLoading: true,
  cryptoPaymentData: null,
  isCryptoPaymentError: null,
  isCreditPaymentDataLoading: true,
  creditPaymentData: null,
  isCreditPaymentError: null
};

const handlers = {
  [postCryptoPaymentAction]: (state, {payload}) => {
    return {
      ...state,
      isCryptoPaymentDataLoading: false,
      cryptoPaymentData: {...payload},
      isCryptoPaymentError: null
    }
  },
  [errorCryptoPayment]: (state, {payload}) => {
    return {
      ...state,
      isCryptoPaymentDataLoading: false,
      isCryptoPaymentError: {...payload},
      cryptoPaymentData: null
    }
  },
  [postCreditCardPaymentAction]: (state, {payload}) => {
    return {
      ...state,
      isCreditPaymentDataLoading: false,
      creditPaymentData: {...payload},
      isCreditPaymentError: null
    }
  },
  [errorCreditCardPayment]: (state, {payload}) => {
    return {
      ...state,
      isCreditPaymentDataLoading: false,
      creditPaymentData: null,
      isCreditPaymentError: {...payload}
    }
  },
  [annulCryptoPayment]: (state, {payload}) => {
    return {
      ...state,
      isCryptoPaymentDataLoading: true,
      cryptoPaymentData: null,
      isCryptoPaymentError: null,
      isCreditPaymentDataLoading: true,
      creditPaymentData: null,
      isCreditPaymentError: null
    }
  },
}

export default handleActions(handlers, initialState);
