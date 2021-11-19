import styles from '../../../../../styles/NotificationPopup/NotificationPopup.module.scss';
import Link from "next/link";
import {urlGen} from "../url";
import {formatDistance} from "date-fns";
import { ru } from 'date-fns/locale'
import {dateTranslator} from "../../../../../helpers/dateTranslator";
import {useRouter} from "next/router";


export const MessageItem = ({messageType, icon, additionalText, text, link, time}) => {
  const router = useRouter()
  let locale = router.locale

  let messageIcon = '/assets/icons/notifications/sound.svg'
  let colorOfLink = '#ef9b92'

  if (messageType === 'bonus') {
    messageIcon = '/assets/icons/notifications/diam.svg';
    colorOfLink = '#47b14c'
  } else if (messageType === 'redeem' || messageType === 'deposit' || messageType === 'withdraw') {
    messageIcon = '/assets/icons/notifications/wallet.svg';
    colorOfLink = '#ef9b92'
  } else if (messageType === 'freespins') {
    messageIcon = '/assets/icons/notifications/arr.svg';
    colorOfLink = '#ef9b92'
  } else if (messageType === 'tournaments') {
    messageIcon = '/assets/icons/notifications/cup.svg';
    colorOfLink = '#ef9b92'
  } else {
    messageIcon = '/assets/icons/notifications/sound.svg';
    colorOfLink = '#ef9b92'
  }

  return (
    <div className={styles.messageItemWrapper}>
      <div className={styles.messageIcon}>
        <img src={icon ? urlGen(icon) : messageIcon} alt="message icon"/>
      </div>
      <div className={styles.messageData}>
        <p className={styles.messageDescription}>{text}</p>
        {
          additionalText ? <Link href={link}><a style={{color: colorOfLink}}>{additionalText}</a></Link> : ''
        }
        <span className={styles.time}>{dateTranslator(time, locale)}</span>
      </div>
    </div>
  )
}