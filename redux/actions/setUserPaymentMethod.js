import { SET_USER_PAYMENT_METHOD} from "./types";

export const setUserPaymentMethod = (userPaymentMethod) => {
  return {
    type: SET_USER_PAYMENT_METHOD,
    payload: userPaymentMethod,
  }
}