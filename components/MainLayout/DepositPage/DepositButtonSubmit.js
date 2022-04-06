import styles from '../../../styles/DepositPage/DepositPage.module.scss'
import { useDispatch } from 'react-redux'
import { setErrorUserDepositValue } from '../../../redux/actions/setUserDepositValue'
import { setErrorUserPaymentMethod } from '../../../redux/actions/setUserPaymentMethod'
import { siteID } from '../../../envs/envsForFetching'
import { showCreditCardModal, showCryptoModal, showDepositModal } from '../../../redux/actions/showPopups'
import { postCryptoPayment } from '../../../redux/deposits/action'

export const DepositButtonSubmit = ({
  t,
  step,
  stepHandler,
  submitHandler,
  buttonText,
  userDepositValue,
  userPayment,
  userCurrency,
  userInfo,
  currencyData
}) => {
  const dispatch = useDispatch()

  const submitButtonHandler = () => {
    if (step === 1 || step === 3) {
      if ((userDepositValue > 0) && !!userDepositValue) {

        dispatch(setErrorUserDepositValue(''))

        if (step === 3) {
          submitHandler()
        } else {

          stepHandler(step)
        }

      } else {

        dispatch(setErrorUserDepositValue('depositPage.errors.wrongValue'))
      }
    } else if (step === 2) {

      if (!!userPayment.paymentMethodData) {
        // stepHandler(step);
        dispatch(setErrorUserPaymentMethod(''))
        if (userPayment.paymentMethodData.paymentType === 'creditCard') {
          dispatch(showCreditCardModal(true))
          dispatch(showDepositModal(false))
        } else if (userPayment.paymentMethodData.paymentType === 'cryptoArr') {

          dispatch(setErrorUserPaymentMethod('depositPage.errors.choosePaymentMethod'))
        } else if (userPayment.paymentMethodData.paymentType === 'crypto') {

          let currencyInfo = currencyData?.results.find((currency) => currency.id === userPayment.paymentMethodData.methodData.currency_from.currency_id)

          if (userCurrency.userCurrencyData.type === 3) {

            let paymentData = {
              senderCurrency_id: currencyInfo.id,
              user_id: `${userInfo.user.id}`,
              site_id: siteID,
              award_amount: `${userDepositValue}`,
              receiverCurrency_id: userCurrency.userCurrencyData.id
            }

            dispatch(postCryptoPayment(paymentData, userPayment))
            dispatch(showCryptoModal(true))
            dispatch(showDepositModal(false))
          } else {

            let paymentData = {
              senderCurrency_id: currencyInfo.id,
              user_id: `${userInfo.user.id}`,
              site_id: siteID,
              award_amount: `${userDepositValue}`,
              receiverCurrency_id: userCurrency.userCurrencyData.id
            }

            dispatch(postCryptoPayment(paymentData, userPayment))
            dispatch(showCryptoModal(true))
            dispatch(showDepositModal(false))
          }

        }

      } else {

        dispatch(setErrorUserPaymentMethod('depositPage.errors.choosePaymentMethod'))
      }
    }

  }

  return (
    <div onClick={() => submitButtonHandler()} className={styles.depositsButton}>
      <p>{buttonText}</p>
    </div>
  )
}
