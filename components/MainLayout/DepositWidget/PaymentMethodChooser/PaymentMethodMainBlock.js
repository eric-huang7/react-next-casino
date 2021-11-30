import styles from '../../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';
import {PaymentMethodButton} from "./PaymentMethodButton";
import {PaymentMethodsList} from "./PaymentMethodsList";
import {useEffect, useState} from "react";

export const PaymentMethodMainBlock = ({t, scrollHeight}) => {

  const [isActivePayments, setIsActivePayments] = useState(false);

  useEffect(() => {
    if (scrollHeight < 900) {
      setIsActivePayments(false);
    }
  }, [scrollHeight])


  return (
    <div className={styles.paymentMethodMainBlock}>
      <PaymentMethodsList scrollHeight={scrollHeight} isActivePayments={isActivePayments} t={t}/>
      <PaymentMethodButton setIsActivePayments={setIsActivePayments} isActivePayments={isActivePayments} t={t}/>
    </div>
  )
}