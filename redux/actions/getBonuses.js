import axios from "axios";
import { activeBonuses_url} from "../url/url";
import {GET_ACTIVE_BONUSES, ANNUL_ACTIVE_BONUSES} from "./types";
import {siteID} from "../../envs/envsForFetching";

axios.defaults.withCredentials = true;

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
    console.log(res, 'bonuses fetch result')
  } catch (e) {
    console.log('SOME ERROR IN GET ACTIVE BONUSES', e.response);
  }
}

export const annulActiveBonuses = () => {
  return {
    type: ANNUL_ACTIVE_BONUSES,
    payload: null,
  }
}