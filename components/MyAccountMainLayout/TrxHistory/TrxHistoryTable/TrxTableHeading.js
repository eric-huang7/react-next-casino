import styles from '../../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss';

export const TrxTableHeading = ({t}) => {

  return (
    <tr className={styles.headingRow}>
      <th className={styles.dateHead}>
        <p>
          Date
        </p>
      </th>
      <th className={styles.statusHead}>
        <p>
          Status
        </p>
      </th>
      <th className={styles.actionHead}>
        <p>
          Action
        </p>
      </th >
      <th className={styles.paymentHead}>
        <p>
          Payment System
        </p>
      </th>
      <th className={styles.amountHead}>
        <p>
          Amount
        </p>
      </th>
    </tr>
  )
}