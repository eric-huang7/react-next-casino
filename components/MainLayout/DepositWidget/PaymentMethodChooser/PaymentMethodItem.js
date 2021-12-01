import styles from "../../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss";
import Image from "next/image";


export const PaymentMethodItem = ({t, paymentData, paymentMethodChooser}) => {


  return (
    <li onClick={() => paymentMethodChooser(paymentData)} className={styles.paymentMethodItem}>
      <p>{t(paymentData.name)}</p>
      <div className={styles.paymentCardIconBlock}>
        {paymentData.type === 'card' ?
          <>
            <Image layout={'fixed'} width={60} height={25} alt={'visa/mastercard payment'} src={paymentData.icon_one}/>
          </>
          :
          <Image layout={'fixed'} width={20} height={20} alt={"bitcoin payment"} src={paymentData.icon_one}/>
        }
      </div>
    </li>
  )
}