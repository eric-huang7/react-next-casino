import { Box, chakra } from "@chakra-ui/react";

export const TextBlock = ({t, value, currency, paymentsData, currenciesList, ...props}) => {
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
    <Box
      fontSize="16px"
      fontWeight={300}
      lineHeight="22px"
      color="text.800"
      fontFamily="Montserrat"
      textAlign="center"
      whiteSpace="break-spaces"
      {...props}
    >
      <span>{t("cryptoPayment.textBlock.firstBlock")}</span>
      <chakra.span
        color="primary.500"
        fontWeight={300}
      >
        {
          paymentsData.paymentMethod.paymentMethodData.methodData.hasOwnProperty("rate_from")
          ?
          `${needToPayRes}`
          :
          `${value} ${currency.userCurrencyData.abbreviation} \n`
        }
      </chakra.span>
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
    </Box>
  )
}
