import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss';
import {TableHeading} from "./TableHeading";
import {TableRow} from "./TableRow";
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'

export const TableContainer = ({t, balanceInfo, currency}) => {

  return (
    <table className={styles.balanceTable} cellSpacing={0}>
      <thead>
        <TableHeading t={t} />
      </thead>
      <tbody>
      {
        balanceInfo.balance.balances.map((el) => {
          return (
            <ErrorText key={`${el.id} balance table item`}>
              <TableRow
                key={`${el.id} balance table item`}
                currencyData={currency}
                t={t}
                balanceData={el}
              />
            </ErrorText>
          )
        })
      }
      </tbody>
    </table>
  )
}