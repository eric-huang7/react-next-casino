import styles from '../../../../styles/MyAccount/BetsHistory/BetsHistory.module.scss';


export const BetsHistoryHeading = ({t}) => {


  return (
    <tr className={styles.headingRow}>
      <th>
        <p>
          Game
        </p>
      </th>
      <th>
        <p>
          Bet
        </p>
      </th>
      <th>
        <p>
          Win
        </p>
      </th>
      <th>
        <p>
          Date
        </p>
      </th>
    </tr>
  )
}