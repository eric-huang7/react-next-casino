import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss';
import {TableHeading} from "./TableHeading";
import {TableRow} from "./TableRow";

export const TableContainer = ({t}) => {


  return (
    <table className={styles.balanceTable} cellSpacing={0}>
      <thead>
        <TableHeading t={t} />
      </thead>
      <tbody>
        <TableRow t={t}/>
        <TableRow t={t}/>
        <TableRow t={t}/>
        <TableRow t={t}/>
        <TableRow t={t}/>
        <TableRow t={t}/>
        <TableRow t={t}/>
        <TableRow t={t}/>
        <TableRow t={t}/>
      </tbody>
    </table>
  )
}