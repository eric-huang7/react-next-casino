import { BetsHistoryRow } from './BetsHistoryTable/BetsHistoryRow'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import { chakra, Text } from "@chakra-ui/react"

const columns = [
  ("myAccount.history.bets.table.headings.game"),
  ("myAccount.history.bets.table.headings.bet"),
  ("myAccount.history.bets.table.headings.win"),
  ("myAccount.history.bets.table.headings.date")
]

export const BetsHistoryTableContainer = ({ t, betsData }) => (
  <chakra.table cellSpacing={4} sx={{borderCollapse: "unset !important"}} w="100%">
    <chakra.thead>
      <chakra.tr bg="#eeeeee" >
        {columns.map(item => (
          <chakra.th textAlign="left" p="12px 10px">
            <Text fontSize="15px" color="#595656" fontFamily="Verdana">{t(item)}</Text>
          </chakra.th>
          ))}
      </chakra.tr>
    </chakra.thead>
    <tbody>
    {betsData.bets.map((betData, index) => (
      <ErrorText key={`bet table ${betData.id}`}>
        <BetsHistoryRow index={index} key={`bet table ${betData.id}`} betData={betData} t={t}/>
      </ErrorText>
    ))
    }
    </tbody>
  </chakra.table>
)
