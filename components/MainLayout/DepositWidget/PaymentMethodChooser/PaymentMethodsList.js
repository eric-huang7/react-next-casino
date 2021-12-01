import styles from '../../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';

import {PaymentMethodItem} from "./PaymentMethodItem";



export const PaymentMethodsList = ({t, isActivePayments, scrollHeight, paymentMethodsData, paymentMethodChooser}) => {



  return (
    <ul className={`${styles.paymentMethodsList} ${isActivePayments ? styles.activePaymentsList : ""}`}>
      {
        paymentMethodsData.map((el) =>
          <PaymentMethodItem
          paymentMethodChooser={paymentMethodChooser}
          key={el.currency_id}
          t={t}
          paymentData={el}
          />
        )
      }
    </ul>
  )
}