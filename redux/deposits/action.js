import { createAction } from "redux-actions";
import {post_credit_card_deposit_payment, post_deposit_payment} from "../url/url";
import Connect from "../../helpers/connect";

export const annulCryptoPayment = createAction("ANNUL_CRYPTO_PAYMENT");
export const errorCreditCardPayment = createAction("ERROR_CREDIT_CARD_PAYMENT");
export const errorCryptoPayment = createAction("ERROR_CRYPTO_PAYMENT");
export const postCreditCardPaymentAction = createAction("POST_CREDIT_CARD_PAYMENT");
export const postCryptoPaymentAction = createAction("POST_CRYPTO_PAYMENT");

export const postCryptoPayment = (paymentData, paymentMethod) => dispatch =>
  Connect.post(post_deposit_payment, JSON.stringify(paymentData), config, (status, data) =>
    dispatch(postCryptoPaymentAction({
      data,
      paymentMethod: paymentMethod
    }))
  ).catch(() => dispatch(errorCryptoPayment(e.response)))

export const postCreditCardPayment = (paymentData, paymentMethod) => dispatch =>
  Connect.post(post_credit_card_deposit_payment, JSON.stringify(paymentData), config, config, (status, data) =>
    dispatch(postCreditCardPaymentAction({
      data,
      paymentMethod: paymentMethod,
    }))
  ).catch(() => dispatch(errorCreditCardPayment(e.response)))

export const annulDeposit = () => annulCryptoPayment(false)
