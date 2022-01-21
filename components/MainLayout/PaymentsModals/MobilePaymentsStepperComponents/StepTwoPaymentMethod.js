import styles from '../../../../styles/PaymentsModals/MobilePaymentsStepper.module.scss';
import {paymentMethodsData} from "../../../../envs/paymetsMethods";
import {PaymentMethodItem} from "./PaymentMethodItem";
import {useEffect, useState} from "react";
import axios from "axios";
import {payments_methods_url} from "../../../../redux/url/url";
import {setUserPaymentMethod} from "../../../../redux/actions/setUserPaymentMethod";
import {useDispatch} from "react-redux";




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
        // console.log(data.data.results);
        setPaymentMethods(data.data.results);
      })
      .catch((err) => {
        setPaymentMethods(null);
        // console.log(err.response);
      })

    // return () => {
    //   setPaymentMethods(null);
    //   dispatch(setUserPaymentMethod(null));
    // }
  }, [])

  return (
    <div className={styles.stepTwoWrapper}>
      {
          userCurrency.userCurrencyData.type === 3
            ?
            <>
              <PaymentMethodItem
                methodClickHandler={methodClickHandler}
                t={t}
                // paymentData={el}
                method={paymentMethods}
                type={'creditCard'}
                userCurrency={userCurrency}
                userPayment={userPayment}
              />
              <PaymentMethodItem
                methodClickHandler={methodClickHandler}
                t={t}
                // paymentData={el}
                method={paymentMethods}
                type={'crypto'}
                userCurrency={userCurrency}
                userPayment={userPayment}
              />
            </>
            :
            <PaymentMethodItem
              methodClickHandler={methodClickHandler}
              t={t}
              // paymentData={el}
              method={paymentMethods}
              type={'crypto'}
              userCurrency={userCurrency}
              userPayment={userPayment}
            />
      }
    </div>
  )
}

//      {
//         paymentMethodsData.map((el) => <PaymentMethodItem key={`${el.currency} payment stepper`} methodClickHandler={methodClickHandler} t={t} paymentData={el}/>)
//       }