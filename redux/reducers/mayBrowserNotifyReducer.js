import { MAY_BROWSER_NOTIFY } from "../actions/types";



const initialState = {
  isShow: false,
}

function mayBrowserNotifyReducer (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case MAY_BROWSER_NOTIFY:
      return {
        ...state,
        isShow: payload,
      }
    default:
      return state
  }
}

export default mayBrowserNotifyReducer;