import styles from "../../../../styles/PaymentsModals/CreditCardPayment.module.scss";
import Image from "next/image";


export const InputsContainer = ({t}) => {


  return (
    <div className={styles.inputsWrapper}>
      <div className={styles.cardNumberDate}>
        <div className={styles.cardNumberWrapper}>
          <input id={'cardNumber'} type="number" className={styles.cardNumberInput} placeholder={'Credit Card Number'}/>
          <label htmlFor="cardNumber" className={styles.cardNumberLabel}>
          </label>
        </div>
        <input id={'dateInput'} type="number" className={styles.dateInput} placeholder={'Expiry Date'}/>
      </div>
      <div className={styles.nameCardCvv}>
        <div className={styles.cardNameWrapper}>
          <input id={'cardName'} type="text" className={styles.cardNameInput} placeholder={'Credit Holder Number'}/>
          <label htmlFor="cardName" className={styles.cardNameLabel}></label>
        </div>
        <input type="number" className={styles.cardCvv} placeholder={'CVV'}/>
      </div>
      <div className={styles.amountValue}>
        <p>Amount (Min 20.00, max 4000.00)</p>
        <input type="number" className={styles.amountValueInput}/>
      </div>
      <div className={styles.secureBlock}>
        <Image src={'/assets/img/paymentsModals/lock.png'} layout={'fixed'} width={20} height={28} alt={'lock icon'} />
        <p className={styles.secureText}>Secure Payment Processing Time: Instant Fee 2.5%</p>
      </div>
    </div>
  )
}