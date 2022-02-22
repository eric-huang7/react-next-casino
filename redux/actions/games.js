import axios from "axios";

import {
  GET_GAMES,
  GET_JACKPOT_GAMES,
  GET_LATEST_GAMES,
  GET_NEW_GAMES,
  GET_TABLE_GAMES, GET_TOP_GAMES,
  SET_GAMES,
  SET_SEARCH_GAMES
} from "./types";

import {games_url, jackpotGames_url, latest_games, newGames_url, tableGames_url, topGames_url} from '../url/url';

axios.defaults.withCredentials = true;

export const setGames = (gamesData) => {
  return {
    type: SET_GAMES,
    payload: gamesData,
  }
}
export const setSearchGames = (gamesData) => {
  return {
    type: SET_SEARCH_GAMES,
    payload: gamesData,
  }
}

export const getGames = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.get(games_url, config)

    dispatch({
      type: GET_GAMES,
      payload: res.data
    })
  } catch (err) {

  }
}
export const getNewGames = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.get(newGames_url, config)

    dispatch({
      type: GET_NEW_GAMES,
      payload: res.data
    })
  } catch (err) {

  }
}

export const getJackpotGames = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.get(jackpotGames_url, config)

    dispatch({
      type: GET_JACKPOT_GAMES,
      payload: res.data
    })
  } catch (err) {

  }
}

export const getTableGames = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.get(tableGames_url, config)

    dispatch({
      type: GET_TABLE_GAMES,
      payload: res.data
    })
  } catch (err) {

  }
}

export const getLatestGames = (userId) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.get(latest_games(userId), config);

    dispatch({
      type: GET_LATEST_GAMES,
      payload: res.data
    })
  } catch (err) {

  }
}

export const getTopGames = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.get(topGames_url, config)

    dispatch({
      type: GET_TOP_GAMES,
      payload: res.data
    })
  } catch (err) {

  }
}
