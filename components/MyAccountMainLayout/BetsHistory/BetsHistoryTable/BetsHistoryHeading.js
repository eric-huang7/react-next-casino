import styles from '../../../../styles/MyAccount/BetsHistory/BetsHistory.module.scss';


export const BetsHistoryHeading = ({t}) => {


  return (
    <tr className={styles.headingRow}>
      <th>
        <p>
          {t("myAccount.history.bets.table.headings.game")}
        </p>
      </th>
      <th>
        <p>
          {t("myAccount.history.bets.table.headings.bet")}
        </p>
      </th>
      <th>
        <p>
          {t("myAccount.history.bets.table.headings.win")}
        </p>
      </th>
      <th>
        <p>
          {t("myAccount.history.bets.table.headings.date")}
        </p>
      </th>
    </tr>
  )
}