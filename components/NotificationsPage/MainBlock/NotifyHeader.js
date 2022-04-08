import styles from '../../../styles/NotificationsPage/NotificationsPage.module.scss';
import {useContext, useState} from "react";
import {NotifyContext} from "../../NotifyContext/NotifyContext";
import {setNotifyTypeTwo} from "../../../redux/notify/action";
import {useDispatch, useSelector} from "react-redux";
import {browserNotifications} from "../../../helpers/browserNotifications";
import {changeLocalUserSubscriptions, changeUserSubscriptions} from "../../../redux/actions/userSubscriptionData";
import {NotifyIcon} from "./NotifyIcon";
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'


export const NotifyHeader = ({t, notifyData, subscriptInfo}) => {
  const dispatch = useDispatch();
  const notifySocket = useContext(NotifyContext);
  const userInfo = useSelector((state) => state.authInfo.user.user);

  const [emailSubscript, setEmailSubscript] = useState(userInfo.transactional_email_opt_in);
  const [smsSubscript, setSmsSubscript] = useState(userInfo.transactional_sms_opt_in);
  const [notifySubscript, setNotifySubscript] = useState(userInfo.browser_opt_in);

  const markReadClickHandler = () => {

    let arrNotRead = [];
    notifyData.messagesData.map((el) => {
      if (el.read === "0" || el.read === undefined) {
        arrNotRead.push(el.id);
      }
    })
    let newNotifyData = notifyData.messagesData.slice().map((el) => {
      return Object.defineProperty(el, 'read', {value: '1'});
    });
    dispatch(setNotifyTypeTwo({type: 2, msg: newNotifyData}));
    let sendObj = {type: 1, ids: arrNotRead}
    notifySocket.socket.current.send(JSON.stringify(sendObj));
  }


  const soundClickHandler = () => {
    browserNotifications();
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
    <div className={styles.notifyHeader}>
      <h3>{t("notificationsPage.header.heading")}</h3>
      <span onClick={() => markReadClickHandler()}>{t("notificationsPage.header.markAsRead")}</span>
      <ErrorEmpty>
        <NotifyIcon soundClickHandler={soundClickHandler} notifySubscript={subscriptInfo}/>
      </ErrorEmpty>
    </div>
  )
}
