import styles from '../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss'
import { AmountInput } from './AmountInput'
import { AddressInput } from './AddressInput'
import { ButtonContainer } from './ButtonContainer'
import { useEffect, useRef, useState } from 'react'
import { post_withdraw_url } from '../../../../../../redux/url/url'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getUserPayments, userBalance } from '../../../../../../redux/actions/userData'
import ErrorEmpty from '../../../../../ErrorBoundaryComponents/ErrorEmpty'
import { errorPopupActivate } from '../../../../../../redux/actions/showPopups'

export const FormContainer = ({ t, typeOfCurrency, chosenPayment, userInfo }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [amountValue, setAmountValue] = useState('')
  const [addressValue, setAddressValue] = useState('')
  const [memoAddressValue, setMemoAddressValue] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [valueError, setValueError] = useState('')
  const [addressError, setAddressError] = useState('')

  const balanceInfo = useSelector((store) => store.authInfo)

  const valueRef = useRef()

  const amountInputHandler = (value) => {
    setAmountValue(value)
  }
  const addressInputHandler = (value) => {
    setAddressValue(value)
  }
  const memoAddressInputHandler = (value) => {
    setMemoAddressValue(value)
  }

  const withdrawFormHandler = (e) => {
    e.preventDefault()
    let params = { user_id: Number(userInfo.id) }
    const sendData = {
      currency_id: chosenPayment ? chosenPayment.id : typeOfCurrency.id,
      currency_to: typeOfCurrency.id,
      user_id: userInfo.id,
      memo: memoAddressValue,
      address: addressValue,
      amount: amountValue
    }

    if (!chosenPayment) {
      delete sendData.currency_to
    }

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify(sendData)
    try {
      let permittedСashoutValue = balanceInfo.balance.balances.find((el) => el.currency_id === (chosenPayment ? `${chosenPayment.id}` : `${typeOfCurrency.id}`)).cash_amount

      if (Number(permittedСashoutValue) < Number(amountValue)) {
        setValueError(t('myAccount.cashoutPage.selectPaymentContainer.errors.valueErrorMessage'))
      } else if (Number(chosenPayment ? chosenPayment.withdrawMin : typeOfCurrency.withdrawMin) > Number(amountValue)) {
        setValueError(t('myAccount.cashoutPage.selectPaymentContainer.errors.valueMinErrorMessage'))
      } else if (Number(chosenPayment ? chosenPayment.withdrawMax : typeOfCurrency.withdrawMax) < Number(amountValue)) {
        setValueError(t('myAccount.cashoutPage.selectPaymentContainer.errors.valueMaxErrorMessage'))
      } else if (addressValue.length === 0) {
        setAddressError(t('myAccount.cashoutPage.selectPaymentContainer.errors.emptyAddressErrorMessage'))
      } else {
        setValueError('')
        setAddressError('')
        axios.post(post_withdraw_url, body, config)
          .then((data) => {

            setSuccessMessage(t('myAccount.cashoutPage.selectPaymentContainer.errors.successMessage'))
            setErrorMessage('')
            dispatch(getUserPayments(params))
            dispatch(userBalance())
          })
          .catch((e) => {

            setSuccessMessage('')
            dispatch(userBalance())
            dispatch(getUserPayments(params))
            if (e.response.data.error_code === 'WITHDRAW_NEED_TO_CONFIRM_ADDRESS') {
              dispatch(errorPopupActivate("myAccount.cashoutPage.selectPaymentContainer.errors.needEmailConfirmation"));
              setErrorMessage('')
            } else if (e.response.data.error_code === 'WITHDRAW_WAITING_ON_REVIEW') {
              setErrorMessage(t('myAccount.cashoutPage.selectPaymentContainer.errors.needAccountReview'))
            } else if (e.response.data.error_code === 'WITHDRAW_NEED_PLAYTHROUGH') {
              setErrorMessage(t('myAccount.cashoutPage.selectPaymentContainer.errors.needPlaythrough'))
            } else {
              setErrorMessage(t('myAccount.cashoutPage.selectPaymentContainer.errors.errorMessage'))
            }

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
            chosenPayment={chosenPayment}
            amountInputHandler={amountInputHandler}
            amountValue={amountValue}
            valueRef={valueRef}
            valueError={valueError}
          />
        </ErrorEmpty>
        <ErrorEmpty>
          <AddressInput
            t={t}
            addressInputHandler={addressInputHandler}
            addressValue={addressValue}
            name={'myAccount.cashoutPage.selectPaymentContainer.address'}
            addressError={addressError}
          />
        </ErrorEmpty>
        {
          typeOfCurrency.memo_req !== 0
            ?
            <ErrorEmpty>
              <AddressInput
                t={t}
                addressInputHandler={memoAddressInputHandler}
                addressValue={memoAddressValue}
                name={'myAccount.cashoutPage.selectPaymentContainer.memoAddress'}
              />
            </ErrorEmpty>
            :
            <></>
        }

        <span className={styles.errorMessage}>{errorMessage}</span>
        <span className={styles.successMessage}>{successMessage}</span>
        <ButtonContainer
          withdrawFormHandler={withdrawFormHandler}
          t={t}
        />
      </form>
    </div>
  )
}