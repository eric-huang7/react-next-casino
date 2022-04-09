import {handleActions} from "redux-actions";
import {hideLogin, hideRegister, showLogin, showRegister} from "./action";

const initialState = {
  isShowLogin: false,
  isShowRegister: false,
  hideForCurrency: false,
}

const handlers = {
  [showLogin]: (state, {payload}) => {
    return {
      ...state,
      isShowLogin: payload,
    }
  },
  [hideLogin]: (state, {payload}) => {
    return {
      ...state,
      isShowLogin: payload,
    }
  },
  [showRegister]: (state, {payload}) => {
    return {
      ...state,
      isShowRegister: payload,
    }
  },
  [hideRegister]: (state, {payload}) => {
    return {
      ...state,
      hideForCurrency: payload,
    }
  },
}

export default handleActions(handlers, initialState);
