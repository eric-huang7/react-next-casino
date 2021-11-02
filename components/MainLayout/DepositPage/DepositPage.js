import styles from '../../../styles/DepositPage/DepositPage.module.scss'
import {Header} from "../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {backButtonShouldDo, showCurrencySwitcher, showDepositModal} from "../../../redux/actions/showPopups";
import {DepositPageStepper} from "./DepositPageStepper";
import {setErrorUserDepositValue, setUserDepositValue} from "../../../redux/actions/setUserDepositValue";
import {setErrorUserPaymentMethod, setUserPaymentMethod} from "../../../redux/actions/setUserPaymentMethod";
import {setUserBonus} from "../../../redux/actions/setUserBonus";



export const DepositPage = ({t}) => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.authInfo.user);
  const isShowDepositModal = useSelector((state) => state.showPopupsReducer.isShowDepositModal);
  const isShowCurrencyModal = useSelector((state) => state.showPopupsReducer.isShowCurrencySwitcher);
  const userCurrency = useSelector((state) => state.userSelectedCurrency);
  const userPayment = useSelector((state) => state.userPaymentMethod);
  const userDepositValue = useSelector((state) => state.userDepositValue.value);
  const userDepositValueError = useSelector((state) => state.userDepositValue.errorMessage);
  const userSelectedBonus = useSelector((state) => state.userBonus)

  const [activeBonus, setActiveBonus] = useState(false);
  const [isActiveBonusInput, setIsActiveBonusInput] = useState(false);
  const [showAllBonuses, setShowAllBonuses] = useState(false);
  const [step, setStep] = useState(1);
  const [chosenBonus, setChosenBonus] = useState({});

  let newButtonText = `${t("depositPage.bonusInfo.playWith")} ${(userDepositValue < 0) ? "0" : Number(userDepositValue)} ${(userCurrency.currencySymbol.length > 0) ? userCurrency.currencySymbol : userCurrency.currencyAbbreviation}`;
  const [buttonText, setNewButtonText] = useState(newButtonText);
  const setDepositButtonText = (newButtonText) => {
    setNewButtonText(newButtonText);
  }

  const chooseBonusClickHandler = (chosenUserBonus) => {
    dispatch(setUserBonus(chosenUserBonus));
    setChosenBonus(chosenUserBonus);
  }

  const showAllBonusesHandler = () => {
    if (showAllBonuses){
      setShowAllBonuses(false);
    } else {
      setShowAllBonuses(true);
    }
  }

  const stepHandler = (step) => {
    setStep(step + 1);
  }


  const [isChecked, setIsChecked] = useState(true)
  const checkedInputHandler = (e) => {
    console.log(userSelectedBonus, 'selctedBonus')
    if (isChecked) {
      chooseBonusClickHandler(0);
      setIsChecked(false);
      setNewButtonText(newButtonText);
    } else {
      setIsChecked(true);
    }
  }

  const bonusCodeInputActiveHandler = () => {
    if (isActiveBonusInput) {
      setIsActiveBonusInput(false);
    } else {
      setIsActiveBonusInput(true);
    }
  }
  const hideCurrencyShowDepositModal = () => {
    dispatch(showCurrencySwitcher(false));
    dispatch(showDepositModal(true));
  }

  const currencySwitcherShowHandler = () => {
    dispatch(showCurrencySwitcher(true));
    dispatch(showDepositModal(false));
    dispatch(backButtonShouldDo(hideCurrencyShowDepositModal));
  }

  const closeDepositModalHandler = () => {
    dispatch(showDepositModal(false));
    dispatch(setErrorUserDepositValue(''));
    dispatch(setErrorUserPaymentMethod(''));
    dispatch(setUserPaymentMethod({
      paymentId: null,
      paymentName: null,
      paymentImg: null
    }))
    setStep(1);
  }
  const depositValueInputHandler = (e) => {
    dispatch(setUserDepositValue(e.target.value));
    setNewButtonText(`${t("depositPage.bonusInfo.playWith")} ${(e.target.value < 0) ? "0" : Number(e.target.value)} ${(userCurrency.currencySymbol.length > 0) ? userCurrency.currencySymbol : userCurrency.currencyAbbreviation}`)
  }

  const submitHandler = () => {
    console.log('Submit');
  }

  return (
    <div className={`${styles.depositPageWrapper} ${isShowDepositModal ? "" : styles.hide}`}>
      {/*<Header t={t}/>*/}
      <div className={styles.depositsMainBlock}>
        <h2>{t("depositPage.mainHeading")}</h2>
        <DepositPageStepper
          step={step}
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
        />
      </div>
    </div>
  )
}