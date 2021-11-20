import styles from '../../../styles/NotificationsPage/NotificationsPage.module.scss';
import {NotifyHeader} from "./NotifyHeader";
import {MessagesContainer} from "./MessagesContainer";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useContext} from "react";
import {NotifyContext} from "../../../pages/NotifyContext";



export const MainBlockContainer = ({t, userInfo, notifyData}) => {

  const router = useRouter();
  let locale = router.locale;

  const subscriptInfo = useSelector((store) => store.userSubscriptionsData.notifySubscribe);

  const socket = useContext(NotifyContext)

  console.log(socket.socket, '<======socket notifi page');

  console.log('socket.socket.messages____socket.socket.messages__', socket.socket.messages)


  return (
    <div className={styles.notifyContainer}>
      <NotifyHeader subscriptInfo={subscriptInfo} notifyData={notifyData} t={t}/>
      <div className={styles.mainMessagesWrapper}>
        <MessagesContainer notifyData={notifyData} t={t}/>
      </div>
    </div>
  )
}