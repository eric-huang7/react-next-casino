import {handleActions} from "redux-actions";
import {changeLocalUserSubscriptions, changeUserSubscriptionsAction, failChangeUserSubscriptions} from "./action";

const initialState = {
  userResponseData: null,
  loading: true,
  error: null,
  emailSubscribe: null,
  smsSubscribe: null,
  notifySubscribe: null
}

const handlers = {
  [changeUserSubscriptionsAction]: (state, {payload}) => {
    return {
      ...state,
      userResponseData: {...payload},
      loading: false
    }
  },
  [changeLocalUserSubscriptions]: (state, {payload}) => {
    return {
      ...state,
      emailSubscribe: payload.transactional_email_opt_in,
      smsSubscribe: payload.transactional_sms_opt_in,
      notifySubscribe: payload.browser_opt_in,
      loading: false
    }
  },
  [failChangeUserSubscriptions]: (state, {payload}) => {
    return {
      ...state,
      loading: false,
      error: {...payload},
    }
  },
}

export default handleActions(handlers, initialState);

