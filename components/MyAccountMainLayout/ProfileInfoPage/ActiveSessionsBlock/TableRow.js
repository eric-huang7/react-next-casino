import styles from '../../../../styles/MyAccount/UserInfoPage/ActiveSessionsBlock.module.scss'
import { dateFormatter } from '../../../../helpers/dateTranslator'
import { useRouter } from 'next/router'

export const TableRow = ({ t, sessionData, currentSession, closeSessionHandler }) => {
  const router = useRouter()

  let date = dateFormatter(sessionData.time_created, router.locale)
  let ip = sessionData.ip_address.replace('::ffff:', '')
  let country = sessionData.ip_country
  let device = sessionData.device
  let isCurrent = currentSession === sessionData.id

  return (
    <tr>
      <td>{date}</td>
      <td>{ip}</td>
      <td>{country}</td>
      <td>{device}</td>
      <td>
        {
          isCurrent
            ?
            t('myAccount.profilePage.sessionsBlocks.current')
            :
            <button
              className={styles.sessionCloseButton}
              onClick={() => closeSessionHandler(sessionData)}
            >
              {t('myAccount.profilePage.sessionsBlocks.close')}
            </button>
        }
      </td>
    </tr>
  )
}