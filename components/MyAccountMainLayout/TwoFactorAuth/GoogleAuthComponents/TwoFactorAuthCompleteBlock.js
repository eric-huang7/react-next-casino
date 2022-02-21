import styles from '../../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss'
import { TextBlock } from './TextBlock'
import { TwoFactorCompleteInputsBlock } from './TwoFactorCompleteInputsBlock'
import { useState } from 'react'
import axios from 'axios'
import { qr_auth_url } from '../../../../redux/url/url'
import { mayYwoFactorAuth } from '../../../../redux/actions/userData'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import ErrorText from '../../../ErrorBoundaryComponents/ErrorText'

export const TwoFactorAuthCompleteBlock = ({ t, authData }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [deactivateCodeValue, setDeactivateCodeValue] = useState('')
  const [deactivateError, setDeactivateError] = useState('')
  const deactivateInputHandler = (value) => {
    setDeactivateCodeValue(value)
  }

  const deactivateButtonClickHandler = (e) => {
    e.preventDefault()

    let googleAuthData = {
      // key: authData.qrAuth.key,
      token: deactivateCodeValue,
      active: false,
    }
    const config = {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const body = JSON.stringify(googleAuthData)

    axios.post(qr_auth_url, body, config)
      .then((data) => {

        dispatch(mayYwoFactorAuth(false))
        // dispatch(auth());
        setDeactivateError('')
        router.push('/accounts/profile-info')
      })
      .catch((error) => {
        setDeactivateError(t('myAccount.twoFactorAuthPage.twoFaCompleteContainer.errors.failedToDisable'))
      })
  }

  return (
    <div className={styles.googleAuthContainer}>
      <TextBlock t={t}/>
      <ErrorText>
        <TwoFactorCompleteInputsBlock
          deactivateCodeValue={deactivateCodeValue}
          deactivateInputHandler={deactivateInputHandler}
          deactivateButtonClickHandler={deactivateButtonClickHandler}
          deactivateError={deactivateError}
          t={t}
        />
      </ErrorText>
    </div>
  )
}