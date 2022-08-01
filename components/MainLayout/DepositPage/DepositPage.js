import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {useDisclosure} from "@chakra-ui/hooks";
import {
  backButtonShouldDo, setStepDepositModal,
  showDepositModal,
} from '../../../redux/popups/action'
import {DepositPageStepper} from './DepositPageStepper'
import {setErrorUserDepositValue, setUserCurrencySwitcher, setUserDepositValue} from '../../../redux/userFinance/action'
import {setErrorUserPaymentMethod, setUserPaymentMethod} from '../../../redux/userFinance/action'
import {setUserBonus} from '../../../redux/userBonus/action'
import {bonusesFinder} from '../../../helpers/bonusesFinder'
import {bonusesCalculator} from '../../../helpers/bonusesCalculator'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import {SelectCurrencyModal} from "../../currency/SelectCurrencyModal";
import {addCurrencyToUserList} from "../../../redux/user/action";

export const DepositPage = ({t}) => {
  const dispatch = useDispatch()
  const {isOpen, onOpen, onClose} = useDisclosure()

  const userInfo = useSelector((state) => state.authInfo.user)
  const userLogin = useSelector((state) => state.authInfo.isAuthenticated)
  const popups = useSelector((state) => state.popups)
  const userCurrency = useSelector((state) => state.userFinance)
  const userPayment = useSelector((state) => state.userFinance)
  const userDepositValue = useSelector((state) => state.userFinance?.depositValue)

  const activeBonuses = useSelector((state) => state.bonuses)
  const userSelectedBonus = useSelector((state) => state.userBonus)
  const backButtonShouldDoState = useSelector((state) => state.popups.actionForBackButton)

  const [chosenBonus, setChosenBonus] = useState({})
  const [bonusesArr, setBonusesArr] = useState([])


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

  const currencySwitcherShowHandler = () => {
    onOpen()
  }

  const onSelectCurrency = (currencyData) => {
    dispatch(setUserCurrencySwitcher(currencyData))

    if (userLogin) {
      let currency = {
        currency_id: currencyData.id
      }
      dispatch(addCurrencyToUserList(currency))
    }

    onBack()
  }

  const closeDepositModalHandler = () => {
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

  }, [userCurrency, popups.isShowDepositModal])

  const onBack = () => {
    if (backButtonShouldDoState !== false) {
      backButtonShouldDoState()
      dispatch(backButtonShouldDo(false))
    }
    onClose()
  }

  return popups.isShowDepositModal && (
    <>
      <ErrorText>
        <DepositPageStepper
          step={popups.depositModalStep}
          t={t}
          checkedInputHandler={checkedInputHandler}
          currencySwitcherShowHandler={currencySwitcherShowHandler}
          closeDepositModalHandler={closeDepositModalHandler}
          isChecked={isChecked}
          userCurrency={userCurrency}
          userDepositValue={userDepositValue}
          depositValueInputHandler={depositValueInputHandler}
          userPayment={userPayment}
          userInfo={userInfo}
          chosenBonus={chosenBonus}
          chooseBonusClickHandler={chooseBonusClickHandler}
          setDepositButtonText={setDepositButtonText}
          buttonText={buttonText}
          userSelectedBonus={userSelectedBonus}
          bonusesArr={bonusesArr}
        />
      </ErrorText>
      <SelectCurrencyModal
        isOpen={isOpen}
        onClose={onClose}
        onSelect={onSelectCurrency}
        // onBack={onBack}
      />
    </>
  )
}
