import Link from "next/link";

import styles from '../../../../../styles/HomePage/SumInputs.module.scss'
import {useDispatch, useSelector} from "react-redux";

import {useEffect, useState} from "react";
import {showCurrencySwitcher} from "../../../../../redux/actions/showPopups";
import {BonusBlock} from "../BonusBlock/BonusBlock";


export const SumInputs = () => {
  const sumInputVall = useSelector(({userDepositValue}) => userDepositValue.value);
  const isShowCurrencySwitcher = useSelector(({showPopupsReducer}) => showPopupsReducer.isShowCurrencySwitcher);
  const userSelectedCurrency = useSelector((state) => state.userSelectedCurrency);

  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(true)

  const sumInputChangeHandler = (e) => {
    console.log(e.target.value);
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
    } else {
      setIsChecked(true);
    }
    // console.log(e);
  }

  const currencyButtonClickHAndler = () => {
    // console.log(isShowCurrencySwitcher, userSelectedCurrency);
    if (isShowCurrencySwitcher) {
      dispatch(showCurrencySwitcher(false));
    } else {
      dispatch(showCurrencySwitcher(true));
    }
  }

  return (
    <>
      <div className={styles.inputsWrapper}>
        <input onChange={(e) => sumInputChangeHandler(e)} id="sumInputMain"  className={styles.sumInput} maxLength={10} type="number"/>
        <div
          className={styles.currencyButton}
          onClick={() => currencyButtonClickHAndler()}
        >
            <span className={styles.currencyButtonValue}>{userSelectedCurrency.userCurrencyData.abbreviation}</span>
        </div>
      </div>
      <div className={styles.dividerUp}/>
      <BonusBlock
        // t={t}
        isChecked={isChecked}
        checkedInputHandler={checkedInputHandler}
      />
      <div className={styles.dividerDown}/>
      <div className={styles.typePayments}>
      </div>
    </>

  )
}