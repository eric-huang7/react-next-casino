import {
  GET_GAMES
} from "../actions/types";

const initialState = {
  games: null,
  loading: true,
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
    default:
      return state
  }
}

export default gameReducer;