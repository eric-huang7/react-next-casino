import {AUTH, BALANCE, LOGIN_FAIL, LOGIN_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS} from "../actions/types";

const initialState = {
  isAuthenticated: null,
  loading: true,
  user: null,
  balance: 0,
  bonuses: null,
  error: null
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
        error: null
      }
    case LOGIN_FAIL :
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        bonuses: null,
        error: {...payload}
      }
    case AUTH :
      return {
        ...state,
        user: {...payload},
        isAuthenticated: true,
        loading: false,
        error: null
      }
    case BALANCE:
      return {
        ...state,
        balance: { ...payload }
      }
    case SIGNUP_SUCCESS :
      return {
        ...state,
        user: {...payload},
        isAuthenticated: true,
        loading: false,
        error: null
      }
    case SIGNUP_FAIL :
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        bonuses: null,
        error: {...payload}
      }
    default:
      return state
  }
}

export default authReducer