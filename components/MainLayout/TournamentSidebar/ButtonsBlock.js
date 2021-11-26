import styles from '../../../styles/TournamentSidebar/TournamentSidebar.module.scss';

import { formatDuration, intervalToDuration } from 'date-fns'
import {dateTimer} from "../../../helpers/timer";
import {Timer} from "./Timer";
import {DepositRegistrationButton} from "./DepositRegistrationButton";


export const ButtonsBlock = ({t, tournaments, sliderPosition, router, userInfo, showDetails}) => {

// Number(tournaments.tournaments.results[sliderPosition].time_finished)
  if (tournaments.loadingTournaments) {
    return <></>
  } else {
    return (
      <div className={styles.buttonsWrapper}>
        <div className={styles.timeDetails}>
          <Timer t={t} time={Number(tournaments.tournaments.results[sliderPosition].time_finished)} router={router}/>
          <button onClick={() => showDetails()} className={styles.detailsButton}>Details</button>
        </div>
        <div className={styles.depositSignupContainer}>
          <DepositRegistrationButton t={t} userInfo={userInfo}/>
        </div>
      </div>
    )
  }

}