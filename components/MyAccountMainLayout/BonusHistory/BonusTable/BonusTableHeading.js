import styles from '../../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss';


export const BonusTableHeading = ({t}) => {

  return (
    <tr className={styles.headingRow}>
      <th>
        <p>
          Title
        </p>
      </th>
      <th>
        <p>
          Stage
        </p>
      </th>
      <th>
        <p>
          Amount
        </p>
      </th>
      <th>
        <p>
          Wager
        </p>
      </th>
      <th>
        <p>
          Valid Util
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