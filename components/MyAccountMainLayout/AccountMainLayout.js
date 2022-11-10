import { Header } from '../MainLayout/Header/Header'
import { SideMenu } from './AccountLayoutConponents/SideMenu'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Box } from "@chakra-ui/react"
import {
  auth, getActiveUserSessions, getClosedUserSessions, getDocuments,
  getUserActivePendingBonuses,
  getUserBets,
  getUserBonuses,
  getUserPayments,
} from '../../redux/user/action'
import { getCurrency, getCurrencyJurisdiction } from '../../redux/currency/action'
import { DepositPage } from '../MainLayout/DepositPage/DepositPage'
import { MobileSideMenu } from '../MobileSideMenu/MobileSideMenu'
import { useRouter } from 'next/router'
import { showLogin } from '../../redux/ui/action'
import { ErrorMessageContainer } from './ErrorMessage/ErrorMessageContainer'
import { backButtonShouldDo, closeAll } from '../../redux/popups/action'
import { PaymentsCardWrapper } from '../MainLayout/PaymentsModals/PaymentsCardWrapper'
import { PaymentsCryptoWrapper } from '../MainLayout/PaymentsModals/PaymentsCryptoWrapper'
import ErrorEmpty from '../ErrorBoundaryComponents/ErrorEmpty'
import ErrorHeaderPage from '../ErrorBoundaryComponents/ErrorBoundaryHeader'
import {MessageContainer} from "../MessageContainer/MessageContainer";
import {TermsModal} from "../modals/TermsModal";
import {Stack} from "@chakra-ui/layout";
import {useTranslation} from "next-i18next";

export const AccountMainLayout = ({ children }) => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch()
  const isShowModal = useSelector((store) => store.popups)
  const userInfo = useSelector((userInfo) => userInfo.authInfo)
  const currency = useSelector((store) => store.currency)
  const paymentsData = useSelector((store) => store.deposits)
  const router = useRouter()

  useEffect(() => {
    dispatch(closeAll(false))
    dispatch(backButtonShouldDo(false))
  }, [router])

  useEffect(() => {
    let userLogLocal = localStorage.getItem('userAuth')
    if (!userInfo.userAuthLoading && !userInfo.isAuthenticated) {
      router.replace('/').then((data) => {
        dispatch(showLogin(true))
      })
    } else if (!JSON.parse(userLogLocal)) {
      router.replace('/').then((data) => {
        dispatch(showLogin(true))
      })
    }
  }, [userInfo.userAuthLoading, userInfo.isAuthenticated])

  useEffect(() => {

    for (let showModalKey in isShowModal) {
      if (
        showModalKey === 'isShowDepositModal'
        ||
        showModalKey === 'isShowMobileCryptoPayments'
        ||
        showModalKey === 'isShowCreditCardModal'
        ||
        showModalKey === 'isShowCryptoModal'
        ||
        showModalKey === 'isShowMobilePaymentsStepper'
        ||
        showModalKey === 'isShowCurrencySwitcher'
      ) {
        if (isShowModal[showModalKey] === true) {
          document.body.style.overflowY = 'hidden'
          break
        } else {
          document.body.style.overflowY = 'auto'
        }
      }
    }
  }, [isShowModal])

  useEffect(() => {

    if (userInfo.isAuthenticated) {
      if (!userInfo.userPayments) {
        dispatch(getUserPayments({ user_id: Number(userInfo?.user?.user?.id) }))
      }
      if (!userInfo.bonusesHistory) {
        dispatch(getUserBonuses({ status: '1,2,3,4,6', is_fs: 0 }))
      }
      if (!userInfo.activePendingBonuses) {
        dispatch(getUserActivePendingBonuses({ status: '1,5' }))
      }
      if (!userInfo.userActiveSessions) {
        dispatch(getActiveUserSessions())
      }
      if (!userInfo.userClosedSessions) {
        dispatch(getClosedUserSessions())
      }

      if (!currency.currency_jurisdiction) {
        dispatch(getCurrencyJurisdiction())
      }
      if (!userInfo.userBetsData) {
        dispatch(getUserBets())
      }
      if (!currency.currency) {
        dispatch(getCurrency())
      }
      if (!userInfo.userDocuments) {
        dispatch(getDocuments())
      }

    }

  }, [userInfo.isAuthenticated])

  useEffect(() => {
    if (router.pathname === '/accounts/two_factor') {
      dispatch(auth())
    }
  }, [router.pathname])

  return (
    <Box bg="white" w="100%" h="100vh" overflowX="hidden" overflowY="auto">
      <ErrorHeaderPage>
        <Header t={t}/>
      </ErrorHeaderPage>

      {userInfo.isAuthenticated ?
        <>
          {isShowModal.showErrorPopup && <ErrorEmpty>
            <ErrorMessageContainer
              errorData={isShowModal}
              t={t}
            />
          </ErrorEmpty>}

          {isShowModal.showMessagePopup && <MessageContainer/>}

          {isShowModal.isShowDepositModal && <ErrorEmpty>
            <DepositPage t={t}/>
          </ErrorEmpty>}

          {isShowModal.isShowCreditCardModal && <ErrorEmpty>
            <PaymentsCardWrapper
              paymentsData={paymentsData}
              userInfo={userInfo}
            />
          </ErrorEmpty>}

          {isShowModal.isShowCryptoModal && <ErrorEmpty>
            <PaymentsCryptoWrapper
              paymentsData={paymentsData}
            />
          </ErrorEmpty>}

          <MobileSideMenu t={t} userInform={userInfo}/>

          {isShowModal.isShowTermsModal && <ErrorEmpty>
            <TermsModal/>
          </ErrorEmpty>}

          <Box p={{base: 0, lg: "0 30px"}} m="0 auto" maxW="1360px" w="100%">
            <Stack direction={{base: "column", lg: "row"}} bg="white" w="100%" minH="700px">
              <SideMenu userInform={userInfo} t={t}/>
              <Box w="100%" p={{base: "0 16px 20px", lg: "0 20px 20px 30px"}}>
                {children}
              </Box>
            </Stack>
          </Box>
        </> : <ErrorHeaderPage />
      }
    </Box>
  )
}
