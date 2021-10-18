import axios from "axios";

import {GET_WINNERS} from "./types";
import {winners_url} from '../url/url';

export const getWinners = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.get(winners_url, config)
    console.log('response data from winners endpoint=====', res)
    dispatch({
      type: GET_WINNERS,
      payload: res.data
    })
  } catch (err) {
    console.log('error in get winners endpoint', err.response)
  }
}
