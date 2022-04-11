import styles from '../../../../styles/TournamentSidebar/TournamentModaldetails.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {showTournamentsDetails} from "../../../../redux/popups/action";
import {useEffect, useRef} from "react";
import {useRouter} from "next/router";

export const TournamentModalDetails = ({t}) => {
  const dispatch = useDispatch()
  const hideDetails = () => {
    dispatch(showTournamentsDetails(false));
  }
  const router = useRouter();

  const tournamentsData = useSelector((store) => store.tournaments.activeTournament);


  const tournamentDetails = useRef();

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(tournamentDetails.current)) {
      dispatch(showTournamentsDetails(false));
    }
  };
  useEffect(() => {
    document.body.style.overflowY = "hidden"

    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
      document.body.style.overflowY = "auto"
    }
  }, []);


  return (
    <div className={styles.tournamentsWrapper}>
      <div className={styles.tournamentsTextBlock}>
        <div ref={tournamentDetails} className={styles.textContainer}>
          <button onClick={() => hideDetails()} className={styles.closeButton}>
            <span className={styles.closeOne}></span>
            <span className={styles.closeTwo}></span>
          </button>
          <h2 className={styles.textHeading}>{t(`tournaments.details.${tournamentsData.frontend_id}.heading`)}</h2>
          <p className={styles.textInfo}>
            {t(`tournaments.details.${tournamentsData.frontend_id}.text`)}
          </p>
        </div>
      </div>
    </div>
  )
}
