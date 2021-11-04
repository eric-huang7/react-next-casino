import styles from '../../../styles/ManageSubscriptions/ManageSubscriptions.module.scss';
import {SubscriptionsInputsContainer} from "./SubscriptionsInputsContainer";
import {SubscriptionsSubmitButton} from "./SubscriptionsSubmitButton";
import {useDispatch, useSelector} from "react-redux";
import {showManageSubscriptions} from "../../../redux/actions/showPopups";
import {useEffect, useState} from "react";
import {changeLocalUserSubscriptions} from "../../../redux/actions/userSubscriptionData";


export const ManageSubscriptions = ({t}) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state)
  const isShowSubscriptions = useSelector((state) => state.showPopupsReducer.isShowManageSubscriptions);

  const closeButtonHandler = () => {
    // console.log(userInfo)
    dispatch(showManageSubscriptions(false));
  }

  const [emailSubscript, setEmailSubscript] = useState(userInfo.authInfo.user.user.transactional_email_opt_in);
  const [smsSubscript, setSmsSubscript] = useState(userInfo.authInfo.user.user.transactional_sms_opt_in);
  const [notifySubscript, setNotifySubscript] = useState(userInfo.authInfo.user.user.browser_opt_in);

  useEffect(() => {
    dispatch(changeLocalUserSubscriptions({
      transactional_email_opt_in: emailSubscript,
      transactional_sms_opt_in: smsSubscript,
      browser_opt_in: notifySubscript
    }))
  }, [])


  const inputsCheckedHandler = (e) => {
    if (e.target.id === "emailSubscript") {
      setEmailSubscript(Number(e.target.checked));
    } else if (e.target.id === "smsSubscript") {
      setSmsSubscript(Number(e.target.checked));
    } else if (e.target.id === 'notifySubscript') {
      setNotifySubscript(Number(e.target.checked));
    }
  }

  return (
    <div className={`${styles.subscriptions__MainWrapper} ${isShowSubscriptions ? '' : styles.hide}`}>
      <div className={styles.subscriptions__MainBlockWrapper}>
        <div className={styles.subscriptions__MainBlock}>
          <div className={styles.subscriptions__heading}>
            <h3>{t("manageSubscriptions.heading")}</h3>
            <div onClick={() => closeButtonHandler()} className={styles.closeButton}>
              <div className={styles.closeOne}></div>
              <div className={styles.closeTwo}></div>
            </div>
          </div>
          <SubscriptionsInputsContainer
            inputsCheckedHandler={inputsCheckedHandler}
            emailSubscript={emailSubscript}
            smsSubscript={smsSubscript}
            notifySubscript={notifySubscript}
            userInfo={userInfo} t={t}
          />
        </div>
        <SubscriptionsSubmitButton
          emailSubscript={emailSubscript}
          smsSubscript={smsSubscript}
          notifySubscript={notifySubscript}
          userInfo={userInfo}
          t={t}
        />
      </div>
    </div>
  )
}