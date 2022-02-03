import axios from "axios";
import {
  ACTIVATE_BONUS,
  ADD_CURRENCY_TO_USER,
  AUTH,
  AUTH_FAIL,
  BALANCE,
  CANCEL_BONUS, CHANGE_PASSWORD_LOGIN, DELETE_SESSION,
  GET_ACTIVE_PENDING_BONUSES, GET_ACTIVE_SESSIONS,
  GET_BONUS_HISTORY_DATA, GET_CLOSED_SESSIONS, GET_DOCUMENT,
  GET_SAVED_KEYS,
  GET_USER_BETS_DATA,
  GET_USER_PAYMENTS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS, MAY_TWO_FACTOR_AUTH,
  PATCH_CHANGE_CURRENCY,
  QR_AUTH,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from "./types";
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
  document_url
} from "../url/url";

import {siteID} from "../../envs/envsForFetching";
import {errorPopupActivate, errorPopupDeactivate, showTwoFaPopup} from "./showPopups";
import {annulActiveBonuses} from "./getBonuses";
import {showLogin} from "./loginShow";

axios.defaults.withCredentials = true;

export const auth = () => async dispatch => {
  const config = {
    params: {
      site_id: siteID
    }
  }

  try {
    const res = await axios.get(auth_url, config);
    dispatch({
      type: AUTH,
      payload: res.data
    })
    if (typeof window !== "undefined") {
      localStorage.setItem("userAuth", 'true');
    }
  } catch (e) {
    dispatch({
      type: AUTH_FAIL,
      payload: e.response
    })
    console.log('SOME ERROR IN AUTH', e.response);
  }

}

export const changePasswordLogin = (userData) => {


  return {
    type: CHANGE_PASSWORD_LOGIN,
    payload: userData
  }
}

export const getDocuments = () => async dispatch => {
  const config = {
    params: {
      site_id: siteID
    }
  }

  try {
    const res = await axios.get(document_url, config);
    dispatch({
      type: GET_DOCUMENT,
      payload: res.data
    })
  } catch (e) {
    console.log('SOME ERROR IN GET DOCUMENT', e.response);
  }
}

export const deleteDocuments = (docId) => async dispatch => {
  const config = {
    params: {
      site_id: siteID
    }
  }

  try {
    const res = await axios.delete(document_url + `/${docId}`);

    console.log(res, 'delete success')
    dispatch(getDocuments())
  } catch (e) {
    console.log('SOME ERROR IN GET DOCUMENT', e.response);
  }
}

export const changeDocuments = (documentData) => async dispatch => {
  const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const body = JSON.stringify(documentData);

  try {
    const res = await axios.patch(document_url, body, config);

    console.log(res, 'change document success');
    dispatch(getDocuments());
  } catch (e) {
    console.log('SOME ERROR IN change DOCUMENT', e.response);
  }
}


export const userData = (sendData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify(sendData);
  try {
    const res = await axios.post(login_url, body, config);
    console.log(res, 'LOGIN RESPONSE');
    if (res.data.user.is_2fa_enabled === 1) {

      dispatch(showLogin(false));
      dispatch(showTwoFaPopup(true));

    } else {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
      dispatch(auth());
    }

  } catch (e) {
    console.log(e.response, 'LOGIN ERROR RESPONSE');
    dispatch({
      type: LOGIN_FAIL,
      payload: e.response
    })
  }
}

export const userBalance = () => async dispatch => {
  const config = {
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {

    const res = await axios.get(user_balance_url, config)
    console.log(res, 'from GET_USER_BALANCE')
    dispatch({
      type: BALANCE,
      payload: res.data
    })
  } catch (e) {
    console.log(e.response)
  }
}

export const getUserPayments = (params) => async dispatch => {
  const config = {
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
    params: {...params}
  }

  try {

    const res = await axios.get(get_user_payments_url, config)
    console.log(res, "<<< res from GET_USER_PAYMENTS")
    dispatch({
      type: GET_USER_PAYMENTS,
      payload: res.data
    })
  } catch (e) {
    console.log(e.response)
  }
}

export const getUserBonuses = (params) => async dispatch => {
  const config = {
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
    params: {...params}
  }

  try {

    const res = await axios.get(get_bonuses_data_url, config)
    console.log(res, "<<< res from GET_BONUS_HISTORY_DATA")
    dispatch({
      type: GET_BONUS_HISTORY_DATA,
      payload: res.data
    })
  } catch (e) {
    console.log(e.response)
  }
}

export const getUserActivePendingBonuses = (params) => async dispatch => {
  const config = {
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
    params: {...params}
  }

  try {

    const res = await axios.get(get_bonuses_data_url, config)
    dispatch({
      type: GET_ACTIVE_PENDING_BONUSES,
      payload: res.data
    })
  } catch (e) {
    console.log(e.response, 'error from GET_ACTIVE_PENDING_BONUSES')
  }
}

export const getActiveUserSessions = () => async dispatch => {
  const config = {
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      isCurrent: true,
      ordering: "id-DESC"
    }
  }

  try {

    const res = await axios.get(user_sessions_url, config)
    dispatch({
      type: GET_ACTIVE_SESSIONS,
      payload: res.data
    })
  } catch (e) {
    console.log(e.response, 'error from GET_ACTIVE_SESSIONS')
  }
}
export const getClosedUserSessions = () => async dispatch => {
  const config = {
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      isCurrent: false,
      ordering: "id-DESC"
    }
  }

  try {

    const res = await axios.get(user_sessions_url, config)
    dispatch({
      type: GET_CLOSED_SESSIONS,
      payload: res.data
    })
  } catch (e) {
    console.log(e.response, 'error from GET_ACTIVE_SESSIONS')
  }
}

export const deleteUserSession = (params) => async dispatch => {
  const config = {
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {...params}
  }

  try {

    const res = await axios.get(user_sessions_url, config)
    dispatch({
      type: DELETE_SESSION,
      payload: res.data
    })
    console.log(res.data, "data from DELETE_SESSION")
  } catch (e) {
    console.log(e.response, 'error from DELETE_SESSION')
  }
}


export const getUserBets = () => async dispatch => {
  const config = {
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {

    const res = await axios.get(get_user_bets, config)
    console.log(res, "<<< res from GET_USER_BETS_DATA")
    dispatch({
      type: GET_USER_BETS_DATA,
      payload: res.data
    })
  } catch (e) {
    console.log(e.response)
  }
}

export const addCurrencyToUserList = (currency_id) => async dispatch => {
  const config = {
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const body = JSON.stringify(currency_id);
  try {

    const res = await axios.post(post_add_user_currency, body, config)
    console.log(res, "<< POST user add currency");
    dispatch({
      type: ADD_CURRENCY_TO_USER,
      payload: res.data
    })
  } catch (e) {
    console.log(e.response, '<<<< SOME ERROR when post add user currency')
  }

}

export const activateBonus = (bonusData) => async dispatch => {
  const config = {
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const body = JSON.stringify(bonusData);
  try {
    const res = await axios.put(put_bonus_redemption_url, body, config);
    console.log(res, "<< Put user activate bonus");
    dispatch({
      type: ACTIVATE_BONUS,
      payload: res.data
    })
    dispatch(getUserActivePendingBonuses({status: "1,5"}));
    dispatch(getUserBonuses({status: "1,2,3,4,6"}));
  } catch (e) {
    dispatch(errorPopupActivate("myAccount.popupErrors.bonusNotActivate"));
    dispatch(getUserActivePendingBonuses({status: "1,5"}));
    dispatch(getUserBonuses({status: "1,2,3,4,6"}));
    console.log(e.response, "SOME ERROR WHEN activate bonus");
  }
}


export const cancelBonus = (bonusData) => async dispatch => {
  const config = {
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const body = JSON.stringify(bonusData);
  try {
    const res = await axios.post(post_cancel_bonus_redemption_url, body, config);
    console.log(res, "<< Post user cancel bonus");
    dispatch({
      type: CANCEL_BONUS,
      payload: res.data
    })
    dispatch(getUserActivePendingBonuses({status: "1,5"}));
    dispatch(getUserBonuses({status: "1,2,3,4,6"}));
  } catch (e) {
    dispatch(errorPopupActivate("myAccount.popupErrors.bonusNotCancel"));
    dispatch(getUserActivePendingBonuses({status: "1,5"}));
    dispatch(getUserBonuses({status: "1,2,3,4,6"}));

    console.log(e.response, "SOME ERROR WHEN cancel bonus");
  }
}

export const patchUserData = (userData) => async dispatch => {
  const config = {
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const body = JSON.stringify(userData)
  try {
    let res = await axios.patch(user_url, body, config);
    console.log(res, '<< patch user data')
    dispatch(auth());
  } catch (e) {
    console.log(e.response, 'SOME ERROR when patch user data')
  }
}

export const getQrAuth = () => async dispatch => {
  const config = {
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {

    const res = await axios.get(qr_auth_url, config)
    dispatch({
      type: QR_AUTH,
      payload: res.data
    })
  } catch (e) {
    console.log(e.response, 'error from GET QR_AUTH')
  }
}

export const mayYwoFactorAuth = (isMay) => {
  return {
    type: MAY_TWO_FACTOR_AUTH,
    payload: isMay
  }


}

export const postSavedKeys = (googleTokenData) => async dispatch => {
  const config = {
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const body = JSON.stringify(googleTokenData);
  try {
    const res = await axios.post(qr_auth_url, body, config);
    console.log(res, "<< Post user saved keys");
    dispatch({
      type: GET_SAVED_KEYS,
      payload: res.data
    })
  } catch (e) {
    console.log(e.response, "SOME ERROR WHEN Post user saved keys");
  }
}

export const getTokenUserPhone = (params) => async dispatch => {
  const config = {
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
    params: {...params}
  }

  try {

    const res = await axios.get(phone_number_url, config)
    dispatch({
      type: GET_ACTIVE_PENDING_BONUSES,
      payload: res.data
    })
  } catch (e) {
    console.log(e.response, 'error from GET_ACTIVE_PENDING_BONUSES')
  }
}

export const patchUserActiveCurrency = (userData) => async dispatch => {
  const config = {
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const body = JSON.stringify(userData)

  try {
    const res = await axios.patch(user_url, body, config);
    console.log(res, "<< PATCH user active currency");
    dispatch({
      type: PATCH_CHANGE_CURRENCY,
      payload: res.data
    })
    dispatch(userBalance());
  } catch (e) {
    console.log(e.response, "SOME ERROR WHEN change active currency");
  }

}

export const signUp = (signUpData) => async dispatch => {
  const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const body = JSON.stringify(signUpData);
  try {
    const res = await axios.post(signUp_url, body, config);
    console.log(res, "REGISTER RESPONSE")
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data
    })
    dispatch(auth());
  } catch (e) {
    console.log(e.response, "SOME ERROR WHEN REGISTER USER");
    dispatch({
      type: SIGNUP_FAIL,
      payload: e.response
    })
  }
}

export const logout = () => async dispatch => {
  const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const res = await axios.delete(logout_url, config);
    console.log(res, "LOGOUT RESPONSE");
    dispatch({
      type: LOGOUT_SUCCESS,
      payload: res.data,
    })
    if (typeof window !== "undefined") {
      localStorage.setItem("userAuth", 'false');
    }
    // dispatch(annulActiveBonuses());
  } catch (e) {
    console.log(e, "SOME ERROR WHEN LOGOUT USER");
    dispatch({
      type: LOGOUT_FAIL,
      payload: e.response,
    })
  }
}