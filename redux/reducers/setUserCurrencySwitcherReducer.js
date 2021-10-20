import {SET_USER_CURRENCY_SWITCHER} from "../actions/types";

const initialState = {
  currencyId: 5693,
  currencyAbbreviation: "USD",
  currencySymbol: '$',
}

function setUserCurrencyReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_USER_CURRENCY_SWITCHER :
      return {
        ...state,
        currencyId: payload.currencyId,
        currencyAbbreviation: payload.currencyAbbreviation,
        currencySymbol: payload.currencySymbol,
      }
    default :
      return state
  }
}

export default setUserCurrencyReducer;