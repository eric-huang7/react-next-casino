import {handleActions} from "redux-actions";
import {
  getGamesAction,
  getJackpotGamesAction,
  getLatestGamesAction,
  getNewGamesAction,
  getTableGamesAction, getTopGamesAction, setGames, setSearchGames
} from "./action";

const initialState = {
  searchGames: [],
  searchGamesLoading: true,
  isSearchEmpty: true,
  allGames: [],
  allGamesLoading: true,
  games: null,
  loading: true,
  newGames: null,
  loadingNewGames: true,
  jackpotGames: null,
  loadingJackpotGames: true,
  tableGames: null,
  loadingTableGames: true,
  latestGames: [],
  loadingLatestGames: true,
  topGames: null,
  loadingTopGames: true,

}

const handlers = {
  [getGamesAction]: (state, {payload}) => {
    return {
      ...state,
      games: {...payload},
      loading: false
    }
  },
  [getJackpotGamesAction]: (state, {payload}) => {
    return {
      ...state,
      jackpotGames: {...payload},
      loadingJackpotGames: false,
    }
  },
  [getNewGamesAction]: (state, {payload}) => {
    return {
      ...state,
      newGames: {...payload},
      loadingNewGames: false,
    }
  },
  [getTableGamesAction]: (state, {payload}) => {
    return {
      ...state,
      tableGames: {...payload},
      loadingTableGames: false,
    }
  },
  [getLatestGamesAction]: (state, {payload}) => {
    return {
      ...state,
      latestGames: {...payload},
      loadingLatestGames: false,
    }
  },
  [getTopGamesAction]: (state, {payload}) => {
    return {
      ...state,
      topGames: {...payload},
      loadingTopGames: false,
    }
  },
  [setGames]: (state, {payload}) => {
    return {
      ...state,
      allGames: [...payload],
      allGamesLoading: false,
    }
  },
  [setSearchGames]: (state, {payload}) => {
    return {
      ...state,
      searchGames: payload,
      searchGamesLoading: false,
      isSearchEmpty: payload.length > 0 ? false : true,
    }
  },
}

export default handleActions(handlers, initialState);
