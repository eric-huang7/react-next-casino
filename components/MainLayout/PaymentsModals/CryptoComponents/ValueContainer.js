import {chakra} from "@chakra-ui/react";

export const ValueContainer = ({value, currency, paymentsData, currenciesList}) => {

  let needToPayValue = `${paymentsData.data.sender_amount} ${paymentsData.paymentMethod.paymentMethodData.methodData.currency_from.currency} \n`;

  let needToPayRes = '';

  if (paymentsData.paymentMethod.paymentMethodData.methodData.hasOwnProperty("rate_from")) {
    if (paymentsData.paymentMethod.paymentMethodData.methodData.rate_to === '1') {
      const paymentCurrency = currenciesList.currency.results.find((searchCurrency) => searchCurrency.abbreviation === paymentsData.paymentMethod.paymentMethodData.methodData.currency_from.currency);

      needToPayValue = parseFloat((paymentsData.paymentMethod.paymentMethodData.methodData.rate_from * value).toFixed(Math.min(9,paymentCurrency?.decimal)));
    } else {
      const paymentCurrency = currenciesList.currency.results.find((searchCurrency) => searchCurrency.abbreviation === paymentsData.paymentMethod.paymentMethodData.methodData.currency_from.currency);

      needToPayValue = parseFloat(((paymentsData.paymentMethod.paymentMethodData.methodData.rate_from * value) / paymentsData.paymentMethod.paymentMethodData.methodData.rate_to).toFixed(Math.min(9,paymentCurrency?.decimal)));
    }
    needToPayRes = `${needToPayValue} ${paymentsData.paymentMethod.paymentMethodData.methodData.currency_from.currency} \n`;
  }
  if (currency.userCurrencyData.type === 3) {
    needToPayRes = `${paymentsData.data.sender_amount} ${paymentsData.paymentMethod.paymentMethodData.methodData.currency_from.currency} \n`;
  }

  return (
    <chakra.h2
      fontSize="30px"
      color="text.500"
      fontFamily="Verdana"
      textAlign="center"
      pt="8px"
      pb="24px"
    >
      {
        paymentsData.paymentMethod.paymentMethodData.methodData.hasOwnProperty("rate_from")
          ?
          needToPayRes
          :
          `${value} ${currency.userCurrencyData.abbreviation}`
      }
    </chakra.h2>
  )
}
