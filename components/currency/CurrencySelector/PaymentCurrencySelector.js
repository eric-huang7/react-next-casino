import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setErrorUserPaymentMethod, setUserPaymentMethod } from '../../../redux/userFinance/action'
import { siteID } from '../../../envs/envsForFetching'
import { annulDeposit, postCryptoPayment } from '../../../redux/deposits/action'
import {
  showCryptoModal,
  showMobileCryptoPayments,
  showMobilePaymentsStepper,
} from '../../../redux/popups/action'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import {CurrencyItem} from "./CurrencyItem";
import SearchInput from "./SearchInput";
import {useTranslation} from "next-i18next";
import {Box, HStack, Text} from "@chakra-ui/layout";

export const PaymentCurrencySelector = ({
                                          backButtonClickHandler,
                                          userPayment,
                                          currencyData,
                                          userDepositValue,
                                          userInfo,
                                          userCurrency,
                                          parentHeight
                                        }) => {
  const {t} = useTranslation("common")
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')

  const [cryptoFindArr, setCryptoFindArr] = useState(userPayment?.paymentMethodData?.methodData)

  const isShowModal = useSelector((store) => store.popups)

  const searchInputHandler = (value) => {
    setSearchValue(value)

    cryptoFinder(value)
  }

  const cryptoFinder = (value) => {
    let searchReg = new RegExp(value.toLowerCase().trim())

    const cryptoFindArr = userPayment?.paymentMethodData?.methodData.filter((currency) => {
      if (searchReg.test(currency.currency_from.currency.toLowerCase())) {
        return true
      } else {
        return false
      }
    })
    setCryptoFindArr(cryptoFindArr)
  }

  const chosePaymentClickHandler = (paymentData) => {
    if (isShowModal.isShowMobileCryptoPayments) {
      let currencyInfo = currencyData?.results.find((currency) => currency.id === paymentData.currency_from.currency_id)

      if (userCurrency.userCurrencyData.type === 3) {

        let sendPaymentData = {
          senderCurrency_id: currencyInfo.id,
          user_id: `${userInfo.user.id}`,
          site_id: siteID,
          award_amount: `${userDepositValue}`,
          receiverCurrency_id: userCurrency?.userCurrencyData?.id
        }
        let userPaymentCurrent = {
          paymentError: '',
          paymentMethodData: {
            methodData: paymentData,
            paymentImg: '/assets/img/depositPage/visa-2.svg',
            paymentSecImg: '',
            paymentType: 'crypto'
          }
        }
        dispatch(postCryptoPayment(sendPaymentData, userPaymentCurrent))
        dispatch(showCryptoModal(true))
        dispatch(showMobileCryptoPayments(false))
        dispatch(showMobilePaymentsStepper(false))
        dispatch(annulDeposit())
        // dispatch(showDepositModal(false));
      } else {

        let sendPaymentData = {
          senderCurrency_id: currencyInfo.id,
          user_id: `${userInfo.user.id}`,
          site_id: siteID,
          award_amount: `${userDepositValue}`,
          receiverCurrency_id: userCurrency?.userCurrencyData?.id
        }
        let userPaymentCurrent = {
          paymentError: '',
          paymentMethodData: {
            methodData: paymentData,
            paymentImg: '/assets/img/depositPage/visa-2.svg',
            paymentSecImg: '',
            paymentType: 'crypto'
          }
        }

        dispatch(postCryptoPayment(sendPaymentData, userPaymentCurrent))
        dispatch(showCryptoModal(true))
        dispatch(showMobileCryptoPayments(false))
        dispatch(showMobilePaymentsStepper(false))
        dispatch(annulDeposit())
      }
    } else {
      backButtonClickHandler()
      dispatch(setUserPaymentMethod({
        methodData: paymentData,
        paymentImg: '/assets/img/depositPage/visa-2.svg',
        paymentSecImg: '',
        paymentType: 'crypto',
      }))
      dispatch(setErrorUserPaymentMethod(''))
    }
  }

  return (
    <Box px="20px" py="16px">
      <Box
        bg="#fcfcfc"
        border="1px solid #cad2d8"
        borderRadius="10px"
      >
        <SearchInput placeholder={t("selectCurrency.searchPlaceholder")} value={searchValue} onChange={searchInputHandler} />

        <Box
          h={`${parentHeight - 148}px`}
          overflowY="auto"
          css={{
            scrollbarColor: "scroll.100 scroll.500",
            scrollbarWidth: "thin",
          }}
        >
          {
            cryptoFindArr?.length > 0
              ? cryptoFindArr.map((paymentMethod) => {
                let currencyForPayment = currencyData?.results?.find((currency) => currency.id === paymentMethod.currency_from.currency_id);
                return currencyForPayment ? (
                  <ErrorEmpty key={`payment method ${paymentMethod.currency_from.currency}`}>
                    <CurrencyItem
                      currencyData={currencyForPayment}
                      onClick={() => chosePaymentClickHandler(paymentMethod)}
                      size={8}
                      pl="12px"
                      pr="6px"
                      border
                      pointer
                    />
                  </ErrorEmpty>
                ) : null
              })
              : <HStack justifyContent="center">
                <Text fontSize={18} fontWeight={600} color="text.300" maxW={200} textAlign="center">
                  {t('selectCurrency.nothingFound')}
                </Text>
              </HStack>
          }
        </Box>
      </Box>
    </Box>
  )
}
