import {freeGame_url, payGame_url} from "../url/url";
import {DELETE_GAME_LINK, PLAY_FREE_GAME, PLAY_GAME} from "./types";

import axios from "axios";
axios.defaults.withCredentials = true;

export const freeGame = (gameData) => async dispatch => {
  const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const body = JSON.stringify(gameData.data);

  try {
    const res = await axios.post(freeGame_url, body, config);
    dispatch({
      type: PLAY_FREE_GAME,
      payload: {
        data: {...res.data},
        gameName: gameData.gameName
      }
    })

  } catch (e) {

  }
}

export const playPayGame = (gameData) => async dispatch => {
  const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const body = JSON.stringify(gameData.data);

  try {
    const res = await axios.post(payGame_url, body, config);
    dispatch({
      type: PLAY_GAME,
      payload: {
        data: {...res.data},
        gameName: gameData.gameName
      }
    })

  } catch (e) {

  }
}

export const deleteGameLink = () => {
  return {
    type: DELETE_GAME_LINK,
    payload: null,
  }
}