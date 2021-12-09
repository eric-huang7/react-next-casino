import axios from "axios";
import {
  ADD_CURRENCY_TO_USER,
  AUTH,
  BALANCE, GET_USER_PAYMENTS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS, PATCH_CHANGE_CURRENCY,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS
} from "./types";
import {
  auth_url,
  login_url,
  user_balance_url,
  signUp_url,
  logout_url,
  user_url,
  post_add_user_currency, get_user_payments_url
} from "../url/url";

axios.defaults.withCredentials = true;

export const auth = () => async dispatch => {
  const config = {
    params: {
      site_id: 1
    }
  }

  try {
    const res = await axios.get(auth_url, config);
    dispatch({
      type: AUTH,
      payload: res.data
    })
  } catch (e) {
    console.log('SOME ERROR IN AUTH', e.response);
  }

}


export const userData = (site_id, auth_type_id, username, auth_info, is_admin) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({site_id, auth_type_id, username, auth_info, is_admin});
  try {
    const res = await axios.post(login_url, body, config);
    console.log(res, 'LOGIN RESPONSE');
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })
  } catch (e) {
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
    // console.log(res)
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
  console.log(params, 'get payments')
  try {

    const res = await axios.get(get_user_payments_url, config)
    // console.log(res)
    dispatch({
      type: GET_USER_PAYMENTS,
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

export const signUp = (currency_id, user_id, site_id, auth_type_id, username, email, password, current_bonus_code) => async dispatch => {
  const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const body = JSON.stringify({currency_id, user_id, site_id, auth_type_id, username, email, password, current_bonus_code});
  try {
    const res = await axios.post(signUp_url, body, config);
    console.log(res, "REGISTER RESPONSE")
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data
    })
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
  } catch (e) {
    console.log(e, "SOME ERROR WHEN LOGOUT USER");
    dispatch({
      type: LOGOUT_FAIL,
      payload: e.response,
    })
  }
}