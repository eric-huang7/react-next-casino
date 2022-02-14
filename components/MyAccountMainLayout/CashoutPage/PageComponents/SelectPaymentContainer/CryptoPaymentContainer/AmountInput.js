import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import {numberTransformer} from "../../../../../../helpers/numberTransformer";
import {decimalStepCounter} from "../../../../../../helpers/decimalStepCounter";


export const AmountInput = ({t, chosenPayment, typeOfCurrency, amountInputHandler, amountValue, valueRef, valueError}) => {

  let min = numberTransformer(chosenPayment ? `${chosenPayment.withdrawMin}` : `${typeOfCurrency.withdrawMin}`);
  let max = numberTransformer(chosenPayment ? `${chosenPayment.withdrawMax}` : `${typeOfCurrency.withdrawMax}`);

  let step = decimalStepCounter(chosenPayment ? chosenPayment.decimal : typeOfCurrency.decimal);

  return (
    <div className={styles.valueInputContainer}>
      <label htmlFor="withdrawValueInput"
             className={styles.amountLabel}>{t("myAccount.cashoutPage.selectPaymentContainer.amount")}</label>
      <div className={styles.valueInnerWrapper}>
        <input
          ref={valueRef}
          onChange={(e) => amountInputHandler(e.target.value)}
          value={amountValue}
          type="number"
          min={min}
          max={max}
          step={step}
          id={"withdrawValueInput"}
          className={styles.withdrawValueInput}
        />
        <label htmlFor="withdrawValueInput"
               className={styles.currencyLabel}
        >
          {chosenPayment ? chosenPayment.abbreviation : typeOfCurrency.abbreviation}
        </label>
      </div>
      <span className={styles.formErrorMessage}>{valueError}</span>
    </div>
  )
}