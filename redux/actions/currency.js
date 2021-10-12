import axios from "axios";
import { currency_url} from "../url/url";
import {GET_CURRENCY} from "./types";


export const getCurrency = () => async dispatch => {
  const config = {
    params: {
      site_id: 1
    }
  }

  try {
    const res = await axios.get(currency_url, config);
    dispatch({
      type: GET_CURRENCY,
      payload: res.data
    })
  } catch (e) {
    console.log('SOME ERROR IN GET CURRENCY', e);
  }

}