import {SHOW_LOGIN, HIDE_LOGIN} from "../actions/types";

const initialState = {
  isShow: false,
}

function showRegisterReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SHOW_LOGIN:
      return {
        ...state,
        isShow: payload,
      }
    case HIDE_LOGIN:
      return {
        ...state,
        isShow: payload,
      }
    default:
      return state
  }
}

export default showRegisterReducer;