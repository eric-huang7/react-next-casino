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
import {
  backButtonShouldDo,
  showCreditCardModal, showCryptoModal,
  showDepositModal, showMobileCryptoPayments, showMobilePaymentsStepper,
} from "../../../../redux/popups/action";
import {siteID} from "../../../../envs/envsForFetching";
import {annulDeposit, postCryptoPayment} from "../../../../redux/deposits/action";

export const ChoosePaymentMethod = ({
  setPaymentMethods,
  t,
  userPayment,
  paymentMethods,
  userCurrency,
                                      stepHandler
}) => {
  const dispatch = useDispatch()
  const currencyData = useSelector((store) => store.currency?.currency)
  const userInfo = useSelector((store) => store.authInfo?.user)
  const userDepositValue = useSelector((state) => state.userFinance?.depositValue)

  useEffect(() => {
    const config = {
      params: {
        currency_id: userCurrency?.userCurrencyData?.id,
      }
    }
    Connect.get(payments_methods_url, config, (status, data) => setPaymentMethods(data.results))
      .catch((err) => {setPaymentMethods(null)});

    return () => {
      // setPaymentMethods(null)
      // dispatch(setUserPaymentMethod(null))
    }
  }, [userCurrency?.userCurrencyData?.id])

  const hidePaymentCurrencyShowDepositModal = () => {
    dispatch(showDepositModal(true))
  }

  const fiatClickHandler = () => {

    let chosenMethod = paymentMethods[3].filter((method) => {
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

  const cryptoClickHandler = (method) => {
    dispatch(setUserPaymentMethod({
      methodData: method,
      paymentImg: '/assets/img/depositPage/visa-2.svg',
      paymentSecImg: '/assets/img/depositPage/master-card.svg',
      paymentType: 'crypto',
    }))
    // dispatch(showCryptoModal(true))
  }

  const getMethods = () => {
    const methods = []

    paymentMethods[1].forEach((methodItem) => methods.push(methodItem.currency_from))
    paymentMethods[2].forEach((methodItem) => {
      const currency = currencyData?.results?.find(item => item.abbreviation === methodItem.currency_from?.currency)
      methods.push({
        ...methodItem.currency_from,
        currencyData: currency,
        title: currency?.name || methodItem.currency_from.currency,
        image: `/assets/img/depositPage/${methodItem.currency_from?.currency?.toLowerCase()}.svg`,
        onClick: () => cryptoClickHandler(methodItem)
      })
    })
    paymentMethods[3].forEach((methodItem) => methods.push({
      ...methodItem.currency_from,
      image: '/assets/img/depositPage/card.svg',
      title: t('myAccount.history.transactions.table.paymentSystem.creditCard'),
      active: userPayment?.paymentMethodData?.paymentType === 'creditCard',
      onClick: fiatClickHandler
    }))
    console.log('methods', methods)
    return methods
  }

  useEffect(() => {
    if (!!userPayment?.paymentMethodData) {
      // stepHandler(step);
      dispatch(setErrorUserPaymentMethod(''))
      if (userPayment?.paymentMethodData?.paymentType === 'creditCard') {
        dispatch(showCreditCardModal(true))
        dispatch(showDepositModal(false))
      } else if (userPayment?.paymentMethodData?.paymentType === 'crypto') {

        let currencyInfo = currencyData?.results.find((currency) => currency.id === userPayment?.paymentMethodData?.methodData?.currency_from?.currency_id)

        if (userCurrency.userCurrencyData.type === 3) {

          let paymentData = {
            senderCurrency_id: currencyInfo.id,
            user_id: `${userInfo?.user?.id}`,
            site_id: siteID,
            award_amount: `${userDepositValue}`,
            receiverCurrency_id: userCurrency?.userCurrencyData?.id
          }

          dispatch(postCryptoPayment(paymentData, userPayment))
          dispatch(showCryptoModal(true))
          dispatch(showDepositModal(false))
        } else {

          let paymentData = {
            senderCurrency_id: currencyInfo.id,
            user_id: `${userInfo?.user?.id}`,
            site_id: siteID,
            award_amount: `${userDepositValue}`,
            receiverCurrency_id: userCurrency?.userCurrencyData?.id
          }

          dispatch(postCryptoPayment(paymentData, userPayment))
          dispatch(showCryptoModal(true))
          dispatch(showDepositModal(false))
        }

      }

    }
  }, [userPayment?.paymentMethodData])


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
              onClick={method.onClick}
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
