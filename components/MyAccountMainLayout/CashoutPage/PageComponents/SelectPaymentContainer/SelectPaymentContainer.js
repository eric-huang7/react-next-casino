import styles from '../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss';
import {CreditCardPayment} from "./CreditCardPaymentItem/CreditcardPayment";
import {BitcoinPaymentItem} from "./BitcoinPaymentItem/BitcoinPaymentItem";



export const SelectPaymentContainer = ({t}) => {


  return (
    <div  className={styles.selectMethodContainer}>
      <p className={styles.containerHeading}>{"Select Payment Method"}</p>
      <div  className={styles.paymentMethodWrapper}>
        <ul className={styles.methodsList}>
          <BitcoinPaymentItem t={t} />
          <CreditCardPayment t={t} />
        </ul>
      </div>
    </div>
  )
}