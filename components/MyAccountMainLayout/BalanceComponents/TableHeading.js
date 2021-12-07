import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss';


export const TableHeading = ({t}) => {


  return (
    <tr className={styles.headingRow} >
      <th className={styles.headingActive}>

      </th>
      <th>
        <p>
          Currency
        </p>
      </th>
      <th>
        <p>
          Amount
        </p>
      </th>
      <th>
        <p>
          Available to cash out
        </p>
      </th>
      <th className={styles.headingActions}>
        <p>
          Actions
        </p>
      </th>
    </tr>
  )
}