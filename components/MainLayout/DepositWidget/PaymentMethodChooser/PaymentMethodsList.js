import styles from '../../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';

import Image from "next/image";

export const PaymentMethodsList = ({t, isActivePayments, scrollHeight}) => {


  return (
    <ul className={`${styles.paymentMethodsList} ${isActivePayments ? styles.activePaymentsList : ""}`}>
      <li className={styles.paymentMethodItem}>
      <p className={styles.paymentMethodName}>{t("depositWidget.card")}</p>
        <div className={styles.paymentCardIconBlock}>
          <Image layout={'fixed'} width={55} height={25} alt={'visa payment'} src={'/assets/img/depositPage/payments/Visa.png'}/>
          <Image layout={'fixed'} width={55} height={25} alt={'mastercard payment'} src={'/assets/img/depositPage/payments/MasterCard.png'}/>
        </div>
      </li>
      <li className={styles.paymentMethodItem}>
        <p className={styles.paymentMethodName}>Bitcoin</p>
        <div className={styles.paymentIconBlock}>
          <Image layout={'fixed'} width={20} height={20} alt={"bitcoin payment"} src={'/assets/img/depositWidget/bitcoin.png'}/>
        </div>
      </li>
      <li className={styles.paymentMethodItem}>
        <p className={styles.paymentMethodName}>Bitcoin Cash</p>
        <div className={styles.paymentIconBlock}>
          <Image layout={'fixed'} width={20} height={20} alt={'Bitcoin Cash payment'} src={'/assets/img/depositWidget/bitcoin.png'}/>
        </div>
      </li>
      <li className={styles.paymentMethodItem}>
        <p className={styles.paymentMethodName}>Litecoin</p>
        <div className={styles.paymentIconBlock}>
          <Image layout={'fixed'} width={20} height={20} alt={'Litecoin payment'} src={'/assets/img/depositWidget/litecoin.png'}/>
        </div>
      </li>
      <li className={styles.paymentMethodItem}>
        <p className={styles.paymentMethodName}>Ethereum</p>
        <div className={styles.paymentIconBlock}>
          <Image layout={'fixed'} width={20} height={20} alt={'etherium payment'} src={'/assets/img/depositWidget/ethereum.png'}/>
        </div>
      </li>
    </ul>
  )
}