import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss';
import {Heading} from "../ComponentsForPages/Heading";
import {TableContainer} from "./TableContainer";



export const BalancePage = ({t}) => {

  return (
    <div className={styles.mainContainer}>
      <Heading t={t} heading={"myAccount.pageHeadings.balance"}/>
      <TableContainer t={t} />

    </div>

  )
}