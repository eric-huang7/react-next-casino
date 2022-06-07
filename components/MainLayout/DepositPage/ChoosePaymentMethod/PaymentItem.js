import styles from '../../../../styles/DepositPage/DepositPage.module.scss'
import { useDispatch } from 'react-redux'
import {
  backButtonShouldDo,
  showDepositModal,
  showPaymentCurrencySwitcher
} from '../../../../redux/popups/action'
import { setErrorUserPaymentMethod, setUserPaymentMethod } from '../../../../redux/userFinance/action'
import {useTransition} from "react";
import {useTranslation} from "next-i18next";

export const PaymentItem = ({ method, type, userCurrency, userPayment }) => {
  const dispatch = useDispatch()
  const { t } = useTranslation('common')

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

  const cryptoClickHandler = () => {
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

  if (type === 'creditCard') {
    return (
      <div className={styles.paymentItemWrapper} >
        <div
          onClick={() => fiatClickHandler()}
          className={`${styles.paymentItem} ${styles.paymentItemFiat} ${userPayment?.paymentMethodData?.paymentType === 'creditCard' ? styles.active : ''}`}
        >
          <img src={'/assets/img/depositPage/card.svg'} alt={`payment method icon master-card`}/>
        </div>
        <div className={styles.itemTitle}>{t('myAccount.history.transactions.table.paymentSystem.creditCard')}</div>
      </div>
    )
  } else {
    return (
      <div className={styles.paymentItemWrapper} >
        <div
          onClick={() => cryptoClickHandler()}
          className={`${styles.paymentItem} ${styles.cryptoPaymentImage} ${userPayment?.paymentMethodData?.paymentType === 'crypto' ? styles.active : ''}`}
        >
          <img src={'/assets/img/depositPage/payments/crypto.png'} alt={`payment method icon crypto`}/>
        </div>
        <div className={styles.itemTitle}>{t('selectCurrency.cryptoCurrencies')}</div>
      </div>
    )
  }
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
