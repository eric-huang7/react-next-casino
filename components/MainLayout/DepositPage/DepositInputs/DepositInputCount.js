import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {useDispatch} from "react-redux";
import {setErrorUserDepositValue} from "../../../../redux/userFinance/action";

export const DepositInputCount = ({t, currencySymbol, userDepositValue, depositValueInputHandler, userDepositValueError}) => {
  const dispatch = useDispatch()

  const onFocus = () => {
    dispatch(setErrorUserDepositValue(''));
  }

  return (
    <div className={styles.depositInputCountWrapper}>
      <label className={styles.labelEnterSum} htmlFor="depositInputCount">{t("depositPage.depositInputLabel")}</label>
      <label className={styles.labelIconCurrency} htmlFor="depositInputCount">{currencySymbol}</label>
      <input
        type="number"
        id="depositInputCount"
        className={`${styles.depositSummInput} ${userDepositValueError ? styles.errorMessage : ''}`}
        value={userDepositValue}
        onChange={(e) => depositValueInputHandler(e)}
        onFocus={onFocus}
      />
      <span className={styles.errorMessage}>{userDepositValueError}</span>
    </div>
  )
}
