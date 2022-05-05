import styles from '../../../../styles/TournamentSidebar/TournamentSidebar.module.scss'

import { Timer } from './Timer'
import { DepositRegistrationButton } from './DepositRegistrationButton'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveTournaments } from '../../../../redux//tournaments/action'
import { DetailsButton } from './DetailsButton'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'

export const ButtonsBlock = ({ t, tournaments, sliderPosition, router, userInfo, showDetails }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (tournaments.tournaments && tournaments?.tournaments?.results) {
      dispatch(setActiveTournaments(tournaments?.tournaments?.results[sliderPosition]))
    }

  }, [sliderPosition, tournaments.tournaments])

  if (tournaments.loadingTournaments) {
    return <></>
  } else {
    return tournaments?.tournaments?.results?.length > 0 ? (
      <div className={styles.buttonsWrapper}>
        <div className={styles.timeDetails}>
          <ErrorEmpty>
            <Timer
              t={t}
              time={Number(tournaments?.tournaments?.results[sliderPosition]?.time_finished)}
              router={router}
            />
          </ErrorEmpty>
          <DetailsButton
            t={t}
            showDetails={showDetails}
          />
        </div>
        <div className={styles.depositSignupContainer}>
          <DepositRegistrationButton
            t={t}
            userInfo={userInfo}
            router={router}
          />
        </div>
      </div>
    ) : <div className={styles.checkLaterWrapper}>{t('homePage.checkLater')}</div>
  }

}
