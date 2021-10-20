import Link from "next/link";

import styles from '../../../../../styles/HomePage/SumInputs.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setVal} from "../../../../../redux/actions/sumInputChange";
import {useEffect, useState} from "react";
import {showCurrencySwitcher} from "../../../../../redux/actions/showPopups";


export const SumInputs = () => {
  const sumInputVall = useSelector(({sumInput}) => sumInput.value);
  const isShowCurrencySwitcher = useSelector(({showPopupsReducer}) => showPopupsReducer.isShowCurrencySwitcher);
  const userSelectedCurrency = useSelector((state) => state.userSelectedCurrency);

  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(true)

  const sumInputChangeHandler = (e) => {
    let val = e.target.value
    if (val.length > 10) {
      return false
    } else {
      dispatch(setVal(val));
    }
  }
  const checkedInputHandler = (e) => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
    console.log(e);
  }

  const currencyButtonClickHAndler = () => {
    console.log(isShowCurrencySwitcher, userSelectedCurrency);
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
        <label htmlFor="sumInputMain" className={styles.sumInputLabel}>{'$'}</label>
        <div
          className={styles.currencyButton}
          onClick={() => currencyButtonClickHAndler()}
        >
          <span className={styles.currencyButtonValue}>{userSelectedCurrency.currencyAbbreviation}</span>
        </div>
      </div>
      <div className={styles.dividerUp}/>
      <div className={styles.bonusInfoBlockWrapper}>
        <div className={styles.bonusInfoBlock}>
          <p>
            First Deposit Bonus
          </p>
          <Link href={'#'}><a>info</a></Link>
        </div>
        <p className={styles.bonusInfoText}>
          100% up to $100 plus 200 free spin...
        </p>
        <div className={styles.bonusSwitcher}>
          <label className={styles.switch}>
            <input onChange={(e) => checkedInputHandler(e)} className={styles.bonusSwitcherInput} type="checkbox" checked={isChecked} />
              <span className={`${styles.slider} ${styles.round}`}>
              </span>
          </label>
        </div>
      </div>
      <div className={styles.dividerDown}/>
      <div className={styles.typePayments}>
      </div>
    </>

  )
}