import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";


export const FormContainer = ({t}) => {


  return (
    <div  className={styles.paymentMethodFormWrapper}>
      <form id={"paymentForm"}>
        <div  className={styles.valueInputContainer}>
          <label htmlFor="withdrawValueInput" className={styles.amountLabel}>Amount</label>
          <div className={styles.valueInnerWrapper}>
            <input type="number" id={"withdrawValueInput"} className={styles.withdrawValueInput}/>
            <label htmlFor="withdrawValueInput" className={styles.currencyLabel}>{"CURRENCY"}</label>
          </div>
        </div>
        <div  className={styles.addressInputContainer}>
          <label htmlFor="addressInputContainer" className={styles.addressLabel}>Adress</label>
          <input type="text" className={styles.addressInput} id={"addressInputContainer"}/>
        </div>
        <button form={"paymentForm"} type={"submit"} className={styles.submitButton}>Request Cashout</button>
      </form>
    </div>
  )
}