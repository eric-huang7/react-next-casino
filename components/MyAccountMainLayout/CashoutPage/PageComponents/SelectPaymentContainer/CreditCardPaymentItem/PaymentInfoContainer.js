import { numberTransformer } from '../../../../../../helpers/numberTransformer'
import { Text } from "@chakra-ui/react"
import {HStack} from "@chakra-ui/layout";

export const PaymentInfoContainer = ({ t, typeOfCurrency }) => {
  let min = numberTransformer(`${typeOfCurrency.withdrawMin}`)
  let max = numberTransformer(`${typeOfCurrency.withdrawMax}`)

  return (
    <HStack alignItems="center" justifyContent="flex-end" minW="100px" w="100%">
      <Text m={0} fontSize="13px" color="text.450" fontFamily="Verdana" textAlign="right">
        {t('myAccount.cashoutPage.selectPaymentContainer.creditCardPaymentDetails', {
          min_value: min,
          max_value: max,
          currency: typeOfCurrency.abbreviation
        })}
      </Text>
    </HStack>
  )
}
