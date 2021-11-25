import axios from "axios";
import {get_tournaments_url} from "../url/url";
import {GET_TOURNAMENTS} from "./types";

export const getTournaments = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.get(get_tournaments_url, config)
    console.log('response data from tournaments endpoint=====', res)
    dispatch({
      type: GET_TOURNAMENTS,
      payload: res.data
    })
  } catch (err) {
    console.log('error in get tournaments endpoint', err)
  }
}