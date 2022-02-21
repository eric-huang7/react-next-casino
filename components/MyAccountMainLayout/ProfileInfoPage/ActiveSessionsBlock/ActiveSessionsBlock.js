import styles from '../../../../styles/MyAccount/UserInfoPage/ActiveSessionsBlock.module.scss'
import { SessionsTable } from './SessionsTable'
import { auth_type_id, is_admin, siteID } from '../../../../envs/envsForFetching'
import axios from 'axios'
import { delete_user_session_url } from '../../../../redux/url/url'
import { useDispatch } from 'react-redux'
import { getActiveUserSessions, getClosedUserSessions } from '../../../../redux/actions/userData'

export const ActiveSessionsBlock = ({ t, userInfo }) => {
  const dispatch = useDispatch()

  const closeSessionHandler = (session) => {

    let body1 = {
      site_id: siteID,
      auth_type_id: auth_type_id,
      username: userInfo.user.user.username,
      is_admin: is_admin
    }

    let body = JSON.stringify(body1)
    axios.delete(delete_user_session_url(session.id))
      .then((data) => {

        dispatch(getActiveUserSessions())
        dispatch(getClosedUserSessions())
      })
      .catch((error) => {

      })
  }

  return (
    <div className={styles.activeSessionsMainBlock}>
      <h3 className={styles.activeSessionsHeading}>{t('myAccount.profilePage.sessionsBlocks.activeSessions')}</h3>
      <SessionsTable closeSessionHandler={closeSessionHandler} t={t} sessionsInfo={userInfo}/>
    </div>
  )
}