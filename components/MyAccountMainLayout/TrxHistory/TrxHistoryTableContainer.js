import styles from '../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss';
import {TableHeading} from "../BalanceComponents/TableHeading";
import {TrxTableHeading} from "./TrxHistoryTable/TrxTableHeading";
import {TrxTableRow} from "./TrxHistoryTable/TrxTableRow";


export const TrxHistoryTableContainer = ({t, userInfo, currencyData}) => {


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
              <TrxTableRow key={`payment table key ${paymentData.id}`} currencyData={currencyData} paymentData={paymentData} t={t}/>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}