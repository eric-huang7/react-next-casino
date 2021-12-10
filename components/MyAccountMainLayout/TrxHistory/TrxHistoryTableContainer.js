import styles from '../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss';
import {TableHeading} from "../BalanceComponents/TableHeading";
import {TrxTableHeading} from "./TrxHistoryTable/TrxTableHeading";
import {TrxTableRow} from "./TrxHistoryTable/TrxTableRow";
import {dateFormatter} from "../../../helpers/dateTranslator";
import {currencyInfo} from "../../../helpers/currencyInfo";
import {useRouter} from "next/router";


export const TrxHistoryTableContainer = ({t, userInfo, currencyData}) => {
  const router = useRouter()

  return (
    <div className={styles.tableContainerWrapper}>
      <table cellSpacing={4} className={styles.trxTableContainer}>
        <thead>
        <TrxTableHeading t={t}/>
        </thead>
        <tbody>
        {
          userInfo.userPayments.payments.map((paymentData) => {
            let date = dateFormatter(paymentData.timestamp, router.locale);

            let status = statusValue(paymentData.status);
            let action = paymentData.type;
            let paymentSystem = paymentSystemValue(paymentData.provider);
            let amount = Number(paymentData.amount);
            let currency = currencyInfo(currencyData.currency.results, paymentData.currency_id)[0].abbreviation

            return (
              <TrxTableRow
            key = {`payment table key ${paymentData.id}`}
            date={date}
            status={status}
            action={action}
            amount={amount}
            currency={currency}
            paymentSystem={paymentSystem}
            currencyData = {currencyData}
            paymentData = {paymentData}
            t = {t}
            />
          )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

function statusValue(status) {
  switch (status) {
    case 1:
      return 'myAccount.history.transactions.inputsItems.status.pending';
    case 2:
      return 'myAccount.history.transactions.inputsItems.status.success';
    case 3:
      return 'myAccount.history.transactions.inputsItems.status.error';
    default:
      return 'Undefined';
  }
}
function paymentSystemValue(provider) {
  switch (provider) {
    case 1:
      return 'myAccount.history.transactions.table.paymentSystem.exchange';
    case 2:
      return 'myAccount.history.transactions.table.paymentSystem.coinsPaid';
    case 3:
      return 'myAccount.history.transactions.table.paymentSystem.creditCard';
    default:
      return 'Unknown';
  }
}