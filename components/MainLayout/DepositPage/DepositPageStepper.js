import {useDispatch} from "react-redux"
import {useState} from "react"
import {Box, Text} from "@chakra-ui/layout"
import SelectModal from "../../modal/SelectModal"
import styles from '../../../styles/DepositPage/DepositPage.module.scss'
import {DepositInputsContainer} from './DepositInputs/DepositInputsContainer'
import {BonusesBlockMainContainer} from './BonusesBlock/BonusesBlockMainContainer'
import {DepositImages} from './DepositPaymentsImages'
import {BonusCodeActivator} from './BonusCodeActivator'
import {DepositButtonSubmit} from './DepositButtonSubmit'
import {ChoosePaymentMethod} from './ChoosePaymentMethod/ChoosePaymentMethod'
import {DepositLastPage} from './DepositLastPage/DepositLastPage'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import {setStepDepositModal} from "../../../redux/popups/action";
import ModalTopHeader from "../../modal/ModalTopHeader";

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

  switch (step) {
    case  1:
      return (
        <SelectModal
          isOpen={true}
          width={430}
          headerHeight={70}
          onClose={closeDepositModalHandler}
          title={t("depositPage.innerHeading")}
          footer={<ErrorEmpty>
            <DepositButtonSubmit
              userDepositValue={userDepositValue}
              stepHandler={stepHandler}
              step={step}
              t={t}
              buttonText={buttonText}
              userCurrency={userCurrency}
            />
          </ErrorEmpty>}
          before={<ModalTopHeader title={t('depositPage.mainHeading')} />}
        >
          <Box pb={4}>
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
          </Box>
        </SelectModal>
      )
    case 2:
      return (
        <SelectModal
          isOpen={true}
          width={430}
          height={100}
          headerHeight={70}
          onClose={closeDepositModalHandler}
          onBack={() => stepHandler(0)}
          title={t("depositPage.innerHeading")}
          before={getHeader()}
        >
          <Box p={2}>
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
          </Box>
        </SelectModal>
      )
    case 3:
      return (
        <SelectModal
          isOpen={true}
          width={430}
          headerHeight={70}
          onClose={closeDepositModalHandler}
          onBack={() => stepHandler(1)}
          title={t("depositPage.innerHeading")}
          footer={<ErrorEmpty>
            <DepositButtonSubmit
              userDepositValue={userDepositValue}
              stepHandler={stepHandler}
              step={step}
              t={t}
              buttonText={'Submit'}
              userCurrency={userCurrency}
            />
          </ErrorEmpty>}
          before={getHeader()}
        >
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
        </SelectModal>
      )
  }
}
