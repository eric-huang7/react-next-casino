import {createAction} from "redux-actions";
import {user_url} from "../url/url";
import Connect from "../../helpers/connect";

export const changeLocalUserSubscriptions = createAction("CHANGE_LOCAL_USER_SUBSCRIPTIONS");
export const changeUserSubscriptionsAction = createAction("CHANGE_USER_SUBSCRIPTIONS");
export const failChangeUserSubscriptions = createAction("FAIL_CHANGE_USER_SUBSCRIPTIONS");

export const changeUserSubscriptions = (subscriptionsData) => dispatch => {
  const {id, transactional_email_opt_in, transactional_sms_opt_in, browser_opt_in} = subscriptionsData;
  const body = JSON.stringify({id, transactional_email_opt_in, transactional_sms_opt_in, browser_opt_in});
  Connect.patch(user_url, body,{}, (status, data) => dispatch(changeUserSubscriptionsAction(data)))
    .catch(e => dispatch(failChangeUserSubscriptions(e.response)));;
}
