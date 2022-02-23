import styles from '../../../styles/Header/Header.module.scss'
import { Navigation } from './Navigation/Navigation'
import { UserBlockNavigation } from './UserBlock/UserBlock'
import { useDispatch, useSelector } from 'react-redux'
import { auth, userBalance } from '../../../redux/actions/userData'
import { useEffect } from 'react'
import LangSwitcher from '../../LangSwitcher/LangSwitcher'
import { getActiveBonuses } from '../../../redux/actions/getBonuses'
import { changeLocalUserSubscriptions } from '../../../redux/actions/userSubscriptionData'
import { setUserCurrencySwitcher } from '../../../redux/actions/setSelectedCurrency'
import Link from 'next/link'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'

export const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((userInfo) => userInfo.authInfo)
  let userLogined = userLogin.isAuthenticated
  let bonusesData = useSelector((store) => store.bonuses)
  let currencyData = useSelector((store) => store.getCurrency.currency)
  const userCurrency = useSelector((state) => state.userSelectedCurrency)

  useEffect(() => {
    let userLogLocal = localStorage.getItem('userAuth')

    if (userLogined) {
      if (!userLogin.balance) {
        dispatch(userBalance())
      }
      if (!bonusesData.activeBonuses) {
        dispatch(getActiveBonuses(userCurrency.userCurrencyData.id))
      }

      let userData = {
        id: userLogin.user.user.id,
        transactional_email_opt_in: userLogin.user.user.transactional_email_opt_in,
        transactional_sms_opt_in: userLogin.user.user.transactional_sms_opt_in,
        browser_opt_in: userLogin.user.user.browser_opt_in
      }
      dispatch(changeLocalUserSubscriptions(userData))

    } else {
      if (JSON.parse(userLogLocal)) {
        dispatch(auth())
      }
    }
  }, [userLogin.isAuthenticated])

  useEffect(() => {
    dispatch(getActiveBonuses(userCurrency.userCurrencyData.id))
  }, [userCurrency.userCurrencyData.id])

  useEffect(() => {
    if (userLogin.isAuthenticated) {
      if (!userLogin.balance) {
        dispatch(userBalance())
      }
      if (userLogin.balance && currencyData) {
        let userActiveCurrency = userLogin.balance?.balances.find((balance) => !!Number(balance.is_default))
        let userCurrency = ''

        try {
          userCurrency = currencyData.results.find((currency) => Number(currency.id) === Number(userActiveCurrency.currency_id))
          dispatch(setUserCurrencySwitcher(userCurrency))
        } catch (e) {

        }
      }
    }

  }, [userLogin.balance, currencyData, userLogin.isAuthenticated])


  return (
    <header className={styles.mainHeader}>
      <Link href={'/'} passHref>
        <img style={{ cursor: 'pointer' }} className={styles.logo} src={'/assets/img/mainLayoutImg/logo.png'}
             alt="logo"/>
      </Link>
      <Navigation/>
      <ErrorEmpty>
        <LangSwitcher/>
      </ErrorEmpty>
      <UserBlockNavigation userInfo={userLogin}/>
    </header>
  )
}