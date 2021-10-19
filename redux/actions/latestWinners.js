import axios from "axios";

import {GET_LATEST_WINNERS, GET_WINNERS} from "./types";
import {winners_latest_url, winners_url} from '../url/url';

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
    console.log('error in get winners endpoint', err)
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
    console.log('response data from latest winners endpoint=====', res)
    dispatch({
      type: GET_LATEST_WINNERS,
      payload: res.data
    })
  } catch (err) {
    console.log('error in get latest winners endpoint', err)
  }
}
