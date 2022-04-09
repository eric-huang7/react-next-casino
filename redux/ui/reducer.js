import {handleActions} from "redux-actions";
import {hideLogin, showLogin} from "./action";

const initialState = {
  isShowLogin: false,
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
}

export default handleActions(handlers, initialState);
