import styles from '../../../styles/DepositPage/DepositPage.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {
  backButtonShouldDo, setStepDepositModal,
  showCurrencySwitcher,
  showDepositModal,
  showPaymentCurrencySwitcher
} from '../../../redux/popups/action'
import { DepositPageStepper } from './DepositPageStepper'
import { setErrorUserDepositValue, setUserDepositValue } from '../../../redux/userFinance/action'
import { setErrorUserPaymentMethod, setUserPaymentMethod } from '../../../redux/userFinance/action'
import { setUserBonus } from '../../../redux/userBonus/action'
import { bonusesFinder } from '../../../helpers/bonusesFinder'
import { bonusesCalculator } from '../../../helpers/bonusesCalculator'
import { useRouter } from 'next/router'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'

export const DepositPage = ({ t }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const userInfo = useSelector((state) => state.authInfo.user)
  const userLogin = useSelector((state) => state.authInfo.isAuthenticated)
  const isShowDepositModal = useSelector((state) => state.popups)
  const userCurrency = useSelector((state) => state.userFinance)
  const userPayment = useSelector((state) => state.userFinance)
  const userDepositValue = useSelector((state) => state.userFinance?.depositValue)
  const userDepositValueError = useSelector((state) => state.userFinance.errorMessage)
  const activeBonuses = useSelector((state) => state.bonuses)
  const userSelectedBonus = useSelector((state) => state.userBonus)
  const currencyData = useSelector((store) => store.currency?.currency)

  const [isActiveBonusInput, setIsActiveBonusInput] = useState(false)
  const [showAllBonuses, setShowAllBonuses] = useState(false)
  const [chosenBonus, setChosenBonus] = useState({})
  const [bonusesArr, setBonusesArr] = useState([])
  const [paymentMethods, setPaymentMethods] = useState(null)

  let newButtonText = `${t('depositPage.bonusInfo.playWith')} ${(userDepositValue < 0) ? '0' : Number(userDepositValue)} ${(userCurrency?.userCurrencyData?.symbol.length > 0) ? userCurrency?.userCurrencyData?.symbol : userCurrency?.userCurrencyData?.abbreviation}`
  const [buttonText, setNewButtonText] = useState(newButtonText)
  const setDepositButtonText = (newButtonText) => {
    setNewButtonText(newButtonText)
  }

  const changeButtonText = () => {
    let activeBonus = bonusesArr.find((el) => el.id === chosenBonus)

    let buttonText = bonusesCalculator(activeBonus, userCurrency, userDepositValue, t)

    setNewButtonText(buttonText)
  }

  const chooseBonusClickHandler = (chosenUserBonus) => {
    dispatch(setUserBonus(chosenUserBonus))
    setChosenBonus(chosenUserBonus)
    changeButtonText()
  }

  useEffect(() => {

    changeButtonText()
  }, [chosenBonus, userDepositValue])

  useEffect(() => {
    setChosenBonus(userSelectedBonus.bonus_id)
  }, [userSelectedBonus.bonus_id])

  const showAllBonusesHandler = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (showAllBonuses) {
      setShowAllBonuses(false)
    } else {
      setShowAllBonuses(true)
    }
  }

  const stepHandler = (step) => {
    dispatch(setStepDepositModal(step + 1))
  }

  const [isChecked, setIsChecked] = useState(true)
  const checkedInputHandler = (e) => {
    if (isChecked) {
      chooseBonusClickHandler(0)
      setIsChecked(false)
      setNewButtonText(newButtonText)
    } else {
      setIsChecked(true)
    }
  }

  const bonusCodeInputActiveHandler = () => {
    if (isActiveBonusInput) {
      setIsActiveBonusInput(false)
    } else {
      setIsActiveBonusInput(true)
    }
  }
  const hideCurrencyShowDepositModal = () => {
    dispatch(showCurrencySwitcher(false))
    dispatch(showDepositModal(true))
  }
  // const hidePaymentCurrencyShowDepositModal = () => {
  //   dispatch(showDepositModal(true))
  //   dispatch(showPaymentCurrencySwitcher(false))
  // }

  const currencySwitcherShowHandler = () => {
    dispatch(showCurrencySwitcher(true))
    dispatch(showDepositModal(false))
    dispatch(backButtonShouldDo(hideCurrencyShowDepositModal))
  }

  const closeDepositModalHandler = () => {
    setShowAllBonuses(false)
    dispatch(showDepositModal(false))
    dispatch(setUserBonus(0))
    dispatch(setErrorUserDepositValue(''))
    dispatch(setErrorUserPaymentMethod(''))
    dispatch(setUserPaymentMethod(null))
    // setStep(1);
    dispatch(setStepDepositModal(1))
  }
  const depositValueInputHandler = (value) => {
    dispatch(setUserDepositValue(value))
    setNewButtonText(`${t('depositPage.bonusInfo.playWith')} ${(value < 0) ? '0' : Number(value)} ${(userCurrency?.userCurrencyData?.symbol.length > 0) ? userCurrency?.userCurrencyData?.symbol : userCurrency?.userCurrencyData?.abbreviation}`)
  }

  const submitHandler = () => {

  }

  useEffect(() => {
    if (userLogin) {

      let bonuses = bonusesFinder(activeBonuses.activeBonuses?.offers, userCurrency)
      if (bonuses.length > 0) {
        setBonusesArr(bonuses)
      } else {
        setBonusesArr([])
        chooseBonusClickHandler(0)
      }

    } else {
      setBonusesArr([])
    }

  }, [userCurrency, isShowDepositModal.isShowDepositModal])



  return (
    <div className={`${styles.depositPageWrapper} ${isShowDepositModal.isShowDepositModal ? '' : styles.hide}`}>
      <div className={styles.depositsMainBlock}>
        <h2 className={`${router.locale === 'ru' ? styles.ru : ''}`}>{t('depositPage.mainHeading')}</h2>
        <ErrorText>
          <DepositPageStepper
            currencyData={currencyData}
            step={isShowDepositModal.depositModalStep}
            t={t}
            bonusCodeInputActiveHandler={bonusCodeInputActiveHandler}
            isActiveBonusInput={isActiveBonusInput}
            checkedInputHandler={checkedInputHandler}
            currencySwitcherShowHandler={currencySwitcherShowHandler}
            closeDepositModalHandler={closeDepositModalHandler}
            isChecked={isChecked}
            userCurrency={userCurrency}
            stepHandler={stepHandler}
            submitHandler={submitHandler}
            userDepositValue={userDepositValue}
            depositValueInputHandler={depositValueInputHandler}
            userDepositValueError={userDepositValueError}
            userPayment={userPayment}
            userInfo={userInfo}
            showAllBonuses={showAllBonuses}
            showAllBonusesHandler={showAllBonusesHandler}
            chosenBonus={chosenBonus}
            chooseBonusClickHandler={chooseBonusClickHandler}
            setDepositButtonText={setDepositButtonText}
            buttonText={buttonText}
            userSelectedBonus={userSelectedBonus}
            isShowDepositModal={isShowDepositModal.isShowDepositModal}
            bonusesArr={bonusesArr}
            paymentMethods={paymentMethods}
            setPaymentMethods={setPaymentMethods}
          />
        </ErrorText>
      </div>
    </div>
  )
}
