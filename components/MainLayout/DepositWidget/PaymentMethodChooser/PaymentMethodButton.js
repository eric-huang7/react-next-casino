import styles from '../../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';


export const PaymentMethodButton = ({t}) => {

  return (
    <div className={styles.paymentMethodContainer}>
      <button id={'widgetPaymentMethod'} className={styles.paymentMethodButton}>Payment Method</button>
      <label htmlFor="widgetPaymentMethod" className={`${styles.paymentMethodLabel} ${styles.active}`}>
        <div></div>
      </label>
    </div>
  )
}