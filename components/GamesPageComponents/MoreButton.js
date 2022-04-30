import styles from "../../styles/GamesPage/GamesPage.module.scss";
import {
  allProvidersURL,
  chosenProviderURL,
  jackpotGames_url,
  newGames_url,
  tableGames_url,
  topGames_url
} from "../../helpers/gamesURL";
import {setGames, setTotalRows} from "../../redux/games/action";
import {useSelector} from "react-redux";

export const MoreButton = ({t, setPageCounter, pageCounter, isShowMoreButton, gamesData, setRequestGamesData, heading}) => {
  const moreButtonClickHAndler = async () => {
    let res;
    let url;

    if (heading === 'all-games') {
      url = allProvidersURL(100, pageCounter * 100);
    } else if (heading === 'new-games') {
      url = newGames_url(100, pageCounter * 100);
    } else if (heading === 'btc-games') {
      url = topGames_url(100, pageCounter * 100);
    } else if (heading === 'top-games') {
      url = topGames_url(100, pageCounter * 100);
    } else if (heading === 'jackpot-games') {
      url = jackpotGames_url(100, pageCounter * 100);
    } else if (heading === 'table-games') {
      url = tableGames_url(100, pageCounter * 100);
    } else {
      url = chosenProviderURL(heading, 100, pageCounter * 100);
    }
    res = await fetch(url);
    let newGamesData = await res.json();
    // dispatch(setGames(newGamesData.results));
    dispatch(setTotalRows(newGamesData.total_rows))
    setPageCounter(pageCounter + 1);
    dispatch(setGames([...gamesData, ...newGamesData.results]))
  }

  if (isShowMoreButton) {
    return (
      <div className={styles.moreWrapper}>
        <img src={'/assets/img/moreButton/more-arrow-left.webp'} alt=""/>
        <button onClick={() => moreButtonClickHAndler()} className={styles.moreButton}>{t("gamesPage.moreButton")}</button>
        <img src={'/assets/img/moreButton/more-arrow-right.webp'} alt=""/>
      </div>
    )
  } else {
    return null
  }
}
