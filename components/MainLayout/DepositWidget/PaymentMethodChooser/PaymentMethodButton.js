import styles from '../../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';


export const PaymentMethodButton = ({t, isActivePayments, setIsActivePayments}) => {

  return (
    <div className={styles.paymentMethodContainer}>
      <button
        onClick={() => setIsActivePayments(!isActivePayments)}
        id={'widgetPaymentMethod'}
        className={styles.paymentMethodButton}
      >{t("depositWidget.paymentMethod")}</button>
      <label
        htmlFor="widgetPaymentMethod"
        className={`${styles.paymentMethodLabel} ${isActivePayments ? styles.active : ""}`}>
        <div></div>
      </label>
    </div>
  )
}