import axios from "axios";
import { activeBonuses_url} from "../url/url";
import {GET_ACTIVE_BONUSES, ANNUL_ACTIVE_BONUSES, GET_ALL_BONUSES} from "./types";
import {siteID} from "../../envs/envsForFetching";

axios.defaults.withCredentials = true;

export const getAllBonuses = () => async dispatch => {
  const config = {
    withCredentials: true,
    params: {
      site_id: siteID,
    }
  }

  try {
    const res = await axios.get(activeBonuses_url, config);
    dispatch({
      type: GET_ALL_BONUSES,
      payload: res.data
    })
  } catch (e) {

  }
}

export const getActiveBonuses = (currencyId) => async dispatch => {
  const config = {
    withCredentials: true,
    params: {
      site_id: siteID,
      currency_id : currencyId
    }
  }

  try {
    const res = await axios.get(activeBonuses_url, config);
    dispatch({
      type: GET_ACTIVE_BONUSES,
      payload: res.data
    })
  } catch (e) {

  }
}

export const annulActiveBonuses = () => {
  return {
    type: ANNUL_ACTIVE_BONUSES,
    payload: null,
  }
}