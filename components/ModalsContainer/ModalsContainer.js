import { MessageContainer } from '../MessageContainer/MessageContainer'
import { useDispatch, useSelector } from 'react-redux'
import {useCallback, useEffect, useMemo} from 'react'
import { backButtonShouldDo, closeAll } from '../../redux/popups/action'
import { showLogin } from '../../redux/ui/action'
import { showRegister } from '../../redux/ui/action'
import { useRouter } from 'next/router'
import ExitIntentError from '../ExitIntentComponent/ExitIntentError/ExitIntentError'
import { ExitIntentPopup } from '../ExitIntentComponent/ExitIntentPopup'
import { useTranslation } from 'next-i18next'
import ErrorEmpty from '../ErrorBoundaryComponents/ErrorEmpty'
import { DepositWidgetMainContainer } from '../MainLayout/DepositWidget/DepositWidgetMainContainer'
import { MobilePaymentsStepper } from '../MainLayout/PaymentsModals/MobilePaymentsStepper'
import { PaymentsCardWrapper } from '../MainLayout/PaymentsModals/PaymentsCardWrapper'
import { PaymentsCryptoWrapper } from '../MainLayout/PaymentsModals/PaymentsCryptoWrapper'
// import { SearchModalWindowWrapper } from '../SearchGamesModalWindow/SearchModalWindowWrapper'
import { PlaySafeMainWrapper } from '../PlaySafeComponents/PlaySafeMainWrapper'
import { RegisterSignup } from '../modals/RegisterSignup'
import { LogIn } from '../modals/LogIn'
import { DepositPage } from '../MainLayout/DepositPage/DepositPage'
import { ManageSubscriptions } from '../MainLayout/ManageSubscriptions/ManageSubscriptions'
import { TournamentModalDetails } from '../MainLayout/TournamentSidebar/TournamentModalDetails'
import { ForgotPasswordComponent } from '../ForgotPasswordComponents/ForgotPasswordComponent'
import { ChangePasswordContainer } from '../ForgotPasswordComponents/ChangePasswordContainer/ChangePasswordContainer'
import { EmailValidationContainer } from '../ForgotPasswordComponents/EmailValidationContainer/EmailValidationContainer'
import { EmailValidationError } from '../ForgotPasswordComponents/EmailValidationContainer/EmailValidationError'
import { TwoFactorAutContainer } from '../TwoFactorAuthComponents/TwoFactorAutContainer'
import { FooterAreaContainer } from '../FooterArea/FooterAreaContainer'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import RedeemPage from "../modals/RedeemPage/RedeemPage";
import TournamentAwardModal from "../modals/TournamentAwardModal";

export const ModalsContainer = ({token, emailError, withdrawConfirmError}) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { t } = useTranslation('common')
  const { width } = useWindowDimensions()

  const userInfo = useSelector((userInfo) => userInfo.authInfo)
  const isShowModal = useSelector((store) => store.popups)
  let registerShow = useSelector((isShowRegister) => isShowRegister.ui.isShowRegister)
  let logInShow = useSelector((isShowLogin) => isShowLogin.ui.isShowLogin)
  const showPlayWindow = useSelector((store) => store.ui)
  const paymentsData = useSelector((store) => store.deposits)

  useEffect(() => {
    dispatch(closeAll(false))
    dispatch(backButtonShouldDo(false))
    dispatch(showLogin(false))
    dispatch(showRegister(false))
  }, [router, dispatch])

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
        ||
        showModalKey === 'showMessagePopup'
        ||
        showModalKey === 'errorPopupData'
      ) {

      } else {
        if (typeof window !== 'undefined') {
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
    }
  }, [isShowModal, registerShow, logInShow, showPlayWindow])

  return (
    <>
      <ExitIntentError>
        <ExitIntentPopup
          isShowExitIntent={isShowModal.isShowExitIntentPopup}
          t={t}
          userInfo={userInfo}
        />
      </ExitIntentError>
      <ErrorEmpty>
        <DepositWidgetMainContainer userAuth={userInfo} />
      </ErrorEmpty>

      {isShowModal.isShowTournamentsDetails && <ErrorEmpty>
        <TournamentModalDetails
          t={t}
        />
      </ErrorEmpty>}

      {isShowModal.isShowForgotPassword && <ErrorEmpty>
        <ForgotPasswordComponent t={t} />
      </ErrorEmpty>}

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
      {isShowModal.isShowMobilePaymentsStepper && <ErrorEmpty>
        <MobilePaymentsStepper
          userAuth={userInfo}
        />
      </ErrorEmpty>}

      {
        isShowModal.isShowCreditCardModal
          ?
          <ErrorEmpty>
            <PaymentsCardWrapper
              paymentsData={paymentsData}
              userInfo={userInfo}
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
              paymentsData={paymentsData}
            />
          </ErrorEmpty>
          :
          <></>
      }
      {/*{*/}
      {/*  isShowModal.isShowSearchModal*/}
      {/*    ?*/}
      {/*    <SearchModalWindowWrapper*/}
      {/*      isShowSearchModal={isShowModal.isShowSearchModal}*/}
      {/*      t={t}*/}
      {/*    />*/}
      {/*    :*/}
      {/*    <></>*/}
      {/*}*/}

      {isShowModal.isShowPlaySafe && <ErrorEmpty>
        <PlaySafeMainWrapper/>
      </ErrorEmpty>}

      {!userInfo.isAuthenticated && registerShow && <ErrorEmpty>
        <RegisterSignup
          isShow={registerShow}
        />
      </ErrorEmpty>}

      {!userInfo.isAuthenticated && logInShow && <ErrorEmpty>
        <LogIn
          isShow={logInShow}
        />
      </ErrorEmpty>}

      {userInfo.isAuthenticated && <ErrorEmpty>
        <DepositPage />
      </ErrorEmpty>}

      {userInfo.isAuthenticated && <ErrorEmpty>
        <ManageSubscriptions />
      </ErrorEmpty>}

      {isShowModal.showMessagePopup && <MessageContainer />}

      {userInfo.isAuthenticated && width > 1239 && <ErrorEmpty>
        <FooterAreaContainer
          userData={userInfo}
          t={t}
        />
      </ErrorEmpty>}

      {userInfo.isAuthenticated && <ErrorEmpty>
        <RedeemPage />
      </ErrorEmpty>}

      {userInfo.isAuthenticated && <ErrorEmpty>
        <TournamentAwardModal/>
      </ErrorEmpty>}
    </>
  )
}
