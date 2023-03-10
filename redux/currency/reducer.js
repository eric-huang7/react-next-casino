import {handleActions} from "redux-actions";
import {
  gerStableCurrency,
  getCryptoCurrency,
  getCurrencyAction,
  getCurrencyJurisdictions,
  getFiatCurrency,
  getPopularCurrency
} from "./action";

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

const handlers = {
  [getCurrencyAction]: (state, {payload}) => {
    return {
      ...state,
      currency: {...payload},
      loading: false
    }
  },
  [getPopularCurrency]: (state, {payload}) => {
    return {
      ...state,
      popular_currency: {...payload},
      loading_popular_currency: false,
    }
  },
  [getCryptoCurrency]: (state, {payload}) => {
    return {
      ...state,
      crypto_currency: {...payload},
      loading_crypto_currency: false,
    }
  },
  [gerStableCurrency]: (state, {payload}) => {
    return {
      ...state,
      stable_currency: {...payload},
      loading_stable_currency: false,
    }
  },
  [getFiatCurrency]: (state, {payload}) => {
    return {
      ...state,
      fiat_currency: {...payload},
      loading_fiat_currency: false
    }
  },
  [getCurrencyJurisdictions]: (state, {payload}) => {
    return {
      ...state,
      currency_jurisdiction: {...payload},
      loading_currency_jurisdiction: false
    }
  },
}

export default handleActions(handlers, initialState);
