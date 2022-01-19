import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {paymentsMethodsUrl} from "../../../../helpers/imageUrl";
import {useDispatch} from "react-redux";
import {showCreditCardModal} from "../../../../redux/actions/showPopups";



export const PaymentItem = ({method, type}) => {
const dispatch = useDispatch();

  const fiatClickHandler = () => {

    dispatch(showCreditCardModal(true));
  }

  if (type === 'creditCard') {
    return (
        <div onClick={() => fiatClickHandler()} className={`${styles.paymentItem} ${styles.paymentItemFiat}`}>
          <img src={'/assets/img/depositPage/visa-2.svg'} alt={`payment method icon master-card`}/>
          <img src={'/assets/img/depositPage/master-card.svg'} alt={`payment method icon visa`}/>
        </div>
    )
  } else {
    return (
      <div className={`${styles.paymentItem} ${styles.cryptoPaymentImage}`}>
        <img src={'/assets/img/depositPage/payments/crypto.png'} alt={`payment method icon crypto`}/>
      </div>
    )
  }

}