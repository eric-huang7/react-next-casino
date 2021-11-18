import styles from '../../../../../styles/NotificationPopup/NotificationPopup.module.scss';
import {MessagesContainer} from "./MessagesContainer";
import {MoreButton} from "./MoreButton";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useBrowserNotifications} from "../../../../../hooks/useBrowserNotifications";
import {changeLocalUserSubscriptions, changeUserSubscriptions} from "../../../../../redux/actions/userSubscriptionData";
import {NotifyIcon} from "./NotifyIcon";


export const NotificationPopup = ({isShowNotifications, notifyData, checkReadMessages, subscriptInfo, t}) => {
  const dispatch = useDispatch();
  useEffect(() => {

    return () => {
      checkReadMessages();
    }
  },[])

  const userInfo = useSelector((state) => state.authInfo.user.user);

  const [emailSubscript, setEmailSubscript] = useState(userInfo.transactional_email_opt_in);
  const [smsSubscript, setSmsSubscript] = useState(userInfo.transactional_sms_opt_in);
  const [notifySubscript, setNotifySubscript] = useState(userInfo.browser_opt_in);

  const soundClickHandler = () => {
    useBrowserNotifications();
    let userData;
    if (notifySubscript === 1) {
      userData = {
        id: userInfo.id,
        transactional_email_opt_in: emailSubscript,
        transactional_sms_opt_in: smsSubscript,
        browser_opt_in: 0
      }
      setNotifySubscript(0)
    } else {
      userData = {
        id: userInfo.id,
        transactional_email_opt_in: emailSubscript,
        transactional_sms_opt_in: smsSubscript,
        browser_opt_in: 1
      }
      setNotifySubscript(1)
    }
    dispatch(changeUserSubscriptions(userData));
    dispatch(changeLocalUserSubscriptions(userData));
  }
    return (
      <div className={`${styles.notificationPopupWrapper}`}>
        <div className={styles.notificationHeading}>
          <span>{t("notificationPopup.header.heading")}</span>
          <NotifyIcon soundClickHandler={soundClickHandler} notifySubscript={subscriptInfo}/>
        </div>
        <div className={styles.messagesBlock}>
          <MessagesContainer t={t} notifyData={notifyData}/>
        </div>
        <MoreButton t={t}/>
      </div>
    )
}