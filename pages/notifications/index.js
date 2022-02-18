import styles from '../../styles/NotificationsPage/NotificationsPage.module.scss'
import { useTranslation } from 'next-i18next'
import MainLayout from '../../components/MainLayout/MainLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { MainBlockContainer } from '../../components/NotificationsPage/MainBlock/MainBlockContainer'
import { useDispatch, useSelector } from 'react-redux'
import { SideGamesContainer } from '../../components/NotificationsPage/SideBlock/SideGamesContainer'
import { useEffect } from 'react'
import { getGames } from '../../redux/actions/games'

import { getCurrency } from '../../redux/actions/currency'
import ErrorEmpty from '../../components/ErrorBoundaryComponents/ErrorEmpty'
import ErrorText from '../../components/ErrorBoundaryComponents/ErrorText'

const NotificationsPage = () => {
  const { t } = useTranslation('common')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGames())
    dispatch(getCurrency())
  }, [])

  const notifyData = useSelector((store) => store.notifications)
  const userInfo = useSelector((store) => store.authInfo)

  return (
    <MainLayout t={t}>
      <div className={styles.mainWrapper}>

        {
          userInfo.isAuthenticated ?
            <div className={styles.innerWrapper}>
              <ErrorText>
                <MainBlockContainer notifyData={notifyData} userInfo={userInfo} t={t}/>
              </ErrorText>
              <ErrorEmpty>
                <SideGamesContainer t={t}/>
              </ErrorEmpty>
            </div>
            : ''
        }
      </div>
    </MainLayout>
  )
}

export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common', 'newsData']),
    },
  })
}

export default NotificationsPage
