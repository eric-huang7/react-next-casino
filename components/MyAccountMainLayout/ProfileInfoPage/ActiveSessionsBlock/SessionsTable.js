import styles from '../../../../styles/MyAccount/UserInfoPage/ActiveSessionsBlock.module.scss';
import {TableHead} from "./TableHead";
import {TableRow} from "./TableRow";


export const SessionsTable = ({t, sessionsInfo, closeSessionHandler}) => {

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
              <TableRow
                closeSessionHandler={closeSessionHandler}
                key={`session ${session.id}`}
                t={t}
                sessionData={session}
                currentSession={sessionsInfo.userActiveSessions.current ? sessionsInfo.userActiveSessions.current : sessionsInfo.user.user.last_successful_login_id}
              />
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}