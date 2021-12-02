import styles from "../../../../styles/PaymentsModals/CreditCardPayment.module.scss";
import Image from "next/image";


export const PaymentHeading = ({t, type, closeHandler}) => {

  return (
    <div className={styles.paymentsHead}>
      <button className={styles.backButton}>
      </button>
      <div className={styles.heading}>
        {type === 'crypto' ? <h3 className={styles.cryptoHeading}>{t("cryptoPayment.heading")}</h3> : <></>}
        {type === 'fiat' ? <Image className={styles.cardImage} src={'/assets/img/depositWidget/cards.png'} width={96} height={38} layout={'fixed'} alt={'visa/mastercard icon'}/> : <></>}
      </div>
      <button onClick={() => closeHandler()} className={styles.closeButton}>
        <span className={styles.closeOne}></span>
        <span className={styles.closeTwo}></span>
      </button>
    </div>
  )
}