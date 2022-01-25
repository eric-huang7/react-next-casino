import styles from '../../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';

import {PaymentMethodItem} from "./PaymentMethodItem";
import {useEffect} from "react";
import axios from "axios";
import {payments_methods_url} from "../../../../redux/url/url";
import {setUserPaymentMethod} from "../../../../redux/actions/setUserPaymentMethod";
import {useDispatch} from "react-redux";
import {PaymentItem} from "../../DepositPage/ChoosePaymentMethod/PaymentItem";


export const PaymentMethodsList = ({
                                     t,
                                     setErrorPaymentMethod,
                                     paymentMethods,
                                     setPaymentMethods,
                                     isActivePayments,
                                     paymentMethodChooser,
                                     userCurrency
                                   }) => {
  const dispatch = useDispatch();

  useEffect(() => {

    const config = {
      params: {
        currency_id: userCurrency.userCurrencyData.id,
      }
    }
    // payments_methods_url
    axios.get(payments_methods_url, config)
      .then((data) => {
        // console.log(data.data.results);
        setPaymentMethods(data.data.results);
      })
      .catch((err) => {
        setPaymentMethods(null);
        // console.log(err.response);
      })

    return () => {
      setPaymentMethods(null);
      dispatch(setUserPaymentMethod(null));
    }
  }, [userCurrency])

  if (paymentMethods) {
    // styles.activePaymentsListSingle
    return (
      <ul
        className={`${styles.paymentMethodsList} ${isActivePayments ? styles.activePaymentsList : ""}`}>
        {
          paymentMethods['2'].length !== 0
            ?
            <PaymentMethodItem
              method={paymentMethods}
              paymentMethodChooser={paymentMethodChooser}
              type={'crypto'}
              t={t}
              setErrorPaymentMethod={setErrorPaymentMethod}
              userCurrency={userCurrency}
              // paymentData={}
            />
            :
            <></>
        }
        {
          userCurrency.userCurrencyData.type !== 3 && paymentMethods['2'].length === 0
            ?
            <PaymentMethodItem
              method={paymentMethods}
              paymentMethodChooser={paymentMethodChooser}
              type={'crypto'}
              t={t}
              setErrorPaymentMethod={setErrorPaymentMethod}
              userCurrency={userCurrency}
              // paymentData={}
            />
            :
            <>
            </>
        }
        {
          paymentMethods['3'].length !== 0
            ?
            <PaymentMethodItem
              method={paymentMethods}
              paymentMethodChooser={paymentMethodChooser}
              type={'card'}
              t={t}
              setErrorPaymentMethod={setErrorPaymentMethod}
              userCurrency={userCurrency}
              // paymentData={}
            />
            :
            <></>
        }

      </ul>
    )
  } else {
    return (
      <ul
        className={`${styles.paymentMethodsList} ${styles.loadingList} ${isActivePayments ? styles.activePaymentsList : ""} ${userCurrency.userCurrencyData.type !== 3 ? styles.activePaymentsListSingle : ""}`}>
        <li className={styles.loadingItem}>
          <div className={styles.loadingSpinner}>
            <img src={'/assets/icons/loading_crypto.gif'} alt="loading spinner"/>
          </div>
        </li>
      </ul>
    )
  }

}

// {
//   userCurrency.userCurrencyData.type === 3
//     ?
//     <>
//       <PaymentMethodItem
//         method={paymentMethods}
//         paymentMethodChooser={paymentMethodChooser}
//         type={'card'}
//         t={t}
//         setErrorPaymentMethod={setErrorPaymentMethod}
//         userCurrency={userCurrency}
//         // paymentData={}
//       />
//       <PaymentMethodItem
//         method={paymentMethods}
//         paymentMethodChooser={paymentMethodChooser}
//         type={'crypto'}
//         t={t}
//         setErrorPaymentMethod={setErrorPaymentMethod}
//         userCurrency={userCurrency}
//         // paymentData={}
//       />
//     </>
//     :
//     <PaymentMethodItem
//       method={paymentMethods}
//       paymentMethodChooser={paymentMethodChooser}
//       type={'crypto'}
//       t={t}
//       setErrorPaymentMethod={setErrorPaymentMethod}
//       userCurrency={userCurrency}
//       // paymentData={}
//     />
// }