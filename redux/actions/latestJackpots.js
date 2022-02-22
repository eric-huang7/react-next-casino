import axios from "axios";
import {jackpots_url} from "../url/url";
import {GET_JACKPOTS} from "./types";

axios.defaults.withCredentials = true;

export const getJackpots = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.get(jackpots_url, config)

    dispatch({
      type: GET_JACKPOTS,
      payload: res.data
    })
  } catch (err) {

  }
}