import styles from '../../../../styles/MyAccount/UserInfoPage/ActiveSessionsBlock.module.scss'
import { TableHead } from './TableHead'
import { TableRow } from './TableRow'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'

export const SessionsTable = ({ t, sessionsInfo }) => {

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
              <ErrorEmpty key={`session ${session.id}`}>
                <TableRow key={`session ${session.id}`} t={t} sessionData={session}/>
              </ErrorEmpty>
            )
          })
        }

        </tbody>
      </table>
    </div>

  )
}