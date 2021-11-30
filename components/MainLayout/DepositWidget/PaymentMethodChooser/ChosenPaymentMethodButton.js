import styles from '../../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';
import Image from "next/image";


export const ChosenPaymentMethodButton = ({t, paymentData, isActivePayments, setIsActivePayments}) => {
  
  
  return (
    <div onClick={() => setIsActivePayments(!isActivePayments)} className={styles.paymentMethodContainer}>
      <div className={styles.chosenPaymentMetodButton} id={'chosenPaymentButton'}>
        <span className={styles.chosenPayment}>{t(paymentData.name)}</span>
        <div className={styles.paymentCardIconBlock}>
          {paymentData.type === 'card' ?
            <>
              <Image layout={'fixed'} width={50} height={25} alt={'visa payment'} src={paymentData.icon_one}/>
              <Image layout={'fixed'} width={55} height={25} alt={'mastercard payment'} src={paymentData.icon_two}/>
            </>
            :
            <Image layout={'fixed'} width={20} height={20} alt={"bitcoin payment"} src={paymentData.icon_one}/>
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