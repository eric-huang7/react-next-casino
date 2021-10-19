import {HIDE_MOBILE_MENU, SHOW_MOBILE_MENU} from "../actions/types";

const initialState = {
  isShow: false,
}

function showMobileMenuReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SHOW_MOBILE_MENU:
      return {
        ...state,
        isShow: payload,
      }
    case HIDE_MOBILE_MENU:
      return {
        ...state,
        isShow: payload,
      }
    default:
      return state
  }
}

export default showMobileMenuReducer;