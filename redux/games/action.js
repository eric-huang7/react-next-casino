import { createAction } from "redux-actions";
import Connect from "../../helpers/connect";

import {
  games_url,
  jackpotGames_url,
  latest_games,
  newGames_url,
  tableGames_url,
  topGames_url
} from '../url/url';

export const getGamesAction = createAction("GET_GAMES");
export const getJackpotGamesAction = createAction("GET_JACKPOT_GAMES");
export const getLatestGamesAction = createAction("GET_LATEST_GAMES");
export const getNewGamesAction = createAction("GET_NEW_GAMES");
export const getTableGamesAction = createAction("GET_TABLE_GAMES");
export const getTopGamesAction = createAction("GET_TOP_GAMES");
export const setGames = createAction("SET_GAMES");
export const setSearchGames = createAction("SET_SEARCH_GAMES");

export const getGames = () => dispatch =>
  Connect.get(games_url, {}, (status, data) => dispatch(getGamesAction(data)));

export const getNewGames = () => dispatch =>
  Connect.get(newGames_url, {}, (status, data) => dispatch(getNewGamesAction(data)));

export const getJackpotGames = () => dispatch =>
  Connect.get(jackpotGames_url, {}, (status, data) => dispatch(getJackpotGamesAction(data)));

export const getTableGames = () => dispatch =>
  Connect.get(tableGames_url, {}, (status, data) => dispatch(getTableGamesAction(data)));

export const getLatestGames = (userId) => dispatch =>
  Connect.get(latest_games(userId), {}, (status, data) => dispatch(getLatestGamesAction(data)));

export const getTopGames = () => dispatch =>
  Connect.get(topGames_url, {}, (status, data) => dispatch(getTopGamesAction(data)));
