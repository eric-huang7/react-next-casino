import styles from '../../../styles/PaymentsModals/MobilePaymentsStepper.module.scss'
import { PaymentHeading } from './CreditCardComponents/Heading'
import { StepOneEnterAmount } from './MobilePaymentsStepperComponents/StepOneEnterAmount'
import { StepTwoPaymentMethod } from './MobilePaymentsStepperComponents/StepTwoPaymentMethod'
import { useDispatch, useSelector } from 'react-redux'
import { setUserDepositValue } from '../../../redux/userFinance/action'
import { useEffect, useState } from 'react'
import {
  showCreditCardModal,
  showCryptoModal,
  showCurrencySwitcher,
  showMobilePaymentsStepper
} from '../../../redux/popups/action'
import { siteID } from '../../../envs/envsForFetching'
import { annulDeposit, postCryptoPayment } from '../../../redux/deposits/action'
import { showRegister } from '../../../redux/ui/action'
import useWindowScroll from '../../../hooks/useWindowScroll'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'

export const MobilePaymentsStepper = ({ t, userAuth }) => {
  const [pageStep, setPageStep] = useState(1)
  let scrollHeight = useWindowScroll()

  const dispatch = useDispatch()
  const userCurrency = useSelector((state) => state.userFinance)
  const userDepositValue = useSelector((state) => state.userFinance.depositValue)
  const userPayment = useSelector((state) => state.userPaymentMethod)

  const currencySwitcherShowHandler = () => {
    dispatch(showCurrencySwitcher(true))
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
        senderCurrency_id: userCurrency.userCurrencyData.id,
        user_id: `${userAuth.user.user.id}`,
        site_id: siteID,
        award_amount: `${userDepositValue}`,
        receiverCurrency_id: userCurrency.userCurrencyData.id
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
        receiverCurrency_id: userCurrency.userCurrencyData.id
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

  return (
    <div className={styles.paymentsStepperWrapper}>
      <div className={`${styles.paymentsInnerWrapper} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
        <div className={styles.paymentsMainContainer}>
          <PaymentHeading
            whatShouldDoBackButton={whatShouldDoBackButton}
            closeHandler={closeMobilePayments}
            t={t} type={'stepper'}
            pageStep={pageStep}
          />
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
                />
              </ErrorText>
          }
        </div>
      </div>
    </div>
  )
}
