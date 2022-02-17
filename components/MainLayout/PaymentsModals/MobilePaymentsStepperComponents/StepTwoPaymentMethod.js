import styles from '../../../../styles/PaymentsModals/MobilePaymentsStepper.module.scss';
import {PaymentMethodItem} from "./PaymentMethodItem";
import {useEffect, useState} from "react";
import axios from "axios";
import {payments_methods_url} from "../../../../redux/url/url";
import {setUserPaymentMethod} from "../../../../redux/actions/setUserPaymentMethod";
import {useDispatch} from "react-redux";
import {LoadingComponent} from "../../../LoadingComponent/LoadingComponent";


export const StepTwoPaymentMethod = ({t, methodClickHandler, userCurrency, userPayment}) => {
  const dispatch = useDispatch();
  const [paymentMethods, setPaymentMethods] = useState(null);


  useEffect(() => {

    const config = {
      params: {
        currency_id: userCurrency.userCurrencyData.id,
      }
    }
    // payments_methods_url
    axios.get(payments_methods_url, config)
      .then((data) => {
        setPaymentMethods(data.data.results);
      })
      .catch((err) => {
        setPaymentMethods(null);
      })

  }, [])

  if (paymentMethods) {
    return (
      <div className={styles.stepTwoWrapper}>
        {
          paymentMethods['2'].length !== 0
            ?
            <PaymentMethodItem
              methodClickHandler={methodClickHandler}
              t={t}
              // paymentData={el}
              method={paymentMethods}
              type={'crypto'}
              userCurrency={userCurrency}
              userPayment={userPayment}
            />
            :
            <></>
        }
        {
          userCurrency.userCurrencyData.type !== 3 && paymentMethods['2'].length === 0
            ?
            <PaymentMethodItem
              methodClickHandler={methodClickHandler}
              t={t}
              // paymentData={el}
              method={paymentMethods}
              type={'crypto'}
              userCurrency={userCurrency}
              userPayment={userPayment}
            />
            :
            <>
            </>
        }
        {
          paymentMethods['3'].length !== 0
            ?
            <PaymentMethodItem
              methodClickHandler={methodClickHandler}
              t={t}
              // paymentData={el}
              method={paymentMethods}
              type={'creditCard'}
              userCurrency={userCurrency}
              userPayment={userPayment}
            />
            :
            <></>
        }
      </div>
    )
  } else {
    return (
      <div className={styles.stepTwoWrapper}>
        <LoadingComponent t={t} />
      </div>
      )
  }
}

// {
//   userCurrency.userCurrencyData.type === 3
//     ?
//     <>
//       <PaymentMethodItem
//         methodClickHandler={methodClickHandler}
//         t={t}
//         // paymentData={el}
//         method={paymentMethods}
//         type={'creditCard'}
//         userCurrency={userCurrency}
//         userPayment={userPayment}
//       />
//       <PaymentMethodItem
//         methodClickHandler={methodClickHandler}
//         t={t}
//         // paymentData={el}
//         method={paymentMethods}
//         type={'crypto'}
//         userCurrency={userCurrency}
//         userPayment={userPayment}
//       />
//     </>
//     :
//     <PaymentMethodItem
//       methodClickHandler={methodClickHandler}
//       t={t}
//       // paymentData={el}
//       method={paymentMethods}
//       type={'crypto'}
//       userCurrency={userCurrency}
//       userPayment={userPayment}
//     />
// }