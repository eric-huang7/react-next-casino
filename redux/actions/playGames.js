import {freeGame_url, payGame_url} from "../url/url";
import {PLAY_FREE_GAME, PLAY_GAME} from "./types";

import axios from "axios";
axios.defaults.withCredentials = true;

export const freeGame = (game_provider_id, game_id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const body = JSON.stringify({ game_provider_id, game_id });

  try {
    const res = await axios.post(freeGame_url, body, config);
    dispatch({
      type: PLAY_FREE_GAME,
      payload: res.data
    })

  } catch (e) {
    console.log(e.response.data, 'SOME ERROR WHEN GET FREE GAME')
  }
}

export const playPayGame = (user_id, game_provider_id, game_id, balance_id, is_bonus, bonus_id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const body = JSON.stringify({ user_id, game_provider_id, game_id, balance_id, is_bonus, bonus_id });

  try {
    const res = await axios.post(payGame_url, body, config);
    dispatch({
      type: PLAY_GAME,
      payload: res.data
    })

  } catch (e) {
    console.log(e.response.data, 'SOME ERROR WHEN GET PAYED GAME')
  }
}