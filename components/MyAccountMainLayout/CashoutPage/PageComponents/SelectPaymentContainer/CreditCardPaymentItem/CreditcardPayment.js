import { FormContainer } from './FormContainer'
import ErrorText from '../../../../../ErrorBoundaryComponents/ErrorText'
import {Box, HStack, Image, Stack} from '@chakra-ui/react'
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons";
import {numberTransformer} from "../../../../../../helpers/numberTransformer";

export const CreditCardPayment = ({ t, isActive, typeOfCurrency, activateItemClickHandler, userInfo }) => (
  <Box onClick={() => activateItemClickHandler(isActive)} cursor="pointer">
    <HStack alignItems="center" justifyContent="space-between" p="10px 0" mb="2px" bg="#eeeeee" minH="55px">
      <Stack
        direction={{base: 'column', lg: 'row'}}
        alignItems={{base: "flex-start", lg: "center"}}
        justifyContent={{base: 'center', lg: "space-between"}}
        flex={1}
      >
        <HStack px="12px">
          <Image src="/assets/img/myAccount/cashoutPage/Visa.webp" height="33px" alt=""/>
          <Image src="/assets/img/myAccount/cashoutPage/MasterCard.webp" height="33px" alt=""/>
          <Image src="/assets/img/myAccount/cashoutPage/Maestro.webp" height="33px" alt=""/>
        </HStack>

        <ErrorText>
          <HStack alignItems="center" justifyContent="flex-end" minW="100px" w="100%">
            <Text m={0} fontSize="13px" color="text.450" fontFamily="Verdana" textAlign="right">
              {t('myAccount.cashoutPage.selectPaymentContainer.creditCardPaymentDetails', {
                min_value: numberTransformer(`${typeOfCurrency.withdrawMin}`),
                max_value: numberTransformer(`${typeOfCurrency.withdrawMax}`),
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
        userInfo={userInfo}
        typeOfCurrency={typeOfCurrency}
      />
    </ErrorText>}
  </Box>
)
