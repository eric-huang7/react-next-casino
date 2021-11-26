import styles from '../../../styles/TournamentSidebar/TournamentSidebar.module.scss';
import {TournamentHeading} from "./TournamentHeading";
import {TournamentSliderContainer} from "./TournamentSliderContainer";
import {useDispatch, useSelector} from "react-redux";
import {getTournaments} from "../../../redux/actions/getTournaments";
import {TournamentInfoContainer} from "./TournamentInfoContainer";
import {useRouter} from "next/router";
import {showTournaments, showTournamentsDetails} from "../../../redux/actions/showPopups";
import {useEffect} from "react";


export const TournamentMainContainer = ({t, userInfo, isShowModal}) => {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getTournaments());
  }, [])
  const router = useRouter();


  function hideTournaments(e) {
    dispatch(showTournaments(false));
  }
  function showDetails() {
    dispatch(showTournamentsDetails(true));
    dispatch(showTournaments(false));
  }


  return (
    <div className={`${styles.tournamentSideContainer} ${isShowModal.isShowTournaments ? styles.showTournament : ''}`}>
      <TournamentHeading hideTournaments={hideTournaments} t={t}/>
      <TournamentInfoContainer showDetails={showDetails} userInfo={userInfo} router={router} t={t}/>

    </div>
  )
}