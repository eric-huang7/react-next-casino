import styles from '../../../../styles/TournamentSidebar/TournamentModaldetails.module.scss';
import {useDispatch} from "react-redux";
import {showTournamentsDetails} from "../../../../redux/actions/showPopups";

export const TournamentModalDetails = ({t}) => {
  const dispatch = useDispatch()
  const hideDetails = () => {
    dispatch(showTournamentsDetails(false));
  }

  return (
    <div className={styles.tournamentsWrapper}>
      <div className={styles.tournamentsTextBlock}>
        <div className={styles.textContainer}>
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