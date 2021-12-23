import axios from "axios";
import { activeBonuses_url} from "../url/url";
import {GET_ACTIVE_BONUSES, ANNUL_ACTIVE_BONUSES} from "./types";

axios.defaults.withCredentials = true;

export const getActiveBonuses = () => async dispatch => {
  const config = {
    withCredentials: true,
    params: {
      site_id: 1
    }
  }

  try {
    const res = await axios.get(activeBonuses_url, config);
    dispatch({
      type: GET_ACTIVE_BONUSES,
      payload: res.data
    })
  } catch (e) {
    console.log('SOME ERROR IN GET ACTIVE BONUSES', e);
  }
}

export const annulActiveBonuses = () => {
  return {
    type: ANNUL_ACTIVE_BONUSES,
    payload: null,
  }
}