import styles from '../../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';
import Image from "next/image";


export const ChosenPaymentMethodButton = ({t, paymentData, isActivePayments, setIsActivePayments}) => {


  return (
    <div onClick={() => setIsActivePayments(!isActivePayments)} className={styles.paymentMethodContainer}>
      <div className={styles.chosenPaymentMetodButton} id={'chosenPaymentButton'}>
        {
          paymentData.paymentMethodData.paymentType === 'creditCard'
          ?
            <span className={styles.chosenPayment}>{t("depositWidget.card")}</span>
            :
            <span className={styles.chosenPayment}>{t("depositWidget.cryptoPayment")}</span>
        }
        <div className={styles.paymentCardIconBlock}>
          {paymentData.paymentMethodData.paymentType === 'creditCard' ?
            <>
              <Image layout={'fixed'} width={60} height={25} alt={'visa/mastercard payment'} src={"/assets/img/depositWidget/cards.webp"}/>
              {/*<Image layout={'fixed'} width={55} height={25} alt={'mastercard payment'} src={paymentData.icon_two}/>*/}
            </>
            :

            <Image layout={'fixed'} width={20} height={20} alt={"bitcoin payment"} src={'/assets/img/depositPage/payments/crypto.png'}/>
          }
        </div>
      </div>
      <label
        htmlFor="chosenPaymentButton"
        className={`${styles.paymentMethodLabel} ${isActivePayments ? styles.active : ""}`}>
        <div></div>
      </label>
    </div>
  )
}
