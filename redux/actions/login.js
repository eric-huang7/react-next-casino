import axios from "axios";
import {LOGIN_FAIL, LOGIN_SUCCESS} from "./types";
import {login_url} from "../url/url";
axios.defaults.withCredentials = true;

export const login = (site_id, auth_type_id, username, auth_info, is_admin) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ site_id, auth_type_id, username, auth_info, is_admin });
  try {
  const res = await axios.post(login_url, body, config);
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

