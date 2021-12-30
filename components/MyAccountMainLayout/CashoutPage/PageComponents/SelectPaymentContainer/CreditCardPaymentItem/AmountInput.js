import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";


export const AmountInput = ({t, typeOfCurrency, amountValue, amountInputHandler}) => {


  return (
    <div  className={styles.valueInputContainer}>
      <label htmlFor="withdrawValueInput" className={styles.amountLabel}>{t("myAccount.cashoutPage.selectPaymentContainer.amount")}</label>
      <div className={styles.valueInnerWrapper}>
        <input
          onChange={(e) => amountInputHandler(e.target.value)}
          value={amountValue}
          type="number"
          id={"withdrawValueInput"}
          className={styles.withdrawValueInput}
        />
        <label htmlFor="withdrawValueInput" className={styles.currencyLabel}>{typeOfCurrency.abbreviation}</label>
      </div>
    </div>
  )
}