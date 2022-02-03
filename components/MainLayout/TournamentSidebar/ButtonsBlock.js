import styles from '../../../styles/TournamentSidebar/TournamentSidebar.module.scss';

import { formatDuration, intervalToDuration } from 'date-fns'
import {dateTimer} from "../../../helpers/timer";
import {Timer} from "./Timer";
import {DepositRegistrationButton} from "./DepositRegistrationButton";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setActiveTournaments} from "../../../redux/actions/getTournaments";


export const ButtonsBlock = ({t, tournaments, sliderPosition, router, userInfo, showDetails}) => {
const dispatch = useDispatch();
// Number(tournaments.tournaments.results[sliderPosition].time_finished)


  useEffect(() => {
    if (tournaments.tournaments) {
      dispatch(setActiveTournaments(tournaments.tournaments.results[sliderPosition]));
    }

  }, [sliderPosition, tournaments.tournaments])


  if (tournaments.loadingTournaments) {
    return <></>
  } else {
    return (
      <div className={styles.buttonsWrapper}>
        <div className={styles.timeDetails}>
          <Timer t={t} time={Number(tournaments.tournaments.results[sliderPosition].time_finished)} router={router}/>
          <button onClick={() => showDetails()} className={styles.detailsButton}>{t("tournaments.buttons.details")}</button>
        </div>
        <div className={styles.depositSignupContainer}>
          <DepositRegistrationButton t={t} userInfo={userInfo} router={router}/>
        </div>
      </div>
    )
  }

}