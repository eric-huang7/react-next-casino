import {SET_USER_CURRENCY_SWITCHER} from "../actions/types";

const initialState = {
  currencyId: 1,
  currencyAbbreviation: "BTC",
  currencySymbol: '',
  type: 4,
  isDepositEnabled: 1,
  isWithdrawEnabled: 0
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
        type: payload.currencyType,
        isDepositEnabled: payload.isDepositEnabled,
        isWithdrawEnabled: payload.isWithdrawEnabled
      }
    default :
      return state
  }
}

export default setUserCurrencyReducer;