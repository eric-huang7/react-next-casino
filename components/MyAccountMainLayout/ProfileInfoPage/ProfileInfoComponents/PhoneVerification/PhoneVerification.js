import styles from '../../../../../styles/MyAccount/UserInfoPage/PhoneVerification.module.scss'
import { PhoneInputContainer } from './PhoneInputContainer'
import { VerifyCodeInputContainer } from './VerifyCodeInputContainer'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {phone_number_url} from '../../../../../redux/url/url'
import { auth, patchUserData } from '../../../../../redux/user/action'
import { PhoneAlreadyVerified } from './PhoneAlreadyVerified'
import ErrorText from '../../../../ErrorBoundaryComponents/ErrorText'
import Connect from "../../../../../helpers/connect";

export const PhoneVerification = ({ t, userInfo }) => {
  const dispatch = useDispatch()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [verifyCode, setVerifyCode] = useState('')

  const phoneInputValue = (value) => {
    setPhoneNumber(value)
  }
  const verifyCodeInputHandler = (value) => {
    setVerifyCode(value)
  }

  const sendVerifyCodeHandler = (e) => {
    e.preventDefault()
    if (verifyCode === '') {
      setPhoneError(t('myAccount.profilePage.phoneVerification.errors.invalidCode'))
    } else {
      let userData = {
        type: 5,
        token: verifyCode,
      }
      Connect.patch(phone_number_url, JSON.stringify(userData), {}, (status, data) => {
        if (data.extra_error_info) {
          setPhoneError(t('myAccount.profilePage.phoneVerification.errors.invalidCode'))
        } else {
          setPhoneError('')
        }

        dispatch(auth())
      }).catch((e) => {
        setPhoneError(t('myAccount.profilePage.phoneVerification.errors.invalidCode'))
      })
    }
  }

  const sendPhoneNumberHandler = (e) => {
    e.preventDefault()

    let userData = {
      id: userInfo.user.user.id,
      phone_number: phoneNumber,
    }
    const config = {
      params: {
        type: 5,
        phone: phoneNumber
      }
    }
    Connect.get(phone_number_url, config, (status, data) => {
      setPhoneError('')
      dispatch(auth())
      // dispatch(patchUserData(userData));
    }).catch((e) => {
      setPhoneError(t('myAccount.profilePage.phoneVerification.errors.invalidPhone'))
    })
  }
  const sendAgainVerifyCode = () => {
    if (userInfo.user.user.unconfirmed_phone) {
      const config = {
        params: {
          type: 5,
          phone: userInfo.user.user.unconfirmed_phone
        }
      }
      Connect.get(phone_number_url, config, (status, data) => {
        setPhoneError('')
        // dispatch(patchUserData(userData));
      }).catch((e) => {
        setPhoneError(t('myAccount.profilePage.phoneVerification.errors.errorSendingCode'))
      })
    }
  }

  const removePhoneNumberHandler = () => {
    let userData = {
      id: userInfo.user.user.id,
      phone_number: '',
      unconfirmed_phone: ''
    }
    setPhoneError('')
    dispatch(patchUserData(userData))
  }

  let status =
    userInfo.user.user.phone_number
      ?
      t('myAccount.profilePage.phoneVerification.status.verified')
      :
      t('myAccount.profilePage.phoneVerification.status.notVerified')

  if (userInfo.user.user.unconfirmed_phone && !userInfo.user.user.phone_number) {
    return (
      <div className={styles.phoneVerificationContainer}>
        <ErrorText>
          <VerifyCodeInputContainer
            status={status}
            t={t}
            userInfo={userInfo.user.user}
            sendAgainVerifyCode={sendAgainVerifyCode}
            phoneError={phoneError}
            removePhoneNumberHandler={removePhoneNumberHandler}
            verifyCodeInputHandler={verifyCodeInputHandler}
            verifyCode={verifyCode}
            sendVerifyCodeHandler={sendVerifyCodeHandler}
          />
        </ErrorText>
      </div>
    )
  } else if (!userInfo.user.user.unconfirmed_phone) {
    return (
      <div className={styles.phoneVerificationContainer}>
        <ErrorText>
          <PhoneInputContainer
            t={t}
            phoneInputValue={phoneInputValue}
            phoneError={phoneError}
            phoneNumber={phoneNumber}
            sendPhoneNumberHandler={sendPhoneNumberHandler}
          />
        </ErrorText>
      </div>
    )
  } else if (userInfo.user.user.phone_number && (!userInfo.user.user.unconfirmed_phone || userInfo.user.user.unconfirmed_phone)) {
    return (
      <div className={styles.phoneVerificationContainer}>
        <ErrorText>
          <PhoneAlreadyVerified
            t={t}
            userInfo={userInfo.user.user}
            removePhoneNumberHandler={removePhoneNumberHandler}
            status={status}
          />
        </ErrorText>
      </div>
    )
  }

}
