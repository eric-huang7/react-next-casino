import styles from '../../../../styles/PaymentsModals/PaymentsCrypto.module.scss';


export const TextBlock = ({t, value, currency, paymentsData, currenciesList}) => {


  let paymentValue = `${value} ${paymentsData.paymentMethod.paymentMethodData.methodData.currency_to.currency}`;

  let needToPayValue = `${paymentsData.data.sender_amount} ${paymentsData.paymentMethod.paymentMethodData.methodData.currency_from.currency} \n`;

  let needToPayRes = '';

  if (paymentsData.paymentMethod.paymentMethodData.methodData.hasOwnProperty("rate_from")) {
    if (paymentsData.paymentMethod.paymentMethodData.methodData.rate_to === '1') {
      const paymentCurrency = currenciesList.currency.results.find((searchCurrency) => searchCurrency.abbreviation === paymentsData.paymentMethod.paymentMethodData.methodData.currency_from.currency);

      needToPayValue = parseFloat((paymentsData.paymentMethod.paymentMethodData.methodData.rate_from * value).toFixed(paymentCurrency.decimal));
    } else {
      const paymentCurrency = currenciesList.currency.results.find((searchCurrency) => searchCurrency.abbreviation === paymentsData.paymentMethod.paymentMethodData.methodData.currency_from.currency);

      needToPayValue = parseFloat(((paymentsData.paymentMethod.paymentMethodData.methodData.rate_from * value) / paymentsData.paymentMethod.paymentMethodData.methodData.rate_to).toFixed(paymentCurrency.decimal));
    }
    needToPayRes = `${needToPayValue} ${paymentsData.paymentMethod.paymentMethodData.methodData.currency_from.currency} \n`;
  }
  if (currency.userCurrencyData.type === 3) {
    needToPayRes = `${paymentsData.data.sender_amount} ${paymentsData.paymentMethod.paymentMethodData.methodData.currency_from.currency} \n`;
  }

  return (
    <p className={styles.cryptoText}>
      <span>{t("cryptoPayment.textBlock.firstBlock")}</span>
      <span
        className={styles.cryptoValue}
      >
        {
          paymentsData.paymentMethod.paymentMethodData.methodData.hasOwnProperty("rate_from")
          ?
          `${needToPayRes}`
          :
          `${value} ${currency.userCurrencyData.abbreviation} \n`
        }
      </span>
      {
        paymentsData.paymentMethod.paymentMethodData.methodData.hasOwnProperty("rate_from")
        ?
        <span>
          {`(${t("cryptoPayment.textBlock.around")}${value} ${paymentsData.paymentMethod.paymentMethodData.methodData.currency_to.currency})`}
        </span>
        :
        ''
      }
      <span>
        {t("cryptoPayment.textBlock.secondBlock")}
      </span>
    </p>
  )
}