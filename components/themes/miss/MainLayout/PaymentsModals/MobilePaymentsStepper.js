import {StepOneEnterAmount} from './MobilePaymentsStepperComponents/StepOneEnterAmount'
import {StepTwoPaymentMethod} from './MobilePaymentsStepperComponents/StepTwoPaymentMethod'
import {useDispatch, useSelector} from 'react-redux'
import {setUserCurrencySwitcher, setUserDepositValue} from '/redux/userFinance/action'
import {useState} from 'react'
import {
  showCreditCardModal,
  showCryptoModal,
  showMobileCryptoPayments,
  showMobilePaymentsStepper
} from '/redux/popups/action'
import {siteID} from '/envs/envsForFetching'
import {annulDeposit, postCryptoPayment} from '/redux/deposits/action'
import {showRegister} from '/redux/ui/action'
import ErrorText from '/components/ErrorBoundaryComponents/ErrorText'
import {addCurrencyToUserList} from "/redux/user/action";
import {useDisclosure} from "@chakra-ui/hooks";
import {SelectCurrencyModal} from "../../currency/SelectCurrencyModal";
import PaymentSelectCurrencyModal from "../../currency/PaymentSelectCurrencyModal";
import SelectModal from "../../modal/SelectModal";
import {useTranslation} from "next-i18next";

export const MobilePaymentsStepper = ({ userAuth }) => {
  const { t } = useTranslation('common')
  const [pageStep, setPageStep] = useState(1)
  const {isOpen, onOpen, onClose} = useDisclosure()
  const paymentsModal = useDisclosure()

  const dispatch = useDispatch()
  const userCurrency = useSelector((state) => state.userFinance)
  const userDepositValue = useSelector((state) => state.userFinance?.depositValue)
  const userPayment = useSelector((state) => state.userFinance)

  const currencySwitcherShowHandler = () => {
    onOpen();
  }

  const onSelectCurrency = (currencyData) => {
    dispatch(setUserCurrencySwitcher(currencyData))

    if (userAuth) {
      let currency = {
        currency_id: currencyData.id
      }
      dispatch(addCurrencyToUserList(currency))
    }

    onClose()
  }

  const [errorInputValue, setErrorInputValue] = useState()
  const valueInputHandler = (e) => {
    if (e.target.value > 9999999999) {
      e.target.value = userDepositValue
      return false
    } else if (!Number(e.target.value)) {
      setErrorInputValue('Enter deposit amount')
      dispatch(setUserDepositValue(0))
    } else {
      setErrorInputValue('')
      dispatch(setUserDepositValue(Number(e.target.value)))
    }
  }
  const openPaymentMethods = () => {
    dispatch(showMobilePaymentsStepper(true))
    setPageStep(2)
  }

  const openWindow = (type, method = null) => {
    if (!userAuth.isAuthenticated) {
      dispatch(showRegister(true))
    } else if (type === 'crypto') {
      let paymentData = {
        senderCurrency_id: userCurrency?.userCurrencyData?.id,
        user_id: `${userAuth.user.user.id}`,
        site_id: siteID,
        award_amount: `${userDepositValue}`,
        receiverCurrency_id: userCurrency?.userCurrencyData?.id
      }
      dispatch(postCryptoPayment(paymentData, null))
      dispatch(showCryptoModal(true))
      dispatch(showMobilePaymentsStepper(false))
    } else if (type === 'crypto chosen type') {
      let paymentData = {
        senderCurrency_id: method.currency_id,
        user_id: `${userAuth.user.user.id}`,
        site_id: siteID,
        award_amount: `${userDepositValue}`,
        receiverCurrency_id: userCurrency?.userCurrencyData?.id
      }
      dispatch(postCryptoPayment(paymentData, method))
      dispatch(showCryptoModal(true))
      dispatch(showMobilePaymentsStepper(false))
    } else if (type === 'card') {
      dispatch(showCreditCardModal(true))
      dispatch(showMobilePaymentsStepper(false))
    }
  }

  const whatShouldDoPlayWith = () => {
    if (errorInputValue) {
      return
    } else {
      setPageStep(2)
    }
  }

  const whatShouldDoBackButton = () => {
    setPageStep(1)
  }

  const closeMobilePayments = () => {
    dispatch(showMobilePaymentsStepper(false))
    dispatch(annulDeposit())
  }
  const methodClickHandler = (method) => {
    if (method === 'crypto') {
      openWindow('crypto chosen type', method)
    } else {
      openWindow('card')
    }
  }

  const onSelectPayment = () => {
    dispatch(showMobileCryptoPayments(true))
    paymentsModal.onOpen()
  }

  return (
    <>
      <SelectModal
        isOpen={true}
        width={430}
        onClose={closeMobilePayments}
        onBack={pageStep === 1 || !pageStep ? false : whatShouldDoBackButton}
        title={pageStep === 1 ? t("paymentsStepper.headingOne") : t("paymentsStepper.headingTwo")}
      >
        {
          pageStep === 1 ?
            <ErrorText>
              <StepOneEnterAmount
                userCurrency={userCurrency}
                userDepositValue={userDepositValue}
                t={t}
                valueInputHandler={valueInputHandler}
                errorInputValue={errorInputValue}
                currencySwitcherShowHandler={currencySwitcherShowHandler}
                whatShouldDoPlayWith={whatShouldDoPlayWith}
                userPayment={userPayment}
              />
            </ErrorText>
            :
            <ErrorText>
              <StepTwoPaymentMethod
                userCurrency={userCurrency}
                methodClickHandler={methodClickHandler}
                t={t}
                userPayment={userPayment}
                onSelect={onSelectPayment}
              />
            </ErrorText>
        }
      </SelectModal>
      <SelectCurrencyModal
        isOpen={isOpen}
        onClose={onClose}
        onSelect={onSelectCurrency}
      />
      <PaymentSelectCurrencyModal
        isOpen={paymentsModal.isOpen}
        onClose={paymentsModal.onClose}
      />
    </>
  )
}
