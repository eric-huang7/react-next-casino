import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";


export const AmountInput = ({t, chosenPayment, typeOfCurrency, amountInputHandler, amountValue}) => {


  return (
    <div className={styles.valueInputContainer}>
      <label htmlFor="withdrawValueInput" className={styles.amountLabel}>Amount</label>
      <div className={styles.valueInnerWrapper}>
        <input
          onChange={(e) => amountInputHandler(e.target.value)}
          value={amountValue}
          type="number"
          id={"withdrawValueInput"}
          className={styles.withdrawValueInput}
        />
        <label htmlFor="withdrawValueInput" className={styles.currencyLabel}>{chosenPayment ? chosenPayment.abbreviation : typeOfCurrency.abbreviation}</label>
      </div>
    </div>
  )
}