import styles from '../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss'
import { PaymentInfoContainer } from '../PaymentInfoContainer'
import { FormContainer } from './FormContainer'
import ErrorText from '../../../../../ErrorBoundaryComponents/ErrorText'
import CurrencyIcon from "../../../../../currency/CurrencyIcon";
import { HStack, Stack, Box } from "@chakra-ui/react";
import {Text} from "@chakra-ui/layout";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export const CryptoPaymentItem = ({
  t,
  isActive,
  chosenPayment,
  typeOfCurrency,
  activateItemClickHandler,
  userInfo
}) => {

  return (
    <Box onClick={() => activateItemClickHandler(isActive)} cursor="pointer"
        className={`${styles.methodItem} ${isActive.isActive ? styles.activeMethodItem : ''}`}
    >
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
            <PaymentInfoContainer
              t={t}
              typeOfCurrency={typeOfCurrency}
              chosenPayment={chosenPayment}
            />
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
