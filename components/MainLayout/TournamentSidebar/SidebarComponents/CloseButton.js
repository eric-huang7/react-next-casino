import styles from '../../../../styles/TournamentSidebar/TournamentSidebar.module.scss'

export const CloseButton = ({ hideTournaments }) => {

  return (
    <button onClick={() => hideTournaments()} className={styles.closeButton}>
      <span className={styles.closeOne}></span>
      <span className={styles.closeTwo}></span>
    </button>
  )
}