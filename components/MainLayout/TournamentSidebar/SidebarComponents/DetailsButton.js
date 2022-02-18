import styles from '../../../../styles/TournamentSidebar/TournamentSidebar.module.scss'

export const DetailsButton = ({t, showDetails}) => {

  return (
    <button
      onClick={() => showDetails()}
      className={styles.detailsButton}
    >
      {t('tournaments.buttons.details')}
    </button>
  )
}