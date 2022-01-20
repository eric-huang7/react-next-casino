import styles from '../../../../styles/PaymentsModals/PaymentsCrypto.module.scss';


export const TextBlock = ({t, value, currency, paymentsData}) => {

  return (
    <p className={styles.cryptoText}>
      <span>{t("cryptoPayment.textBlock.firstBlock")}</span>
      <span
        className={styles.cryptoValue}
      >
        {
          paymentsData.paymentMethod
          ?
          `${paymentsData.data.sender_amount} ${paymentsData.paymentMethod.paymentMethodData.methodData.currency_from.currency} \n`
          :
          `${value} ${currency} \n`
        }
      </span>
      {paymentsData.paymentMethod ? <span>{`(${t("cryptoPayment.textBlock.around")}${value} ${currency})`}</span> : ''}
      <span>{t("cryptoPayment.textBlock.secondBlock")}</span>
    </p>
  )
}