import styles from '../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss'
import { TrxTableHeading } from './TrxHistoryTable/TrxTableHeading'
import { TrxTableRow } from './TrxHistoryTable/TrxTableRow'
import { dateFormatter } from '../../../helpers/dateTranslator'
import { currencyInfo } from '../../../helpers/currencyInfo'
import { useRouter } from 'next/router'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'

export const TrxHistoryTableContainer = ({ t, userInfo, currencyData, wasFiltering }) => {
  const router = useRouter()

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
              let date = dateFormatter(paymentData.timestamp, router.locale)

              let status = statusValue(paymentData.status)
              let action = `myAccount.history.transactions.table.actions.${paymentData.type}`
              let paymentSystem = paymentSystemValue(paymentData.provider)
              let amount = Number(paymentData.amount)
              let currency = currencyInfo(currencyData.currency.results, paymentData.currency_id)[0].abbreviation

              return (
                <ErrorEmpty key={`payment table key ${paymentData.id}`}>
                  <TrxTableRow
                    key={`payment table key ${paymentData.id}`}
                    date={date}
                    status={status}
                    action={action}
                    amount={amount}
                    currency={currency}
                    paymentSystem={paymentSystem}
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

function statusValue (status) {
  switch (status) {
    case 1:
      return 'myAccount.history.transactions.inputsItems.status.pending'
    case 2:
      return 'myAccount.history.transactions.inputsItems.status.success'
    case 3:
      return 'myAccount.history.transactions.inputsItems.status.error'
    case 4:
      return 'myAccount.history.transactions.inputsItems.status.discarded'
    default:
      return 'Undefined'
  }
}

function paymentSystemValue (provider) {
  switch (provider) {
    case 1:
      return 'myAccount.history.transactions.table.paymentSystem.exchange'
    case 2:
      return 'myAccount.history.transactions.table.paymentSystem.coinsPaid'
    case 3:
      return 'myAccount.history.transactions.table.paymentSystem.creditCard'
    default:
      return 'Unknown'
  }
}