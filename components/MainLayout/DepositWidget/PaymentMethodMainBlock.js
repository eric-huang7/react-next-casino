import {useEffect} from "react";
import {useDisclosure} from "@chakra-ui/hooks";
import PaymentSelectCurrencyModal from "../../currency/PaymentSelectCurrencyModal";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Image
} from '@chakra-ui/react'
import {ChevronDownIcon} from "@chakra-ui/icons";
import {Button} from "@chakra-ui/button";
import Connect from "../../../helpers/connect";
import {payments_methods_url} from "../../../redux/url/url";
import {setUserPaymentMethod} from "../../../redux/userFinance/action";
import {useDispatch} from "react-redux";
import {Tooltip} from "@chakra-ui/tooltip";
import {HStack} from "@chakra-ui/layout";

export const PaymentMethodMainBlock = ({t, userPayment, setErrorPaymentMethod, paymentMethods, setPaymentMethods, scrollHeight, paymentMethodChooser, isActivePayments, setIsActivePayments, errorPaymentMethod, userCurrency}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const dispatch = useDispatch()

  const onSelectCurrency = () => {
    console.log('onSelectCurrency')
  }

  const onBack = () => {
    console.log('onBack')
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

    return () => {
      setPaymentMethods(null)
      dispatch(setUserPaymentMethod(null))
    }
  }, [userCurrency?.userCurrencyData?.id])

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
    setErrorPaymentMethod('')
    paymentMethodChooser()
    // dispatch(setErrorUserPaymentMethod(''));
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
    onOpen();
    paymentMethodChooser()
  }

  const isEmpty = !userPayment || (userPayment && !userPayment?.paymentMethodData) ||
    (userPayment?.paymentMethodData.paymentType !== 'creditCard' &&
      (userPayment?.paymentMethodData.paymentType === 'cryptoArr' || userPayment?.paymentMethodData.paymentType === null)
    );

  return (
    <Box position="relative" order={3} display={{base: 'none', lg: 'block'}}>
      <Menu>
        <Tooltip hasArrow placement="top" label={t("depositWidget.paymentError")} bg='red'
                 color='white' px="5px" isOpen={errorPaymentMethod}>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} height="42px">
            {isEmpty ? t("depositWidget.paymentMethod")
              : (userPayment?.paymentMethodData?.paymentType === 'creditCard'
                  ? <HStack>
                    <span>{t("depositWidget.card")}</span>
                    <Image width="40px" height="15px" alt="" ml={3}
                           src={'/assets/img/depositWidget/cards.webp'}/>
                  </HStack>
                  : <HStack>
                    <span>{t("depositWidget.cryptoPayment")}</span>
                    <Image width="15px" height="15px" alt=""  ml={3}
                           src={'/assets/img/depositPage/payments/crypto.png'}/>
                  </HStack>)
            }
          </MenuButton>
        </Tooltip>
        <MenuList p={0}>
          {paymentMethods && paymentMethods['2'].length !== 0 && <MenuItem minH='40px' onClick={cryptoClickHandler}>
            <span>{t('depositWidget.cryptoPayment')}</span>
            <Image width="20px" height="20px" alt="" ml={3}
                   src={'/assets/img/depositPage/payments/crypto.png'}/>
          </MenuItem>}
          {userCurrency.userCurrencyData.type !== 3 && paymentMethods && paymentMethods['2'].length === 0 && (
            <MenuItem minH='40px' onClick={cryptoClickHandler}>
              <span>{t('depositWidget.cryptoPayment')}</span>
              <Image width="20px" height="20px" alt=""  ml={3}
                     src={'/assets/img/depositPage/payments/crypto.png'}/>
            </MenuItem>
          )}
          {paymentMethods && paymentMethods['3'].length !== 0 && <MenuItem minH='40px' onClick={fiatClickHandler}>
            <span>{t('depositWidget.card')}</span>
            <Image width="60px" height="25px" alt="" ml={3}
                   src={'/assets/img/depositWidget/cards.webp'}/>
          </MenuItem>}
        </MenuList>
      </Menu>

      <PaymentSelectCurrencyModal
        isOpen={isOpen}
        onBack={onBack}
        onClose={onClose}
        onSelect={onSelectCurrency}
      />
    </Box>
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
