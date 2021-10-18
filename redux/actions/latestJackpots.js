import axios from "axios";
import {jackpots_url} from "../url/url";
import {GET_JACKPOTS} from "./types";

export const getJackpots = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.get(jackpots_url, config)
    console.log('response data from jackpots endpoint=====', res)
    dispatch({
      type: GET_JACKPOTS,
      payload: res.data
    })
  } catch (err) {
    console.log('error in get jackpots endpoint', err.response)
  }
}