import axios from "axios";
import {AUTH, BALANCE, LOGIN_FAIL, LOGIN_SUCCESS} from "./types";
import {auth_url, login_url, user_balance_url} from "../url/url";

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
    console.log('SOME ERROR IN AUTH', e);
  }

}


export const login = (site_id, auth_type_id, username, auth_info, is_admin) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ site_id, auth_type_id, username, auth_info, is_admin });
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
      payload: e.response.data
    })
  }
}

export const userBalance = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const res = await axios.get(user_balance_url, config)

  dispatch({
    type: BALANCE,
    payload: res.data
  })
}

