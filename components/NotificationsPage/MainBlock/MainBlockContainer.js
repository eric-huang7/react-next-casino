import styles from '../../../styles/NotificationsPage/NotificationsPage.module.scss';
import {NotifyHeader} from "./NotifyHeader";
import {MessagesContainer} from "./MessagesContainer";


export const MainBlockContainer = ({t}) => {

  return (
    <div className={styles.notifyContainer}>
      <NotifyHeader t={t}/>
      <MessagesContainer />

    </div>
  )
}