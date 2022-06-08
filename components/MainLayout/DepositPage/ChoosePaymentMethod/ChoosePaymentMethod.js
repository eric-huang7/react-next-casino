import styles from '../../../../styles/DepositPage/DepositPage.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {setErrorUserPaymentMethod, setUserPaymentMethod} from '../../../../redux/userFinance/action'
import { PaymentItem } from './PaymentItem'
import { useEffect } from 'react'
import {payments_methods_url} from '../../../../redux/url/url'
import { LoadingComponent } from '../../../LoadingComponent/LoadingComponent'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'
import Connect from "../../../../helpers/connect";
import {getAllBonusesAction} from "../../../../redux/bonuses/action";
import {backButtonShouldDo, showDepositModal, showPaymentCurrencySwitcher} from "../../../../redux/popups/action";

export const ChoosePaymentMethod = ({
  isShowDepositModal,
  setPaymentMethods,
  t,
  userPayment,
  paymentMethods,
  userCurrency
}) => {
  const dispatch = useDispatch()
  const currencyData = useSelector((store) => store.currency?.currency)

  console.log('currencyData', currencyData)
  console.log('paymentMethods', paymentMethods)
  useEffect(() => {
    if (isShowDepositModal) {
      const config = {
        params: {
          currency_id: userCurrency?.userCurrencyData?.id,
        }
      }
      Connect.get(payments_methods_url, config, (status, data) => setPaymentMethods(data.results))
        .catch((err) => {setPaymentMethods(null)});
    } else {
      setPaymentMethods(null)
    }
    return () => {
      setPaymentMethods(null)
      dispatch(setUserPaymentMethod(null))
    }
  }, [userCurrency?.userCurrencyData?.id])

  const hidePaymentCurrencyShowDepositModal = () => {
    dispatch(showDepositModal(true))
    dispatch(showPaymentCurrencySwitcher(false))
  }

  const fiatClickHandler = () => {

    let chosenMethod = method[3].filter((method) => {
      if (method.currency_from.currency === userCurrency?.userCurrencyData?.abbreviation && method.currency_to.currency === userCurrency?.userCurrencyData?.abbreviation) {
        return true
      } else {
        return false
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
    dispatch(setErrorUserPaymentMethod(''))
  }

  const pay = () => {
    let paymentMethods = []
    if (userCurrency.userCurrencyData.type === 3) {
      method[1].forEach((methodItem) => paymentMethods.push(methodItem))

      method[2].forEach((methodItem) => {
        if (method[1].length > 0) {
          let universalItem = universalizer(method[1], methodItem)
          if (universalItem) {
            paymentMethods.push(methodItem)
          } else {
            return methodItem
          }
        } else {
          paymentMethods.push(methodItem)
        }
      })

    } else {
      method[3].forEach((methodItem) => paymentMethods.push(methodItem))

      method[1].forEach((methodItem) => paymentMethods.push(methodItem))

      method[2].forEach((methodItem) => {
        if (method[1].length > 0) {
          let universalItem = universalizer(method[1], methodItem)
          if (universalItem) {
            paymentMethods.push(methodItem)
          } else {
            return methodItem
          }
        } else {
          paymentMethods.push(methodItem)
        }
      })
    }

    dispatch(setUserPaymentMethod({
      methodData: paymentMethods,
      paymentImg: '/assets/img/depositPage/visa-2.svg',
      paymentSecImg: '',
      paymentType: 'cryptoArr',
    }))
    dispatch(showPaymentCurrencySwitcher(true))
    dispatch(showDepositModal(false))
    dispatch(backButtonShouldDo(hidePaymentCurrencyShowDepositModal))
  }

  const getMethods = () => {
    const methods = []

    paymentMethods[1].forEach((methodItem) => methods.push(methodItem.currency_from))
    paymentMethods[2].forEach((methodItem) => {
      const currency = currencyData?.results?.find(item => item.abbreviation === methodItem.currency_from?.currency)
      methods.push({
        ...methodItem.currency_from,
        currencyData: currency,
        title: currency?.name || methodItem.currency_from.currency
      })
    })
    paymentMethods[3].forEach((methodItem) => methods.push({
      ...methodItem.currency_from,
      image: '/assets/img/depositPage/card.svg',
      title: t('myAccount.history.transactions.table.paymentSystem.creditCard')
    }))
    console.log('methods', methods)
    return methods
  }

  return paymentMethods ? (
    <div className={styles.depositsChoosePaymentWrapper}>
      <h3 className={styles.choosePaymentHeading}>
        {t('depositPage.choosePaymentMethod')}
      </h3>
      <div className={styles.paymentMethodsBlock}>
        {getMethods()?.map((method, index) => (
          <ErrorEmpty key={index}>
            <PaymentItem
              currencyData={method.currencyData}
              onClick
              isActive={false}
              image={method.image}
              title={method.title}
            />
          </ErrorEmpty>
        ))}
      </div>
      <span className={styles.errorMessage}>{t(userPayment?.paymentError)}</span>
    </div>
  ) : (
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

function universalizer (arrVerify, checkItem) {
  let sameItem = arrVerify.find((methodOne) => {
    if (methodOne.currency_from.currency === checkItem.currency_from.currency) {
      return true
    } else {
      return false
    }
  })
  if (!sameItem) {
    return true
  } else {
    return false
  }
}
