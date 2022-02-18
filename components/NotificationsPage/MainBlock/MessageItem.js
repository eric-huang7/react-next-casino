import styles from '../../../styles/NotificationsPage/NotificationsPage.module.scss'
import { urlGen } from '../../../helpers/imageUrl'
import Link from 'next/link'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { useRouter } from 'next/router'
import { dateTranslator } from '../../../helpers/dateTranslator'
import { messageStyle } from '../../../helpers/messageStyler'

export const MessageItem = ({ messageType, icon, additionalText, text, link, time, read }) => {
  const { width } = useWindowDimensions()
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
          additionalText ? <Link href={link}><a style={{ color: colorOfLink }}>{additionalText}</a></Link> : ''
        }
        {
          width > 570 ? '' : <span className={styles.time}>{dateTranslator(time, locale)}</span>
        }
      </div>
      {
        width > 570 ? <span className={styles.time}>{dateTranslator(time, locale)}</span> : ''
      }
    </div>
  )
}

