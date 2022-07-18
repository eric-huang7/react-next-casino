import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {DepositInputCount} from "./DepositInputCount";
import ErrorText from "../../../ErrorBoundaryComponents/ErrorText";
import CurrencyIcon from "../../../currency/CurrencyIcon";
import {backButtonShouldDo, showDepositModal} from "../../../../redux/popups/action";

export const DepositInputsContainer = ({
                                         t,
                                         currencySwitcherShowHandler,
                                         userCurrency,
                                         userDepositValue,
                                         depositValueInputHandler,
                                         userDepositValueError
                                       }) => {

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
          onClick={currencySwitcherShowHandler}
          className={styles.depositCurrencyButton}
        >
          <CurrencyIcon id={userCurrency?.userCurrencyData?.abbreviation} size={6} mr={2}/>
          {userCurrency?.userCurrencyData?.abbreviation}
          <div className={styles.depositCurrencyButtonArrow}>
          </div>
        </div>
      </div>
    </div>
  )
}
