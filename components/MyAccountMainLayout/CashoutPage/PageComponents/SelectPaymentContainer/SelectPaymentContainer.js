import styles from '../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss';



export const SelectPaymentContainer = ({t}) => {


  return (
    <div  className={styles.selectMethodContainer}>
      <p className={styles.containerHeading}>{"Select Payment Method"}</p>
      <div  className={styles.paymentMethodWrapper}>
        <ul className={styles.methodsList}>
          <li className={`${styles.methodItem} ${styles.activeMethodItem}`}>
            <div className={styles.paymentItemMainContainer}>
              <div  className={styles.methodImageContainer}>
                <img src="/assets/img/myAccount/cashoutPage/bitcoin.png" alt="metjod"/>
              </div>
              <div  className={styles.paymentInfoContainer}>
                <p>min 50.0, max 4000.00, Payment BTC</p>
              </div>
              <div className={styles.indicatorContainer}>

              </div>
            </div>
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
          </li>
          <li className={`${styles.methodItem} `}>
            <div className={styles.paymentItemMainContainer}>
              <div  className={`${styles.methodImageContainer} ${styles.creditCardImageContainer}`}>
                <img src="/assets/img/myAccount/cashoutPage/Visa.png" alt="method visa"/>
                <img src="/assets/img/myAccount/cashoutPage/MasterCard.png" alt="method mastercard"/>
                <img src="/assets/img/myAccount/cashoutPage/Maestro.png" alt="method maestro"/>
              </div>
              <div  className={styles.paymentInfoContainer}>
                <p>min 50.0, max 4000.00, Payment BTC</p>
              </div>
              <div className={styles.indicatorContainer}>

              </div>
            </div>
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
          </li>
        </ul>
      </div>
    </div>
  )
}