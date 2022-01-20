import {SET_ERROR_WRONG_PAYMENT_METHOD, SET_USER_PAYMENT_METHOD} from "../actions/types";

const initialState = {
  paymentError: '',
  paymentMethodData: null,
}

function setUserPaymentMethodReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_USER_PAYMENT_METHOD :
      return {
        ...state,
        paymentMethodData: payload
      }
    case SET_ERROR_WRONG_PAYMENT_METHOD:
      return {
        ...state,
        paymentError: payload
      }
    default :
      return state
  }
}

export default setUserPaymentMethodReducer;