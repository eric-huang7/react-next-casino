import styles from '../../../../styles/PaymentsModals/MobilePaymentsStepper.module.scss';
import {StepperPlayWithButton} from "./StepperPlayWithButton";


export const StepOneEnterAmount = ({t, userCurrency, userDepositValue, valueInputHandler, errorInputValue, currencySwitcherShowHandler, whatShouldDoPlayWith}) => {



  return (
    <div className={styles.stepOneWrapper}>
      <div className={styles.stepperAmountContainer}>
        <label className={styles.stepperAmountLabel} htmlFor="stepperAmount">ENTER DEPOSIT AMOUNT</label>
        <input
          type="number"
          className={styles.stepperAmountInput}
          id={"stepperAmount"}
          placeholder={`${userCurrency.currencySymbol} ${userDepositValue}`}
          onChange={(e) => valueInputHandler(e)}
        />
        <span className={styles.errorMessage}>{errorInputValue}</span>
        <button onClick={() => currencySwitcherShowHandler()} className={styles.stepperCurrencyButton}>{userCurrency.currencyAbbreviation}</button>
      </div>

      <StepperPlayWithButton
        t={t}
        userCurrency={userCurrency}
        userDepositValue={userDepositValue}
        whatShouldDoPlayWith={whatShouldDoPlayWith}
      />
    </div>
  )
}