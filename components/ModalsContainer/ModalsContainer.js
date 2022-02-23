import { MessageContainer } from '../MessageContainer/MessageContainer'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { backButtonShouldDo, closeAll } from '../../redux/actions/showPopups'
import { showLogin } from '../../redux/actions/loginShow'
import { showRegister } from '../../redux/actions/registerShow'
import { useRouter } from 'next/router'
import ExitIntentError from '../ExitIntentComponent/ExitIntentError/ExitIntentError'
import { ExitIntentPopup } from '../ExitIntentComponent/ExitIntentPopup'
import { useTranslation } from 'next-i18next'
import ErrorEmpty from '../ErrorBoundaryComponents/ErrorEmpty'
import { DepositWidgetMainContainer } from '../MainLayout/DepositWidget/DepositWidgetMainContainer'
import { MobilePaymentsStepper } from '../MainLayout/PaymentsModals/MobilePaymentsStepper'
import { PaymentsCardWrapper } from '../MainLayout/PaymentsModals/PaymentsCardWrapper'
import { PaymentsCryptoWrapper } from '../MainLayout/PaymentsModals/PaymentsCryptoWrapper'
import { SearchModalWindowWrapper } from '../SearchGamesModalWindow/SearchModalWindowWrapper'
import { PlaySafeMainWrapper } from '../PlaySafeComponents/PlaySafeMainWrapper'
import { RegisterSignup } from '../MainLayout/RegisterSignup/RegisterSignup'
import { LogIn } from '../MainLayout/LogIn/LogIn'
import { SelectCurrencyWidget } from '../MainLayout/SelectCurrencyWidget/SelectCurrencyWidget'
import { DepositPage } from '../MainLayout/DepositPage/DepositPage'
import { ManageSubscriptions } from '../MainLayout/ManageSubscriptions/ManageSubscriptions'
import { TournamentModalDetails } from '../MainLayout/TournamentSidebar/TournamentModalDetails/TournamentModalDetails'
import { ForgotPasswordComponent } from '../ForgotPasswordComponents/ForgotPasswordComponent'
import { ChangePasswordContainer } from '../ForgotPasswordComponents/ChangePasswordContainer/ChangePasswordContainer'
import { EmailValidationContainer } from '../ForgotPasswordComponents/EmailValidationContainer/EmailValidationContainer'
import { EmailValidationError } from '../ForgotPasswordComponents/EmailValidationContainer/EmailValidationError'
import { TwoFactorAutContainer } from '../TwoFactorAuthComponents/TwoFactorAutContainer'
import { FooterAreaContainer } from '../FooterArea/FooterAreaContainer'
import useWindowDimensions from '../../hooks/useWindowDimensions'

export const ModalsContainer = ({token, emailError, withdrawConfirmError}) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { t } = useTranslation('common')
  const { width } = useWindowDimensions()

  const userInfo = useSelector((userInfo) => userInfo.authInfo)
  const isShowModal = useSelector((store) => store.showPopupsReducer)
  let registerShow = useSelector((isShowRegister) => isShowRegister.showRegister.isShow)
  let logInShow = useSelector((isShowLogin) => isShowLogin.showLogin.isShow)
  const showPlayWindow = useSelector((store) => store.showPlayWindowReducer)
  const paymentsData = useSelector((store) => store.depositData)

  useMemo(() => {
    dispatch(closeAll(false))
    dispatch(backButtonShouldDo(false))
    dispatch(showLogin(false))
    dispatch(showRegister(false))
  }, [router, dispatch])

  useCallback(() => {
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
        <DepositWidgetMainContainer
          userAuth={userInfo}
          t={t}
        />
      </ErrorEmpty>
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
      {
        isShowModal.showMessagePopup && <MessageContainer />
      }
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
    </>
  )
}