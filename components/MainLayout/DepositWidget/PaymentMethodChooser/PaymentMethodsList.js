import styles from '../../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss'

import { PaymentMethodItem } from './PaymentMethodItem'
import { useEffect } from 'react'
import { payments_methods_url } from '../../../../redux/url/url'
import { setUserPaymentMethod } from '../../../../redux/userFinance/action'
import { useDispatch } from 'react-redux'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'
import Connect from "../../../../helpers/connect";

export const PaymentMethodsList = ({
  t,
  setErrorPaymentMethod,
  paymentMethods,
  setPaymentMethods,
  isActivePayments,
  paymentMethodChooser,
  userCurrency,
  onOpenCryptoPayments
}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const config = {
      params: {
        currency_id: userCurrency?.userCurrencyData?.id,
      }
    }
    Connect.get(payments_methods_url, config, (status, data) => setPaymentMethods(data.results)).catch((err) => {
      setPaymentMethods(null);
    })

    return () => {
      setPaymentMethods(null)
      dispatch(setUserPaymentMethod(null))
    }
  }, [userCurrency?.userCurrencyData?.id])

  if (paymentMethods) {
    // styles.activePaymentsListSingle
    return (
      <ul
        className={`${styles.paymentMethodsList} ${isActivePayments ? styles.activePaymentsList : ''}`}>
        {
          paymentMethods['2'].length !== 0
            ?
            <ErrorEmpty>
              <PaymentMethodItem
                method={paymentMethods}
                paymentMethodChooser={paymentMethodChooser}
                type={'crypto'}
                t={t}
                setErrorPaymentMethod={setErrorPaymentMethod}
                userCurrency={userCurrency}
                onOpenCryptoPayments={onOpenCryptoPayments}
                // paymentData={}
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
                method={paymentMethods}
                paymentMethodChooser={paymentMethodChooser}
                type={'crypto'}
                t={t}
                setErrorPaymentMethod={setErrorPaymentMethod}
                userCurrency={userCurrency}
                onOpenCryptoPayments={onOpenCryptoPayments}
                // paymentData={}
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
                method={paymentMethods}
                paymentMethodChooser={paymentMethodChooser}
                type={'card'}
                t={t}
                setErrorPaymentMethod={setErrorPaymentMethod}
                userCurrency={userCurrency}
                onOpenCryptoPayments={onOpenCryptoPayments}
                // paymentData={}
              />
            </ErrorEmpty>
            :
            <></>
        }

      </ul>
    )
  } else {
    return (
      <ul
        className={`${styles.paymentMethodsList} ${styles.loadingList} ${isActivePayments ? styles.activePaymentsList : ''} ${userCurrency.userCurrencyData.type !== 3 ? styles.activePaymentsListSingle : ''}`}>
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
