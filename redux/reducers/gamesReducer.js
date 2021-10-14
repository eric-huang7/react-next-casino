import {
  GET_GAMES, GET_JACKPOT_GAMES, GET_NEW_GAMES, GET_TABLE_GAMES
} from "../actions/types";



const initialState = {
  games: null,
  loading: true,
  newGames: null,
  loadingNewGames: true,
  jackpotGames: null,
  loadingJackpotGames: true,
  tableGames: null,
  loadingTableGames: true,

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
    default:
      return state
  }
}

export default gameReducer;