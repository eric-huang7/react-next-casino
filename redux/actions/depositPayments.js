import axios from "axios";
import {
  ANNUL_CRYPTO_PAYMENT, ERROR_CREDIT_CARD_PAYMENT,
  ERROR_CRYPTO_PAYMENT,
  POST_CREDIT_CARD_PAYMENT,
  POST_CRYPTO_PAYMENT
} from "./types";
import {login_url, post_credit_card_deposit_payment, post_deposit_payment} from "../url/url";


// POST_CRYPTO_PAYMENT
// POST_CREDIT_CARD_PAYMENT
// post_deposit_payment

axios.defaults.withCredentials = true;

export const postCryptoPayment = (paymentData, paymentMethod) => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify(paymentData);

  try {
    const res = await axios.post(post_deposit_payment, body, config);
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

  }
}

export const postCreditCardPayment = (paymentData, paymentMethod) => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify(paymentData);

  try {
    const res = await axios.post(post_credit_card_deposit_payment, body, config);

    dispatch({
      type: POST_CREDIT_CARD_PAYMENT,
      payload: {
        data: res.data,
        paymentMethod: paymentMethod,
      }
    })
  } catch (e) {
    dispatch({
      type: ERROR_CREDIT_CARD_PAYMENT,
      payload: e.response
    })

  }
}

export const annulDeposit = () => {
  return {
    type: ANNUL_CRYPTO_PAYMENT,
    payload: false,
  }
}