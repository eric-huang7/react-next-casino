import styles from '../../../../styles/PaymentsModals/MobilePaymentsStepper.module.scss'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { setUserPaymentMethod } from '../../../../redux/actions/setUserPaymentMethod'
import {
  showMobileCryptoPayments,
  showPaymentCurrencySwitcher
} from '../../../../redux/actions/showPopups'

export const PaymentMethodItem = ({ t, methodClickHandler, type, method, userCurrency, userPayment }) => {
  const dispatch = useDispatch()

  const fiatClickHandler = () => {
    let chosenMethod = method[3].filter((method) => {
      if (method.currency_from.currency === userCurrency.userCurrencyData.abbreviation && method.currency_to.currency === userCurrency.userCurrencyData.abbreviation) {
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
    methodClickHandler('card')
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
    dispatch(showMobileCryptoPayments(true))
    // dispatch(showDepositModal(false));
    // dispatch(backButtonShouldDo(hidePaymentCurrencyShowDepositModal));
  }

  if (type === 'creditCard') {
    return (
      <div onClick={() => fiatClickHandler()} className={styles.paymentMethodItem}>
        <div className={`${styles.methodIconWrapper} ${styles.cardsWrapper}`}>
          <img src={'/assets/img/depositPage/visa-2.svg'} alt={`payment method icon master-card`}/>
          <img src={'/assets/img/depositPage/master-card.svg'} alt={`payment method icon visa`}/>
        </div>
        <p className={styles.methodName}>{t('depositWidget.card')}</p>
      </div>
    )
  } else {
    return (
      <div onClick={() => cryptoClickHandler()} className={styles.paymentMethodItem}>
        <div className={`${styles.methodIconWrapper} ${styles.cryptoWrapper}`}>
          <Image src={'/assets/img/depositPage/payments/crypto.png'} alt={`crypto currency icon`} layout={'fixed'}
                 width={50} height={50}/>
        </div>
        <p className={styles.methodName}>{t('depositWidget.cryptoPayment')}</p>
      </div>
    )
  }

}

function universalizer (arrVerify, checkItem) {
  let sameItem = arrVerify.find((methodOne) => {
    if (methodOne.currency_from.currency_id === checkItem.currency_from.currency_id) {
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