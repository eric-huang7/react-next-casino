import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss';
import {DepositButton} from "./DepositButton";


export const TableRow = ({t}) => {

  return (
    <tr className={styles.tableRow}>
      <td className={`${styles.tableDataActive} ${styles.active}`}>
        <p>
          {t("myAccount.balance.table.items.active")}
        </p>
      </td>
      <td className={styles.tableCurrency}>
        eur
      </td>
      <td className={styles.tableAmount}>
        00000000000000000000000000000 EUR
      </td>
      <td className={styles.tableCashOut}>
        00000000000000000000000000000 EUR
      </td>
      <td className={styles.tableActions}>
        <div>
          <DepositButton t={t} />
          <button className={styles.cashoutLink}>{t("myAccount.balance.buttons.cashout")}</button>
        </div>
      </td>
    </tr>
  )
}