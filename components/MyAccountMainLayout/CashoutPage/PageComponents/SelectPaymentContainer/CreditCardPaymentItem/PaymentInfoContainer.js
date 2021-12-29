import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import {numberTransformer} from "../../../../../../helpers/numberTransformer";


export const PaymentInfoContainer = ({t, typeOfCurrency}) => {


  return (
    <div className={styles.paymentInfoContainer}>
      <p>{`1-3 banking days, min 50.00, max 50000.00, Payment ${typeOfCurrency}`}</p>
    </div>
  )
}