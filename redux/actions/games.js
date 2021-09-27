import axios from "axios";

import {
  GET_GAMES
} from "./types";

import {games_url} from '../url/url';

export const getGames = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.get(games_url, config)
    console.log('response data from games endpoint=====', res)
    dispatch({
      type: GET_GAMES,
      payload: res.data
    })
  } catch (err) {
    console.log('error in get games endpoint', err)
  }
}
