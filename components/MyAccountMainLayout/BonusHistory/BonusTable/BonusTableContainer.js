import { BonusTableRow } from './BonusTableRow'
import { LoadingComponent } from '../../../LoadingComponent/LoadingComponent'
import ErrorText from '../../../ErrorBoundaryComponents/ErrorText'
import {chakra, Text} from "@chakra-ui/react";

const columns = [
  ("myAccount.history.bonus.table.headings.title"),
  ("myAccount.history.bonus.table.headings.stage"),
  ("myAccount.history.bonus.table.headings.amount"),
  ("myAccount.history.bonus.table.headings.wager"),
  ("myAccount.history.bonus.table.headings.validUtil"),
  ("myAccount.history.bonus.table.headings.date"),
]

export const BonusTableContainer = ({ t, userInfo, currencyData }) => userInfo.bonusesHistory?.success ? (
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
    {userInfo.bonusesHistory.bonuses.map((bonusData, index) => (
      <ErrorText key={`bet table ${bonusData.id}`}>
        <BonusTableRow
          key={`${bonusData.id} bonus table key`}
          t={t}
          bonusData={bonusData}
          currencyData={currencyData}
          index={index}
        />
      </ErrorText>
    ))
    }
    </tbody>
  </chakra.table>
) : <LoadingComponent/>
