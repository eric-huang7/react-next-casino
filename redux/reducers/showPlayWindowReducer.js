import {MINIMIZE_GAME_WINDOW, SHOW_GAME_WINDOW} from "../actions/types";


const initialState = {
  isShowPlayWindow: false,
  isMinimizePlayWindow: false
}

function showPlayWindowReducer(state = initialState, action) {
  const {type, payload} = action;


  switch (type) {
    case SHOW_GAME_WINDOW:
      return {
        ...state,
        isShowPlayWindow: payload
      }
    case MINIMIZE_GAME_WINDOW:
      return {
        ...state,
        isMinimizePlayWindow: payload
      }
    default:
      return state
  }
}

export default showPlayWindowReducer;