import {
  ANNUL_CRYPTO_PAYMENT, ERROR_CREDIT_CARD_PAYMENT,
  ERROR_CRYPTO_PAYMENT,
  POST_CREDIT_CARD_PAYMENT,
  POST_CRYPTO_PAYMENT
} from "../actions/types";


const initialState = {
  isCryptoPaymentDataLoading: true,
  cryptoPaymentData: null,
  isCryptoPaymentError: null,
  isCreditPaymentDataLoading: true,
  creditPaymentData: null,
  isCreditPaymentError: null
};

function depositReducer (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case POST_CRYPTO_PAYMENT:
      return {
        ...state,
        isCryptoPaymentDataLoading: false,
        cryptoPaymentData: {...payload},
        isCryptoPaymentError: null
      }
    case ERROR_CRYPTO_PAYMENT:
      return {
        ...state,
        isCryptoPaymentDataLoading: false,
        isCryptoPaymentError: {...payload},
        cryptoPaymentData: null
      }
    case POST_CREDIT_CARD_PAYMENT:
      return {
        ...state,
        isCreditPaymentDataLoading: false,
        creditPaymentData: {...payload},
        isCreditPaymentError: null
      }
    case ERROR_CREDIT_CARD_PAYMENT:
      return {
        ...state,
        isCreditPaymentDataLoading: false,
        creditPaymentData: null,
        isCreditPaymentError: {...payload}
      }
    case ANNUL_CRYPTO_PAYMENT:
      return {
        ...state,
        isCryptoPaymentDataLoading: true,
        cryptoPaymentData: null,
        isCryptoPaymentError: null,
        isCreditPaymentDataLoading: true,
        creditPaymentData: null,
        isCreditPaymentError: null
      }

    default:
      return state;
  }

}

export default depositReducer;