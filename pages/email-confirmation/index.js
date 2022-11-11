import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from '../../components/MainLayout/MainLayout'
import { HomePageContainer } from '../../components/HomePageComponents/HomePageContainer'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {token_url} from '../../redux/url/url'
import { changePasswordLogin } from '../../redux/user/action'
import {
  showEmailValidationErrorPopup,
  showEmailValidationSuccessPopup,
  showTwoFaPopup
} from '../../redux/popups/action'
import Connect from "../../helpers/connect";

export default function EmailConfirmation (props) {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const [emailError, setEmailError] = useState(null)

  useEffect(() => {
    if (props.token) {
      let sendData = {
        type: 1,
        token: props.token,
      }

      const timer = setTimeout(() => {
        Connect.patch(token_url, sendData, {}, (status, data) => {
          if (data.success) {
            if (data.user.is_2fa_enabled === 1) {
              setEmailError(null)
              dispatch(showTwoFaPopup(true))
            } else {
              setEmailError(null)
              dispatch(showEmailValidationSuccessPopup(true))
              dispatch(changePasswordLogin(data))
              if (typeof window !== 'undefined') {
                localStorage.setItem('userAuth', 'true')
              }
            }
          } else if (data.extra_error_info === 'Token invalid') {

            setEmailError('used_token')
            dispatch(showEmailValidationErrorPopup(true))
          } else {
            setEmailError('other_error')
            dispatch(showEmailValidationErrorPopup(true))
          }
        }).catch((e) => {
          setEmailError('other_error')
          dispatch(showEmailValidationErrorPopup(true))
        })
      }, 3000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [])

  return (
    <MainLayout emailError={emailError}>
      <HomePageContainer t={t}/>
    </MainLayout>
  )
}

export const getServerSideProps = async (context) => {
  let token = null
  if (context.query.token) {
    token = context.query.token
  }

  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['promotionsPage', 'common', 'newsData']),
      token: token
    },
  })
}
