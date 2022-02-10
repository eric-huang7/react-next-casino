import {DELETE_GAME_LINK, PLAY_FREE_GAME, PLAY_GAME} from "../actions/types";


const initialState = {
  loading: true,
  freeGame: null,
  startGame: null,
  gameName: '...'
}

function playGameReducer (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PLAY_FREE_GAME:
      return {
        ...state,
        freeGame: {...payload.data},
        loading: false,
        gameName: payload.gameName
      }
    case PLAY_GAME:
      return {
        ...state,
        startGame: {...payload.data},
        loading: false,
        gameName: payload.gameName
      }
    case DELETE_GAME_LINK:
      return {
        ...state,
        freeGame: null,
        startGame: null,
        loading: true,
        gameName: '...'
      }
    default:
      return state
  }
}

export default playGameReducer;