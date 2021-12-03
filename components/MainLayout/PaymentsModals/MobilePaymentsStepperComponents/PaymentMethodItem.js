import styles from '../../../../styles/PaymentsModals/MobilePaymentsStepper.module.scss';
import Image from "next/image";


export const PaymentMethodItem = ({t, paymentData, methodClickHandler}) => {

  return (
    <div onClick={() => methodClickHandler(paymentData)} className={styles.paymentMethodItem}>
      <div  className={styles.methodIconWrapper}>
        <Image src={paymentData.icon_two} alt={`${paymentData.currency} icon`} layout={'fixed'} width={100} height={45}/>
      </div>
      <p className={styles.methodName}>{t(paymentData.name)}</p>
    </div>
  )
}