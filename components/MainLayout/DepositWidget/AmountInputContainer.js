import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';

export const AmountInputContainer = ({t}) => {


  return (
    <div className={styles.amountInputWrapper}>
      <input className={styles.widgetAmountInput} type="number" id={'widgetAmountInput'} />
      <label className={styles.currencyLabel} htmlFor="widgetAmountInput">$</label>
      <label className={styles.amountInputLabel} htmlFor="widgetAmountInput">Amount</label>
    </div>
  )
}