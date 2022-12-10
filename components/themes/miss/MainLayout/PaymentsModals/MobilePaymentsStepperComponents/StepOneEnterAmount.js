import ErrorEmpty from '/components/ErrorBoundaryComponents/ErrorEmpty'
import CurrencyIcon from "../../../currency/CurrencyIcon";
import {HStack, VStack} from "@chakra-ui/react";
import {Button} from "@chakra-ui/button";
import PrimaryButton from "../../../buttons/PrimaryButton";
import InputField from "../../../form/InputField";

export const StepOneEnterAmount = ({
   t,
   userCurrency,
   userDepositValue,
   valueInputHandler,
   errorInputValue,
   currencySwitcherShowHandler,
   whatShouldDoPlayWith
 }) => (
  <VStack p={4}>
    <HStack justifyContent="space-between" alignItems="center">
      <InputField
        label={t('paymentsStepper.headingOne')}
        error={errorInputValue}
        onChange={valueInputHandler}
        placeholder={`${userCurrency?.userCurrencyData?.symbol} ${userDepositValue}`}
        id={'stepperAmount'}
        type="number"
        px={2}
        py={3}
        fontSize="34px"
        inputProps={{
          bg: "white",
        }}
      />

      <Button onClick={currencySwitcherShowHandler} w="88px" h="34px" bg="text.100" borderRadius="8px"
              border="1px solid rgba(0,0,0,0.2)">
        <CurrencyIcon id={userCurrency?.userCurrencyData?.abbreviation} size={6} mr={1}/>
        {userCurrency?.userCurrencyData?.abbreviation}
      </Button>
    </HStack>

    <ErrorEmpty>
      <PrimaryButton
        onClick={whatShouldDoPlayWith}
        disabled={userCurrency?.userCurrencyData?.isDepositEnabled === 0 ? true : false}
        fontSize="20px"
        fontWeight={800}
        title={`${t("depositWidget.playWith")} ${userCurrency?.userCurrencyData?.symbol ? userCurrency?.userCurrencyData?.symbol : ''}${userDepositValue} ${userCurrency?.userCurrencyData?.symbol ? "" : userCurrency?.userCurrencyData?.abbreviation}`}
      />
    </ErrorEmpty>
  </VStack>
)
