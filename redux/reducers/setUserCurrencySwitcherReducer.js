import {SET_USER_CURRENCY_SWITCHER} from "../actions/types";
// userCurrencyData.id
// userCurrencyData.abbreviation
// userCurrencyData.symbol
// userCurrencyData.type
// userCurrencyData.isDepositEnabled
// userCurrencyData.isWithdrawEnabled


// const initialState1 = {
//   currencyId: 1,
//   currencyAbbreviation: "BTC",
//   currencySymbol: '',
//   type: 4,userCurrency.type
//   isDepositEnabled: 1,
//   isWithdrawEnabled: 0,
// }

// abbreviation: "BTC",
// base: "",
// coinmarketcap_id: 1,
// decimal: 8,
// depositMax: "0.000000000000",
// depositMin: "0.000001000000",
// icon_name: "",
// id: 1,
// isDepositEnabled: 1,
// isWithdrawEnabled: 1,
// loyalty_ratio_deposits: "0.000000",
// loyalty_ratio_net_loss: "0.000000",
// loyalty_ratio_risks: "0.000000",
// memo_req: 0,
// name: "Bitcoin",
// rank: 1,
// symbol: "",
// type: 4,
// withdrawMax: "10.000000000000",
// withdrawMin: "0.000200000000",

const initialState = {
  userCurrencyData : {
    abbreviation: "BTC",
    base: "",
    coinmarketcap_id: 1,
    decimal: 8,
    depositMax: "0.000000000000",
    depositMin: "0.000001000000",
    icon_name: "",
    id: 1,
    isDepositEnabled: 1,
    isWithdrawEnabled: 1,
    loyalty_ratio_deposits: "0.000000",
    loyalty_ratio_net_loss: "0.000000",
    loyalty_ratio_risks: "0.000000",
    memo_req: 0,
    name: "Bitcoin",
    rank: 1,
    symbol: "",
    type: 4,
    withdrawMax: "10.000000000000",
    withdrawMin: "0.000200000000",
  },
}


function setUserCurrencyReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_USER_CURRENCY_SWITCHER :
      return {
        ...state,
        userCurrencyData : {...payload}
        // currencyId: payload.currencyId,
        // currencyAbbreviation: payload.currencyAbbreviation,
        // currencySymbol: payload.currencySymbol,
        // type: payload.currencyType,
        // isDepositEnabled: payload.isDepositEnabled,
        // isWithdrawEnabled: payload.isWithdrawEnabled
      }
    default :
      return state
  }
}

export default setUserCurrencyReducer;