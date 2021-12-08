import {CURRENCY_SELECTOR_TYPE} from "../actions/types";

// CURRENCY_SELECTOR_TYPE


const initialState = {
  isCurrencySelectorChooseCurrency: true,
}

function currencySelectorTypeReducer (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case CURRENCY_SELECTOR_TYPE:
      return {
        ...state,
        isCurrencySelectorChooseCurrency: payload
      }
    default :
      return state;
  }
}

export default currencySelectorTypeReducer;