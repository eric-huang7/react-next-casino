import {
  CHANGE_LOCAL_USER_SUBSCRIPTIONS,
  CHANGE_USER_SUBSCRIPTIONS,
  FAIL_CHANGE_USER_SUBSCRIPTIONS
} from "../actions/types";

const initialState = {
  userResponseData: null,
  loading: true,
  error: null,
  emailSubscribe: null,
  smsSubscribe: null,
  notifySubscribe: null
}

function userDataReducer (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case CHANGE_USER_SUBSCRIPTIONS:
      return {
        ...state,
        userResponseData: {...payload},
        loading: false
      }
    case CHANGE_LOCAL_USER_SUBSCRIPTIONS:
      return {
        ...state,
        emailSubscribe: payload.transactional_email_opt_in,
        smsSubscribe: payload.transactional_sms_opt_in,
        notifySubscribe: payload.browser_opt_in
      }
    case FAIL_CHANGE_USER_SUBSCRIPTIONS:
      return {
        ...state,
        loading: false,
        error: {...payload},
      }
    default :
      return state
  }

}

export default userDataReducer;

