import styles from '../../../styles/DepositPage/DepositPage.module.scss';

export const DepositInputCount = ({t}) => {

  return (
    <div className={styles.depositInputCountWrapper}>
      <label className={styles.labelEnterSum} htmlFor="depositInputCount">Enter sum of deposit</label>
      <label className={styles.labelIconCurrency} htmlFor="depositInputCount">$</label>
      <input
        type="number"
        id="depositInputCount"
        className={styles.depositSummInput}
      />
    </div>
  )
}