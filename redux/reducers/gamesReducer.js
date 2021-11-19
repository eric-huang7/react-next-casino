import {
  GET_GAMES, GET_JACKPOT_GAMES, GET_LATEST_GAMES, GET_NEW_GAMES, GET_TABLE_GAMES, SET_GAMES
} from "../actions/types";



const initialState = {
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
  latestGames: null,
  loadingLatestGames: true,

}

function gameReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_GAMES:
      return {
        ...state,
        games: {...payload},
        loading: false
      }
    case GET_NEW_GAMES:
      return {
        ...state,
        newGames: {...payload},
        loadingNewGames: false,
      }
    case GET_JACKPOT_GAMES:
      return {
        ...state,
        jackpotGames: {...payload},
        loadingJackpotGames: false,
      }
    case GET_TABLE_GAMES:
      return {
        ...state,
        tableGames: {...payload},
        loadingTableGames: false,
      }
    case GET_LATEST_GAMES:
      return {
        ...state,
        latestGames: {...payload},
        loadingLatestGames: false,
      }
    case SET_GAMES:
      return {
        ...state,
        allGames: [...payload],
        allGamesLoading: false,
      }
    default:
      return state
  }
}

export default gameReducer;