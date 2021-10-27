import {SET_ERROR_WRONG_PAYMENT_METHOD, SET_USER_PAYMENT_METHOD} from "./types";

export const setUserPaymentMethod = (userPaymentMethod) => {
  return {
    type: SET_USER_PAYMENT_METHOD,
    payload: userPaymentMethod,
  }
}

export const setErrorUserPaymentMethod = (userPaymentMethod) => {
  return {
    type: SET_ERROR_WRONG_PAYMENT_METHOD,
    payload: userPaymentMethod,
  }
}