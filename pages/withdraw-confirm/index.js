import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from '../../components/MainLayout/MainLayout'
import { HomePageContainer } from '../../components/HomePageComponents/HomePageContainer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { token_url } from '../../redux/url/url'
import axios from 'axios'
import { messagePopupActivate } from '../../redux/actions/showPopups'

export default function EmailConfirmation (props) {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()

  useEffect(() => {

    if (props.token) {
      let sendData = {
        type: 3,
        token: props.token,
      }

      const timer = setTimeout(() => {

        axios.patch(token_url, sendData)
          .then((data) => {
            if (data.data.success) {
              dispatch(messagePopupActivate('success'))
            } else if (data.data.extra_error_info === 'Token invalid') {
              dispatch(messagePopupActivate('token_invalid'))
            } else {
              dispatch(messagePopupActivate('other_error'))
            }
          })
          .catch((e) => {
            console.log(e, 'error data!!!!!!!!!')
            dispatch(messagePopupActivate('other_error'))
          })
      }, 3000)

      return () => {
        clearTimeout(timer)
      }
    }

  }, [])

  return (

    <>
      <MainLayout>
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