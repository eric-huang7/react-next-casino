import axios from "axios";
import {LOGIN_FAIL, LOGIN_SUCCESS, POST_CREDIT_CARD_PAYMENT, POST_CRYPTO_PAYMENT} from "./types";
import {login_url, post_deposit_payment} from "../url/url";


// POST_CRYPTO_PAYMENT
// POST_CREDIT_CARD_PAYMENT
// post_deposit_payment

axios.defaults.withCredentials = true;

export const postCryptoPayment = (paymentData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify(paymentData);

  try {
    const res = await axios.post(post_deposit_payment, body, config);
    console.log(res, 'LOGIN RESPONSE');
    dispatch({
      type: POST_CRYPTO_PAYMENT,
      payload: res.data
    })
  } catch (e) {
    console.log('some error POST crypto deposit =>>', e.response)
  }
}