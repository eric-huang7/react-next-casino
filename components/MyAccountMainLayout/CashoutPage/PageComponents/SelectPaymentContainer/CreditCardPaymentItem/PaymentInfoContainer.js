import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import {numberTransformer} from "../../../../../../helpers/numberTransformer";


export const PaymentInfoContainer = ({t, typeOfCurrency}) => {

  let min = numberTransformer(typeOfCurrency.withdrawMin);

  return (
    <div className={styles.paymentInfoContainer}>
      <p>{`1-3 banking days, min ${min}, max 50000.00, Payment ${typeOfCurrency.abbreviation}`}</p>
    </div>
  )
}