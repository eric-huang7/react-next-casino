import Link from "next/link";

import styles from '../../../../../styles/HomePage/SumInputs.module.scss'
import {useDispatch, useSelector} from "react-redux";

import {useEffect, useState} from "react";
import {showCurrencySwitcher} from "../../../../../redux/actions/showPopups";
import {BonusBlock} from "../BonusBlock/BonusBlock";
import {setUserDepositValue} from "../../../../../redux/actions/setUserDepositValue";
import {bonusesFinder} from "../../../../../helpers/bonusesFinder";
import {CurrencyButton} from "./CurrencyButton";
import {DepositValueInput} from "./DepositValueInput";
import {setUserBonus} from "../../../../../redux/actions/setUserBonus";
import {BonusesContainer} from "../BonusBlock/BonusesContainer";



export const SumInputs = () => {
  const dispatch = useDispatch();

  const sumInputVal = useSelector(({userDepositValue}) => userDepositValue.value);
  const isShowCurrencySwitcher = useSelector(({showPopupsReducer}) => showPopupsReducer.isShowCurrencySwitcher);
  const userCurrency = useSelector((state) => state.userSelectedCurrency);
  const userLogin = useSelector((state) => state.authInfo.isAuthenticated);
  const activeBonuses = useSelector((state) => state.bonuses);

  const [isChecked, setIsChecked] = useState(true);
  const [bonusesArr, setBonusesArr] = useState([]);
  const [chosenBonus, setChosenBonus] = useState({});
  // const [depositValue, setDepositValue] = useState(sumInputVal);

  const sumInputChangeHandler = (e) => {
    dispatch(setUserDepositValue(e.target.value));
    // let val = e.target.value
    // if (val.length > 10) {
    //   return false
    // } else {
    //   // dispatch(setVal(val));
    // }
  }
  const checkedInputHandler = (e) => {
    if (isChecked) {
      setIsChecked(false);
      chooseBonusClickHandler(0);
    } else {
      setIsChecked(true);
    }
  }

  const chooseBonusClickHandler = (chosenUserBonus) => {
    dispatch(setUserBonus(chosenUserBonus));
    // setChosenBonus(chosenUserBonus);
    // changeButtonText();
  }

  const currencyButtonClickHAndler = () => {
    // console.log(isShowCurrencySwitcher, userCurrency);
    if (isShowCurrencySwitcher) {
      dispatch(showCurrencySwitcher(false));
    } else {
      dispatch(showCurrencySwitcher(true));
    }
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

  }, [userCurrency, userLogin]);

  return (
    <>
      <div className={styles.inputsWrapper}>
        <DepositValueInput
          sumInputChangeHandler={sumInputChangeHandler}
          sumInputVal={sumInputVal}
        />
        <CurrencyButton
          userCurrency={userCurrency}
          currencyButtonClickHAndler={currencyButtonClickHAndler}
        />
      </div>
      <div className={styles.dividerUp}/>
      <BonusesContainer
        isChecked={isChecked}
        checkedInputHandler={checkedInputHandler}
        bonusesArr={bonusesArr}
      />
      <div className={styles.dividerDown}/>
      <div className={styles.typePayments}>
      </div>
    </>

  )
}