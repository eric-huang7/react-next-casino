import styles from "../../../../styles/PaymentsModals/CreditCardPayment.module.scss";
import Image from "next/image";


export const PaymentHeading = ({t, type, closeHandler, pageStep, whatShouldDoBackButton, showBackButton, backButtonClickHandler}) => {

  return (
    <div className={styles.paymentsHead}>
      {
        pageStep === 1 || !pageStep ? <div className={styles.empty}></div>
          :
          <button onClick={() => whatShouldDoBackButton()} className={styles.backButton}>
          </button>
      }
      {
        // showBackButton ?
        //   <button onClick={() => backButtonClickHandler()} className={`${styles.backButton} ${showBackButton ? styles.toDepositBackButton : ""}`}>
        //   </button>
        //   :
        //   <div className={styles.empty}></div>
      }

      <div className={styles.heading}>
        {type === 'confirmed' ? <h3 className={styles.cryptoHeading}>{t("creditCardPayment.confirmHeading")}</h3> : <></>}
        {type === 'crypto' ? <h3 className={styles.cryptoHeading}>{t("cryptoPayment.heading")}</h3> : <></>}
        {type === 'fiat' ? <Image className={styles.cardImage} src={'/assets/img/depositWidget/cards.png'} width={96} height={38} layout={'fixed'} alt={'visa/mastercard icon'}/> : <></>}
        {type === 'stepper' ? <h3 className={styles.cryptoHeadingStepper}>{pageStep === 1 ? t("paymentsStepper.headingOne") : t("paymentsStepper.headingTwo")}</h3> : <></>}
      </div>
      <button onClick={() => closeHandler()} className={styles.closeButton}>
        <span className={styles.closeOne}></span>
        <span className={styles.closeTwo}></span>
      </button>
    </div>
  )
}