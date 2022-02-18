import styles from '../../../../../styles/NotificationPopup/NotificationPopup.module.scss';
import Link from "next/link";
import {urlGen} from "../../../../../helpers/imageUrl";
import {formatDistance} from "date-fns";
import { ru } from 'date-fns/locale'
import {dateTranslator} from "../../../../../helpers/dateTranslator";
import {useRouter} from "next/router";
import { messageStyle } from '../../../../../helpers/messageStyler'


export const MessageItem = ({messageType, icon, additionalText, text, link, time}) => {
  const router = useRouter()
  let locale = router.locale

  let messageIcon = messageStyle(messageType).messageIcon;
  let colorOfLink = messageStyle(messageType).colorOfLink;


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