import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss';
import {TableHeading} from "./TableHeading";
import {TableRow} from "./TableRow";

export const TableContainer = ({t, balanceInfo}) => {

  return (
    <table className={styles.balanceTable} cellSpacing={0}>
      <thead>
        <TableHeading t={t} />
      </thead>
      <tbody>
      {
        balanceInfo.balance.balances.map((el) => {
          return (
            <TableRow key={`${el.id} balance table item`} t={t} balanceData={el}/>
          )
        })
      }
        {/*<TableRow t={t}/>*/}
        {/*<TableRow t={t}/>*/}
        {/*<TableRow t={t}/>*/}
        {/*<TableRow t={t}/>*/}
        {/*<TableRow t={t}/>*/}
        {/*<TableRow t={t}/>*/}
        {/*<TableRow t={t}/>*/}
        {/*<TableRow t={t}/>*/}
        {/*<TableRow t={t}/>*/}
      </tbody>
    </table>
  )
}