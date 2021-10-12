import {PLAY_FREE_GAME, PLAY_GAME} from "../actions/types";


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
      }
    case PLAY_GAME:
      return {
        ...state,
        startGame: { ...payload }
      }
    default:
      return state
  }
}

export default playGameReducer;