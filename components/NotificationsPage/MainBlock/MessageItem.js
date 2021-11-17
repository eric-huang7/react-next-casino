import styles from '../../../styles/NotificationsPage/NotificationsPage.module.scss';
import {urlGen} from "../../MainLayout/Header/UserBlock/url";
import Link from "next/link";
import {formatDistance} from "date-fns";
import useWindowDimensions from "../../../hooks/useWindowDimensions";


export const MessageItem = ({messageType, icon, additionalText, text, link, time, read}) => {
  const {height, width} = useWindowDimensions();

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
        <span>{read}</span>
        {
          additionalText ? <p className={styles.messageAdditionalDescription}>{additionalText}</p> : ''
        }
        {
          link ? <Link href={link}><a>{link}</a></Link> : ""
        }
        {
        width > 570 ? '' : <span className={styles.time}>{formatDistance(new Date(Math.trunc(Number(time) * 1000)), new Date(), {addSuffix: false})}</span>
        }
      </div>
      {
        width > 570 ? <span className={styles.time}>{formatDistance(new Date(Math.trunc(Number(time) * 1000)), new Date(), {addSuffix: false})}</span> : ''
      }
    </div>
  )
}