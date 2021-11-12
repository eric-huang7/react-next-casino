import styles from '../../../../../styles/NotificationPopup/NotificationPopup.module.scss';
import Link from "next/link";


export const MessageItem = () => {


  return (
    <div className={styles.messageItemWrapper}>
      <div className={styles.messageIcon}>
        <img src="/assets/icons/notifications/sound.svg" alt="message icon"/>
      </div>
      <div className={styles.messageData}>
        <p className={styles.messageDescription}>You have received 30 Free spins</p>
        <Link href={'/#'}><a>Play now</a></Link>
        <span className={styles.time}>48 minutes</span>
      </div>
    </div>
  )
}