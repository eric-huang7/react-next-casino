import styles from "../../../styles/TournamentSidebar/TournamentSidebar.module.scss";


export const TournamentHeading = ({t}) => {

  return (
    <div className={styles.head}>
      <p>Tournament</p>
      <button className={styles.closeButton}>
        <span className={styles.closeOne}></span>
        <span className={styles.closeTwo}></span>
      </button>
    </div>
  )
}