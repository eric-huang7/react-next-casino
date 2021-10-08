import {AUTH, BALANCE, LOGIN_FAIL, LOGIN_SUCCESS} from "../actions/types";

const initialState = {
  isAuthenticated: null,
  loading: true,
  user: null,
  balance: 0,
  bonuses: null
}

function authReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case LOGIN_SUCCESS :
      return {
        ...state,
        user: {...payload},
        isAuthenticated: true,
        loading: false,
      }
    case LOGIN_FAIL :
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        bonuses: null,
      }
    case AUTH :
      return {
        ...state,
        user: {...payload},
        isAuthenticated: true,
        loading: false,
      }
    case BALANCE:
      return {
        ...state,
        balance: { ...payload }
      }
    default:
      return state
  }
}

export default authReducer