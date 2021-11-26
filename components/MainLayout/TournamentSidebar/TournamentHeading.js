import styles from "../../../styles/TournamentSidebar/TournamentSidebar.module.scss";


export const TournamentHeading = ({t, hideTournaments}) => {

  return (
    <div className={styles.head}>
      <p>Tournament</p>
      <button onClick={() => hideTournaments()} className={styles.closeButton}>
        <span className={styles.closeOne}></span>
        <span className={styles.closeTwo}></span>
      </button>
    </div>
  )
}