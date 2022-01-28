import {
  AUTH,
  BALANCE,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  PATCH_CHANGE_CURRENCY,
  ADD_CURRENCY_TO_USER,
  GET_USER_PAYMENTS,
  GET_USER_BETS_DATA,
  GET_BONUS_HISTORY_DATA,
  AUTH_FAIL,
  GET_ACTIVE_PENDING_BONUSES,
  QR_AUTH,
  MAY_TWO_FACTOR_AUTH,
  GET_ACTIVE_SESSIONS,
  GET_CLOSED_SESSIONS,
  GET_DOCUMENT, CHANGE_PASSWORD_LOGIN,

} from "../actions/types";

const initialState = {
  isAuthenticated: null,
  loading: true,
  userAuthLoading: true,
  user: null,
  balance: null,
  bonuses: null,
  error: null,
  registerError: null,
  logoutError: null,
  loadingResultChangingCurrency: true,
  resultChangingCurrency: null,
  loadingUserPayments: true,
  userPayments: null,
  loadingUserBetsData: true,
  userBetsData: null,
  loadingBonusesHistory: true,
  bonusesHistory: null,
  loadingActivePendingBonuses: true,
  activePendingBonuses: null,
  qrAuthLoading: true,
  qrAuth: null,
  savedKeys: null,
  loadingSavedKeys: true,
  isMayTwoFactorAuth: false,
  loadingActiveSessions: true,
  userActiveSessions: null,
  loadingClosedSessions: true,
  userClosedSessions: null,
  loadingDocuments: true,
  userDocuments: null,
}

function userDataReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_DOCUMENT:
      return {
        ...state,
        loadingDocuments: false,
        userDocuments: {...payload},
      }
    case MAY_TWO_FACTOR_AUTH:
      return {
        ...state,
        isMayTwoFactorAuth: payload,
      }
    case GET_ACTIVE_SESSIONS:
      return {
        ...state,
        loadingActiveSessions: false,
        userActiveSessions: {...payload},
      }
    case GET_CLOSED_SESSIONS:
      return {
        ...state,
        loadingClosedSessions: false,
        userClosedSessions: {...payload},
      }
    case QR_AUTH :
      return {
        ...state,
        qrAuthLoading: false,
        qrAuth: {...payload},
      }
    case LOGIN_SUCCESS :
      return {
        ...state,
        user: {...payload},
        isAuthenticated: true,
        loading: false,
        error: null,
        registerError: null,
      }
    case CHANGE_PASSWORD_LOGIN :
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
        isAuthenticated: null,
        loading: false,
        user: null,
        bonuses: null,
        error: {...payload},
        registerError: null,
      }
    case PATCH_CHANGE_CURRENCY:
      return {
        ...state,
        loadingResultChangingCurrency: false,
        resultChangingCurrency: {...payload},
      }
    case AUTH :
      return {
        ...state,
        user: {...payload},
        isAuthenticated: true,
        loading: false,
        error: null,
        registerError: null,
        userAuthLoading: false,
        isMayTwoFactorAuth: false,
      }
    case AUTH_FAIL: {
      return {
        ...state,
        isAuthenticated: null,
        userAuthLoading: false,
      }
    }
    case BALANCE:
      return {
        ...state,
        balance: { ...payload }
      }
    case GET_USER_PAYMENTS:
      return {
        ...state,
        loadingUserPayments: false,
        userPayments: { ...payload },
      }
    case GET_BONUS_HISTORY_DATA:
      return {
        ...state,
        loadingBonusesHistory: false,
        bonusesHistory: { ...payload },
      }
    case GET_ACTIVE_PENDING_BONUSES:
      return {
        ...state,
        loadingActivePendingBonuses: false,
        activePendingBonuses: { ...payload },
      }
    case GET_USER_BETS_DATA:
      return {
        ...state,
        loadingUserBetsData: false,
        userBetsData: { ...payload }
      }
    case ADD_CURRENCY_TO_USER:
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
        isAuthenticated: null,
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

        loadingUserPayments: true,
        userPayments: null,
        loadingBonusesHistory: true,
        bonusesHistory: null,
        loadingActivePendingBonuses: true,
        activePendingBonuses: null,
        loadingActiveSessions: true,
        userActiveSessions: null,
        loadingClosedSessions: true,
        userClosedSessions: null,
        loadingUserBetsData: true,
        userBetsData: null,
        isMayTwoFactorAuth: false,
        loadingDocuments: true,
        userDocuments: null,

        // isAuthenticated: null,
        // loading: true,
        // userAuthLoading: true,
        // user: null,
        // balance: null,
        // bonuses: null,
        // error: null,
        // registerError: null,
        // logoutError: null,
        // loadingResultChangingCurrency: true,
        // resultChangingCurrency: null,
        // loadingUserPayments: true,
        // userPayments: null,
        // loadingUserBetsData: true,
        // userBetsData: null,
        // loadingBonusesHistory: true,
        // bonusesHistory: null,
        // loadingActivePendingBonuses: true,
        // activePendingBonuses: null,
        // qrAuthLoading: true,
        // qrAuth: null,
        // savedKeys: null,
        // loadingSavedKeys: true,
        // isMayTwoFactorAuth: false,
        // loadingActiveSessions: true,
        // userActiveSessions: null,
        // loadingClosedSessions: true,
        // userClosedSessions: null,
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

export default userDataReducer