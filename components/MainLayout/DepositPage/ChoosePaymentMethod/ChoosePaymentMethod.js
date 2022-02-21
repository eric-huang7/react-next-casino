import styles from '../../../../styles/DepositPage/DepositPage.module.scss'
import { useDispatch } from 'react-redux'
import { setUserPaymentMethod } from '../../../../redux/actions/setUserPaymentMethod'
import { PaymentItem } from './PaymentItem'
import { useEffect } from 'react'
import axios from 'axios'
import { payments_methods_url } from '../../../../redux/url/url'
import { LoadingComponent } from '../../../LoadingComponent/LoadingComponent'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'

export const ChoosePaymentMethod = ({
  isShowDepositModal,
  setPaymentMethods,
  t,
  userPayment,
  paymentMethods,
  userCurrency
}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (isShowDepositModal) {
      const config = {
        params: {
          currency_id: userCurrency.userCurrencyData.id,
        }
      }

      axios.get(payments_methods_url, config)
        .then((data) => {
          setPaymentMethods(data.data.results)
        })
        .catch((err) => {
          setPaymentMethods(null)
        })
    } else {
      setPaymentMethods(null)
    }
    return () => {

      setPaymentMethods(null)
      dispatch(setUserPaymentMethod(null))
    }
  }, [userCurrency])

  if (paymentMethods) {
    return (
      <div className={styles.depositsChoosePaymentWrapper}>
        <h3 className={styles.choosePaymentHeading}>
          {t('depositPage.choosePaymentMethod')}
        </h3>
        <div className={styles.paymentMethodsBlock}>
          {
            paymentMethods['2'].length !== 0
              ?
              <ErrorEmpty>
                <PaymentItem
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
                <PaymentItem
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
                <PaymentItem
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
        <span className={styles.errorMessage}>{t(userPayment.paymentError)}</span>
      </div>
    )
  } else {

    return (
      <div className={styles.depositsChoosePaymentWrapper}>
        <h3 className={styles.choosePaymentHeading}>
          {t('depositPage.choosePaymentMethod')}
        </h3>
        <div className={styles.paymentLoading}>
          <LoadingComponent t={t}/>
        </div>
      </div>
    )
  }

}

