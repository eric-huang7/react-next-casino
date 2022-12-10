import {useDispatch, useSelector} from 'react-redux'
import { VStack } from "@chakra-ui/react"
import {setErrorUserPaymentMethod, setUserPaymentMethod} from '/redux/userFinance/action'
import React, { useEffect } from 'react'
import {payments_methods_url} from '/redux/url/url'
import { LoadingComponent } from '/components/LoadingComponent/LoadingComponent'
import Connect from "/helpers/connect";
import {
  showCreditCardModal, showCryptoModal,
  showDepositModal, showMobileCryptoPayments, showMobilePaymentsStepper,
} from "/redux/popups/action";
import {siteID} from "/envs/envsForFetching";
import {postCryptoPayment} from "/redux/deposits/action";
import {chakra} from "@chakra-ui/react";
import {HStack, Text} from "@chakra-ui/layout";
import CurrencyIcon from "../../currency/CurrencyIcon";

export const ChoosePaymentMethod = ({
  setPaymentMethods,
  t,
  userPayment,
  paymentMethods,
  userCurrency,
                                      stepHandler
}) => {
  const dispatch = useDispatch()
  const currencyData = useSelector((store) => store.currency?.currency)
  const userInfo = useSelector((store) => store.authInfo?.user)
  const userDepositValue = useSelector((state) => state.userFinance?.depositValue)

  useEffect(() => {
    const config = {
      params: {
        currency_id: userCurrency?.userCurrencyData?.id,
      }
    }
    Connect.get(payments_methods_url, config, (status, data) => setPaymentMethods(data.results))
      .catch((err) => {setPaymentMethods(null)});

    return () => {
      // setPaymentMethods(null)
      // dispatch(setUserPaymentMethod(null))
    }
  }, [userCurrency?.userCurrencyData?.id])

  const hidePaymentCurrencyShowDepositModal = () => {
    dispatch(showDepositModal(true))
  }

  const fiatClickHandler = () => {

    let chosenMethod = paymentMethods[3].filter((method) => {
      if (method.currency_from.currency === userCurrency?.userCurrencyData?.abbreviation && method.currency_to.currency === userCurrency?.userCurrencyData?.abbreviation) {
        return true
      } else {
        return false
      }
    })

    if (chosenMethod[0]) {
      dispatch(setUserPaymentMethod({
        methodData: chosenMethod[0],
        paymentImg: '/assets/img/depositPage/visa-2.svg',
        paymentSecImg: '/assets/img/depositPage/master-card.svg',
        paymentType: 'creditCard',
      }))
    } else {
      dispatch(setUserPaymentMethod({
        methodData: null,
        paymentImg: '/assets/img/depositPage/visa-2.svg',
        paymentSecImg: '/assets/img/depositPage/master-card.svg',
        paymentType: 'creditCard',
      }))
    }
    dispatch(setErrorUserPaymentMethod(''))
  }

  const cryptoClickHandler = (method) => {
    dispatch(setUserPaymentMethod({
      methodData: method,
      paymentImg: '/assets/img/depositPage/visa-2.svg',
      paymentSecImg: '/assets/img/depositPage/master-card.svg',
      paymentType: 'crypto',
    }))
    // dispatch(showCryptoModal(true))
  }

  const getMethods = () => {
    const methods = []

    paymentMethods[1].forEach((methodItem) => methods.push(methodItem.currency_from))
    paymentMethods[2].forEach((methodItem) => {
      const currency = currencyData?.results?.find(item => item.abbreviation === methodItem.currency_from?.currency)
      methods.push({
        ...methodItem.currency_from,
        currencyData: currency,
        title: currency?.name || methodItem.currency_from.currency,
        image: `/assets/img/depositPage/${methodItem.currency_from?.currency?.toLowerCase()}.svg`,
        onClick: () => cryptoClickHandler(methodItem)
      })
    })
    paymentMethods[3].forEach((methodItem) => methods.push({
      ...methodItem.currency_from,
      image: '/assets/img/depositPage/card.svg',
      title: t('myAccount.history.transactions.table.paymentSystem.creditCard'),
      active: userPayment?.paymentMethodData?.paymentType === 'creditCard',
      onClick: fiatClickHandler
    }))

    return methods
  }

  useEffect(() => {
    if (!!userPayment?.paymentMethodData) {
      // stepHandler(step);
      dispatch(setErrorUserPaymentMethod(''))
      if (userPayment?.paymentMethodData?.paymentType === 'creditCard') {
        dispatch(showCreditCardModal(true))
        dispatch(showDepositModal(false))
      } else if (userPayment?.paymentMethodData?.paymentType === 'crypto') {

        let currencyInfo = currencyData?.results.find((currency) => currency.id === userPayment?.paymentMethodData?.methodData?.currency_from?.currency_id)

        if (userCurrency.userCurrencyData.type === 3) {

          let paymentData = {
            senderCurrency_id: currencyInfo.id,
            user_id: `${userInfo?.user?.id}`,
            site_id: siteID,
            award_amount: `${userDepositValue}`,
            receiverCurrency_id: userCurrency?.userCurrencyData?.id
          }

          dispatch(postCryptoPayment(paymentData, userPayment))
          dispatch(showCryptoModal(true))
          dispatch(showDepositModal(false))
        } else {

          let paymentData = {
            senderCurrency_id: currencyInfo.id,
            user_id: `${userInfo?.user?.id}`,
            site_id: siteID,
            award_amount: `${userDepositValue}`,
            receiverCurrency_id: userCurrency?.userCurrencyData?.id
          }

          dispatch(postCryptoPayment(paymentData, userPayment))
          dispatch(showCryptoModal(true))
          dispatch(showDepositModal(false))
        }
      }
    }
  }, [userPayment?.paymentMethodData])

  return (
    <VStack w="100%">
      <Text
        fontSize="18px"
        fontWeight={600}
        color="text.190"
        fontFamily="Myriad Pro"
        textTransform="uppercase"
        textAlign="center"
        pt="20px"
      >
        {t('depositPage.choosePaymentMethod')}
      </Text>
      {paymentMethods ? (
        <HStack flexWrap="wrap" w="100%" justifyContent="center" spacing={0}>
        {getMethods()?.map((method, index) => (
          <VStack px="1.5%" key={index} w="30%" textAlign="center" spacing={0} pb={3} cursor="pointer">
            <VStack
              w="100%"
              h="50px"
              border="1px solid"
              borderColor="grey.370"
              borderRadius="6px"
              bg="white"
              onClick={method.onClick}
              alignItems="center"
              justifyContent="center"
              _hover={{bg: "grey.250", border: "1px solid", borderColor: "grey.380"}}
            >
              {method.image && <chakra.img src={method.image} sx={{maxW: "75%", maxH: "60%"}} alt=""/>}
              {!method.image && method?.currencyData && <CurrencyIcon id={method?.currencyData?.abbreviation} size={6} mx={2}/>}
            </VStack>
            <Text as="div"
              p="5px 5px 0"
              fontWeight={400}
              fontSize="12px"
              color="rgba(38,38,38,.6)"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              textAlign="center"
            >{method.title}</Text>
          </VStack>
        ))}
      </HStack>
      ) : (
        <VStack h={150} >
        <LoadingComponent t={t}/>
      </VStack>
      )}
      <Text as="span" color="red.500" fontSize={10}>{t(userPayment?.paymentError)}</Text>
    </VStack>
  )
}
