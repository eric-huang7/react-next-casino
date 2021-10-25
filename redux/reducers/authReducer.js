import {
  AUTH,
  BALANCE,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS
} from "../actions/types";

const initialState = {
  isAuthenticated: null,
  loading: true,
  user: null,
  balance: null,
  bonuses: null,
  error: null,
  registerError: null,
  logoutError: null,
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
        error: null,
        registerError: null,
      }
    case LOGIN_FAIL :
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        bonuses: null,
        error: {...payload},
        registerError: null,
      }
    case AUTH :
      return {
        ...state,
        user: {...payload},
        isAuthenticated: true,
        loading: false,
        error: null,
        registerError: null,
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
        error: null,
        registerError: null,
      }
    case SIGNUP_FAIL :
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        bonuses: null,
        error: null,
        registerError: {...payload},
      }
    case LOGOUT_SUCCESS :
      return {
        ...state,
        isAuthenticated: null,
        loading: true,
        user: null,
        balance: null,
        bonuses: null,
        error: null,
        registerError: null,
        logoutError: null,
      }
    case LOGOUT_FAIL:
      return {
        ...state,
        logoutError: {...payload},
      }
    default:
      return state
  }
}

export default authReducer