import styles from '../../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss';


export const BonusTableHeading = ({t}) => {

  return (
    <tr className={styles.headingRow}>
      <th>
        <p>
          {t("myAccount.history.bonus.table.headings.title")}
        </p>
      </th>
      <th>
        <p>
          {t("myAccount.history.bonus.table.headings.stage")}
        </p>
      </th>
      <th>
        <p>
          {t("myAccount.history.bonus.table.headings.amount")}
        </p>
      </th>
      <th>
        <p>
          {t("myAccount.history.bonus.table.headings.wager")}
        </p>
      </th>
      <th>
        <p className={styles.validUntil}>
          {t("myAccount.history.bonus.table.headings.validUtil")}
        </p>
      </th>
      <th>
        <p>
          {t("myAccount.history.bonus.table.headings.date")}
        </p>
      </th>
    </tr>
  )
}