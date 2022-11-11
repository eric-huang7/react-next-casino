import { HStack } from "@chakra-ui/react";
import InputFieldRound from "../../../../form/InputFieldRound";

const AmountInput = ({
  t, chosenPayment, typeOfCurrency, amountInputHandler, amountValue, valueRef, valueError, max, min, step
}) => (
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
        min,
        max,
        step,
        ref: valueRef
      }}
      mb="24px"
    />
      <label htmlFor="withdrawValueInput">
        {chosenPayment ? chosenPayment.abbreviation : typeOfCurrency.abbreviation}
      </label>
  </HStack>
)

export default AmountInput;
