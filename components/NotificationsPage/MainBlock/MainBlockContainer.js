import styles from '../../../styles/NotificationsPage/NotificationsPage.module.scss';
import {NotifyHeader} from "./NotifyHeader";
import {MessagesContainer} from "./MessagesContainer";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";



export const MainBlockContainer = ({t, userInfo}) => {

  const router = useRouter();
  let locale = router.locale;

  return (
    <div className={styles.notifyContainer}>
      <NotifyHeader t={t}/>
      <MessagesContainer t={t}/>

    </div>
  )
}