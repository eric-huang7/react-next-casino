import styles from '../../../../../styles/NotificationPopup/NotificationPopup.module.scss';
import Link from "next/link";
import {urlGen} from "../url";


export const MessageItem = ({messageType, icon, additionalText, text, link}) => {
  let messageIcon = '/assets/icons/notifications/sound.svg'

  if (messageType === 'bonus') {
    messageIcon = '/assets/icons/notifications/diam.svg';
  } else if (messageType === 'redeem' || messageType === 'deposit' || messageType === 'withdraw') {
    messageIcon = '/assets/icons/notifications/wallet.svg';
  } else if (messageType === 'freespins') {
    messageIcon = '/assets/icons/notifications/arr.svg';
  } else if (messageType === 'tournaments') {
    messageIcon = '/assets/icons/notifications/sound.svg';
  } else {
    messageIcon = '/assets/icons/notifications/sound.svg';
  }


  return (
    <div className={styles.messageItemWrapper}>
      <div className={styles.messageIcon}>
        <img src={icon ? urlGen(icon) : messageIcon} alt="message icon"/>
      </div>
      <div className={styles.messageData}>
        <p className={styles.messageDescription}>{text}</p>
        {
          additionalText ? <p className={styles.messageAdditionalDescription}>{additionalText}</p> : ''
        }
        {
          link ? <Link href={'/#'}><a>{link}</a></Link> : ""
        }
        <span className={styles.time}>48 minutes</span>
      </div>
    </div>
  )
}