import styles from "../../../../styles/TournamentSidebar/TournamentSidebar.module.scss";
import { CloseButton } from './CloseButton'


export const TournamentHeading = ({t, hideTournaments}) => {

  return (
    <div className={styles.head}>
      <p>{t("tournaments.heading")}</p>
      <CloseButton hideTournaments={hideTournaments} />
    </div>
  )
}