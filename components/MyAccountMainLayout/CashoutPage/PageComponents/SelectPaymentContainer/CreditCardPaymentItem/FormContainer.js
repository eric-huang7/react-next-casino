import styles from '../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss'
import { AmountInput } from './AmountInput'
import { AddressInput } from './AddressInput'
import { ButtonContainer } from './ButtonContainer'
import { useEffect, useState } from 'react'
import { post_withdraw_url } from '../../../../../../redux/url/url'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getUserPayments, userBalance } from '../../../../../../redux/user/action'
import ErrorEmpty from '../../../../../ErrorBoundaryComponents/ErrorEmpty'
import Connect from "../../../../../../helpers/connect";

export const FormContainer = ({ t, typeOfCurrency, userInfo }) => {
  const dispatch = useDispatch()

  const router = useRouter()
  const [amountValue, setAmountValue] = useState('')
  const [addressValue, setAddressValue] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [valueError, setValueError] = useState('')
  const [addressError, setAddressError] = useState('')

  const balanceInfo = useSelector((store) => store.authInfo)

  const amountInputHandler = (value) => {
    setAmountValue(value)
  }
  const addressInputHandler = (value) => {
    setAddressValue(value)
  }

  const withdrawFormHandler = (e) => {
    e.preventDefault()
    let params = { user_id: Number(userInfo.id) }
    // const currency_to = typeOfCurrency;
    const sendData = {
      currency_id: typeOfCurrency.id,
      user_id: userInfo.id,
      memo: '',
      address: addressValue,
      amount: amountValue
    }

    try {
      let permittedСashoutValue = balanceInfo.balance.balances.find((el) => el.currency_id === (`${typeOfCurrency.id}`)).cash_amount

      if (Number(permittedСashoutValue) < Number(amountValue)) {
        setValueError(t('myAccount.cashoutPage.selectPaymentContainer.errors.valueErrorMessage'))
      } else if (Number(typeOfCurrency.withdrawMin) > Number(amountValue)) {
        setValueError(t('myAccount.cashoutPage.selectPaymentContainer.errors.valueMinErrorMessage'))
      } else if (Number(typeOfCurrency.withdrawMax) < Number(amountValue)) {
        setValueError(t('myAccount.cashoutPage.selectPaymentContainer.errors.valueMaxErrorMessage'))
      } else if (addressValue.length === 0) {
        setAddressError(t('myAccount.cashoutPage.selectPaymentContainer.errors.emptyAddressErrorMessage'))
      } else {
        setValueError('')
        setAddressError('')
        Connect.post(post_withdraw_url, JSON.stringify(sendData), {}, (status, data) => {
          setErrorMessage('')
          dispatch(getUserPayments(params))
          dispatch(userBalance())
          router.push("/accounts/history")
        }).catch((e) => {
          setSuccessMessage('')

          let responseErrorCode = e.response.data.error_code === 'WITHDRAW_NEED_TO_CONFIRM_ADDRESS'
          if (responseErrorCode) {
            dispatch(getUserPayments(params))
          }

          setErrorMessage(t('myAccount.cashoutPage.selectPaymentContainer.errors.errorMessage'))
        })
      }
    } catch (e) {
      setErrorMessage(t('myAccount.cashoutPage.selectPaymentContainer.errors.errorMessage'))
    }
  }

  useEffect(() => {
    setAddressValue('')
    setAmountValue('')
    setSuccessMessage('')
    setErrorMessage('')
    setValueError('')
    setAddressError('')
  }, [router])

  return (
    <div className={styles.paymentMethodFormWrapper}>
      <form onSubmit={(e) => withdrawFormHandler(e)} id={'paymentForm'}>
        <ErrorEmpty>
          <AmountInput
            t={t}
            typeOfCurrency={typeOfCurrency}
            amountInputHandler={amountInputHandler}
            amountValue={amountValue}
            valueError={valueError}
          />
        </ErrorEmpty>
        <ErrorEmpty>
          <AddressInput
            t={t}
            addressInputHandler={addressInputHandler}
            addressValue={addressValue}
            addressError={addressError}
          />
        </ErrorEmpty>
        <span className={styles.errorMessage}>{errorMessage}</span>
        <span className={styles.successMessage}>{successMessage}</span>
        <ButtonContainer withdrawFormHandler={withdrawFormHandler} t={t}/>
      </form>
    </div>
  )
}
