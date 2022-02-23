import { Header } from './Header/Header'
import styles from '../../styles/MainLayout.module.scss'
import { Footer } from './Footer/Footer'
import { useSelector } from 'react-redux'
import { MobileSideMenu } from '../MobileSideMenu/MobileSideMenu'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { TournamentMainContainer } from './TournamentSidebar/TournamentMainContainer'
import { TournamentIcon } from './TournamentIcon/TournamentIcon'
import ErrorEmpty from '../ErrorBoundaryComponents/ErrorEmpty'
import ErrorHeaderPage from '../ErrorBoundaryComponents/ErrorBoundaryHeader'
import { useTranslation } from 'next-i18next'
import { ModalsContainer } from '../ModalsContainer/ModalsContainer'

const MainLayout = ({ children, token, emailError, withdrawConfirmError }) => {
  const { t } = useTranslation('common');
  const router = useRouter()

  const userInfo = useSelector((userInfo) => userInfo.authInfo)
  const isShowModal = useSelector((store) => store.showPopupsReducer)

  let toursref = useRef()

  return (
    <>
      <ModalsContainer
        token={token}
        emailError={emailError}
        withdrawConfirmError={withdrawConfirmError}
      />
      <div className={styles.mainLayoutWrapper}>
        <ErrorHeaderPage>
          <Header/>
        </ErrorHeaderPage>
        <MobileSideMenu
          t={t}
          userInform={userInfo}
        />

        <TournamentIcon
          toursref={toursref}
        />
        <TournamentMainContainer
          toursref={toursref}
          router={router}
          isShowModal={isShowModal}
          userInfo={userInfo}
          t={t}
        />
        {children}
        <ErrorEmpty>
          <Footer
            t={t}
            userAuth={userInfo.isAuthenticated}
          />
        </ErrorEmpty>
      </div>
    </>
  )
}

export default MainLayout