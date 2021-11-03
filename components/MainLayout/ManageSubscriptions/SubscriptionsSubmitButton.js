import styles from '../../../styles/ManageSubscriptions/ManageSubscriptions.module.scss';
import {useDispatch} from "react-redux";
import {changeLocalUserSubscriptions, changeUserSubscriptions} from "../../../redux/actions/userSubscriptionData";


export const SubscriptionsSubmitButton = ({t, emailSubscript, smsSubscript, notifySubscript, userInfo}) => {
  const dispatch = useDispatch();

  const submitButtonClickHandler = () => {
    const userData = {
      id: userInfo.authInfo.user.user.id,
      transactional_email_opt_in: emailSubscript,
      transactional_sms_opt_in: smsSubscript,
      browser_opt_in: notifySubscript
    }
    dispatch(changeUserSubscriptions(userData));
    dispatch(changeLocalUserSubscriptions(userData));
  }

  return (
    <div onClick={() => submitButtonClickHandler()} className={styles.subscriptionsSubmitButton}>
      <p>
        {t("manageSubscriptions.subscriptionsButton")}
      </p>
    </div>
  )
}