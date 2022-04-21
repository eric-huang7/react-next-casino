import styles from '../../../../styles/PaymentsModals/MobilePaymentsStepper.module.scss'
import { PaymentMethodItem } from './PaymentMethodItem'
import { useEffect, useState } from 'react'
import { payments_methods_url } from '../../../../redux/url/url'
import { LoadingComponent } from '../../../LoadingComponent/LoadingComponent'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'
import Connect from "../../../../helpers/connect";

export const StepTwoPaymentMethod = ({ t, methodClickHandler, userCurrency, userPayment }) => {
  const [paymentMethods, setPaymentMethods] = useState(null)

  useEffect(() => {
    const config = {
      params: {
        currency_id: userCurrency?.userCurrencyData?.id,
      }
    }
    Connect.get(payments_methods_url, config, (status, data) => setPaymentMethods(data.results)).catch((err) => {
      setPaymentMethods(null);
    })
  }, [userCurrency?.userCurrencyData?.id])

  if (paymentMethods) {
    return (
      <div className={styles.stepTwoWrapper}>
        {
          paymentMethods['2'].length !== 0
            ?
            <ErrorEmpty>
              <PaymentMethodItem
                methodClickHandler={methodClickHandler}
                t={t}
                method={paymentMethods}
                type={'crypto'}
                userCurrency={userCurrency}
                userPayment={userPayment}
              />
            </ErrorEmpty>
            :
            <></>
        }
        {
          userCurrency.userCurrencyData.type !== 3 && paymentMethods['2'].length === 0
            ?
            <ErrorEmpty>
              <PaymentMethodItem
                methodClickHandler={methodClickHandler}
                t={t}
                method={paymentMethods}
                type={'crypto'}
                userCurrency={userCurrency}
                userPayment={userPayment}
              />
            </ErrorEmpty>
            :
            <>
            </>
        }
        {
          paymentMethods['3'].length !== 0
            ?
            <ErrorEmpty>
              <PaymentMethodItem
                methodClickHandler={methodClickHandler}
                t={t}
                method={paymentMethods}
                type={'creditCard'}
                userCurrency={userCurrency}
                userPayment={userPayment}
              />
            </ErrorEmpty>
            :
            <></>
        }
      </div>
    )
  } else {
    return (
      <div className={styles.stepTwoWrapper}>
        <LoadingComponent t={t}/>
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
