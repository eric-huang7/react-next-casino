import {handleActions} from "redux-actions";
import {
  fullScreenGameWindow,
  hideLogin,
  hideRegister,
  minimizeGameWindow,
  showGameWindow,
  showLogin,
  showMobileMenu,
  showRegister
} from "./action";

const initialState = {
  isShowLogin: false,
  isShowRegister: false,
  hideForCurrency: false,
  isShowMobileMenu: false,
  isShowPlayWindow: false,
  isMinimizePlayWindow: false,
  isFullScreen: false,
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
  [showMobileMenu]: (state, {payload}) => {
    return {
      ...state,
      isShowMobileMenu: payload,
    }
  },
  [showGameWindow]: (state, {payload}) => {
    return {
      ...state,
      isShowPlayWindow: payload
    }
  },
  [minimizeGameWindow]: (state, {payload}) => {
    return {
      ...state,
      isMinimizePlayWindow: payload
    }
  },
  [fullScreenGameWindow]: (state, {payload}) => {
    return {
      ...state,
      isFullScreen: payload
    }
  },
}

export default handleActions(handlers, initialState);
