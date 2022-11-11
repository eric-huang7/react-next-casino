import { TextBlock } from './TextBlock'
import { TwoFactorCompleteInputsBlock } from './TwoFactorCompleteInputsBlock'
import { useState } from 'react'
import {qr_auth_url} from '../../../../redux/url/url'
import { mayYwoFactorAuth } from '../../../../redux/user/action'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import ErrorText from '../../../ErrorBoundaryComponents/ErrorText'
import Connect from "../../../../helpers/connect";
import { Box } from "@chakra-ui/react";

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
    Connect.post(qr_auth_url, JSON.stringify(googleAuthData), {}, (status, data) => {
      dispatch(mayYwoFactorAuth(false))
      // dispatch(auth());
      setDeactivateError('')
      router.push('/accounts/profile-info')
    }).catch((error) => {
      setDeactivateError(t('myAccount.twoFactorAuthPage.twoFaCompleteContainer.errors.failedToDisable'))
    })
  }

  return (
    <Box pb="20px">
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
    </Box>
  )
}
