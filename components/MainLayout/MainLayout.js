import { Header } from './Header/Header'
import styles from '../../styles/MainLayout.module.scss'
import { Footer } from './Footer/Footer'
import { RegisterSignup } from './RegisterSignup/RegisterSignup'
import { LogIn } from './LogIn/LogIn'
import { useDispatch, useSelector } from 'react-redux'
import { MobileSideMenu } from '../MobileSideMenu/MobileSideMenu'
import { useRouter } from 'next/router'
import { DepositPage } from './DepositPage/DepositPage'
import { ManageSubscriptions } from './ManageSubscriptions/ManageSubscriptions'
import { SearchModalWindowWrapper } from '../SearchGamesModalWindow/SearchModalWindowWrapper'
import { useEffect, useRef } from 'react'
import { PlaySafeMainWrapper } from '../PlaySafeComponents/PlaySafeMainWrapper'
import { FooterAreaContainer } from '../FooterArea/FooterAreaContainer'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { TournamentMainContainer } from './TournamentSidebar/TournamentMainContainer'
import { TournamentIcon } from './TournamentIcon/TournamentIcon'
import { TournamentModalDetails } from './TournamentSidebar/TournamentModalDetails/TournamentModalDetails'
import {
  backButtonShouldDo,
  closeAll,
} from '../../redux/actions/showPopups'
import { DepositWidgetMainContainer } from './DepositWidget/DepositWidgetMainContainer'
import { PaymentsCardWrapper } from './PaymentsModals/PaymentsCardWrapper'
import { PaymentsCryptoWrapper } from './PaymentsModals/PaymentsCryptoWrapper'
import { MobilePaymentsStepper } from './PaymentsModals/MobilePaymentsStepper'
import { ExitIntentPopup } from '../ExitIntentComponent/ExitIntentPopup'
import { SelectCurrencyWidget } from './SelectCurrencyWidget/SelectCurrencyWidget'
import { ForgotPasswordComponent } from '../ForgotPasswordComponents/ForgotPasswordComponent'
import { ChangePasswordContainer } from '../ForgotPasswordComponents/ChangePasswordContainer/ChangePasswordContainer'
import { showLogin } from '../../redux/actions/loginShow'
import { showRegister } from '../../redux/actions/registerShow'
import { EmailValidationContainer } from '../ForgotPasswordComponents/EmailValidationContainer/EmailValidationContainer'
import { EmailValidationError } from '../ForgotPasswordComponents/EmailValidationContainer/EmailValidationError'
import { TwoFactorAutContainer } from '../TwoFactorAuthComponents/TwoFactorAutContainer'
import ExitIntentError from '../ExitIntentComponent/ExitIntentError/ExitIntentError'
import ErrorEmpty from '../ErrorBoundaryComponents/ErrorEmpty'
import ErrorHeaderPage from '../ErrorBoundaryComponents/ErrorBoundaryHeader'
import { useTranslation } from 'next-i18next'

const MainLayout = ({ children, token, emailError }) => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch()
  const router = useRouter()
  const { width } = useWindowDimensions()

  useEffect(() => {
    dispatch(closeAll(false))
    dispatch(backButtonShouldDo(false))
    dispatch(showLogin(false))
    dispatch(showRegister(false))
  }, [router])

  const userInfo = useSelector((userInfo) => userInfo.authInfo)
  const isShowModal = useSelector((store) => store.showPopupsReducer)
  const paymentsData = useSelector((store) => store.depositData)

  const showPlayWindow = useSelector((store) => store.showPlayWindowReducer)
  let registerShow = useSelector((isShowRegister) => isShowRegister.showRegister.isShow)
  let logInShow = useSelector((isShowLogin) => isShowLogin.showLogin.isShow)
  let toursref = useRef()

  useEffect(() => {

    for (let showModalKey in isShowModal) {
      if (
        showModalKey === 'actionForBackButton'
        ||
        showModalKey === 'actionForBackButtonPayments'
        ||
        showModalKey === 'depositModalStep'
        ||
        showModalKey === 'errorPopupData'
        ||
        showModalKey === 'isShowTournaments'
        ||
        showModalKey === 'showErrorPopup'
        ||
        showModalKey === 'isShowExitIntentPopup'
      ) {

      } else {
        if (isShowModal[showModalKey] === true) {
          document.body.style.overflowY = 'hidden'
          break
        } else {
          document.body.style.overflowY = 'auto'
          if (logInShow || registerShow) {
            document.body.style.overflowY = 'hidden'
          } else if (showPlayWindow.isFullScreen) {
            document.body.style.overflowY = 'hidden'
          } else {
            document.body.style.overflowY = 'auto'
          }
        }
      }
    }

  }, [isShowModal, registerShow, logInShow, showPlayWindow])

  return (
    <>
      <div className={styles.mainLayoutWrapper}>
        <ErrorHeaderPage>
          <Header t={t}/>
        </ErrorHeaderPage>

        <ExitIntentError>
          <ExitIntentPopup
            isShowExitIntent={isShowModal.isShowExitIntentPopup}
            t={t}
            userInfo={userInfo}
          />
        </ExitIntentError>

        <ErrorEmpty>
          <DepositWidgetMainContainer
            userAuth={userInfo}
            t={t}
          />
        </ErrorEmpty>

        {
          isShowModal.isShowMobilePaymentsStepper
            ?
            <ErrorEmpty>
              <MobilePaymentsStepper
                isShow={isShowModal.isShowMobilePaymentsStepper}
                paymentsData={paymentsData}
                userAuth={userInfo}
                t={t}
              />
            </ErrorEmpty>
            :
            <></>
        }
        {
          isShowModal.isShowCreditCardModal
            ?
            <ErrorEmpty>
              <PaymentsCardWrapper
                isShow={isShowModal.isShowCreditCardModal}
                paymentsData={paymentsData}
                userInfo={userInfo}
                t={t}
              />
            </ErrorEmpty>
            :
            <></>
        }
        {
          isShowModal.isShowCryptoModal
            ?
            <ErrorEmpty>
              <PaymentsCryptoWrapper
                isShow={isShowModal.isShowCryptoModal}
                paymentsData={paymentsData}
                t={t}
              />
            </ErrorEmpty>
            :
            <></>
        }
        {
          isShowModal.isShowSearchModal
            ?
            <SearchModalWindowWrapper
              isShowSearchModal={isShowModal.isShowSearchModal}
              t={t}
            />
            :
            <></>
        }
        <MobileSideMenu
          t={t}
          userInform={userInfo}
        />
        {
          isShowModal.isShowPlaySafe
            ?
            <ErrorEmpty>
              <PlaySafeMainWrapper/>
            </ErrorEmpty>
            :
            <></>
        }
        {
          userInfo.isAuthenticated
            ?
            ''
            :
            <ErrorEmpty>
              <RegisterSignup
                isShow={registerShow}
                t={t}
              />
            </ErrorEmpty>
        }
        <ErrorEmpty>
          <LogIn
            isShow={logInShow}
            t={t}
          />
        </ErrorEmpty>
        {
          isShowModal.isShowCurrencySwitcher || isShowModal.isShowPaymentCurrencySwitcher
            ?
            <ErrorEmpty>
              <SelectCurrencyWidget
                t={t}
                isShowCurrencySwitcher={isShowModal.isShowCurrencySwitcher}
                isShowPaymentCurrencySwitcher={isShowModal.isShowPaymentCurrencySwitcher}
                isShowMobileCryptoPayments={isShowModal.isShowMobileCryptoPayments}
              />
            </ErrorEmpty>
            :
            <></>
        }

        {userInfo.isAuthenticated
          ?
          <ErrorEmpty>
            <DepositPage
              t={t}
            />
          </ErrorEmpty>
          :
          ''
        }
        {
          userInfo.isAuthenticated
            ?
            <ErrorEmpty>
              <ManageSubscriptions
                t={t}
              />
            </ErrorEmpty>
            :
            ''
        }
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
        {isShowModal.isShowTournamentsDetails
          ?
          <ErrorEmpty>
            <TournamentModalDetails
              t={t}
            />
          </ErrorEmpty>
          :
          <></>
        }
        {children}
        {
          userInfo.isAuthenticated && width > 1239
            ?
            <ErrorEmpty>
              <FooterAreaContainer
                userData={userInfo}
                t={t}
              />
            </ErrorEmpty>
            :
            ''
        }
        <ErrorEmpty>
          <Footer
            t={t}
            userAuth={userInfo.isAuthenticated}
            screenWidth={width}
          />
        </ErrorEmpty>
        {isShowModal.isShowForgotPassword
          ?
          <ErrorEmpty>
            <ForgotPasswordComponent
              t={t}
            />
          </ErrorEmpty>
          :
          <></>
        }
        {
          isShowModal.isShowChangePassword && token
            ?
            <ErrorEmpty>
              <ChangePasswordContainer
                t={t}
                token={token}
              />
            </ErrorEmpty>
            :
            <></>
        }
        {
          isShowModal.isShowEmailValidationSuccess
            ?
            <ErrorEmpty>
              <EmailValidationContainer t={t}/>
            </ErrorEmpty>
            :
            <>
            </>
        }
        {
          isShowModal.isShowEmailValidationError
            ?
            <ErrorEmpty>
              <EmailValidationError
                t={t}
                emailError={emailError}
              />
            </ErrorEmpty>
            :
            <>
            </>
        }
        {
          isShowModal.isShowTwoFaPopup
            ?
            <ErrorEmpty>
              <TwoFactorAutContainer
                t={t}
              />
            </ErrorEmpty>
            :
            <></>
        }
      </div>
    </>
  )
}

export default MainLayout