import axios from "axios";
import {
  crypto_currency_url,
  currency_url,
  fiat_currency_url,
  popular_currency_url,
  stable_currency_url
} from "../url/url";
import {
  GET_CRYPTO_CURRENCY,
  GET_CURRENCY,
  GET_CURRENCY_JURISDICTIONS,
  GET_FIAT_CURRENCY,
  GET_POPULAR_CURRENCY,
  GET_STABLE_CURRENCY
} from "./types";
import {siteID} from "../../envs/envsForFetching";
axios.defaults.withCredentials = true;

export const getCurrency = () => async dispatch => {
  const config = {
    params: {
      site_id: siteID
    }
  }

  try {
    const res = await axios.get(currency_url, config);
    dispatch({
      type: GET_CURRENCY,
      payload: res.data
    })
  } catch (e) {

  }
}

export const getCurrencyJurisdiction = () => async dispatch => {
  const config = {
    params: {
      site_id: siteID,
      types: 3,
      isDepositEnabled: 1,
      quantity: 1
    }
  }

  try {
    const res = await axios.get(currency_url, config);
    dispatch({
      type: GET_CURRENCY_JURISDICTIONS,
      payload: res.data
    })
  } catch (e) {

  }
}

export const get_popular_currency = () => async dispatch => {
  const config = {
    params: {
      site_id: siteID
    }
  }

  try {
    const res = await axios.get(popular_currency_url, config);
    dispatch({
      type: GET_POPULAR_CURRENCY,
      payload: res.data
    })
  } catch (e) {

  }
}

export const get_crypto_currency = () => async dispatch => {
  const config = {
    params: {
      site_id: siteID
    }
  }

  try {
    const res = await axios.get(crypto_currency_url, config);
    dispatch({
      type: GET_CRYPTO_CURRENCY,
      payload: res.data
    })
  } catch (e) {

  }
}

export const get_stable_currency = () => async dispatch => {
  const config = {
    params: {
      site_id: siteID
    }
  }

  try {
    const res = await axios.get(stable_currency_url, config);
    dispatch({
      type: GET_STABLE_CURRENCY,
      payload: res.data
    })
  } catch (e) {

  }
}

export const get_fiat_currency = () => async dispatch => {
  const config = {
    params: {
      site_id: siteID
    }
  }

  try {
    const res = await axios.get(fiat_currency_url, config);

    dispatch({
      type: GET_FIAT_CURRENCY,
      payload: res.data
    })
  } catch (e) {

  }
}