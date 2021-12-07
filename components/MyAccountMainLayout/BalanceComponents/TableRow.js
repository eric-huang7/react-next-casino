import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss';
import {DepositButton} from "./DepositButton";


export const TableRow = ({t, balanceData}) => {
  console.log(balanceData)

  let currency = balanceData.currency_id;
  let amount = balanceData.current_balance;
  let cashOut = balanceData.cash_amount;

  return (
    <tr className={styles.tableRow}>
      {
        Number(balanceData.is_default) === 0 ?
          <td className={`${styles.tableDataActive}`}>
            <p>
              {t("myAccount.balance.table.items.select")}
            </p>
          </td>
          :
          <td className={`${styles.tableDataActive} ${styles.active}`}>
            <p>
              {t("myAccount.balance.table.items.active")}
            </p>
          </td>
      }
      <td className={styles.tableCurrency}>
        {currency}
      </td>
      <td className={styles.tableAmount}>
        {`${amount} ${currency}`}
      </td>
      <td className={styles.tableCashOut}>
        {`${cashOut} ${currency}`}
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