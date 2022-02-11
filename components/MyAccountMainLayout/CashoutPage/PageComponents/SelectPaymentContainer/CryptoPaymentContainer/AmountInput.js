import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import {numberTransformer} from "../../../../../../helpers/numberTransformer";


export const AmountInput = ({t, chosenPayment, typeOfCurrency, amountInputHandler, amountValue, valueRef}) => {

  let min = numberTransformer(chosenPayment ? `${chosenPayment.withdrawMin}` : `${typeOfCurrency.withdrawMin}`);

  return (
    <div className={styles.valueInputContainer}>
      <label htmlFor="withdrawValueInput" className={styles.amountLabel}>{t("myAccount.cashoutPage.selectPaymentContainer.amount")}</label>
      <div className={styles.valueInnerWrapper}>
        <input
          ref={valueRef}
          onChange={(e) => amountInputHandler(e.target.value)}
          value={amountValue}
          type="number"
          min={min}
          id={"withdrawValueInput"}
          className={styles.withdrawValueInput}
        />
        <label htmlFor="withdrawValueInput" className={styles.currencyLabel}>{chosenPayment ? chosenPayment.abbreviation : typeOfCurrency.abbreviation}</label>
      </div>
    </div>
  )
}