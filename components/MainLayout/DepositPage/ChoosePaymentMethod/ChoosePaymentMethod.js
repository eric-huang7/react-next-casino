import styles from '../../../styles/DepositPage/DepositPage.module.scss';

export const ChoosePaymentMethod = () => {

  return (
    <div className={styles.depositsChoosePaymentWrapper}>
      <h3 className={styles.choosePaymentHeading}>
        Choose a payment method
      </h3>
      <div className={styles.paymentMethodsBlock}>

      </div>
    </div>
  )
}