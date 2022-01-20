import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {paymentsMethodsUrl} from "../../../../helpers/imageUrl";
import {useDispatch} from "react-redux";
import {showCreditCardModal} from "../../../../redux/actions/showPopups";
import {setUserPaymentMethod} from "../../../../redux/actions/setUserPaymentMethod";


export const PaymentItem = ({method, type, userCurrency, userPayment}) => {
  const dispatch = useDispatch();

  const fiatClickHandler = () => {

    let chosenMethod = method[3].filter((method) => {
      if (method.currency_from.currency === userCurrency.userCurrencyData.abbreviation && method.currency_to.currency === userCurrency.userCurrencyData.abbreviation) {
        return true;
      } else {
        return false;
      }
    })
    if (chosenMethod[0]) {
      dispatch(setUserPaymentMethod({
        methodData: chosenMethod[0],
        paymentImg: '/assets/img/depositPage/visa-2.svg',
        paymentSecImg: '/assets/img/depositPage/master-card.svg',
        paymentType: 'creditCard',
      }))
    } else {
      dispatch(setUserPaymentMethod({
        methodData: null,
        paymentImg: '/assets/img/depositPage/visa-2.svg',
        paymentSecImg: '/assets/img/depositPage/master-card.svg',
        paymentType: 'creditCard',
      }))
    }
  }

  const cryptoClickHandler = () => {
    console.log(method, 'method!!!!!!!!!!!!');
  }

  console.log(userPayment, 'userPAyment!!!!!!!!!!!')

  if (type === 'creditCard') {
    return (
      <div
        onClick={() => fiatClickHandler()}
        className={`${styles.paymentItem} ${styles.paymentItemFiat} ${userPayment.paymentMethodData?.paymentType === 'creditCard' ? styles.active : ''}`}
      >
        <img src={'/assets/img/depositPage/visa-2.svg'} alt={`payment method icon master-card`}/>
        <img src={'/assets/img/depositPage/master-card.svg'} alt={`payment method icon visa`}/>
      </div>
    )
  } else {
    return (
      <div
        onClick={() => cryptoClickHandler()}
        className={`${styles.paymentItem} ${styles.cryptoPaymentImage} ${userPayment.paymentMethodData?.paymentType === 'crypto' ? styles.active : ''}`}
      >
        <img src={'/assets/img/depositPage/payments/crypto.png'} alt={`payment method icon crypto`}/>
      </div>
    )
  }

}