import {SET_ERROR_WRONG_PAYMENT_METHOD, SET_USER_PAYMENT_METHOD} from "../actions/types";

const initialState = {
  paymentId: null,
  paymentName: null,
  paymentImg: null,
  paymentError: '',
}

function setUserPaymentMethodReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_USER_PAYMENT_METHOD :
      return {
        ...state,
        paymentId: payload.paymentId,
        paymentName: payload.paymentName,
        paymentImg: payload.paymentImg,
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