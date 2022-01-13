import {HIDE_REGISTER, SHOW_REGISTER} from "../actions/types";

const initialState = {
  isShow: false,
  hideForCurrency: false,
}

function showRegisterReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SHOW_REGISTER:
      return {
        ...state,
        isShow: payload,
      }
    case HIDE_REGISTER:
      return {
        ...state,
        hideForCurrency: payload,
      }
    default:
      return state
  }
}

export default showRegisterReducer;