import styles from '../../../../styles/MyAccount/UserInfoPage/ActiveSessionsBlock.module.scss';
import {TableHead} from "./TableHead";
import {TableRow} from "./TableRow";



export const SessionsTable = ({t, sessionsInfo}) => {



  return (
    <div className={styles.sessionsTableWrapper}>
      <table className={styles.sessionsTable}>
        <thead>
        <TableHead t={t}/>
        </thead>
        <tbody>
        {
          sessionsInfo.sessions.map((session) => {
            return (
              <TableRow key={`session ${session.id}`} t={t} sessionData={session}/>
            )
          })
        }

        </tbody>
      </table>
    </div>

  )
}