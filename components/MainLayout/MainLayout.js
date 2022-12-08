// import { Header } from './Header/Header'
// import { Footer } from './Footer/Footer'
import { useSelector } from 'react-redux'
import { Box } from '@chakra-ui/react'
import { MobileSideMenu } from '../MobileSideMenu/MobileSideMenu'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import ErrorEmpty from '../ErrorBoundaryComponents/ErrorEmpty'
import ErrorHeaderPage from '../ErrorBoundaryComponents/ErrorBoundaryHeader'
import { useTranslation } from 'next-i18next'
import { ModalsContainer } from '../ModalsContainer/ModalsContainer'
import TournamentSidebar from "./TournamentSidebar/TournamentSidebar";
import {getDynamicComponent} from "../../helpers/theme";
import {assetsPath} from "../../envs/theme";

const Header = getDynamicComponent('MainLayout/Header/Header', 'Header')
const Footer = getDynamicComponent('MainLayout/Footer/Footer', 'Footer')
const TournamentIcon = getDynamicComponent('MainLayout/TournamentSidebar/TournamentIcon', 'TournamentIcon')

const MainLayout = ({ children, token, emailError, withdrawConfirmError }) => {
  const { t } = useTranslation('common');
  const router = useRouter()

  const userInfo = useSelector((userInfo) => userInfo.authInfo)
  const isShowModal = useSelector((store) => store.popups)

  let toursref = useRef()

  return (
    <>
      <ModalsContainer
        token={token}
        emailError={emailError}
        withdrawConfirmError={withdrawConfirmError}
      />
      <Box
        backgroundColor="accent.850"
        backgroundImage={`url('${assetsPath}/img/mainLayoutImg/background.webp')`}
        overflow="hidden"
        w="100%"
      >
        <ErrorHeaderPage>
          <Header/>
        </ErrorHeaderPage>
        <MobileSideMenu
          t={t}
          userInform={userInfo}
        />

        <TournamentIcon toursref={toursref} />

        <TournamentSidebar
          toursref={toursref}
          router={router}
          isShowModal={isShowModal}
          userInfo={userInfo}
          t={t}
        />
        {children}
        <ErrorEmpty>
          <Footer userAuth={userInfo.isAuthenticated}/>
        </ErrorEmpty>
      </Box>
    </>
  )
}

export default MainLayout
