import styles from '../../../../styles/TournamentSidebar/TournamentSidebar.module.scss'
import { useDispatch } from 'react-redux'
import { showRegister } from '../../../../redux/actions/registerShow'
import { showDepositModal, showTournaments } from '../../../../redux/actions/showPopups'

export const DepositRegistrationButton = ({ t, userInfo, router }) => {
  const dispatch = useDispatch()

  const showDepositsHandler = () => {
    dispatch(showDepositModal(true))
    dispatch(showTournaments(false))
  }
  const showRegistrationHandler = () => {
    dispatch(showRegister(true))
    dispatch(showTournaments(false))
  }

  if (userInfo.isAuthenticated) {
    return (
      <button onClick={() => showDepositsHandler()}
              className={styles.buttonRegisterDeposit}
      >
        {t('tournaments.buttons.deposit')}
      </button>
    )
  } else {
    return (
      <button onClick={() => showRegistrationHandler()}
              className={`${styles.buttonRegisterDeposit} ${styles[router.locale]}`}
      >
        {t('tournaments.buttons.signUp')}
      </button>
    )
  }

}