import {DELETE_GAME_LINK, PLAY_FREE_GAME, PLAY_GAME} from "../actions/types";


const initialState = {
  loading: true,
  freeGame: null,
  startGame: null
}

function playGameReducer (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PLAY_FREE_GAME:
      return {
        ...state,
        freeGame: {...payload},
        loading: false
      }
    case PLAY_GAME:
      return {
        ...state,
        startGame: {...payload},
        loading: false
      }
    case DELETE_GAME_LINK:
      return {
        ...state,
        freeGame: null,
        startGame: null,
        loading: true,
      }
    default:
      return state
  }
}

export default playGameReducer;