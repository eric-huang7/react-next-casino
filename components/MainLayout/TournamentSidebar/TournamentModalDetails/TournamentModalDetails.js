import styles from '../../../../styles/TournamentSidebar/TournamentModaldetails.module.scss';
import {useDispatch} from "react-redux";
import {showTournamentsDetails} from "../../../../redux/actions/showPopups";
import {useEffect, useRef} from "react";
import {useRouter} from "next/router";

export const TournamentModalDetails = ({t}) => {
  const dispatch = useDispatch()
  const hideDetails = () => {
    dispatch(showTournamentsDetails(false));
  }
  const router = useRouter()

  // useEffect(() => {
  //   dispatch(showTournamentsDetails(false));
  // }, [router])


  const tournamentDetails = useRef();

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(tournamentDetails.current)) {
      dispatch(showTournamentsDetails(false));
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
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
          <h2 className={styles.textHeading}>{t("tournaments.details.heading")}</h2>
          <p className={styles.textInfo}>
            {t("tournaments.details.text")}
          </p>
        </div>
      </div>
    </div>
  )
}