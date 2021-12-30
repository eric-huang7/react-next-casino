import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";


export const AddressInput = ({t, addressInputHandler, addressValue}) => {


  return (
    <div  className={styles.addressInputContainer}>
      <label htmlFor="addressInputContainer" className={styles.addressLabel}>Account number/IBAN</label>
      <input
        onChange={(e) => addressInputHandler(e.target.value)}
        value={addressValue}
        type="text"
        className={styles.addressInput}
        id={"addressInputContainer"}
      />
    </div>
  )
}