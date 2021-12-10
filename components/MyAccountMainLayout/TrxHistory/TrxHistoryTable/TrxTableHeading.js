import styles from '../../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss';

export const TrxTableHeading = ({t}) => {

  return (
    <tr className={styles.headingRow}>
      <th className={styles.dateHead}>
        <p>
          {t("myAccount.history.transactions.table.headings.date")}
        </p>
      </th>
      <th className={styles.statusHead}>
        <p>
          {t("myAccount.history.transactions.table.headings.status")}
        </p>
      </th>
      <th className={styles.actionHead}>
        <p>
          {t("myAccount.history.transactions.table.headings.action")}
        </p>
      </th >
      <th className={styles.paymentHead}>
        <p>
          {t("myAccount.history.transactions.table.headings.paymentSystem")}
        </p>
      </th>
      <th className={styles.amountHead}>
        <p>
          {t("myAccount.history.transactions.table.headings.amount")}
        </p>
      </th>
    </tr>
  )
}