import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {DepositInputCount} from "./DepositInputCount";
import ErrorText from "../../../ErrorBoundaryComponents/ErrorText";
import {useEffect} from "react";
import {svgSetterById} from "../../../../helpers/iconNameFinder";

export const DepositInputsContainer = ({t, userCurrency, currencySwitcherShowHandler, userDepositValue, depositValueInputHandler, userDepositValueError}) => {
  useEffect(() => {
    const returnAbbr = false
    svgSetterById(userCurrency?.userCurrencyData, `depositBalance${userCurrency?.userCurrencyData?.id}`, returnAbbr);
  },[userCurrency?.userCurrencyData])

  return (
    <div className={styles.depositInputsBlock}>
      <div className={styles.depositInputCurrencyBlock}>
        <ErrorText>
          <DepositInputCount
            currencySymbol={userCurrency?.userCurrencyData?.symbol}
            userDepositValue={userDepositValue}
            depositValueInputHandler={depositValueInputHandler}
            userDepositValueError={userDepositValueError}
            t={t}/>
        </ErrorText>

        <div
          onClick={() => currencySwitcherShowHandler()}
          className={styles.depositCurrencyButton}
        >
          <div id={`depositBalance${userCurrency?.userCurrencyData?.id}`} className={styles.iconContainer}></div>
          {userCurrency?.userCurrencyData?.abbreviation}
          <div className={styles.depositCurrencyButtonArrow}>
          </div>
        </div>
      </div>
    </div>
  )
}
