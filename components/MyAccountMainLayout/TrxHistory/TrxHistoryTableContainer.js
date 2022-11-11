import { TrxTableRow } from './TrxHistoryTable/TrxTableRow'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import {chakra, Text} from "@chakra-ui/react";
import BodyText from "../../typography/BodyText";

const columns = [
  "myAccount.history.transactions.table.headings.date",
  "myAccount.history.transactions.table.headings.status",
  "myAccount.history.transactions.table.headings.action",
  "myAccount.history.transactions.table.headings.paymentSystem",
  "myAccount.history.transactions.table.headings.amount",
]

export const TrxHistoryTableContainer = ({ t, userInfo, currencyData, wasFiltering }) => {
  const noItems = wasFiltering && userInfo?.userPayments?.payments?.length === 0;

  return (
    <div>
      <chakra.table cellSpacing={4} sx={{borderCollapse: "unset !important"}}>
        <chakra.thead>
          <chakra.tr bg="#eeeeee" >
            {columns.map((item, index) => (
              <chakra.th key={index} textAlign="left" p="12px 10px">
                <Text fontSize="15px" color="#595656" fontFamily="Verdana">{t(item)}</Text>
              </chakra.th>
            ))}
          </chakra.tr>
        </chakra.thead>
        {!noItems && <chakra.tbody>
          {userInfo.userPayments.payments.map((paymentData, index) => (
            <ErrorEmpty key={`payment table key ${paymentData.id}`}>
              <TrxTableRow
                index={index}
                key={`payment table key ${paymentData.id}`}
                currencyData={currencyData}
                paymentData={paymentData}
                userInfo={userInfo}
                t={t}
              />
            </ErrorEmpty>
          ))}
        </chakra.tbody>}
      </chakra.table>
      {noItems && <BodyText borderBottom="1px solid #b0b0b0" pb="15px">
        {t('myAccount.history.transactions.noItems')}
      </BodyText>}
    </div>
  )
}
