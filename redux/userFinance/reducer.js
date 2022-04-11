import {handleActions} from "redux-actions";
import {
  setCurrencySelectorType,
  setErrorUserDepositValue,
  setErrorUserPaymentMethod,
  setUserCurrencySwitcher,
  setUserDepositValue,
  setUserPaymentMethod
} from "./action";

const initialState = {
  depositValue: 30.00,
  errorMessage: '',
  paymentError: '',
  paymentMethodData: null,
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
  isCurrencySelectorChooseCurrency: true,
};

const handlers = {
  [setUserDepositValue]: (state, {payload}) => {
    return {
      ...state,
      value: payload,
    }
  },
  [setErrorUserDepositValue]: (state, {payload}) => {
    return {
      ...state,
      errorMessage: payload,
    }
  },
  [setUserPaymentMethod]: (state, {payload}) => {
    return {
      ...state,
      paymentMethodData: payload
    }
  },
  [setErrorUserPaymentMethod]: (state, {payload}) => {
    return {
      ...state,
      paymentError: payload
    }
  },
  [setUserCurrencySwitcher]: (state, {payload}) => {
    return {
      ...state,
      userCurrencyData : {...payload}
    }
  },
  [setCurrencySelectorType]: (state, {payload}) => {
    return {
      ...state,
      isCurrencySelectorChooseCurrency: payload
    }
  },
}

export default handleActions(handlers, initialState);
