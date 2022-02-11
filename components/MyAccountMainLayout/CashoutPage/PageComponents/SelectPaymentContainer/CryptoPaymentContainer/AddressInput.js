import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";


export const AddressInput = ({t, addressInputHandler, addressValue, name, addressError}) => {

  // "myAccount.cashoutPage.selectPaymentContainer.address"

  return (
    <div className={styles.addressInputContainer}>
      <label htmlFor="addressInputContainer" className={styles.addressLabel}>{t(name)}</label>
      <input
        onChange={(e) => addressInputHandler(e.target.value)}
        value={addressValue}
        type="text"
        className={styles.addressInput}
        id={"addressInputContainer"}
      />
      <span className={styles.formErrorMessage}>{addressError}</span>
    </div>
  )
}