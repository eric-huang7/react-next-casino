import {numberTransformer} from "../../../../../helpers/numberTransformer";
import { Text, HStack } from "@chakra-ui/react";

export const PaymentInfoContainer = ({t, typeOfCurrency, chosenPayment}) => {
  let min = numberTransformer(chosenPayment ? `${chosenPayment.withdrawMin}` : `${typeOfCurrency.withdrawMin}`);
  let max = numberTransformer(chosenPayment ? `${chosenPayment.withdrawMax}` : `${typeOfCurrency.withdrawMax}`);

  return (
    <HStack alignItems="center" minW="100px" pl="12px">
      <Text m={0} fontSize="13px" color="text.450" fontFamily="Verdana" textAlign="right">
        {t("myAccount.cashoutPage.selectPaymentContainer.cryptoPaymentDetails", {
          min_value: min,
          max_value: max,
          currency: typeOfCurrency.abbreviation
        })}
      </Text>
    </HStack>
  )
}
