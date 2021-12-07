import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss';


export const TableHeading = ({t}) => {


  return (
    <tr className={styles.headingRow} >
      <th className={styles.headingActive}>

      </th>
      <th className={styles.headingCurrency}>
        <p>
          {t("myAccount.balance.table.headings.currency")}
        </p>
      </th>
      <th>
        <p>
          {t("myAccount.balance.table.headings.amount")}
        </p>
      </th>
      <th>
        <p>
          {t("myAccount.balance.table.headings.cashout")}
        </p>
      </th>
      <th className={styles.headingActions}>
        <p>
          {t("myAccount.balance.table.headings.actions")}
        </p>
      </th>
    </tr>
  )
}