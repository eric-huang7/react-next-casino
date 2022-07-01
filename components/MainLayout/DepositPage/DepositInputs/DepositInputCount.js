import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {useDispatch} from "react-redux";
import {setErrorUserDepositValue} from "../../../../redux/userFinance/action";
import {useEffect, useRef} from "react";
import {setLoaded, setSearch} from "../../../../redux/games/action";

export const DepositInputCount = ({t, currencySymbol, userDepositValue, depositValueInputHandler, userDepositValueError}) => {
  const dispatch = useDispatch()

  const onFocus = () => {
    dispatch(setErrorUserDepositValue(''));
  }

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D\./g, "");
    depositValueInputHandler(value)
  };

  return (
    <div className={styles.depositInputCountWrapper}>
      <label className={styles.labelEnterSum} htmlFor="depositInputCount">{t("depositPage.depositInputLabel")}</label>
      <label className={styles.labelIconCurrency} htmlFor="depositInputCount">{currencySymbol}</label>
      <input
        inputMode="decimal"
        id="depositInputCount"
        maxLength={12}
        className={`${styles.depositSummInput} ${userDepositValueError ? styles.errorMessage : ''}`}
        value={userDepositValue}
        onChange={handleChange}
        onFocus={onFocus}
      />
      <span className={styles.errorMessage}>{userDepositValueError}</span>
    </div>
  )
}
