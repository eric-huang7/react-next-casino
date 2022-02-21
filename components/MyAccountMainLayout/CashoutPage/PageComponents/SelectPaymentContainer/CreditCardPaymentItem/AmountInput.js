import styles from '../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss'
import { numberTransformer } from '../../../../../../helpers/numberTransformer'
import { decimalStepCounter } from '../../../../../../helpers/decimalStepCounter'

export const AmountInput = ({ t, typeOfCurrency, amountValue, amountInputHandler, valueError }) => {

  let min = numberTransformer(`${typeOfCurrency.withdrawMin}`)
  let max = numberTransformer(`${typeOfCurrency.withdrawMax}`)
  let step = decimalStepCounter(typeOfCurrency.decimal)

  return (
    <div className={styles.valueInputContainer}>
      <label htmlFor="withdrawValueInput"
             className={styles.amountLabel}>{t('myAccount.cashoutPage.selectPaymentContainer.amount')}</label>
      <div className={styles.valueInnerWrapper}>
        <input
          onChange={(e) => amountInputHandler(e.target.value)}
          value={amountValue}
          type="number"
          min={min}
          max={max}
          step={step}
          id={'withdrawValueInput'}
          className={styles.withdrawValueInput}
        />
        <label htmlFor="withdrawValueInput" className={styles.currencyLabel}>{typeOfCurrency.abbreviation}</label>
      </div>
      <span className={styles.formErrorMessage}>{valueError}</span>
    </div>
  )
}