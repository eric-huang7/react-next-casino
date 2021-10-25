import axios from "axios";
import {
  AUTH,
  BALANCE,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS
} from "./types";
import {auth_url, login_url, user_balance_url, signUp_url, logout_url} from "../url/url";

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


export const login = (site_id, auth_type_id, username, auth_info, is_admin) => async dispatch => {
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