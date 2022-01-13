import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {paymentsMethodsUrl} from "../../../../helpers/imageUrl";



export const PaymentItem = ({method, type}) => {


  if (type === 'fiat') {
    return (
      <>
        <div className={`${styles.paymentItem} ${styles.paymentItemFiat}`}>
          <img src={paymentsMethodsUrl("master-card")} alt={`payment method ${method.currency_from.currency}`}/>
          <img src={paymentsMethodsUrl("visa")} alt={`payment method ${method.currency_from.currency}`}/>
        </div>
      </>

    )
  } else {
    return (
      <div className={styles.paymentItem}>
        <img src={paymentsMethodsUrl(method.currency_from.currency.toLowerCase() + ".long")} alt={`payment method ${method.currency_from.currency}`}/>
      </div>
    )
  }

}