import styles from "../../styles/GamesPage/GamesPage.module.scss";
import {
  allProvidersURL,
  chosenProviderURL,
  jackpotGames_url,
  newGames_url,
  tableGames_url,
  topGames_url
} from "../../helpers/gamesURL";

export const MoreButton = ({t, setPageCounter, pageCounter, isShowMoreButton, gamesData, setRequestGamesData, heading, setTotal_rows}) => {

  const moreButtonClickHAndler = async () => {
    let res;
    if (heading === 'all-games') {
      res = await fetch(allProvidersURL(100, pageCounter * 100));
    } else if (heading === 'new-games') {
      res = await fetch(newGames_url(100, pageCounter * 100));
    } else if (heading === 'btc-games') {
      res = await fetch(topGames_url(100, pageCounter * 100));
    } else if (heading === 'top-games') {
      res = await fetch(topGames_url(100, pageCounter * 100));
    } else if (heading === 'jackpot-games') {
      res = await fetch(jackpotGames_url(100, pageCounter * 100));
    } else if (heading === 'table-games') {
      res = await fetch(tableGames_url(100, pageCounter * 100));
    } else {
      res = await fetch(chosenProviderURL(heading, 100, pageCounter * 100));
    }
    let newGamesData = await res.json();
    // dispatch(setGames(newGamesData.results));
    setTotal_rows(newGamesData.total_rows);
    setPageCounter(pageCounter + 1);
    setRequestGamesData([...gamesData, ...newGamesData.results]);

    // console.log(newGamesData, 'new games data')

    ;
  }

  if (isShowMoreButton) {
    return (
      <div className={styles.moreWrapper}>
        <button onClick={() => moreButtonClickHAndler()} className={styles.moreButton}>{t("gamesPage.moreButton")}</button>
      </div>
    )
  } else {
    return <></>
  }


}