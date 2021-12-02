import {
  ANNUL_CRYPTO_PAYMENT,
  ERROR_CRYPTO_PAYMENT,
  POST_CREDIT_CARD_PAYMENT,
  POST_CRYPTO_PAYMENT
} from "../actions/types";


const initialState = {
  isCryptoPaymentDataLoading: true,
  cryptoPaymentData: null,
  isCryptoPaymentError: null
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
        isCryptoPaymentError: {...payload}
      }
    case ANNUL_CRYPTO_PAYMENT:
      return {
        ...state,
        isCryptoPaymentDataLoading: true,
        cryptoPaymentData: null,
        isCryptoPaymentError: null
      }

    default:
      return state;
  }

}

export default depositReducer;