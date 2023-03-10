import { TextBlock } from './GoogleAuthComponents/TextBlock'
import { QrcodeContainer } from './GoogleAuthComponents/QrcodeContainer'
import { AuthCodeInputBlock } from './GoogleAuthComponents/AuthCodeInputBlock'
import { useDispatch } from 'react-redux'
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import { useState } from 'react'
import { qr_auth_url } from '../../../redux/url/url'
import { mayYwoFactorAuth } from '../../../redux/user/action'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import Connect from "../../../helpers/connect";
import {GoogleAuthConfirmModal} from "./GoogleAuthComponents/GoogleAuthConfirmModal";
import { Box } from "@chakra-ui/react";
import BodyText from "../../typography/BodyText";

export const GoogleAuthContainer = ({ t, authData, setIsShowSavedKeys, setSavedKeys }) => {
  const dispatch = useDispatch()
  const [googleKeyValue, setGoogleKeyValue] = useState('')
  const [googleAuthError, setGoogleAuthError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const googleKEyInputHandler = (value) => {
    setGoogleKeyValue(value)
  }

  const onConfirm = () => {
    setShowModal(false)
    confirmButtonClickHandler()
  }

  const confirmButton = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const confirmButtonClickHandler = () => {
    let googleAuthData = {
      key: authData.qrAuth.key,
      token: googleKeyValue,
      active: true,
    }
    Connect.post(qr_auth_url, JSON.stringify(googleAuthData), {}, (status, data) => {
      setSavedKeys(data.backup_codes)
      setIsShowSavedKeys(true)
      dispatch(mayYwoFactorAuth(true))
      setGoogleAuthError('')
    }).catch((error) => {
      setGoogleAuthError(t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.errors.invalidCode'))
    })
  }

  if (authData.qrAuthLoading) {
    return (
      <LoadingComponent t={t}/>
    )
  } else {
    return (
      <Box pb={3}>
        <TextBlock t={t}/>
        <ErrorText>
          <QrcodeContainer authData={authData.qrAuth} t={t}/>
        </ErrorText>
        <ErrorText>
          <AuthCodeInputBlock
            googleAuthError={googleAuthError}
            googleKeyValue={googleKeyValue}
            confirmButtonClickHandler={confirmButton}
            googleKEyInputHandler={googleKEyInputHandler}
            t={t}
          />
        </ErrorText>
        <BodyText py="35px">{t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.lowerText')}</BodyText>
        {showModal && <GoogleAuthConfirmModal t={t} onClose={() => setShowModal(false)} onConfirm={onConfirm} />}
      </Box>
    )
  }

}
