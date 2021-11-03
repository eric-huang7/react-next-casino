import styles from '../../../styles/ManageSubscriptions/ManageSubscriptions.module.scss';
import {SubscriptionsInputsContainer} from "./SubscriptionsInputsContainer";
import {SubscriptionsSubmitButton} from "./SubscriptionsSubmitButton";
import {useDispatch, useSelector} from "react-redux";
import {showManageSubscriptions} from "../../../redux/actions/showPopups";


export const ManageSubscriptions = ({t}) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state)
  const isShowSubscriptions = useSelector((state) => state.showPopupsReducer.isShowManageSubscriptions)


  const closeButtonHandler = () => {
    console.log(userInfo.authInfo, isShowSubscriptions, 'subscriptions');
    console.log(userInfo.authInfo.user.user.transactional_email_opt_in, "email");
    console.log(userInfo.authInfo.user.user.transactional_sms_opt_in, 'sms');
    console.log(userInfo.authInfo.user.user.browser_opt_in, "browser");
    // dispatch(showManageSubscriptions(false));
  }

  return (
    <div className={`${styles.subscriptions__MainWrapper} ${isShowSubscriptions ? '' : styles.hide}`}>
      <div className={styles.subscriptions__MainBlockWrapper}>
        <div className={styles.subscriptions__MainBlock}>
          <div className={styles.subscriptions__heading}>
            <h3>Manage Subscriptions</h3>
            <div onClick={() => closeButtonHandler()} className={styles.closeButton}>
              <div className={styles.closeOne}></div>
              <div className={styles.closeTwo}></div>
            </div>
          </div>
          <SubscriptionsInputsContainer userInfo={userInfo} t={t}/>
        </div>
        <SubscriptionsSubmitButton t={t}/>
      </div>
    </div>
  )
}