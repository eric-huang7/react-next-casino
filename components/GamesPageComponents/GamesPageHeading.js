import styles from "../../styles/GamesPage/GamesPage.module.scss";


export const GamesPageHeading = ({t, heading}) => {

  switch (heading) {
    case 'all-games':
      return <h2 className={styles.gamesMainHeading}>{t('gamesPage.headings.allGames')}</h2>;
    case 'new-games':
      return <h2 className={styles.gamesMainHeading}>{t('gamesPage.headings.newGames')}</h2>
    case 'btc-games':
      return <h2 className={styles.gamesMainHeading}>{t('gamesPage.headings.btcGames')}</h2>;
    case 'top-games':
      return <h2 className={styles.gamesMainHeading}>{t('gamesPage.headings.topGames')}</h2>;
    case 'jackpot-games':
      return <h2 className={styles.gamesMainHeading}>{t('gamesPage.headings.jackpotGames')}</h2>;
    case 'table-games':
      return <h2 className={styles.gamesMainHeading}>{t('gamesPage.headings.tableGames')}</h2>;
    case 'tournaments':
      return <h2 className={styles.gamesMainHeading}>{t('gamesPage.headings.tournaments')}</h2>;
    default:
      return <h2 className={styles.gamesMainHeading}>{heading}</h2>
  }

}
