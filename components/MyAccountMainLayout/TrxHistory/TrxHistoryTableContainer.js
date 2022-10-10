import styles from '../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss'
import { TrxTableHeading } from './TrxHistoryTable/TrxTableHeading'
import { TrxTableRow } from './TrxHistoryTable/TrxTableRow'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import {chakra, Text} from "@chakra-ui/react";

export const TrxHistoryTableContainer = ({ t, userInfo, currencyData, wasFiltering }) => {
  const noItems = wasFiltering && userInfo?.userPayments?.payments?.length === 0;

  return (
    <div className={styles.tableContainerWrapper}>
      <chakra.table cellSpacing={4}
                    // className={styles.trxTableContainer}
      >
        <chakra.thead>
        <TrxTableHeading t={t}/>
        </chakra.thead>
        {!noItems && <chakra.tbody>
          {userInfo.userPayments.payments.map((paymentData) => (
            <ErrorEmpty key={`payment table key ${paymentData.id}`}>
              <TrxTableRow
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
      {noItems && <p className={styles.noDataFiltering}>
        {t('myAccount.history.transactions.noItems')}
      </p>}
    </div>
  )
}
