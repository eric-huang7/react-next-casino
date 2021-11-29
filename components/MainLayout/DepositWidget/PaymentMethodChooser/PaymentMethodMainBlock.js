import styles from '../../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';
import {PaymentMethodButton} from "./PaymentMethodButton";
import {PaymentMethodsList} from "./PaymentMethodsList";

export const PaymentMethodMainBlock = ({t}) => {


  return (
    <div className={styles.paymentMethodMainBlock}>
      <PaymentMethodsList t={t}/>
      <PaymentMethodButton t={t}/>
    </div>
  )
}