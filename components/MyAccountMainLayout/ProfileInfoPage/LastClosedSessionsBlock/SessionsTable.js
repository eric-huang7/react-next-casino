import { TableRow } from './TableRow'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'
import {chakra, Text} from "@chakra-ui/react";
import {Box} from "@chakra-ui/layout";

export const SessionsTable = ({ t, sessionsInfo }) => {
  const columns = [
    t('myAccount.profilePage.sessionsBlocks.tableHead.createdAt'),
    'IP',
    t('myAccount.profilePage.sessionsBlocks.tableHead.country'),
    t('myAccount.profilePage.sessionsBlocks.tableHead.device'),
  ];

  return (
    <Box maxH="600px" overflowY="auto">
      <chakra.table sx={{borderCollapse: "unset !important"}}>
        <chakra.thead>
          <chakra.tr bg="#eeeeee" >
            {columns.map((item, index) => (
              <chakra.th key={index} p="12px 10px" h="53px">
                <Text fontSize="15px" color="#595656" fontFamily="Verdana">{item}</Text>
              </chakra.th>
            ))}
          </chakra.tr>
        </chakra.thead>
        <chakra.tbody>
        {
          sessionsInfo.sessions.map((session, index) => {
            return (
              <ErrorEmpty key={`session ${session.id}`}>
                <TableRow index={index} key={`session ${session.id}`} t={t} sessionData={session}/>
              </ErrorEmpty>
            )
          })
        }

        </chakra.tbody>
      </chakra.table>
    </Box>
  )
}
