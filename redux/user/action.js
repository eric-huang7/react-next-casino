import { createAction } from "redux-actions";
import Connect from "../../helpers/connect";
import {
  auth_url,
  login_url,
  user_balance_url,
  signUp_url,
  logout_url,
  user_url,
  post_add_user_currency,
  get_user_payments_url,
  get_user_bets,
  get_bonuses_data_url,
  put_bonus_redemption_url,
  post_cancel_bonus_redemption_url,
  phone_number_url,
  qr_auth_url,
  user_sessions_url,
  document_url, currency_url
} from "../url/url";

import {siteID} from "../../envs/envsForFetching";
import {errorPopupActivate, showTournamentAwardModal, showTwoFaPopup} from "../popups/action";
import {annulActiveBonuses} from "../bonuses/action";
import {minimizeGameWindow, showGameWindow, showLogin} from "../ui/action";
import {showRegister} from "../ui/action";
import {deleteGameLink} from "../playGame/action";

export const activateBonusAction = createAction("ACTIVATE_BONUS");
export const addCurrencyToUser = createAction("ADD_CURRENCY_TO_USER");
export const authAction = createAction("AUTH");
export const authFail = createAction("AUTH_FAIL");
export const balanceAction = createAction("BALANCE");
export const cancelBonusAction = createAction("CANCEL_BONUS");
export const changePasswordLogin = createAction("CHANGE_PASSWORD_LOGIN");
export const deleteSession = createAction("DELETE_SESSION");
export const getActivePendingBonuses = createAction("GET_ACTIVE_PENDING_BONUSES");
export const setActivePendingBonusesTerms = createAction("GET_ACTIVE_PENDING_BONUSES_TERMS");
export const getActiveSessions = createAction("GET_ACTIVE_SESSIONS");
export const getBonusHistorydata = createAction("GET_BONUS_HISTORY_DATA");
export const getClosedSession = createAction("GET_CLOSED_SESSIONS");
export const getDocumentAction = createAction("GET_DOCUMENT");
export const getSavedKeys = createAction("GET_SAVED_KEYS");
export const getUserBetsData = createAction("GET_USER_BETS_DATA");
export const getUserPaymentsAction = createAction("GET_USER_PAYMENTS");
export const loginFail = createAction("LOGIN_FAIL");
export const loginSuccess = createAction("LOGIN_SUCCESS");
export const logoutSuccess = createAction("LOGOUT_SUCCESS");
export const logoutFail = createAction("LOGOUT_FAIL");
export const mayYwoFactorAuth = createAction("MAY_TWO_FACTOR_AUTH");
export const patchChangeCurrency = createAction("PATCH_CHANGE_CURRENCY");
export const qrAuthAction = createAction("QR_AUTH");
export const signupFail = createAction("SIGNUP_FAIL");
export const signupSuccess = createAction("SIGNUP_SUCCESS");

const config = {
  params: {
    site_id: siteID
  }
}

export const auth = () => dispatch =>
  Connect.get(auth_url, config, (status, data) => {
    dispatch(authAction(data))
    if (typeof window !== "undefined") {
      localStorage.setItem("userAuth", 'true');
    }
  }).catch(e => dispatch(authFail(e.response)));


export const getDocuments = () => dispatch =>
  Connect.get(document_url, config, (status, data) => dispatch(getDocumentAction(data)));

export const deleteDocuments = (docId) => dispatch =>
  Connect.delete(document_url + `/${docId}`, {}, (status, data) => dispatch(getDocuments()));

export const changeDocuments = (docId) => dispatch =>
  Connect.patch(document_url, JSON.stringify(documentData), {}, (status, data) => dispatch(getDocuments()));

export const userData = (sendData) => dispatch => {
  Connect.post(login_url, JSON.stringify(sendData), {}, (status, data) => {
    if (data?.user.is_2fa_enabled === 1) {
      dispatch(showLogin(false));
      dispatch(showTwoFaPopup(true));
    } else {
      dispatch(loginSuccess(data));

      if  (data?.user?.is_tour_award === 1) {
        dispatch(showTournamentAwardModal(true))
      }

      // dispatch(auth());
      if (typeof window !== "undefined") {
        localStorage.setItem("userAuth", 'true');
      }
    }
  }).catch(e => dispatch(loginFail(e.response)));
}

export const userBalance = () => dispatch =>
  Connect.get(user_balance_url, {}, (status, data) => dispatch(balanceAction(data)));

export const getUserPayments = (params) => dispatch =>
  Connect.get(get_user_payments_url, {params: {...params}}, (status, data) =>
    dispatch(getUserPaymentsAction(data))
  );

export const getUserBonuses = (params) => dispatch =>
  Connect.get(get_bonuses_data_url, {params: {...params}}, (status, data) =>
    dispatch(getBonusHistorydata(data))
  );

export const getUserActivePendingBonuses = (params) => dispatch =>
  Connect.get(get_bonuses_data_url, {params: {...params}}, (status, data) =>
    dispatch(getActivePendingBonuses(data))
  );

export const getActiveUserSessions = () => dispatch =>
  Connect.get(
    user_sessions_url,
    {
      params: {
        isCurrent: true,
        ordering: "id-DESC"
      }
    },
    (status, data) => dispatch(getActiveSessions(data))
  );

export const getClosedUserSessions = () => dispatch =>
  Connect.get(
    user_sessions_url,
    {
      params: {
        isCurrent: false,
        ordering: "id-DESC"
      }
    },
    (status, data) => dispatch(getClosedSession(data))
  );

export const deleteUserSession = (params) => dispatch =>
  Connect.get(user_sessions_url, {data: {...params}}, (status, data) => dispatch(deleteSession(data)));

export const getUserBets = () => dispatch =>
  Connect.get(get_user_bets, {}, (status, data) => dispatch(getUserBetsData(data)));

export const addCurrencyToUserList = (currency_id) => dispatch =>
  Connect.post(post_add_user_currency, JSON.stringify(currency_id),{}, (status, data) =>
    dispatch(addCurrencyToUser(data))
  );

export const activateBonus = (bonusData) => dispatch =>
  Connect.put(put_bonus_redemption_url, JSON.stringify(bonusData),{}, (status, data) => {
    dispatch(activateBonusAction(data));
    dispatch(getUserActivePendingBonuses({status: "1,5"}));
    dispatch(getUserBonuses({status: "1,2,3,4,6"}));
  }).catch(e => {
    dispatch(errorPopupActivate("myAccount.popupErrors.bonusNotActivate"));
    dispatch(getUserActivePendingBonuses({status: "1,5"}));
    dispatch(getUserBonuses({status: "1,2,3,4,6"}));
  });

export const cancelBonus = (bonusData) => dispatch =>
  Connect.post(post_cancel_bonus_redemption_url, JSON.stringify(bonusData),{}, (status, data) => {
    dispatch(cancelBonusAction(data));
    dispatch(getUserActivePendingBonuses({status: "1,5"}));
    dispatch(getUserBonuses({status: "1,2,3,4,6"}));
  }).catch(e => {
    dispatch(errorPopupActivate("myAccount.popupErrors.bonusNotCancel"));
    dispatch(getUserActivePendingBonuses({status: "1,5"}));
    dispatch(getUserBonuses({status: "1,2,3,4,6"}));
  });

export const patchUserData = (userData) => dispatch =>
  Connect.patch(user_url, JSON.stringify(userData),{}, (status, data) => dispatch(auth()));

export const getQrAuth = () => dispatch =>
  Connect.get(qr_auth_url, {}, (status, data) => dispatch(qrAuthAction(data)));

export const postSavedKeys = (googleTokenData) => dispatch =>
  Connect.patch(qr_auth_url, JSON.stringify(googleTokenData),{}, (status, data) =>
    dispatch(getSavedKeys(data))
  );

export const getTokenUserPhone = (params) => dispatch =>
  Connect.get(phone_number_url, {params: {...params}},{}, (status, data) =>
    dispatch(getActivePendingBonuses(data))
  );


export const patchUserActiveCurrency = (userData) => dispatch =>
  Connect.patch(user_url, JSON.stringify(userData),{}, (status, data) => {
    dispatch(patchChangeCurrency(data));
    dispatch(userBalance());
  });

export const signUp = (signUpData) => dispatch =>
  Connect.post(signUp_url, JSON.stringify(signUpData),{}, (status, data) => {
    dispatch(signupSuccess(data));
    dispatch(auth());
    dispatch(showRegister(false));
  }).catch(e => {
    dispatch(signupFail(e.response));
  });

export const logout = () => dispatch =>
  Connect.delete(logout_url, {}, (status, data) => {
    dispatch(logoutSuccess(data));
    dispatch(showGameWindow(false));
    dispatch(minimizeGameWindow(false));
    dispatch(deleteGameLink());
    if (typeof window !== "undefined") {
      localStorage.setItem("userAuth", 'false');
    }
    // dispatch(annulActiveBonuses());
  }).catch(e => {
    dispatch(logoutFail(e.response));
  });
