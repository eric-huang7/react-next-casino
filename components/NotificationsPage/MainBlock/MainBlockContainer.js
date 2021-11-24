import styles from '../../../styles/NotificationsPage/NotificationsPage.module.scss';
import {NotifyHeader} from "./NotifyHeader";
import {MessagesContainer} from "./MessagesContainer";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useContext} from "react";
import {NotifyContext} from "../../NotifyContext/NotifyContext";



export const MainBlockContainer = ({t, userInfo, notifyData}) => {

  const router = useRouter();
  let locale = router.locale;

  const subscriptInfo = useSelector((store) => store.userSubscriptionsData.notifySubscribe);



  return (
    <div className={styles.notifyContainer}>
      <NotifyHeader subscriptInfo={subscriptInfo} notifyData={notifyData} t={t}/>
      <div className={styles.mainMessagesWrapper}>
        <MessagesContainer notifyData={notifyData} t={t}/>
      </div>
    </div>
  )
}