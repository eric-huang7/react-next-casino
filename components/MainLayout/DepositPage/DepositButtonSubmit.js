import styles from '../../../styles/DepositPage/DepositPage.module.scss'
import { useDispatch } from 'react-redux'
import { setErrorUserDepositValue } from '../../../redux/userFinance/action'
import { setErrorUserPaymentMethod } from '../../../redux/userFinance/action'
import { siteID } from '../../../envs/envsForFetching'
import { showCreditCardModal, showCryptoModal, showDepositModal } from '../../../redux/popups/action'
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


    }

  }

  return (
    <div onClick={() => submitButtonHandler()} className={styles.depositsButton}>
      <p>{buttonText}</p>
    </div>
  )
}
