import styles from '../../../styles/DepositPage/DepositPage.module.scss'
import {Header} from "../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {showCurrencySwitcher, showDepositModal} from "../../../redux/actions/showPopups";
import {DepositPageStepper} from "./DepositPageStepper";
import {setErrorUserDepositValue, setUserDepositValue} from "../../../redux/actions/setUserDepositValue";
import {LOGOUT_FAIL} from "../../../redux/actions/types";
import {setErrorUserPaymentMethod, setUserPaymentMethod} from "../../../redux/actions/setUserPaymentMethod";



export const DepositPage = ({t}) => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.authInfo.user);
  const isShowDepositModal = useSelector((state) => state.showPopupsReducer.isShowDepositModal);
  const isShowCurrencyModal = useSelector((state) => state.showPopupsReducer.isShowCurrencySwitcher);
  const userCurrency = useSelector((state) => state.userSelectedCurrency);
  const userPayment = useSelector((state) => state.userPaymentMethod);
  const userDepositValue = useSelector((state) => state.userDepositValue.value);
  const userDepositValueError = useSelector((state) => state.userDepositValue.errorMessage);

  const [activeBonus, setActiveBonus] = useState(false);
  const [isActiveBonusInput, setIsActiveBonusInput] = useState(false);
  const [step, setStep] = useState(1);

  const stepHandler = (step) => {
    setStep(step + 1);
  }

  console.log(userCurrency, "@@@@@@@")

  const [isChecked, setIsChecked] = useState(true)
  const checkedInputHandler = (e) => {
    if (isChecked) {
      setIsChecked(false);
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

  const currencySwitcherShowHandler = () => {
    dispatch(showCurrencySwitcher(true));
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
  }

  const submitHandler = () => {

    console.log('Submit');
  }
  return (
    <div className={`${styles.depositPageWrapper} ${isShowDepositModal ? "" : styles.hide}`}>
      <Header t={t}/>
      <div className={styles.depositsMainBlock}>
        <h2>DEPOSIT $ 100 AND GET $ 200</h2>
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
        />
      </div>
    </div>
  )
}