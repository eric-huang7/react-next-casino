import {
  GET_CRYPTO_CURRENCY,
  GET_CURRENCY, GET_CURRENCY_JURISDICTIONS,
  GET_FIAT_CURRENCY,
  GET_POPULAR_CURRENCY,
  GET_STABLE_CURRENCY
} from "../actions/types";



const initialState = {
  currency: null,
  loading: true,
  popular_currency: null,
  loading_popular_currency: true,
  crypto_currency: null,
  loading_crypto_currency: true,
  stable_currency: null,
  loading_stable_currency: true,
  fiat_currency: null,
  loading_fiat_currency: true,
  currency_jurisdiction: null,
  loading_currency_jurisdiction: true
}

function getCurrency(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_CURRENCY:
      return {
        ...state,
        currency: {...payload},
        loading: false
      }
    case GET_POPULAR_CURRENCY:
      return {
        ...state,
        popular_currency: {...payload},
        loading_popular_currency: false,
      }
    case GET_CRYPTO_CURRENCY:
      return {
        ...state,
        crypto_currency: {...payload},
        loading_crypto_currency: false,
      }
    case GET_STABLE_CURRENCY:
      return {
        ...state,
        stable_currency: {...payload},
        loading_stable_currency: false,
      }
    case GET_FIAT_CURRENCY:
      return {
        ...state,
        fiat_currency: {...payload},
        loading_fiat_currency: false
      }
    case GET_CURRENCY_JURISDICTIONS:
      return {
        ...state,
        currency_jurisdiction: {...payload},
        loading_currency_jurisdiction: false
      }

    default:
      return state
  }
}

export default getCurrency;