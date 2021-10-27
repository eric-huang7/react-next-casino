import styles from '../../../../styles/DepositPage/DepositPage.module.scss';

export const DepositInputCount = ({t, currencySymbol, userDepositValue, depositValueInputHandler, userDepositValueError}) => {


  return (
    <div className={styles.depositInputCountWrapper}>
      <label className={styles.labelEnterSum} htmlFor="depositInputCount">Enter sum of deposit</label>
      <label className={styles.labelIconCurrency} htmlFor="depositInputCount">{currencySymbol}</label>
      <input
        type="number"
        id="depositInputCount"
        className={styles.depositSummInput}
        defaultValue={userDepositValue}
        onChange={(e) => depositValueInputHandler(e)}
      />
      <span className={styles.errorMessage}>{userDepositValueError}</span>
    </div>
  )
}