import React, { useEffect, useState } from 'react'
import { payments_methods_url } from '../../../../redux/url/url'
import { LoadingComponent } from '../../../LoadingComponent/LoadingComponent'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'
import Connect from "../../../../helpers/connect";
import {useDispatch} from "react-redux";
import {setUserPaymentMethod} from "../../../../redux/userFinance/action";
import {Text, VStack, HStack} from "@chakra-ui/layout";
import Image from "next/image";

const Card = ({onClick, title, children}) => (
  <VStack width="40%" minH="100px" alignItems="center" p={3}  onClick={onClick} borderRadius='10px' border="1px solid"
          borderColor="grey.800" cursor="pointer" bg="grey.250" justifyContent="center">
    {children}
    <Text fontSize="14px" textAlign="center">{title}</Text>
  </VStack>
)

export const StepTwoPaymentMethod = ({ t, methodClickHandler, userCurrency, userPayment, onSelect }) => {
  const [paymentMethods, setPaymentMethods] = useState(null)
  const dispatch = useDispatch()

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
    methodClickHandler('card')
  }

  const cryptoClickHandler = () => {
    let methods = []
    if (userCurrency.userCurrencyData.type === 3) {
      paymentMethods[1].forEach((methodItem) => methods.push(methodItem))

      paymentMethods[2].forEach((methodItem) => {
        if (paymentMethods[1].length > 0) {
          let universalItem = universalizer(paymentMethods[1], methodItem)
          if (universalItem) {
            methods.push(methodItem)
          } else {
            return methodItem
          }
        } else {
          methods.push(methodItem)
        }
      })

    } else {
      paymentMethods[3].forEach((methodItem) => methods.push(methodItem))

      paymentMethods[1].forEach((methodItem) => methods.push(methodItem))

      paymentMethods[2].forEach((methodItem) => {
        if (paymentMethods[1].length > 0) {
          let universalItem = universalizer(paymentMethods[1], methodItem)
          if (universalItem) {
            methods.push(methodItem)
          } else {
            return methodItem
          }
        } else {
          methods.push(methodItem)
        }

      })
    }

    dispatch(setUserPaymentMethod({
      methodData: methods,
      paymentImg: '/assets/img/depositPage/visa-2.svg',
      paymentSecImg: '',
      paymentType: 'cryptoArr',
    }))
    onSelect()
  }

  useEffect(() => {
    const config = {
      params: {
        currency_id: userCurrency?.userCurrencyData?.id,
      }
    }
    Connect.get(payments_methods_url, config, (status, data) => setPaymentMethods(data.results)).catch((err) => {
      setPaymentMethods(null);
    })
  }, [userCurrency?.userCurrencyData?.id])

  return paymentMethods ? (
    <HStack alignItems="center" justifyContent="center" height="250" px={5} spacing={3}>
      {paymentMethods['2'].length !== 0 && <ErrorEmpty>
            <Card onClick={cryptoClickHandler} title={t('depositWidget.cryptoPayment')}>
              <Image src={'/assets/img/depositPage/payments/crypto.png'} alt="" width={25} height={25}/>
            </Card>
          </ErrorEmpty>
      }

      {userCurrency.userCurrencyData.type !== 3 && paymentMethods['2'].length === 0 && <ErrorEmpty>
        <Card onClick={cryptoClickHandler} title={t('depositWidget.cryptoPayment')}>
          <Image src={'/assets/img/depositPage/payments/crypto.png'} alt="" width={25} height={25}/>
        </Card>
      </ErrorEmpty>}

      {paymentMethods['3'].length !== 0 && <ErrorEmpty>
        <Card onClick={fiatClickHandler} title={t('depositWidget.card')}>
          <Image width="60px" height="25px" alt=""
                 src={'/assets/img/depositWidget/cards.webp'}/>
        </Card>
      </ErrorEmpty>}
    </HStack>
  ) : (
    <VStack h={250} >
      <LoadingComponent t={t}/>
    </VStack>
  )
}

function universalizer (arrVerify, checkItem) {
  let sameItem = arrVerify.find((methodOne) => {
    if (methodOne.currency_from.currency_id === checkItem.currency_from.currency_id) {
      return true
    } else {
      return false
    }
  })
  if (!sameItem) {
    return true
  } else {
    return false
  }
}
