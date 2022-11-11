import { FormContainer } from './FormContainer'
import ErrorText from '../../../../../ErrorBoundaryComponents/ErrorText'
import CurrencyIcon from "../../../../../currency/CurrencyIcon";
import { HStack, Stack, Box } from "@chakra-ui/react";
import {Text} from "@chakra-ui/layout";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {numberTransformer} from "../../../../../../helpers/numberTransformer";

export const CryptoPaymentItem = ({
  t,
  isActive,
  chosenPayment,
  typeOfCurrency,
  activateItemClickHandler,
  userInfo
}) => {

  return (
    <Box onClick={() => activateItemClickHandler(isActive)} cursor="pointer">
      <HStack alignItems="center" justifyContent="space-between" p="10px 0" mb="2px" bg="#eeeeee" minH="55px">
        <Stack
          direction={{base: 'column', lg: 'row'}}
          alignItems={{base: "flex-start", lg: "center"}}
          justifyContent={{base: 'center', lg: "space-between"}}
          flex={1}
        >
          <HStack alignItems="center">
            <CurrencyIcon id={typeOfCurrency?.abbreviation} size={9} mx={2}/>
            <Text fontSize="16px" color="text.450" fontFamily="Verdana" minW="70px" mr="5px">
              {typeOfCurrency.name}
            </Text>
          </HStack>
          <ErrorText>
            <HStack alignItems="center" minW="100px" pl="12px">
              <Text m={0} fontSize="13px" color="text.450" fontFamily="Verdana" textAlign="right">
                {t("myAccount.cashoutPage.selectPaymentContainer.cryptoPaymentDetails", {
                  min_value: numberTransformer(chosenPayment ? `${chosenPayment.withdrawMin}` : `${typeOfCurrency.withdrawMin}`),
                  max_value: numberTransformer(chosenPayment ? `${chosenPayment.withdrawMax}` : `${typeOfCurrency.withdrawMax}`),
                  currency: typeOfCurrency.abbreviation
                })}
              </Text>
            </HStack>
          </ErrorText>
        </Stack>
        <Box px="12px" color={isActive.isActive ? 'primary.500' : '#5f5f5f'}>
          {isActive.isActive ? <ChevronUpIcon w={8} h={8} /> : <ChevronDownIcon w={8} h={8} />}
        </Box>
      </HStack>
      {isActive.isActive && <ErrorText>
        <FormContainer
          t={t}
          typeOfCurrency={typeOfCurrency}
          chosenPayment={chosenPayment}
          userInfo={userInfo}
        />
      </ErrorText>}
    </Box>
  )
}
