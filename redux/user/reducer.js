import {handleActions} from "redux-actions";
import {
  activateBonusAction,
  addCurrencyToUser,
  authAction,
  authFail,
  balanceAction,
  cancelBonusAction,
  changePasswordLogin,
  deleteSession,
  getActivePendingBonuses,
  getActiveSessions,
  getBonusHistorydata,
  getClosedSession,
  getDocumentAction,
  getSavedKeys,
  getUserBetsData,
  getUserPaymentsAction,
  loginFail,
  loginSuccess,
  logoutFail,
  logoutSuccess,
  mayYwoFactorAuth,
  patchChangeCurrency,
  qrAuthAction, setActivePendingBonusesTerms, signupFail, signupSuccess
} from "./action";

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
  activePendingBonusesTerms: {},
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

const handlers = {
  [getDocumentAction]: (state, {payload}) => {
    return {
      ...state,
      loadingDocuments: false,
      userDocuments: {...payload},
    }
  },
  [mayYwoFactorAuth]: (state, {payload}) => {
    return {
      ...state,
      isMayTwoFactorAuth: payload,
    }
  },
  [getActiveSessions]: (state, {payload}) => {
    return {
      ...state,
      loadingActiveSessions: false,
      userActiveSessions: {...payload},
    }
  },
  [getClosedSession]: (state, {payload}) => {
    return {
      ...state,
      loadingClosedSessions: false,
      userClosedSessions: {...payload},
    }
  },
  [qrAuthAction]: (state, {payload}) => {
    return {
      ...state,
      qrAuthLoading: false,
      qrAuth: {...payload},
    }
  },
  [loginSuccess]: (state, {payload}) => {
    return {
      ...state,
      user: {...payload},
      isAuthenticated: true,
      loading: false,
      error: null,
      registerError: null,
    }
  },
  [changePasswordLogin]: (state, {payload}) => {
    return {
      ...state,
      user: {...payload},
      isAuthenticated: true,
      loading: false,
      error: null,
      registerError: null,
    }
  },
  [loginFail]: (state, {payload}) => {
    return {
      ...state,
      isAuthenticated: null,
      loading: false,
      user: null,
      bonuses: null,
      error: {...payload},
      registerError: null,
    }
  },
  [patchChangeCurrency]: (state, {payload}) => {
    return {
      ...state,
      loadingResultChangingCurrency: false,
      resultChangingCurrency: {...payload},
    }
  },
  [authAction]: (state, {payload}) => {
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
  },
  [authFail]: (state, {payload}) => {
    return {
      ...state,
      isAuthenticated: null,
      userAuthLoading: false,
    }
  },
  [balanceAction]: (state, {payload}) => {
    return {
      ...state,
      balance: { ...payload }
    }
  },
  [getUserPaymentsAction]: (state, {payload}) => {
    return {
      ...state,
      loadingUserPayments: false,
      userPayments: { ...payload },
    }
  },
  [getBonusHistorydata]: (state, {payload}) => {
    return {
      ...state,
      loadingBonusesHistory: false,
      bonusesHistory: { ...payload },
    }
  },
  [getActivePendingBonuses]: (state, {payload}) => {
    return {
      ...state,
      loadingActivePendingBonuses: false,
      activePendingBonuses: { ...payload },
    }
  },
  [setActivePendingBonusesTerms]: (state, {payload}) => {
    return {
      ...state,
      activePendingBonusesTerms: { ...state.activePendingBonusesTerms, [payload.id]: payload.value },
    }
  },
  [getUserBetsData]: (state, {payload}) => {
    return {
      ...state,
      loadingUserBetsData: false,
      userBetsData: { ...payload }
    }
  },
  [addCurrencyToUser]: (state, {payload}) => {
    return {
      ...state,
      balance: { ...payload }
    }
  },
  [signupSuccess]: (state, {payload}) => {
    return {
      ...state,
      user: {...payload},
      isAuthenticated: true,
      loading: false,
      error: null,
      registerError: null,
    }
  },
  [signupFail]: (state, {payload}) => {
    return {
      ...state,
      isAuthenticated: null,
      loading: false,
      user: null,
      bonuses: null,
      error: null,
      registerError: {...payload},
    }
  },
  [logoutSuccess]: (state, {payload}) => {
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
      activePendingBonusesTerms: {},
      loadingActiveSessions: true,
      userActiveSessions: null,
      loadingClosedSessions: true,
      userClosedSessions: null,
      loadingUserBetsData: true,
      userBetsData: null,
      isMayTwoFactorAuth: false,
      loadingDocuments: true,
      userDocuments: null,
    }
  },
  [logoutFail]: (state, {payload}) => {
    return {
      ...state,
      logoutError: {...payload},
    }
  },
}

export default handleActions(handlers, initialState);
