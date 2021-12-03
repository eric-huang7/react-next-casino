import axios from "axios";
import {
  ANNUL_CRYPTO_PAYMENT,
  ERROR_CRYPTO_PAYMENT,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  POST_CREDIT_CARD_PAYMENT,
  POST_CRYPTO_PAYMENT
} from "./types";
import {login_url, post_deposit_payment} from "../url/url";


// POST_CRYPTO_PAYMENT
// POST_CREDIT_CARD_PAYMENT
// post_deposit_payment

axios.defaults.withCredentials = true;

export const postCryptoPayment = (paymentData, paymentMethod) => async dispatch => {

  console.log(paymentData, 'ACTION paymentDATA >>>>>>>>>>>>>>>')
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify(paymentData);

  try {
    const res = await axios.post(post_deposit_payment, body, config);
    console.log(res, 'deposit crypto RESPONSE');
    dispatch({
      type: POST_CRYPTO_PAYMENT,
      payload: {
        data: res.data,
        paymentMethod: paymentMethod,
      }
    })
  } catch (e) {
    dispatch({
      type: ERROR_CRYPTO_PAYMENT,
      payload: e.response
    })
    console.log('some error POST crypto deposit =>>', e.response)
  }
}

export const postCreditCardPayment = (paymentData, paymentMethod) => async dispatch => {

  console.log(paymentData, 'ACTION credit card paymentDATA >>>>>>>>>>>>>>>')
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify(paymentData);

  try {
    const res = await axios.post(post_deposit_payment, body, config);
    console.log(res, 'deposit crypto RESPONSE');
    dispatch({
      type: POST_CRYPTO_PAYMENT,
      payload: {
        data: res.data,
        paymentMethod: paymentMethod,
      }
    })
  } catch (e) {
    dispatch({
      type: ERROR_CRYPTO_PAYMENT,
      payload: e.response
    })
    console.log('some error POST crypto deposit =>>', e.response)
  }
}

export const annulDeposit = () => {
  return {
    type: ANNUL_CRYPTO_PAYMENT,
    payload: false,
  }
}