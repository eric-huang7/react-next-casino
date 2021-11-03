import {CHANGE_LOCAL_USER_SUBSCRIPTIONS, CHANGE_USER_SUBSCRIPTIONS, FAIL_CHANGE_USER_SUBSCRIPTIONS} from "./types";
import axios from "axios";
import {user_url} from "../url/url";

axios.defaults.withCredentials = true;


export const changeUserSubscriptions = (subscriptionsData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const {id, transactional_email_opt_in, transactional_sms_opt_in, browser_opt_in} = subscriptionsData;
  const body = JSON.stringify({id, transactional_email_opt_in, transactional_sms_opt_in, browser_opt_in});
  try {
    const res = await axios.patch(user_url, body, config);
    console.log(res, 'USER SUBSCRIPTIONS RESPONSE');
    dispatch({
      type: CHANGE_USER_SUBSCRIPTIONS,
      payload: res.data
    })
  } catch (e) {
    console.log(e.response, "user subscriptions error");
    dispatch({
      type: FAIL_CHANGE_USER_SUBSCRIPTIONS,
      payload: e.response
    })
  }
}

export const changeLocalUserSubscriptions = (subscriptionsData) => {
  return {
    type: CHANGE_LOCAL_USER_SUBSCRIPTIONS,
    payload: subscriptionsData,
  }
}