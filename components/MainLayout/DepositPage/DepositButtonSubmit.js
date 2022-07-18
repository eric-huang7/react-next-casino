import styles from '../../../styles/DepositPage/DepositPage.module.scss'
import { useDispatch } from 'react-redux'
import { setErrorUserDepositValue } from '../../../redux/userFinance/action'
import {numberTransformer} from "../../../helpers/numberTransformer";

export const DepositButtonSubmit = ({
  t,
  step,
  stepHandler,
  buttonText,
  userDepositValue,
  userCurrency,
}) => {
  const dispatch = useDispatch()

  const submitButtonHandler = () => {
    const max = Number(userCurrency?.userCurrencyData?.depositMax);
    const min = Number(userCurrency?.userCurrencyData?.depositMin);
    const decimal = userCurrency?.userCurrencyData?.decimal;

    if (step === 1 || step === 3) {
      if (userDepositValue < min && min > 0) {
        dispatch(setErrorUserDepositValue(
          t('depositPage.errors.wrongValueMin', {value: numberTransformer(min.toFixed(Math.min(9, decimal)))})
        ))
      } else if (userDepositValue > max && max > 0) {
        dispatch(setErrorUserDepositValue(
          t('depositPage.errors.wrongValueMax', {value: numberTransformer(max.toFixed(Math.min(9, decimal)))})
        ))
      } else if ((userDepositValue > 0) && !!userDepositValue) {

        dispatch(setErrorUserDepositValue(''))

        if (step === 3) {

        } else {

          stepHandler(step)
        }

      } else {

        dispatch(setErrorUserDepositValue(t('depositPage.errors.wrongValue')))
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
