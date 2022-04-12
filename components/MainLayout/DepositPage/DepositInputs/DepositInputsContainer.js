import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {DepositInputCount} from "./DepositInputCount";
import ErrorText from "../../../ErrorBoundaryComponents/ErrorText";

export const DepositInputsContainer = ({t, userCurrency, currencySwitcherShowHandler, userDepositValue, depositValueInputHandler, userDepositValueError}) => {

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
          {userCurrency?.userCurrencyData?.abbreviation}
          <div className={styles.depositCurrencyButtonArrow}>
          </div>
        </div>
      </div>
    </div>
  )
}
