import {SHOW_GAME_WINDOW} from "../actions/types";


const initialState = {
  isShowPlayWindow: false
}

function showPlayWindowReducer(state = initialState, action) {
  const {type, payload} = action;


  switch (type) {
    case SHOW_GAME_WINDOW:
      return {
        ...state,
        isShowPlayWindow: payload
      }
    default:
      return state
  }
}

export default showPlayWindowReducer;