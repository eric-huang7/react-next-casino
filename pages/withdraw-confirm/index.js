import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from '../../components/MainLayout/MainLayout'
import { HomePageContainer } from '../../components/HomePageComponents/HomePageContainer'
import { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import { token_url } from '../../redux/url/url'
import axios from 'axios'
import { changePasswordLogin } from '../../redux/actions/userData'
import {
  showEmailValidationErrorPopup,
  showEmailValidationSuccessPopup,
  showTwoFaPopup
} from '../../redux/actions/showPopups'

export default function EmailConfirmation (props) {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()

  const [withdrawConfirmError, setWithdrawConfirmError] = useState(null)

  useEffect(() => {

    if (props.token) {
      let sendData = {
        type: 3,
        token: props.token,
      }

      const timer = setTimeout(() => {

        axios.patch(token_url, sendData)
          .then((data) => {
            console.log(data, 'successs data!!!!!!!!!');
            if (data.data.success) {

              setWithdrawConfirmError(null)

            } else if (data.data.extra_error_info === 'Token invalid') {

              setWithdrawConfirmError('used_token')

            } else {
              setWithdrawConfirmError('other_error')

            }
          })
          .catch((e) => {
            console.log(e, 'error data!!!!!!!!!');
            setWithdrawConfirmError('other_error')
          })
      }, 3000)

      return () => {
        clearTimeout(timer)
      }
    }

  }, [])

  return (

    <>
      <MainLayout
        emailError={withdrawConfirmError}
      >
        <HomePageContainer
          t={t}
        />
      </MainLayout>

    </>
  )
}

export const getServerSideProps = async (context) => {

  let token = null
  if (context.query.token) {
    token = context.query.token
  } else {

  }

  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['promotionsPage', 'common', 'newsData']),
      token: token
    },
  })
}