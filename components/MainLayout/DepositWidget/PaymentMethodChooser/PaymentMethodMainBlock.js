import styles from '../../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';
import {PaymentMethodButton} from "./PaymentMethodButton";
import {PaymentMethodsList} from "./PaymentMethodsList";
import {useState} from "react";

export const PaymentMethodMainBlock = ({t}) => {

  const [isActivePayments, setIsActivePayments] = useState(false)

  return (
    <div className={styles.paymentMethodMainBlock}>
      <PaymentMethodsList isActivePayments={isActivePayments} t={t}/>
      <PaymentMethodButton setIsActivePayments={setIsActivePayments} isActivePayments={isActivePayments} t={t}/>
    </div>
  )
}