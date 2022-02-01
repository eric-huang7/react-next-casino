import styles from '../../../styles/DepositPage/DepositPage.module.scss'
import {Header} from "../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
  backButtonShouldDo, setStepDepositModal,
  showCurrencySwitcher,
  showDepositModal,
  showPaymentCurrencySwitcher
} from "../../../redux/actions/showPopups";
import {DepositPageStepper} from "./DepositPageStepper";
import {setErrorUserDepositValue, setUserDepositValue} from "../../../redux/actions/setUserDepositValue";
import {setErrorUserPaymentMethod, setUserPaymentMethod} from "../../../redux/actions/setUserPaymentMethod";
import {setUserBonus} from "../../../redux/actions/setUserBonus";
import {bonusesFinder} from "../../../helpers/bonusesFinder";
import {bonusesCalculator} from "../../../helpers/bonusesCalculator";
import axios from "axios";
import {payments_methods_url} from "../../../redux/url/url";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {DepositHeading} from "./DepositHeading";
import {useRouter} from "next/router";


export const DepositPage = ({t}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const userInfo = useSelector((state) => state.authInfo.user);
  const userLogin = useSelector((state) => state.authInfo.isAuthenticated);
  const isShowDepositModal = useSelector((state) => state.showPopupsReducer);
  const isShowCurrencyModal = useSelector((state) => state.showPopupsReducer.isShowCurrencySwitcher);
  const userCurrency = useSelector((state) => state.userSelectedCurrency);
  const userPayment = useSelector((state) => state.userPaymentMethod);
  const userDepositValue = useSelector((state) => state.userDepositValue.value);
  const userDepositValueError = useSelector((state) => state.userDepositValue.errorMessage);
  const activeBonuses = useSelector((state) => state.bonuses);
  const userSelectedBonus = useSelector((state) => state.userBonus);
  const currencyData = useSelector((store) => store.getCurrency.currency);



  const [activeBonus, setActiveBonus] = useState(false);
  const [isActiveBonusInput, setIsActiveBonusInput] = useState(false);
  const [showAllBonuses, setShowAllBonuses] = useState(false);
  // const [step, setStep] = useState(isShowDepositModal.depositModalStep);
  const [chosenBonus, setChosenBonus] = useState({});
  const [bonusesArr, setBonusesArr] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState(null);

  let newButtonText = `${t("depositPage.bonusInfo.playWith")} ${(userDepositValue < 0) ? "0" : Number(userDepositValue)} ${(userCurrency.userCurrencyData.symbol.length > 0) ? userCurrency.userCurrencyData.symbol : userCurrency.userCurrencyData.abbreviation}`;
  const [buttonText, setNewButtonText] = useState(newButtonText);
  const setDepositButtonText = (newButtonText) => {
    setNewButtonText(newButtonText);
  }

  const changeButtonText = () => {
    let activeBonus = bonusesArr.find((el) => el.id === chosenBonus);
    // console.log(activeBonus, userSelectedBonus, chosenBonus, 'filtered Bonus');
    // // console.log(activeBonus, userSelectedBonus, chosenBonus, 'filtered Bonus');
    let buttonText = bonusesCalculator(activeBonus, userCurrency, userDepositValue, t);

    setNewButtonText(buttonText);
  }


  const chooseBonusClickHandler = (chosenUserBonus) => {
    dispatch(setUserBonus(chosenUserBonus));
    setChosenBonus(chosenUserBonus);
    changeButtonText();
  }

  useEffect(() => {
    // console.log(activeBonus, userSelectedBonus, chosenBonus, 'filtered Bonus effect');
    changeButtonText();
  }, [chosenBonus]);

  useEffect(() => {
    setChosenBonus(userSelectedBonus.bonus_id);
  }, [userSelectedBonus.bonus_id])


  const showAllBonusesHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (showAllBonuses) {
      setShowAllBonuses(false);
    } else {
      setShowAllBonuses(true);
    }
  }

  const stepHandler = (step) => {
    // setStep(step + 1);
    dispatch(setStepDepositModal(step + 1));
  }


  const [isChecked, setIsChecked] = useState(true)
  const checkedInputHandler = (e) => {
    // console.log(userSelectedBonus, 'selctedBonus')
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
  const hidePaymentCurrencyShowDepositModal = () => {
    dispatch(showDepositModal(true));
    dispatch(showPaymentCurrencySwitcher(false));
  }

  const currencySwitcherShowHandler = () => {
    dispatch(showCurrencySwitcher(true));
    dispatch(showDepositModal(false));
    dispatch(backButtonShouldDo(hideCurrencyShowDepositModal));
  }

  const closeDepositModalHandler = () => {
    setShowAllBonuses(false);
    dispatch(showDepositModal(false));
    dispatch(setUserBonus(0));
    dispatch(setErrorUserDepositValue(''));
    dispatch(setErrorUserPaymentMethod(''));
    dispatch(setUserPaymentMethod(null));
    // setStep(1);
    dispatch(setStepDepositModal(1));
  }
  const depositValueInputHandler = (e) => {
    dispatch(setUserDepositValue(e.target.value));
    setNewButtonText(`${t("depositPage.bonusInfo.playWith")} ${(e.target.value < 0) ? "0" : Number(e.target.value)} ${(userCurrency.userCurrencyData.symbol.length > 0) ? userCurrency.userCurrencyData.symbol : userCurrency.userCurrencyData.abbreviation}`)
  }

  const submitHandler = () => {
    console.log('Submit');
  }

  useEffect(() => {
    if (userLogin) {

      let bonuses = bonusesFinder(activeBonuses.activeBonuses?.offers, userCurrency);
      if (bonuses.length > 0) {
        setBonusesArr(bonuses);
      } else {
        setBonusesArr([]);
        chooseBonusClickHandler(0);
      }

    } else {
      setBonusesArr([]);
    }


  }, [userCurrency, isShowDepositModal.isShowDepositModal]);

  useEffect(() => {
    if (isShowDepositModal.isShowDepositModal) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }
  }, [isShowDepositModal.isShowDepositModal])


  return (
    <div className={`${styles.depositPageWrapper} ${isShowDepositModal.isShowDepositModal ? "" : styles.hide}`}>
      {/*<Header t={t}/>*/}
      <div className={styles.depositsMainBlock}>
        <h2 className={`${router.locale === 'ru' ? styles.ru : ""}`}>{t("depositPage.mainHeading")}</h2>
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
      </div>
    </div>
  )
}