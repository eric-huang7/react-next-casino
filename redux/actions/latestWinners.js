import axios from "axios";

import {GET_LATEST_WINNERS, GET_WINNERS} from "./types";
import {winners_latest_url, winners_url} from '../url/url';

axios.defaults.withCredentials = true;

export const getWinners = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.get(winners_url, config)

    dispatch({
      type: GET_WINNERS,
      payload: res.data
    })
  } catch (err) {

  }
}
export const getLatestWinners = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.get(winners_latest_url, config)

    dispatch({
      type: GET_LATEST_WINNERS,
      payload: res.data
    })
  } catch (err) {

  }
}
