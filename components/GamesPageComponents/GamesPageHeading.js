import styles from "../../styles/GamesPage/GamesPage.module.scss";


export const GamesPageHeading = ({t, heading}) => {

  switch (heading) {
    case 'all-games':
      return <h2 className={styles.gamesMainHeading}>{t('gamesPage.headings.allGames')}</h2>;
    case 'new-games':
      // <h2 className={styles.gamesMainHeading}>{t('gamesPage.headings.newGames')}</h2>
      return <img className={styles.gamesHeadingImg} src={'/assets/img/gamesSlider/new_games_head.svg'} alt="new games heading img"/>;
    case 'btc-games':
      return <h2 className={styles.gamesMainHeading}>{t('gamesPage.headings.btcGames')}</h2>;
    case 'top-games':
      return <h2 className={styles.gamesMainHeading}>{t('gamesPage.headings.topGames')}</h2>;
    case 'jackpot-games':
      // <h2 className={styles.gamesMainHeading}>{t('gamesPage.headings.jackpotGames')}</h2>;
      return <img className={styles.gamesHeadingImg} src={'/assets/img/gamesSlider/jackpot_head.svg'} alt="jackpot games heading img"/>;
    case 'table-games':
      // <h2 className={styles.gamesMainHeading}>{t('gamesPage.headings.tableGames')}</h2>;
      return <img className={styles.gamesHeadingImg} src={'/assets/img/gamesSlider/table_head.svg'} alt="table games heading img"/>;
    case 'tournaments':
      return <h2 className={styles.gamesMainHeading}>{t('gamesPage.headings.tournaments')}</h2>;
    default:
      return <h2 className={styles.gamesMainHeading}>{heading}</h2>
  }

}