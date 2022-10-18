import {handleActions} from "redux-actions";
import {
  getGamesAction,
  getJackpotGamesAction,
  getLatestGamesAction,
  getNewGamesAction,
  getTableGamesAction, getTopGamesAction, setGames, setLoaded, setSearch, setSearchGames, setTotalRows
} from "./action";

const initialState = {
  searchGames: [],
  searchGamesLoading: true,
  isSearchEmpty: true,
  allGames: [],
  allGamesLoading: true,
  gamalles: null,
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
  totalRows: 0,
  isLoaded: false,
  isSearch: false,
  setFilter: {}
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
      isSearchEmpty: payload && payload?.length > 0 ? false : true,
      isLoaded: payload && payload?.length > 0 ? state.isLoaded : true
    }
  },
  [setTotalRows]: (state, {payload}) => {
    return {
      ...state,
      totalRow: payload
    }
  },
  [setLoaded]: (state, {payload}) => {
    return {
      ...state,
      isLoaded: payload
    }
  },
  [setSearch]: (state, {payload}) => {
    return {
      ...state,
      isSearch: payload
    }
  },
  [setFilter]: (state, {payload}) => {
    return {
      ...state,
      filter: payload
    }
  }
}

export default handleActions(handlers, initialState);
