import axios from "axios";

import {
  GET_GAMES,
  GET_JACKPOT_GAMES,
  GET_LATEST_GAMES,
  GET_NEW_GAMES,
  GET_TABLE_GAMES,
  SET_GAMES,
  SET_SEARCH_GAMES
} from "./types";

import {games_url, jackpotGames_url, latest_games, newGames_url, tableGames_url} from '../url/url';

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
    console.log('response data from games endpoint=====', res)
    dispatch({
      type: GET_GAMES,
      payload: res.data
    })
  } catch (err) {
    console.log('error in get games endpoint', err)
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
    console.log('response data from games endpoint=====', res)
    dispatch({
      type: GET_NEW_GAMES,
      payload: res.data
    })
  } catch (err) {
    console.log('error in GET_NEW_GAMES endpoint', err)
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
    console.log('response data from games endpoint=====', res)
    dispatch({
      type: GET_JACKPOT_GAMES,
      payload: res.data
    })
  } catch (err) {
    console.log('error in GET_JACKPOT_GAMES endpoint', err)
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
    console.log('response data from games endpoint=====', res)
    dispatch({
      type: GET_TABLE_GAMES,
      payload: res.data
    })
  } catch (err) {
    console.log('error in GET_TABLE_GAMES endpoint', err)
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
    console.log('response data from latest games endpoint=====', res)
    dispatch({
      type: GET_LATEST_GAMES,
      payload: res.data
    })
  } catch (err) {
    console.log('error in get latest games endpoint', err)
  }
}
