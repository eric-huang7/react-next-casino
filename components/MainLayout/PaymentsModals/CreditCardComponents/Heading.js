import styles from "../../../../styles/PaymentsModals/CreditCardPayment.module.scss";
import Image from "next/image";


export const PaymentHeading = () => {

  return (
    <div className={styles.paymentsHead}>
      <button className={styles.backButton}>
      </button>
      <div className={styles.heading}>
        <Image className={styles.cardImage} src={'/assets/img/depositWidget/cards.png'} width={96} height={38} layout={'fixed'} alt={'visa/mastercard icon'}/>
        {/*<h3 className={styles.cryptoHeading}>Avaiting Payment</h3>*/}
      </div>
      <button className={styles.closeButton}>
        <span className={styles.closeOne}></span>
        <span className={styles.closeTwo}></span>
      </button>
    </div>
  )
}