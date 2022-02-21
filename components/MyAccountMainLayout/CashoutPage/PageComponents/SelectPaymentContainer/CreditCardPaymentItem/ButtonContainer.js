import styles from '../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss'

export const ButtonContainer = ({ t, withdrawFormHandler }) => {

  return (
    <button
      onClick={(e) => withdrawFormHandler(e)}
      form={'paymentForm'}
      type={'submit'}
      className={styles.submitButton}
    >
      {t('myAccount.cashoutPage.selectPaymentContainer.requestCashout')}
    </button>
  )
}