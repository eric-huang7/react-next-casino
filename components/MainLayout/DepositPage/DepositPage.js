import styles from '../../../styles/DepositPage/DepositPage.module.scss'
import {Header} from "../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {showCurrencySwitcher, showDepositModal} from "../../../redux/actions/showPopups";
import {DepositPageStepper} from "./DepositPageStepper";
import {setUserDepositValue} from "../../../redux/actions/setUserDepositValue";
import {LOGOUT_FAIL} from "../../../redux/actions/types";



export const DepositPage = ({t}) => {
  const dispatch = useDispatch();

  const isShowDepositModal = useSelector((state) => state.showPopupsReducer.isShowDepositModal);
  const isShowCurrencyModal = useSelector((state) => state.showPopupsReducer.isShowCurrencySwitcher);
  const userCurrency = useSelector((state) => state.userSelectedCurrency);
  const userPayment = useSelector((state) => state.userPaymentMethod);
  const userDepositValue = useSelector((state) => state.userDepositValue.value);

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
        />
      </div>
    </div>
  )
}