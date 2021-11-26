import styles from '../../../styles/TournamentSidebar/TournamentSidebar.module.scss';
import {TournamentHeading} from "./TournamentHeading";
import {TournamentSliderContainer} from "./TournamentSliderContainer";
import {useDispatch, useSelector} from "react-redux";
import {getTournaments} from "../../../redux/actions/getTournaments";
import {TournamentInfoContainer} from "./TournamentInfoContainer";
import {useRouter} from "next/router";
import {showTournaments} from "../../../redux/actions/showPopups";


export const TournamentMainContainer = ({t, userInfo, isShowModal}) => {
  const dispatch = useDispatch();
  dispatch(getTournaments());
  const router = useRouter();


  function hideTournaments(e) {
    dispatch(showTournaments(false));
  }


  return (
    <div className={`${styles.tournamentSideContainer} ${isShowModal.isShowTournaments ? styles.showTournament : ''}`}>
      <TournamentHeading hideTournaments={hideTournaments} t={t}/>
      <TournamentInfoContainer userInfo={userInfo} router={router} t={t}/>

    </div>
  )
}