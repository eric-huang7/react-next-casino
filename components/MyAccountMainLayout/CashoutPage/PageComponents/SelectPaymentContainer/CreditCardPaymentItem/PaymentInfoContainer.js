import styles from '../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss'
import { numberTransformer } from '../../../../../../helpers/numberTransformer'

export const PaymentInfoContainer = ({ t, typeOfCurrency }) => {

  let min = numberTransformer(`${typeOfCurrency.withdrawMin}`)
  let max = numberTransformer(`${typeOfCurrency.withdrawMax}`)

  return (
    <div className={styles.paymentInfoContainer}>
      <p>{t('myAccount.cashoutPage.selectPaymentContainer.creditCardPaymentDetails', {
        min_value: min,
        max_value: max,
        currency: typeOfCurrency.abbreviation
      })}</p>
    </div>
  )
}