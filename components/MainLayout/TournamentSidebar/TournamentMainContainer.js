import styles from '../../../styles/TournamentSidebar/TournamentSidebar.module.scss';
import {TournamentHeading} from "./TournamentHeading";
import {TournamentSliderContainer} from "./TournamentSliderContainer";
import {useDispatch, useSelector} from "react-redux";
import {getTournaments} from "../../../redux/actions/getTournaments";
import {TournamentInfoContainer} from "./TournamentInfoContainer";
import {useRouter} from "next/router";
import {showTournaments, showTournamentsDetails} from "../../../redux/actions/showPopups";
import {useEffect, useRef} from "react";


export const TournamentMainContainer = ({t, userInfo, isShowModal, router, toursref}) => {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getTournaments());
  }, [])

  // useEffect(() => {
  //   dispatch(showTournaments(false));
  // }, [router])
  const burgerMenuRef = useRef();


  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(burgerMenuRef.current)) {
      dispatch(showTournaments(false));
    }
    if (path.includes((toursref.current))) {
      dispatch(showTournaments(true));
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      dispatch(showTournaments(true));
      document.body.removeEventListener('click', handleOutsideClick);
    }
  }, []);


  function hideTournaments(e) {
    dispatch(showTournaments(false));
  }
  function showDetails() {
    dispatch(showTournamentsDetails(true));
    dispatch(showTournaments(false));
  }


  return (
    <div ref={burgerMenuRef} className={`${styles.tournamentSideContainer} ${isShowModal.isShowTournaments ? styles.showTournament : ''}`}>
      <TournamentHeading hideTournaments={hideTournaments} t={t}/>
      <TournamentInfoContainer showDetails={showDetails} userInfo={userInfo} router={router} t={t}/>

    </div>
  )
}