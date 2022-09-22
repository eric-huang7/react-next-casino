import {numberTransformer} from "../../../../../../helpers/numberTransformer";
import {decimalStepCounter} from "../../../../../../helpers/decimalStepCounter";
import InputFieldRound from "../../../../../form/InputFieldRound";
import { HStack } from "@chakra-ui/react";

export const AmountInput = ({t, chosenPayment, typeOfCurrency, amountInputHandler, amountValue, valueRef, valueError}) => {
  let min = numberTransformer(chosenPayment ? `${chosenPayment.withdrawMin}` : `${typeOfCurrency.withdrawMin}`);
  let max = numberTransformer(chosenPayment ? `${chosenPayment.withdrawMax}` : `${typeOfCurrency.withdrawMax}`);
  let step = decimalStepCounter(chosenPayment ? chosenPayment.decimal : typeOfCurrency.decimal);

  return (
    <HStack maxW={{base: '100%', lg: '338px'}} alignItems="center">
      <InputFieldRound
        flex={1}
        label={t('myAccount.cashoutPage.selectPaymentContainer.amount')}
        error={valueError}
        onChange={(e) => amountInputHandler(e.target.value)}
        value={amountValue}
        id={'withdrawValueInput'}
        inputProps={{
          type: "number",
          min: min,
          max: max,
          step: step,
          ref: valueRef
        }}
        mb="24px"
      />
        <label htmlFor="withdrawValueInput">
          {chosenPayment ? chosenPayment.abbreviation : typeOfCurrency.abbreviation}
        </label>
    </HStack>
  )
}
