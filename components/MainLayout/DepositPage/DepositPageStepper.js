import styles from '../../../styles/DepositPage/DepositPage.module.scss'
import { DepositHeading } from './DepositHeading'
import { DepositInputsContainer } from './DepositInputs/DepositInputsContainer'
import { BonusesBlockMainContainer } from './BonusesBlock/BonusesBlockMainContainer'
import { DepositImages } from './DepositPaymentsImages'
import { BonusCodeActivator } from './BonusCodeActivator'
import { DepositButtonSubmit } from './DepositButtonSubmit'
import { ChoosePaymentMethod } from './ChoosePaymentMethod/ChoosePaymentMethod'
import { DepositLastPage } from './DepositLastPage/DepositLastPage'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import {setStepDepositModal} from "../../../redux/popups/action";
import {useDispatch} from "react-redux";
import {useState} from "react";

export const DepositPageStepper = (props) => {
  let {
    step,
    t,
    closeDepositModalHandler,
    userCurrency,
    currencySwitcherShowHandler,
    isChecked,
    checkedInputHandler,
    depositValueInputHandler,
    userDepositValue,
    userDepositValueError,
    userPayment,
    userInfo,
    chooseBonusClickHandler,
    setDepositButtonText,
    buttonText,
    userSelectedBonus,
    bonusesArr,
    paymentMethods,
    setPaymentMethods
  } = props

  const dispatch = useDispatch()
  const [isActiveBonusInput, setIsActiveBonusInput] = useState(false)

  const bonusCodeInputActiveHandler = () => {
    if (isActiveBonusInput) {
      setIsActiveBonusInput(false)
    } else {
      setIsActiveBonusInput(true)
    }
  }

  const stepHandler = (step) => {
    dispatch(setStepDepositModal(step + 1))
  }

  console.log('step', step)
  switch (step) {
    case  1:
      return (
        <>
          <div className={styles.depositInnerBlockWrapper}>
            <DepositHeading
              t={t}
              closeDepositModalHandler={closeDepositModalHandler}
            />
            <ErrorText>
              <DepositInputsContainer
                userCurrency={userCurrency}
                t={t}
                userDepositValue={userDepositValue}
                depositValueInputHandler={depositValueInputHandler}
                currencySwitcherShowHandler={currencySwitcherShowHandler}
                userDepositValueError={userDepositValueError}
              />
            </ErrorText>
            <div className={styles.divider}></div>
            <ErrorText>
              <BonusesBlockMainContainer
                t={t}
                isChecked={isChecked}
                checkedInputHandler={checkedInputHandler}
                isActiveBonusInput={isActiveBonusInput}
                userCurrency={userCurrency}
                chooseBonusClickHandler={chooseBonusClickHandler}
                setDepositButtonText={setDepositButtonText}
                userDepositValue={userDepositValue}
                userSelectedBonus={userSelectedBonus}
                bonusesArr={bonusesArr}
              />
            </ErrorText>
            <DepositImages/>
            <BonusCodeActivator
              t={t}
              isActiveBonusInput={isActiveBonusInput}
              bonusCodeInputActiveHandler={bonusCodeInputActiveHandler}
            />
          </div>
          <ErrorEmpty>
            <DepositButtonSubmit
              userDepositValue={userDepositValue}
              stepHandler={stepHandler}
              step={step}
              t={t}
              buttonText={buttonText}
              userCurrency={userCurrency}
            />
          </ErrorEmpty>

        </>
      )
    case 2:
      return (
        <>
          <div className={styles.depositInnerBlockWrapper}>
            <DepositHeading
              t={t}
              title={''}
              closeDepositModalHandler={closeDepositModalHandler}
              whatDoBackButton={() => stepHandler(0)}
            />
            <ErrorText>
              <ChoosePaymentMethod
                t={t}
                userPayment={userPayment}
                paymentMethods={paymentMethods}
                userCurrency={userCurrency}
                setPaymentMethods={setPaymentMethods}
                stepHandler={() => stepHandler(step)}
              />
            </ErrorText>
          </div>
        </>
      )
    case 3:
      return (
        <>
          <div className={styles.depositInnerBlockWrapper}>
            <DepositHeading
              t={t}
              closeDepositModalHandler={closeDepositModalHandler}
              whatDoBackButton={() => stepHandler(1)}
            />
            <ErrorText>
              <DepositLastPage
                t={t}
                userDepositValue={userDepositValue}
                depositValueInputHandler={depositValueInputHandler}
                userDepositValueError={userDepositValueError}
                userInfo={userInfo}
                userCurrency={userCurrency}
              />
            </ErrorText>
          </div>
          <ErrorEmpty>
            <DepositButtonSubmit
              userDepositValue={userDepositValue}
              stepHandler={stepHandler}
              step={step}
              t={t}
              buttonText={'Submit'}
              userCurrency={userCurrency}
            />
          </ErrorEmpty>
        </>
      )
  }
}
