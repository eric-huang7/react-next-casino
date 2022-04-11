import { createAction } from "redux-actions";
import Connect from "../../helpers/connect";
import {
  crypto_currency_url,
  currency_url,
  fiat_currency_url,
  popular_currency_url,
  stable_currency_url
} from "../url/url";

export const getCryptoCurrency = createAction("GET_CRYPTO_CURRENCY");
export const getCurrencyAction = createAction("GET_CURRENCY");
export const getCurrencyJurisdictions = createAction("GET_CURRENCY_JURISDICTIONS");
export const getFiatCurrency = createAction("GET_FIAT_CURRENCY");
export const getPopularCurrency = createAction("GET_POPULAR_CURRENCY");
export const gerStableCurrency = createAction("GET_STABLE_CURRENCY");

import {siteID} from "../../envs/envsForFetching";

const config = {
  params: {
    site_id: siteID
  }
}

export const getCurrency = () => dispatch =>
  Connect.get(currency_url, config, (status, data) => dispatch(getCurrencyAction(data)));

export const getCurrencyJurisdiction = () => dispatch => {
  const config = {
    params: {
      site_id: siteID,
      types: 3,
      isDepositEnabled: 1,
      quantity: 1
    }
  }

  Connect.get(currency_url, config, (status, data) => dispatch(getCurrencyJurisdictions(data)));
}

export const get_popular_currency = () => dispatch =>
  Connect.get(popular_currency_url, config, (status, data) => dispatch(getPopularCurrency(data)));

export const get_crypto_currency = () => dispatch =>
  Connect.get(crypto_currency_url, config, (status, data) => dispatch(getCryptoCurrency(data)));

export const get_stable_currency = () => dispatch =>
  Connect.get(stable_currency_url, config, (status, data) => dispatch(gerStableCurrency(data)));

export const get_fiat_currency = () => dispatch =>
  Connect.get(fiat_currency_url, config, (status, data) => dispatch(getFiatCurrency(data)));
