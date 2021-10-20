import { SHOW_CURRENCY_SWITCHER } from "../actions/types";

const initialState = {
  isShowCurrencySwitcher: false,
}

function showPopupsReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SHOW_CURRENCY_SWITCHER :
      return {
        ...state,
        isShowCurrencySwitcher: payload,
      }

    default:
      return state
  }
}

export default showPopupsReducer;