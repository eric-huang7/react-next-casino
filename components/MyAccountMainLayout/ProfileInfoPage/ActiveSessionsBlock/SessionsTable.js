import styles from '../../../../styles/MyAccount/UserInfoPage/ActiveSessionsBlock.module.scss'
import { TableHead } from './TableHead'
import { TableRow } from './TableRow'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'

export const SessionsTable = ({ t, sessionsInfo, closeSessionHandler }) => {

  return (
    <div className={styles.sessionsTableWrapper}>
      <table className={styles.sessionsTable}>
        <thead>
        <TableHead t={t}/>
        </thead>
        <tbody>
        {
          sessionsInfo.userActiveSessions.sessions.map((session) => {
            return (
              <ErrorEmpty key={`session ${session.id}`}>
                <TableRow
                  closeSessionHandler={closeSessionHandler}
                  key={`session ${session.id}`}
                  t={t}
                  sessionData={session}
                  currentSession={sessionsInfo.userActiveSessions.current ? sessionsInfo.userActiveSessions.current : sessionsInfo.user.user.last_successful_login_id}
                />
              </ErrorEmpty>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}