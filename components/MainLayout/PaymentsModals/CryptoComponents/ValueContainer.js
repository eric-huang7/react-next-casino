import styles from '../../../../styles/PaymentsModals/PaymentsCrypto.module.scss';


export const ValueContainer = ({value, currency, paymentsData}) => {

  let paymentValue = `${value} ${paymentsData.paymentMethod.paymentMethodData.methodData.currency_to.currency}`;

  let needToPayValue = `${paymentsData.data.sender_amount} ${paymentsData.paymentMethod.paymentMethodData.methodData.currency_from.currency} \n`;

  let needToPayRes = '';

  if (paymentsData.paymentMethod.paymentMethodData.methodData.hasOwnProperty("rate_from")) {
    if (paymentsData.paymentMethod.paymentMethodData.methodData.rate_to === '1') {
      needToPayValue = paymentsData.paymentMethod.paymentMethodData.methodData.rate_from * value;
    } else {
      needToPayValue = (paymentsData.paymentMethod.paymentMethodData.methodData.rate_from * value) / paymentsData.paymentMethod.paymentMethodData.methodData.rate_to;
    }
    needToPayRes = `${needToPayValue} ${paymentsData.paymentMethod.paymentMethodData.methodData.currency_from.currency} \n`;
  }
  if (currency.userCurrencyData.type === 3) {
    needToPayRes = `${paymentsData.data.sender_amount} ${paymentsData.paymentMethod.paymentMethodData.methodData.currency_from.currency} \n`;
  }

  return (
    <h2
      className={styles.valueText}
    >
      {
        paymentsData.paymentMethod.paymentMethodData.methodData.hasOwnProperty("rate_from")
          ?
          needToPayRes
          :
          `${value} ${currency.userCurrencyData.abbreviation}`
      }
    </h2>
  )
}