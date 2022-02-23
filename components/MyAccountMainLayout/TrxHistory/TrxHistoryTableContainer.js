import styles from '../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss'
import { TrxTableHeading } from './TrxHistoryTable/TrxTableHeading'
import { TrxTableRow } from './TrxHistoryTable/TrxTableRow'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'

export const TrxHistoryTableContainer = ({ t, userInfo, currencyData, wasFiltering }) => {

  if (wasFiltering && userInfo?.userPayments?.payments?.length === 0) {

    return (
      <div className={styles.tableContainerWrapper}>
        <table cellSpacing={4} className={styles.trxTableContainer}>
          <thead>
          <TrxTableHeading t={t}/>
          </thead>
        </table>
        <p className={styles.noDataFiltering}>
          {t('myAccount.history.transactions.noItems')}
        </p>
      </div>
    )

  } else {

    return (
      <div className={styles.tableContainerWrapper}>
        <table cellSpacing={4} className={styles.trxTableContainer}>
          <thead>
          <TrxTableHeading t={t}/>
          </thead>
          <tbody>
          {
            userInfo.userPayments.payments.map((paymentData) => {
              return (
                <ErrorEmpty key={`payment table key ${paymentData.id}`}>
                  <TrxTableRow
                    key={`payment table key ${paymentData.id}`}
                    currencyData={currencyData}
                    paymentData={paymentData}
                    userInfo={userInfo}
                    t={t}
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

}
