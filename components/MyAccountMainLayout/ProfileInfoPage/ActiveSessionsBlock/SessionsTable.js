import styles from '../../../../styles/MyAccount/UserInfoPage/ActiveSessionsBlock.module.scss'
import { TableHead } from './TableHead'
import { TableRow } from './TableRow'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'
import { chakra, Text } from "@chakra-ui/react"

const columns = [
];

export const SessionsTable = ({ t, sessionsInfo, closeSessionHandler }) => {
  const columns = [
    t('myAccount.profilePage.sessionsBlocks.tableHead.createdAt'),
    'IP',
    t('myAccount.profilePage.sessionsBlocks.tableHead.country'),
    t('myAccount.profilePage.sessionsBlocks.tableHead.device'),
    ''
  ];

  return (
    <div className={styles.sessionsTableWrapper}>
      <chakra.table className={styles.sessionsTable}>
        <chakra.thead>
          <chakra.tr bg="#eeeeee" >
            {columns.map(item => (
              <chakra.th textAlign="left" p="12px 10px">
                <Text fontSize="15px" color="#595656" fontFamily="Verdana">{item}</Text>
              </chakra.th>
            ))}
          </chakra.tr>
          {/*<TableHead t={t}/>*/}
        </chakra.thead>
        <chakra.tbody>
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
        </chakra.tbody>
      </chakra.table>
    </div>
  )
}
